// Sticky accessible navigation with logo and responsive hamburger menu.
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const languages = [
  { code: 'az', label: 'AZ' },
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
]

function Header({ sections = [], lang, setLang, t }) {
  const [open, setOpen] = useState(false)
  const [avatarError, setAvatarError] = useState(false)

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', closeOnResize)
    return () => window.removeEventListener('resize', closeOnResize)
  }, [])

  const handleNavClick = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur border-b border-primary/10">
      <div className="max-w-6xl mx-auto flex flex-wrap lg:flex-nowrap items-center gap-4 lg:gap-6 justify-between px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-10 w-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-glow overflow-hidden">
            {avatarError ? (
              <span className="text-primary font-bold" aria-label="Logo">P</span>
            ) : (
              <img
                src="/profile.jpg"
                alt="Piriyev Tural profile"
                className="h-full w-full object-cover"
                onError={() => setAvatarError(true)}
              />
            )}
          </div>
          <div>
            <p className="text-sm text-slate-500">{t.heroBadge}</p>
            <p className="font-semibold text-lg">Piriyev Tural</p>
          </div>
        </div>

        <nav className="hidden lg:flex flex-1 items-center gap-4 lg:flex-nowrap justify-center min-w-[320px]" aria-label="Primary">
          {sections.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-semibold text-slate-700 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded text-left whitespace-nowrap"
            >
              {t.nav[item.labelKey]}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 lg:gap-4 justify-end flex-shrink-0">
          <div className="flex items-center gap-1 rounded-xl border border-primary/20 bg-white px-2 py-1">
            {languages.map((lng) => (
              <button
                key={lng.code}
                onClick={() => setLang(lng.code)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                  lang === lng.code
                    ? 'bg-primary text-white shadow-glow'
                    : 'text-slate-700 hover:bg-primary/10'
                }`}
                aria-pressed={lang === lng.code}
              >
                {lng.label}
              </button>
            ))}
          </div>
          <a
            className="px-4 py-2 rounded-xl bg-primary text-white font-semibold shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            href="#projects"
          >
            {t.ctaViewProjects}
          </a>
        </div>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-white shadow-sm text-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          type="button"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-primary/10 bg-white px-4 sm:px-6 lg:px-8"
            aria-label="Mobile primary navigation"
          >
            <div className="flex flex-col gap-3 py-4">
              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-base text-left font-semibold text-slate-800 hover:text-primary rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                >
                  {t.nav[item.labelKey]}
                </button>
              ))}
              <div className="flex items-center gap-2 pt-2">
                {languages.map((lng) => (
                  <button
                    key={lng.code}
                    onClick={() => setLang(lng.code)}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold border transition-colors ${
                      lang === lng.code
                        ? 'bg-primary text-white border-primary shadow-glow'
                        : 'border-primary/30 text-slate-800 hover:bg-primary/10'
                    }`}
                    aria-pressed={lang === lng.code}
                  >
                    {lng.label}
                  </button>
                ))}
              </div>
              <a
                href="#projects"
                className="px-4 py-3 rounded-xl bg-primary text-white font-semibold shadow-glow text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {t.ctaViewProjects}
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Header
