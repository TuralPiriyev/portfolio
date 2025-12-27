// Real project data with localized titles/descriptions and mapped media under public/projects/.
const projects = [
  {
    id: 'aivertize',
    title: {
      en: 'aivertize.net',
      az: 'aivertize.net',
      ru: 'aivertize.net',
    },
    shortDesc: {
      en: 'AI-powered audit for social accounts that diagnoses ad readiness and suggests ways to improve performance.',
      az: 'Sosial hesablar üçün AI əsaslı audit: reklam hazır olmasını analiz edir və performansı yaxşılaşdırmaq üçün tövsiyələr verir.',
      ru: 'AI-аудит соцаккаунтов: оценивает готовность к рекламе и предлагает пути для роста эффективности.',
    },
    longDesc: {
      en: 'Business owners drop their Instagram link; the backend pulls metadata, sends it to AI, and returns a clear diagnosis with actionable recommendations to boost ad results. Built with Node.js, JavaScript, HTML/CSS, and MongoDB.',
      az: 'Biznes sahibləri Instagram linkini daxil edir, backend metadata toplayıb AI-a ötürür və reklam nəticələrini artırmaq üçün aydın diaqnoz və addımlı tövsiyələr qaytarır. Node.js, JavaScript, HTML/CSS və MongoDB ilə qurulub.',
      ru: 'Владелец добавляет ссылку Instagram, бэкенд собирает метаданные, передаёт их в AI и возвращает диагноз с шагами для роста рекламы. Построено на Node.js, JavaScript, HTML/CSS и MongoDB.',
    },
    technologies: ['Node.js', 'JavaScript', 'HTML/CSS', 'MongoDB', 'AI'],
    slides: [
      { type: 'image', src: '/projects/aivertize/cover.png', alt: 'aivertize.net dashboard' },
      { type: 'video', src: '/projects/aivertize/demo.mp4', poster: '/projects/aivertize/cover.png' },
    ],
    liveUrl: '',
    repoUrl: '',
    year: '2025',
  },
  {
    id: 'zerocodedb',
    title: {
      en: 'ZeroCodeDB',
      az: 'ZeroCodeDB',
      ru: 'ZeroCodeDB',
    },
    shortDesc: {
      en: 'No-code visual database builder with team collaboration, live SQL, and AI-assisted workflows.',
      az: 'No-code vizual DB qurucusu: komanda işi, canlı SQL və AI dəstəkli axınlarla.',
      ru: 'No-code визуальный конструктор БД с командной работой, живым SQL и AI-помощью.',
    },
    longDesc: {
      en: 'Users design databases visually, export schemas in any SQL dialect, and collaborate in real time via WebSocket. Includes live SQL editor, validation, and AI support. Built with Node.js, React, JavaScript, MongoDB, and WebSocket.',
      az: 'İstifadəçilər DB-ləri vizual qurur, istənilən SQL dialektində export edir və WebSocket üzərindən real vaxtda komanda ilə işləyir. Canlı SQL editoru, validasiya və AI dəstəyi var. Node.js, React, JavaScript, MongoDB və WebSocket ilə hazırlanıb.',
      ru: 'Пользователи визуально проектируют БД, экспортируют схемы в любом SQL-диалекте и работают в команде в реальном времени через WebSocket. Есть live SQL, валидация и AI-поддержка. Построено на Node.js, React, JavaScript, MongoDB и WebSocket.',
    },
    technologies: ['React', 'Node.js', 'JavaScript', 'MongoDB', 'WebSocket', 'AI'],
    slides: [
      { type: 'image', src: '/projects/zerocodedb/cover.png', alt: 'ZeroCodeDB visual builder' },
      { type: 'video', src: '/projects/zerocodedb/demo.mp4', poster: '/projects/zerocodedb/cover.png' },
    ],
    liveUrl: '',
    repoUrl: '',
    year: '2025',
  },
  {
    id: 'sayt-az',
    title: {
      en: 'sayt.az clone',
      az: 'sayt.az klonu',
      ru: 'Клон sayt.az',
    },
    shortDesc: {
      en: 'Website builder experience for the Azerbaijani market; delivered as a diploma-winning final project.',
      az: 'Azərbaycan bazarı üçün sayt qurucu təcrübəsi; diplomla nəticələnmiş final layihə.',
      ru: 'Конструктор сайтов для азербайджанского рынка; дипломный финальный проект.',
    },
    longDesc: {
      en: 'A React + JavaScript implementation inspired by sayt.az to let users assemble modern business sites quickly. Built as a final project that earned a first-degree diploma.',
      az: 'React və JavaScript ilə sayt.az-dan ilhamlanan, istifadəçiyə müasir biznes saytlarını tez toplamağa imkan verən həll. Birinci dərəcəli diplomla nəticələnən final layihə.',
      ru: 'Решение на React и JavaScript, вдохновлённое sayt.az, чтобы быстро собирать современные бизнес-сайты. Финальный проект с дипломом первой степени.',
    },
    technologies: ['React', 'JavaScript'],
    slides: [
      { type: 'image', src: '/projects/sayt.az/cover.png', alt: 'sayt.az-style homepage' },
      { type: 'image', src: '/projects/sayt.az/screen1.png', alt: 'Service listing screen' },
      { type: 'image', src: '/projects/sayt.az/screen2.png', alt: 'Pricing or feature view' },
      { type: 'video', src: '/projects/sayt.az/demo.mp4', poster: '/projects/sayt.az/cover.png' },
    ],
    liveUrl: '',
    repoUrl: '',
    year: '2024',
  },
  {
    id: 'university-management',
    title: {
      en: 'University Management',
      az: 'University Management',
      ru: 'University Management',
    },
    shortDesc: {
      en: 'Student/teacher portal with exams, grades, attendance, materials, and a full admin panel.',
      az: 'Tələbə/müəllim portalı: imtahan, qiymət, davamiyyət, material və tam admin panel.',
      ru: 'Портал для студентов и преподавателей: экзамены, оценки, посещаемость, материалы и полный админ-панель.',
    },
    longDesc: {
      en: 'Built with HTML, CSS, PHP, and MySQL. Students and teachers manage exams, grades, attendance, and materials; the admin panel assigns faculties, majors, groups, courses, and teachers with role-based control.',
      az: 'HTML, CSS, PHP və MySQL ilə qurulub. Tələbə və müəllimlər imtahan, qiymət, davamiyyət və materialları idarə edir; admin panel fakültə, ixtisas, qrup, dərs və müəllimləri səlahiyyətli şəkildə təyin edir.',
      ru: 'Создано на HTML, CSS, PHP и MySQL. Студенты и преподаватели управляют экзаменами, оценками, посещаемостью и материалами; админ-панель назначает факультеты, направления, группы, курсы и преподавателей с ролевым доступом.',
    },
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
    slides: [
      { type: 'image', src: '/projects/universitymanagement/cover.png', alt: 'University management dashboard' },
      { type: 'image', src: '/projects/universitymanagement/screen1.png', alt: 'Course or group view' },
      { type: 'image', src: '/projects/universitymanagement/screen2.png', alt: 'Data management screen' },
      { type: 'image', src: '/projects/universitymanagement/screen3.png', alt: 'Assignments overview' },
      { type: 'video', src: '/projects/universitymanagement/demo.mp4', poster: '/projects/universitymanagement/cover.png' },
    ],
    liveUrl: '',
    repoUrl: '',
    year: '2023',
  },
  {
    id: 'bookstore',
    title: {
      en: 'BookStore',
      az: 'BookStore',
      ru: 'BookStore',
    },
    shortDesc: {
      en: 'Online bookstore with WhatsApp ordering and a simple admin panel for catalog updates.',
      az: 'WhatsApp üzərindən sifariş və sadə admin panel ilə onlayn kitab mağazası.',
      ru: 'Онлайн книжный магазин с заказами через WhatsApp и простой админкой для каталога.',
    },
    longDesc: {
      en: 'Developed with HTML, CSS, PHP, and MySQL. Customers order books via WhatsApp; admins manage inventory, pricing, and updates through a lightweight panel.',
      az: 'HTML, CSS, PHP və MySQL ilə hazırlanıb. Müştərilər WhatsApp vasitəsilə sifariş verir, admin paneli isə kitabların idarəsi, qiymət və yeniləmələri sadə şəkildə təmin edir.',
      ru: 'Создано на HTML, CSS, PHP и MySQL. Клиенты заказывают книги через WhatsApp, админ-панель позволяет легко управлять ассортиментом и ценами.',
    },
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
    slides: [
      { type: 'image', src: '/projects/bookstore/cover.png', alt: 'BookStore homepage' },
      { type: 'image', src: '/projects/bookstore/screen1.png', alt: 'Catalog listing' },
      { type: 'image', src: '/projects/bookstore/screen2.png', alt: 'Book details or cart' },
      { type: 'image', src: '/projects/bookstore/screen3.png', alt: 'Checkout or admin view' },
    ],
    liveUrl: '',
    repoUrl: '',
    year: '2023',
  },
]

export default projects
