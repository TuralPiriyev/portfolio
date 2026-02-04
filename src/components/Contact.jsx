// Contact section with quick links, copy-to-clipboard, and Netlify-ready form.
import { useState } from 'react'
import { motion } from 'framer-motion'

const contacts = [
  {
    label: 'Phone',
    value: '+994 55 642 78 15',
    href: 'tel:+994556427815',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 5.5C2 4.12 3.12 3 4.5 3h2.04c.6 0 1.13.36 1.35.91l1.22 3.05c.2.49.07 1.05-.32 1.42l-1.2 1.14c1.28 2.43 3.29 4.44 5.72 5.72l1.14-1.2c.37-.39.93-.52 1.42-.32l3.05 1.22c.55.22.91.75.91 1.35V19.5c0 1.38-1.12 2.5-2.5 2.5H18C9.72 22 3 15.28 3 7V5.5Z"
        />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'piriyevtural00@gmail.com',
    href: 'mailto:piriyevtural00@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m4 8 8 5 8-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/tural-piriyev-27a0992a0',
    href: 'https://www.linkedin.com/in/tural-piriyev-27a0992a0/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
        <path d="M4.5 9h3v11h-3z" />
        <path d="M10.5 9h3v1.76h.04c.42-.8 1.44-1.64 2.96-1.64 3.16 0 3.75 2.08 3.75 4.78V20h-3v-5.17c0-1.23-.02-2.82-1.72-2.82-1.73 0-1.99 1.35-1.99 2.73V20h-3z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/TuralPiriyev',
    href: 'https://github.com/TuralPiriyev',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.48 2 2 6.58 2 12.25c0 4.51 2.87 8.33 6.84 9.68.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.2 9.2 0 0 1 5 0c1.9-1.32 2.74-1.05 2.74-1.05.56 1.4.21 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
        />
      </svg>
    ),
  },
]

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tural-piriyev-27a0992a0/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
        <path d="M4.5 9h3v11h-3z" />
        <path d="M10.5 9h3v1.76h.04c.42-.8 1.44-1.64 2.96-1.64 3.16 0 3.75 2.08 3.75 4.78V20h-3v-5.17c0-1.23-.02-2.82-1.72-2.82-1.73 0-1.99 1.35-1.99 2.73V20h-3z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/TuralPiriyev',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.48 2 2 6.58 2 12.25c0 4.51 2.87 8.33 6.84 9.68.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.2 9.2 0 0 1 5 0c1.9-1.32 2.74-1.05 2.74-1.05.56 1.4.21 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
        />
      </svg>
    ),
  },
]

function Contact({ t }) {
  const [copied, setCopied] = useState('')

  const copyValue = async (value) => {
    try {
      await navigator.clipboard?.writeText(value)
      setCopied(value)
      setTimeout(() => setCopied(''), 1500)
    } catch (err) {
      console.error('Clipboard copy failed', err)
    }
  }

  return (
    <section id="contact" className="section-spacing">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <motion.h2
          className="text-3xl font-bold text-slate-900"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
        >
          {t.contactTitle}
        </motion.h2>
        <p className="text-slate-700 leading-relaxed max-w-3xl mx-auto">{t.contactBody}</p>
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 justify-items-center" aria-label="Contact methods">
          {contacts.map((item, idx) => (
            <motion.div
              key={item.label}
              className="relative border border-primary/10 rounded-2xl bg-white p-5 shadow-glow overflow-hidden w-full max-w-md transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(74,168,255,0.18)] hover:border-primary/30"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.05 * idx, duration: 0.35 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-80" aria-hidden="true" />
              <div className="relative flex flex-col items-center gap-3 text-center">
                <div className="h-12 w-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center shadow-glow border border-primary/20">
                  <span className="h-6 w-6">{item.icon}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <a
                    className="text-slate-900 font-semibold break-words hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
              <div className="relative mt-3 flex items-center gap-2 flex-wrap justify-center">
                <button
                  type="button"
                  onClick={() => copyValue(item.value)}
                  aria-label={`Copy ${item.label}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-primary px-3 py-2 rounded-lg bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                >
                  {copied === item.value ? t.copied : t.copy}
                </button>
                {item.href.startsWith('http') ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-primary hover:underline"
                  >
                    {t.open}
                  </a>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-2" aria-label="Social links">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-primary/20 bg-white text-primary font-semibold shadow-glow hover:border-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              <span className="h-5 w-5">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
