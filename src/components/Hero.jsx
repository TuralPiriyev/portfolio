// Hero section with intro, CTA buttons, and soft motion accents.
import { motion } from 'framer-motion'

function Hero({ t }) {
  return (
    <section id="home" className="section-spacing">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <motion.p
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 text-primary text-sm font-semibold bg-white shadow-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            {t.heroBadge}
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl font-bold leading-tight text-slate-900"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p
            className="text-lg text-slate-600 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            {t.heroPitch}
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <a
              href="#projects"
              className="px-5 py-3 rounded-xl bg-primary text-white font-semibold shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {t.ctaViewProjects}
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl border border-primary/40 text-primary font-semibold bg-white hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {t.ctaContact}
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <div className="relative bg-white p-3 sm:p-4 rounded-2xl shadow-glow border border-primary/10 overflow-hidden">
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
            <img
              src="/profile.jpg"
              alt="Piriyev Tural"
              className="relative w-full h-[360px] sm:h-[460px] object-cover rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
