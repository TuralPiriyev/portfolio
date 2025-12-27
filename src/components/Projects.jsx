// Projects section wiring slider, tech badges, and detail modal per item.
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectSlider from './ProjectSlider'

function Badge({ label }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
      {label}
    </span>
  )
}

function ProjectModal({ project, onClose, lang, t }) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          id={`project-modal-${project.id}`}
        >
          <motion.div
            className="max-w-3xl w-full mx-4 bg-white rounded-2xl shadow-glow border border-primary/20 p-6 relative"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
          >
            <button
              onClick={onClose}
              aria-label="Close project dialog"
              className="absolute top-4 right-4 h-10 w-10 rounded-xl border border-primary/20 text-slate-700 hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900 flex items-center gap-3">{project.title[lang]}</h3>
              <p className="text-slate-700 leading-relaxed">{project.longDesc[lang] || project.shortDesc[lang]}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech) => (
                  <Badge key={tech} label={tech} />
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-3 rounded-xl bg-primary text-white font-semibold shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {t.live}
                  </a>
                ) : null}
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-3 rounded-xl border border-primary/30 text-primary font-semibold bg-white hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {t.code}
                  </a>
                ) : null}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

function Projects({ projects = [], lang, t }) {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="section-spacing">
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">{t.projectsTitle}</h2>
          <p className="text-slate-600 mt-2 max-w-2xl">{t.projectsBlurb}</p>
        </div>
        <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">{projects.length} {t.projectsCountLabel}</span>
      </div>

      <div className="space-y-10">
        {projects.map((project) => (
          <motion.article
            key={project.id}
            className="rounded-3xl border border-primary/10 bg-white shadow-glow overflow-hidden"
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.2 }}
          >
            <div className="grid gap-0 lg:grid-cols-[70%_30%]">
              <div className="border-b lg:border-b-0 lg:border-r border-primary/10 bg-surface/60">
                <ProjectSlider slides={project.slides} title={project.title[lang]} />
              </div>

              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-2xl font-semibold text-slate-900 leading-tight">{project.title[lang]}</h3>
                </div>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">{project.shortDesc[lang]}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} label={tech} />
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setSelected(project)}
                    className="px-4 py-3 rounded-xl bg-primary text-white font-semibold shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    aria-haspopup="dialog"
                    aria-expanded={selected?.id === project.id}
                    aria-controls={`project-modal-${project.id}`}
                  >
                    {t.openDetails}
                  </button>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-3 rounded-xl border border-primary/30 text-primary font-semibold bg-white hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      {t.live}
                    </a>
                  ) : null}
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-3 rounded-xl border border-primary/30 text-primary font-semibold bg-white hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      {t.code}
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} lang={lang} t={t} />
    </section>
  )
}

export default Projects
