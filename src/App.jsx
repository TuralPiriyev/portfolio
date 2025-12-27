// Root application shell that wires all sections and passes shared props/data.
import { useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import projects from './data/projects'
import { translations } from './i18n'

function App() {
  const [lang, setLang] = useState('en')
  const navSections = useMemo(
    () => [
      { id: 'home', labelKey: 'home' },
      { id: 'about', labelKey: 'about' },
      { id: 'projects', labelKey: 'projects' },
      { id: 'contact', labelKey: 'contact' },
    ],
    [],
  )

  const t = translations[lang]

  return (
    <div className="relative bg-surface text-slate-900 min-h-screen overflow-hidden">
      <div className="bg-lines" aria-hidden="true" />
      <Header sections={navSections} lang={lang} setLang={setLang} t={t} />
      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero t={t} />
        <About t={t} lang={lang} />
        <Projects projects={projects} lang={lang} t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}

export default App
