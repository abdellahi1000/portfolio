/* i18n.js — every string of the site, in EN / FR / AR.
   Loaded as a classic script; exposes window.I18N. */

window.I18N = {
  en: {
    dir: 'ltr',
    htmlLang: 'en',
    ui: {
      next: 'Next',
      letsTalk: "Let's talk",
      close: 'Close',
      hint: 'Scroll · click the case',
      downloadCV: 'Download CV',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      live: 'Live demo',
      role: 'Role',
      tech: 'Tech',
      formName: 'Full name',
      formEmail: 'Email',
      formSubject: 'Subject',
      formMessage: 'Message',
      formSend: 'Send Message',
      formInvalid: 'Please fill in every field with a valid email.',
      formSuccess: 'Thanks! Your message is on its way. ✈',
      projectLabel: 'PROJECT'
    },
    slides: {
      hero: {
        label: 'SOFTWARE ENGINEERING STUDENT',
        caseTitle: 'Abdellahi',
        sticker: 'Nouakchott, Mauritania 🇲🇷 · L3 @ SupNum',
        heading: 'Abdellahi Seyid — Software Engineering Student',
        panel: {
          title: 'Abdellahi Seyid',
          subtitle: 'Software Engineering Student | Full-Stack Developer',
          tagline: 'Building innovative digital solutions through software engineering, modern web technologies, and cybersecurity.',
          tiles: [
            '🎓 SupNum — Développement des Systèmes Informatiques (L3)',
            '📍 Nouakchott, Mauritania',
            '💻 Full-Stack & Cybersecurity'
          ]
        }
      },
      about: {
        label: 'WHO I AM',
        caseTitle: 'About',
        sticker: 'Student · Builder · Learner',
        heading: 'About Abdellahi Seyid',
        panel: {
          title: 'About',
          paragraphs: [
            "I'm a student in Information Systems Development, passionate about software engineering and building web and mobile applications.",
            'I work on real projects with modern technologies, building complete systems that bring together frontend, backend and databases.',
            'I have a special interest in cybersecurity, artificial intelligence and digital innovation, and I keep growing my technical and professional skills through learning and hands-on practice.',
            "My goal: become a software engineer specialised in Full-Stack Development and Cybersecurity, and continue my studies through a Master's degree."
          ],
          tilesTitle: 'Languages',
          tiles: [
            'Arabic — native',
            'French — fluent (studies & tech)',
            'English — B1'
          ]
        }
      },
      skills: {
        label: 'WHAT I DO',
        caseTitle: 'Skills',
        sticker: 'Full-Stack · Backend · Security',
        heading: 'Skills — Abdellahi Seyid',
        panel: {
          title: 'Skills',
          cards: [
            { title: 'Full-Stack Development', desc: 'Frontends, backends and complete integrated apps.' },
            { title: 'Backend & Database Engineering', desc: 'Building APIs, managing databases and designing systems.' },
            { title: 'Cybersecurity & AI Integration', desc: 'Security fundamentals and integrating AI into applications.' }
          ],
          groups: [
            { label: 'Languages', chips: ['Java', 'JavaScript', 'TypeScript', 'Dart', 'Python', 'SQL', 'HTML', 'CSS'] },
            { label: 'Frameworks', chips: ['React', 'Next.js', 'React Native', 'Flutter', 'Spring Boot', 'Flask', 'Jinja', 'Node.js'] },
            { label: 'Databases', chips: ['Supabase', 'PostgreSQL', 'MySQL', 'MongoDB'] },
            { label: 'Tools', chips: ['Git & GitHub', 'Docker (learning)', 'VS Code', 'Android Studio', 'Maven', 'Linux / Ubuntu'] },
            { label: 'Practices', chips: ['REST APIs', 'Database Design', 'API Integration', 'Authentication & Authorization', 'AI Integration'] }
          ]
        }
      },
      p1: {
        label: 'PROJECT 01/04',
        caseTitle: 'Rahalatte',
        sticker: 'Flutter · Supabase · Next.js',
        heading: 'Rahalatte — Captain App',
        panel: {
          title: 'Rahalatte · Captain App',
          desc: 'An app that brings ride and delivery requests from multiple companies into a single interface for drivers (captains), making it easier to manage orders across platforms.',
          tech: ['Flutter', 'Dart', 'Supabase', 'PostgreSQL', 'Next.js (admin dashboard)', 'API Integration'],
          role: 'System design, UI, backend and third-party integrations.'
        }
      },
      p2: {
        label: 'PROJECT 02/04',
        caseTitle: 'Medical Record',
        sticker: 'Flask · MongoDB · Vercel',
        heading: 'Digital Medical Record (Dossier Médical Numérique)',
        panel: {
          title: 'Digital Medical Record',
          desc: 'A digital system managing patient medical records, appointments, doctors, health-insurance verification, medical signatures and PDF medical-record generation.',
          tech: ['Python', 'Flask', 'Jinja2', 'MongoDB', 'MongoDB Atlas', 'Vercel'],
          role: 'Developed the system during my internship (Khidmaty context) — features and medical data management.'
        }
      },
      p3: {
        label: 'PROJECT 03/04',
        caseTitle: 'Face Detect',
        sticker: 'React Native · Supabase',
        heading: 'Banking Face Detection',
        panel: {
          title: 'Banking Face Detection',
          desc: 'A security project for banking apps that strengthens user identity verification with face recognition and additional verification methods.',
          tech: ['React Native', 'Kotlin / Java', 'Supabase', 'Edge Functions', 'Face Recognition', 'QR Code Authentication'],
          role: 'Mobile app ↔ backend integration and security features.'
        }
      },
      p4: {
        label: 'PROJECT 04/04',
        caseTitle: 'AutoCV',
        sticker: 'AI · APIs · Backend',
        heading: 'AutoCV — AI-powered CV platform',
        panel: {
          title: 'AutoCV',
          desc: 'An AI-powered platform that organises professional information, skills and projects, and turns them into an always-up-to-date, exportable CV.',
          tech: ['AI Integration', 'APIs', 'Backend'],
          role: 'Creator — concept, system design and development.'
        }
      },
      exp: {
        label: 'THE PATH SO FAR',
        caseTitle: 'Experience',
        sticker: 'SupNum · 2025–2026',
        heading: 'Experience & Education',
        panel: {
          title: 'Experience & Education',
          timeline: [
            { title: 'Internship — Digital Medical Record system', desc: 'Khidmaty context: developed a digital medical-records management platform.' },
            { title: 'SupNum — Institut Supérieur du Numérique', desc: 'Licence in Développement des Systèmes Informatiques — currently L3 (2025–2026).' },
            { title: 'Coursework & interests', desc: 'Software Engineering, Spring Boot & Java, Database Management, Cloud & Virtualization, Big Data, SOA & Web Services, Linux & DevOps, Cybersecurity.' },
            { title: 'Community', desc: 'Takes part in tech competitions and forums.' }
          ]
        }
      },
      contact: {
        label: 'GET IN TOUCH',
        caseTitle: "Let's talk",
        sticker: 'Open to internships & projects',
        heading: 'Contact Abdellahi Seyid',
        panel: {
          title: "Let's talk",
          text: "Have a project, an internship or an idea? Let's build something together."
        }
      }
    }
  },

  fr: {
    dir: 'ltr',
    htmlLang: 'fr',
    ui: {
      next: 'Suivant',
      letsTalk: 'Discutons',
      close: 'Fermer',
      hint: 'Défiler · cliquer le coffret',
      downloadCV: 'Télécharger le CV',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      live: 'Démo en ligne',
      role: 'Rôle',
      tech: 'Technologies',
      formName: 'Nom complet',
      formEmail: 'E-mail',
      formSubject: 'Sujet',
      formMessage: 'Message',
      formSend: 'Envoyer le message',
      formInvalid: 'Merci de remplir tous les champs avec un e-mail valide.',
      formSuccess: 'Merci ! Votre message est en route. ✈',
      projectLabel: 'PROJET'
    },
    slides: {
      hero: {
        label: 'ÉTUDIANT EN GÉNIE LOGICIEL',
        caseTitle: 'Abdellahi',
        sticker: 'Nouakchott, Mauritanie 🇲🇷 · L3 @ SupNum',
        heading: 'Abdellahi Seyid — Étudiant en génie logiciel',
        panel: {
          title: 'Abdellahi Seyid',
          subtitle: 'Étudiant en génie logiciel | Développeur Full-Stack',
          tagline: 'Je conçois des solutions numériques innovantes grâce au génie logiciel, aux technologies web modernes et à la cybersécurité.',
          tiles: [
            '🎓 SupNum — Développement des Systèmes Informatiques (L3)',
            '📍 Nouakchott, Mauritanie',
            '💻 Full-Stack & Cybersécurité'
          ]
        }
      },
      about: {
        label: 'QUI JE SUIS',
        caseTitle: 'À propos',
        sticker: 'Étudiant · Créateur · Curieux',
        heading: 'À propos d’Abdellahi Seyid',
        panel: {
          title: 'À propos',
          paragraphs: [
            'Je suis étudiant en Développement des Systèmes Informatiques, passionné par le génie logiciel et la création d’applications web et mobiles.',
            'Je travaille sur des projets réels avec des technologies modernes, en construisant des systèmes complets qui réunissent frontend, backend et bases de données.',
            'Je porte un intérêt particulier à la cybersécurité, à l’intelligence artificielle et à l’innovation numérique, et je continue à développer mes compétences techniques et professionnelles par l’apprentissage et la pratique.',
            'Mon objectif : devenir ingénieur logiciel spécialisé en développement Full-Stack et en cybersécurité, et poursuivre mes études en Master.'
          ],
          tilesTitle: 'Langues',
          tiles: [
            'Arabe — langue maternelle',
            'Français — courant (études & tech)',
            'Anglais — B1'
          ]
        }
      },
      skills: {
        label: 'CE QUE JE FAIS',
        caseTitle: 'Compétences',
        sticker: 'Full-Stack · Backend · Sécurité',
        heading: 'Compétences — Abdellahi Seyid',
        panel: {
          title: 'Compétences',
          cards: [
            { title: 'Développement Full-Stack', desc: 'Frontends, backends et applications complètes et intégrées.' },
            { title: 'Backend & Bases de données', desc: 'Création d’API, gestion de bases de données et conception de systèmes.' },
            { title: 'Cybersécurité & IA', desc: 'Fondamentaux de la sécurité et intégration de l’IA dans les applications.' }
          ],
          groups: [
            { label: 'Langages', chips: ['Java', 'JavaScript', 'TypeScript', 'Dart', 'Python', 'SQL', 'HTML', 'CSS'] },
            { label: 'Frameworks', chips: ['React', 'Next.js', 'React Native', 'Flutter', 'Spring Boot', 'Flask', 'Jinja', 'Node.js'] },
            { label: 'Bases de données', chips: ['Supabase', 'PostgreSQL', 'MySQL', 'MongoDB'] },
            { label: 'Outils', chips: ['Git & GitHub', 'Docker (en cours)', 'VS Code', 'Android Studio', 'Maven', 'Linux / Ubuntu'] },
            { label: 'Pratiques', chips: ['API REST', 'Conception de BDD', 'Intégration d’API', 'Authentification & Autorisation', 'Intégration IA'] }
          ]
        }
      },
      p1: {
        label: 'PROJET 01/04',
        caseTitle: 'Rahalatte',
        sticker: 'Flutter · Supabase · Next.js',
        heading: 'Rahalatte — Application Capitaine',
        panel: {
          title: 'Rahalatte · Application Capitaine',
          desc: 'Une application qui regroupe les demandes de courses et de livraisons de plusieurs sociétés dans une interface unique pour les chauffeurs (capitaines), afin de faciliter la gestion des commandes entre plateformes.',
          tech: ['Flutter', 'Dart', 'Supabase', 'PostgreSQL', 'Next.js (tableau de bord admin)', 'Intégration d’API'],
          role: 'Conception du système, UI, backend et intégrations tierces.'
        }
      },
      p2: {
        label: 'PROJET 02/04',
        caseTitle: 'Dossier Médical',
        sticker: 'Flask · MongoDB · Vercel',
        heading: 'Dossier Médical Numérique',
        panel: {
          title: 'Dossier Médical Numérique',
          desc: 'Un système numérique qui gère les dossiers médicaux des patients, les rendez-vous, les médecins, la vérification de l’assurance santé, les signatures médicales et la génération de dossiers médicaux en PDF.',
          tech: ['Python', 'Flask', 'Jinja2', 'MongoDB', 'MongoDB Atlas', 'Vercel'],
          role: 'Système développé pendant mon stage (contexte Khidmaty) — fonctionnalités et gestion des données médicales.'
        }
      },
      p3: {
        label: 'PROJET 03/04',
        caseTitle: 'Face Detect',
        sticker: 'React Native · Supabase',
        heading: 'Détection faciale bancaire',
        panel: {
          title: 'Détection faciale bancaire',
          desc: 'Un projet de sécurité pour applications bancaires qui renforce la vérification d’identité des utilisateurs grâce à la reconnaissance faciale et à des méthodes de vérification supplémentaires.',
          tech: ['React Native', 'Kotlin / Java', 'Supabase', 'Edge Functions', 'Reconnaissance faciale', 'Authentification par QR Code'],
          role: 'Intégration application mobile ↔ backend et fonctionnalités de sécurité.'
        }
      },
      p4: {
        label: 'PROJET 04/04',
        caseTitle: 'AutoCV',
        sticker: 'IA · API · Backend',
        heading: 'AutoCV — plateforme de CV propulsée par l’IA',
        panel: {
          title: 'AutoCV',
          desc: 'Une plateforme propulsée par l’IA qui organise les informations professionnelles, les compétences et les projets, et les transforme en un CV toujours à jour et exportable.',
          tech: ['Intégration IA', 'API', 'Backend'],
          role: 'Créateur — concept, conception du système et développement.'
        }
      },
      exp: {
        label: 'LE PARCOURS',
        caseTitle: 'Parcours',
        sticker: 'SupNum · 2025–2026',
        heading: 'Expérience & Formation',
        panel: {
          title: 'Expérience & Formation',
          timeline: [
            { title: 'Stage — Dossier Médical Numérique', desc: 'Contexte Khidmaty : développement d’une plateforme de gestion des dossiers médicaux.' },
            { title: 'SupNum — Institut Supérieur du Numérique', desc: 'Licence en Développement des Systèmes Informatiques — actuellement en L3 (2025–2026).' },
            { title: 'Cours & centres d’intérêt', desc: 'Génie logiciel, Spring Boot & Java, gestion de bases de données, Cloud & Virtualisation, Big Data, SOA & Services Web, Linux & DevOps, Cybersécurité.' },
            { title: 'Communauté', desc: 'Participe à des compétitions et forums tech.' }
          ]
        }
      },
      contact: {
        label: 'ME CONTACTER',
        caseTitle: 'Discutons',
        sticker: 'Ouvert aux stages & projets',
        heading: 'Contacter Abdellahi Seyid',
        panel: {
          title: 'Discutons',
          text: 'Un projet, un stage ou une idée ? Construisons quelque chose ensemble.'
        }
      }
    }
  },

  ar: {
    dir: 'rtl',
    htmlLang: 'ar',
    ui: {
      next: 'التالي',
      letsTalk: 'لنتحدث',
      close: 'إغلاق',
      hint: 'مرّر · انقر على العلبة',
      downloadCV: 'تحميل السيرة الذاتية',
      github: 'جيت هاب',
      linkedin: 'لينكد إن',
      live: 'عرض مباشر',
      role: 'الدور',
      tech: 'التقنيات',
      formName: 'الاسم الكامل',
      formEmail: 'البريد الإلكتروني',
      formSubject: 'الموضوع',
      formMessage: 'الرسالة',
      formSend: 'إرسال الرسالة',
      formInvalid: 'يرجى ملء جميع الحقول مع بريد إلكتروني صالح.',
      formSuccess: 'شكرًا! رسالتك في طريقها. ✈',
      projectLabel: 'مشروع'
    },
    slides: {
      hero: {
        label: 'طالب هندسة برمجيات',
        caseTitle: 'عبد الله',
        sticker: 'نواكشوط، موريتانيا 🇲🇷 · السنة الثالثة @ SupNum',
        heading: 'عبد الله سيد — طالب هندسة برمجيات',
        panel: {
          title: 'عبد الله سيد',
          subtitle: 'طالب هندسة برمجيات | مطوّر ويب متكامل (Full-Stack)',
          tagline: 'أبني حلولًا رقمية مبتكرة من خلال هندسة البرمجيات وتقنيات الويب الحديثة والأمن السيبراني.',
          tiles: [
            '🎓 SupNum — تطوير نظم المعلومات (السنة الثالثة)',
            '📍 نواكشوط، موريتانيا',
            '💻 تطوير متكامل وأمن سيبراني'
          ]
        }
      },
      about: {
        label: 'من أنا',
        caseTitle: 'نبذة عني',
        sticker: 'طالب · مُنشئ · متعلّم',
        heading: 'نبذة عن عبد الله سيد',
        panel: {
          title: 'نبذة عني',
          paragraphs: [
            'أنا طالب في تخصص تطوير نظم المعلومات، شغوف بهندسة البرمجيات وبناء تطبيقات الويب والهاتف المحمول.',
            'أعمل على مشاريع حقيقية بتقنيات حديثة، وأبني أنظمة متكاملة تجمع بين الواجهات الأمامية والخلفية وقواعد البيانات.',
            'لديّ اهتمام خاص بالأمن السيبراني والذكاء الاصطناعي والابتكار الرقمي، وأواصل تطوير مهاراتي التقنية والمهنية من خلال التعلّم والممارسة العملية.',
            'هدفي: أن أصبح مهندس برمجيات متخصصًا في التطوير المتكامل والأمن السيبراني، وأن أواصل دراستي بالحصول على درجة الماستر.'
          ],
          tilesTitle: 'اللغات',
          tiles: [
            'العربية — اللغة الأم',
            'الفرنسية — بطلاقة (الدراسة والتقنية)',
            'الإنجليزية — مستوى B1'
          ]
        }
      },
      skills: {
        label: 'ما أقوم به',
        caseTitle: 'المهارات',
        sticker: 'تطوير متكامل · خلفية · أمن',
        heading: 'المهارات — عبد الله سيد',
        panel: {
          title: 'المهارات',
          cards: [
            { title: 'التطوير المتكامل (Full-Stack)', desc: 'واجهات أمامية وخلفية وتطبيقات متكاملة.' },
            { title: 'هندسة الخلفية وقواعد البيانات', desc: 'بناء واجهات برمجية، وإدارة قواعد البيانات، وتصميم الأنظمة.' },
            { title: 'الأمن السيبراني ودمج الذكاء الاصطناعي', desc: 'أساسيات الأمن ودمج الذكاء الاصطناعي في التطبيقات.' }
          ],
          groups: [
            { label: 'اللغات البرمجية', chips: ['Java', 'JavaScript', 'TypeScript', 'Dart', 'Python', 'SQL', 'HTML', 'CSS'] },
            { label: 'أطر العمل', chips: ['React', 'Next.js', 'React Native', 'Flutter', 'Spring Boot', 'Flask', 'Jinja', 'Node.js'] },
            { label: 'قواعد البيانات', chips: ['Supabase', 'PostgreSQL', 'MySQL', 'MongoDB'] },
            { label: 'الأدوات', chips: ['Git & GitHub', 'Docker (قيد التعلّم)', 'VS Code', 'Android Studio', 'Maven', 'Linux / Ubuntu'] },
            { label: 'الممارسات', chips: ['REST APIs', 'تصميم قواعد البيانات', 'دمج الواجهات البرمجية', 'المصادقة والتخويل', 'دمج الذكاء الاصطناعي'] }
          ]
        }
      },
      p1: {
        label: 'مشروع 01/04',
        caseTitle: 'رحلتي',
        sticker: 'Flutter · Supabase · Next.js',
        heading: 'رحلتي — تطبيق الكابتن',
        panel: {
          title: 'رحلتي · تطبيق الكابتن',
          desc: 'تطبيق يجمع طلبات التوصيل والمشاوير من عدة شركات في واجهة واحدة للسائقين (الكباتن)، ليسهّل إدارة الطلبات عبر المنصات.',
          tech: ['Flutter', 'Dart', 'Supabase', 'PostgreSQL', 'Next.js (لوحة تحكم)', 'دمج الواجهات البرمجية'],
          role: 'تصميم النظام، الواجهات، الخلفية والتكاملات الخارجية.'
        }
      },
      p2: {
        label: 'مشروع 02/04',
        caseTitle: 'الملف الطبي',
        sticker: 'Flask · MongoDB · Vercel',
        heading: 'الملف الطبي الرقمي',
        panel: {
          title: 'الملف الطبي الرقمي',
          desc: 'نظام رقمي لإدارة الملفات الطبية للمرضى والمواعيد والأطباء والتحقق من التأمين الصحي والتوقيعات الطبية وتوليد الملفات الطبية بصيغة PDF.',
          tech: ['Python', 'Flask', 'Jinja2', 'MongoDB', 'MongoDB Atlas', 'Vercel'],
          role: 'طوّرت النظام خلال فترة تدريبي (في سياق خدمتي) — الميزات وإدارة البيانات الطبية.'
        }
      },
      p3: {
        label: 'مشروع 03/04',
        caseTitle: 'التعرف على الوجه',
        sticker: 'React Native · Supabase',
        heading: 'التحقق بالوجه للتطبيقات البنكية',
        panel: {
          title: 'التحقق بالوجه للتطبيقات البنكية',
          desc: 'مشروع أمني للتطبيقات البنكية يعزّز التحقق من هوية المستخدمين عبر التعرف على الوجه وطرق تحقق إضافية.',
          tech: ['React Native', 'Kotlin / Java', 'Supabase', 'Edge Functions', 'التعرف على الوجه', 'المصادقة برمز QR'],
          role: 'ربط التطبيق المحمول بالخلفية وميزات الأمان.'
        }
      },
      p4: {
        label: 'مشروع 04/04',
        caseTitle: 'AutoCV',
        sticker: 'ذكاء اصطناعي · واجهات · خلفية',
        heading: 'AutoCV — منصة سير ذاتية بالذكاء الاصطناعي',
        panel: {
          title: 'AutoCV',
          desc: 'منصة مدعومة بالذكاء الاصطناعي تنظّم المعلومات المهنية والمهارات والمشاريع، وتحوّلها إلى سيرة ذاتية محدّثة دائمًا وقابلة للتصدير.',
          tech: ['دمج الذكاء الاصطناعي', 'واجهات برمجية', 'خلفية'],
          role: 'المُنشئ — الفكرة وتصميم النظام والتطوير.'
        }
      },
      exp: {
        label: 'المسار حتى الآن',
        caseTitle: 'المسيرة',
        sticker: 'SupNum · 2025–2026',
        heading: 'الخبرة والتعليم',
        panel: {
          title: 'الخبرة والتعليم',
          timeline: [
            { title: 'تدريب — نظام الملف الطبي الرقمي', desc: 'في سياق خدمتي: تطوير منصة لإدارة الملفات الطبية الرقمية.' },
            { title: 'SupNum — المعهد العالي للرقمنة', desc: 'الإجازة في تطوير نظم المعلومات — حاليًا في السنة الثالثة (2025–2026).' },
            { title: 'المقررات والاهتمامات', desc: 'هندسة البرمجيات، Spring Boot وJava، إدارة قواعد البيانات، الحوسبة السحابية والافتراضية، البيانات الضخمة، SOA وخدمات الويب، Linux وDevOps، الأمن السيبراني.' },
            { title: 'المجتمع التقني', desc: 'أشارك في المسابقات والمنتديات التقنية.' }
          ]
        }
      },
      contact: {
        label: 'تواصل معي',
        caseTitle: 'لنتحدث',
        sticker: 'متاح للتدريب والمشاريع',
        heading: 'تواصل مع عبد الله سيد',
        panel: {
          title: 'لنتحدث',
          text: 'لديك مشروع أو تدريب أو فكرة؟ لنبنِ شيئًا معًا.'
        }
      }
    }
  }
};
