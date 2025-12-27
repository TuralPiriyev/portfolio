// Simple footer with social links placeholder.
function Footer({ t }) {
  return (
    <footer className="border-t border-primary/10 bg-white mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Piriyev Tural. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm font-semibold text-slate-700">
          <a href="https://github.com/turalpiriyev" target="_blank" rel="noreferrer" className="hover:text-primary">
            {t.footerLinks.github}
          </a>
          <a href="https://linkedin.com/in/tural-piriyev" target="_blank" rel="noreferrer" className="hover:text-primary">
            {t.footerLinks.linkedin}
          </a>
          <a href="#contact" className="hover:text-primary">
            {t.footerLinks.contact}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
