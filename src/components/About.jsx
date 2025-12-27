// About section with editable bio and a simple experience list.
import { motion } from 'framer-motion'

const experiencesByLang = {
  en: [
    {
      role: 'Junior Full Stack Developer',
      company: 'DOST Incubation',
      period: '2024 · 3 months',
      summary:
        'Built web apps with HTML, CSS, JavaScript, React, and Node.js; provided production support, fixed errors, and prepared MongoDB data models for features like aivertize.net.',
    },
    {
      role: 'IT Instructor',
      company: 'Train Brain Center',
      period: '08/2024 — 06/2025',
      summary: 'Taught programming fundamentals (Python) to 5th–8th grade students at school No. 60.',
    },
    {
      role: 'Backend Developer (Junior)',
      company: '4SIM',
      period: '08/2023 — 10/2023',
      summary: 'Improved API endpoints for better frontend UX and optimized database queries for performance and efficiency.',
    },
    {
      role: 'IT Support Assistant',
      company: 'Baku State University',
      period: '09/2022 — 01/2023',
      summary: 'Provided IT support assistance within the university environment.',
    },
  ],
  az: [
    {
      role: 'Junior Full Stack Developer',
      company: 'DOST İnkuBasiya',
      period: '2024 · 3 ay',
      summary:
        'HTML, CSS, JavaScript, React.js və Node.js ilə veb tətbiqləri hazırlamışam; dəstək göstərmiş, xətaları aradan qaldırmış və MongoDB üçün məlumat sxemləri tərtib etmişəm (aivertize.net kimi layihələr).',
    },
    {
      role: 'IT Təlimçisi',
      company: 'Train Brain Center',
      period: '08/2024 — 06/2025',
      summary: '5–8-ci sinif şagirdlərinə Python proqramlaşdırmasının əsaslarını 60 saylı məktəbdə tədris etmişəm.',
    },
    {
      role: 'Backend Developer (Junior)',
      company: '4SIM',
      period: '08/2023 — 10/2023',
      summary: 'Frontend üçün daha intuitiv istifadə təcrübəsi verən API endpointlərini təkmilləşdirmiş və verilənlər bazası sorğularını performans üçün optimallaşdırmışam.',
    },
    {
      role: 'IT Dəstək Köməkçisi',
      company: 'Bakı Dövlət Universiteti',
      period: '09/2022 — 01/2023',
      summary: 'Universitet mühitində IT dəstəyi üzrə köməkçi kimi çalışmışam.',
    },
  ],
  ru: [
    {
      role: 'Junior Full Stack Developer',
      company: 'DOST Инкубация',
      period: '2024 · 3 мес',
      summary:
        'Разрабатывал веб-приложения на HTML, CSS, JavaScript, React.js и Node.js; оказывал поддержку, устранял ошибки и проектировал модели данных в MongoDB (например, aivertize.net).',
    },
    {
      role: 'IT инструктор',
      company: 'Train Brain Center',
      period: '08/2024 — 06/2025',
      summary: 'Преподавал основы программирования (Python) учащимся 5–8 классов в школе №60.',
    },
    {
      role: 'Backend Developer (Junior)',
      company: '4SIM',
      period: '08/2023 — 10/2023',
      summary: 'Улучшил API-эндпоинты для удобства фронтенда и оптимизировал запросы к базе данных для производительности.',
    },
    {
      role: 'IT помощник по поддержке',
      company: 'Бакинский Государственный Университет',
      period: '09/2022 — 01/2023',
      summary: 'Работал помощником по IT-поддержке в университетской среде.',
    },
  ],
}

function About({ t, lang }) {
  const experiences = experiencesByLang[lang] || experiencesByLang.en
  return (
    <section id="about" className="section-spacing">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <motion.h2
            className="text-3xl font-bold text-slate-900"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35 }}
          >
            {t.aboutTitle}
          </motion.h2>
          <motion.p
            className="text-slate-700 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.35 }}
          >
            {t.aboutP1}
          </motion.p>
          <motion.p
            className="text-slate-700 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15, duration: 0.35 }}
          >
            {t.aboutP2}
          </motion.p>
          <motion.div
            className="text-slate-700 leading-relaxed space-y-1"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.35 }}
          >
            <p className="font-semibold text-slate-900">{t.skillsLabel}</p>
            <p>{t.skillsFrontend}</p>
            <p>{t.skillsBackend}</p>
            <p>{t.skillsDb}</p>
            <p>{t.skillsTools}</p>
          </motion.div>
        </div>

        <div className="bg-white rounded-2xl border border-primary/10 shadow-glow p-6 space-y-4">
          <h3 className="text-xl font-semibold text-slate-900">{t.experienceTitle}</h3>
          <div className="space-y-5">
            {experiences.map((item) => (
              <article key={item.role} className="rounded-xl border border-primary/10 p-4 bg-surface/60">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-semibold text-slate-900">{item.role}</h4>
                    <p className="text-sm text-slate-500">{item.company}</p>
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{item.period}</span>
                </div>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
