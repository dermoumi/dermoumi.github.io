window.__sdermoumi__ = window.__sdermoumi__ || (function() {
    var resumeDataEn = {
        picture: 'img/handsomedude.jpg',
        lastName: 'Dermoumi',
        firstName: 'Saïd',
        title: 'Software Developer',
        info: [
            { type: 'address', value: 'Sala al-Jadida, Rabat Sale, Morocco' },
            { type: 'email', value: 'sdermoumi@gmail.com' },
            { type: 'tel', value: '(+212) 6 25 25 99 45', link: 'tel:+212625259945' },
            { type: 'github', value: 'github.com/dermoumi', link: 'http://github.com/dermoumi' },
        ],
        sections: [
            {
                title: 'Education',
                items: [
                    {
                        prefix: 'Currently',
                        title: 'École Supérieure de Technologie Casablanca (ESTC)',
                        description: 'Professional Licence in Software Engineering and Advanced Network and System' +
                            ' Administration'
                    }, {
                        prefix: 2016,
                        title: 'Institut Spécialisé de Technologies Appliquées Sala al-Jadida (ISTA-SAJ)',
                        description: 'Specialized Technician Diploma in Software Development'
                    }, {
                        prefix: 2011,
                        title: 'Lycée Mohamed VI, Sala al-Jadida',
                        description: 'Baccalaureat in Life and Earth Sciences',
                    }
                ]
            },
            {
                title: 'Skills',
                right: true,
                items: [
                    {
                        title: 'Advanced Object Oriented Programming',
                        description: 'C++11, C#, Java, JavaScript, Python...'
                    }, {
                        title: 'Intermediate Mastery of database Management Systems',
                        description: 'MySQL, Microsoft® SQL Server...'
                    }, {
                        title: 'Development of Desktop Applications with Graphical Interfaces',
                        description: 'Qt5, .NET Winforms, Swing...'
                    }, {
                        title: 'Full-Stack Web Development',
                        description: 'CodeIgniter, Django, J2EE, Express, Vue.js...'
                    }, {
                        title: 'Game Development and Hardware-Accelerated Applications',
                        description: 'OpenGL, GLES, WebGL, SFML2, Löve2D...',
                    }, {
                        title: 'At ease with Command-line Tools',
                        description: 'Git, SSH, Task runners...'
                    }, {
                        title: 'Agile Development',
                        description: 'XP, SCRUM, Kanban...'
                    }
                ]
            },
            {
                title: 'Certifications',
                items: [
                    {
                        prefix: 2016,
                        title: 'Microsoft® Specialist: Programming in HTML5 with JavaScript and CSS3'
                    }, {
                        prefix: 2016,
                        title: 'Microsoft® Specialist: Programming in C#'
                    }, {
                        prefix: 2015,
                        title: 'Microsoft® Certified Professional'
                    }
                ]
            },
            {
                title: 'Experience',
                right: true,
                items: [
                    {
                        prefix: 2017,
                        title: 'School project: A website to manage applications for the Professional Licence at the ESTC',
                        items: [
                            'Using Django (and Python) to build a full-fledged web application with user management and administration panel',
                        ]
                    }, {
                        prefix: 2015,
                        title: 'End-of-course Intership at CACIOPÉE S.A.R.L. (Hay Riad, Rabat)',
                        items: [
                            'Making of an HR managemnet application for a governmental entity using an in-house tool (WORKS) that uses J2EE and jBOSS based technologies.',
                            'Understanding BPMN process design and implementing workflows with jBPM. Implementing business rules with DROOLS.'
                        ]
                    }, {
                        prefix: 2014,
                        title: 'Personal Project: M2N (2D Multiplatform Game Engine, C++/Lua)',
                        items: [
                            'Working with technologies like SDL2, OpenGL, GLES2, LuaJIT, Android NDK, SoLoud and FreeType2 among others...',
                            'Understanding Unicode and how to transform and render Arabic text.',
                            'Custom implementation of secure Threads on both CPU and GPU levels on a Lua virtual machine.'
                        ]
                    }, {
                        prefix: 2011,
                        title: 'Personal project: Rockout (Web-based guitar hero clone, JavaScript/PHP)',
                        items: [
                            'Working with HTML5 Canvas and JavaScript APIs like Youtube\'s, Dailymotion\'s or Vimeo\'s',
                            'Annotating code for optimization using Closure Compiler.',
                            'PHP Code Igniter Backend'
                        ]
                    }
                ]
            },
            {
                title: 'Languages',
                items: [
                    {
                        prefix: 'French',
                        title: 'Fluent',
                        description: 'Able to quickly express ideas, develop views or write reports.'
                    }, {
                        prefix: 'English',
                        title: 'Fluent',
                        description: 'Able to quickly express ideas, develop views, write reports or contribute to a discussion.'
                    }
                ]
            },
            {
                title: 'Hobbies',
                template: 'hobbies-section',
                items: {
                    'videogames': 'Video games',
                    'gamedev': 'Gamedev',
                    'comics': 'Comics',
                    'worldbuilding': 'Worldbuilding',
                    'lightnovels': 'Light Novels'
                }
            }
        ]
    };

    var resumeDataFr = {
        picture: 'img/handsomedude.jpg',
        lastName: 'Dermoumi',
        firstName: 'Saïd',
        title: 'Développeur Informatique',
        info: [
            { type: 'address', value: 'Sala al-Jadida, Rabat Salé, Maroc' },
            { type: 'email', value: 'sdermoumi@gmail.com' },
            { type: 'tel', value: '(+212) 6 25 25 99 45', link: 'tel:+212625259945' },
            { type: 'github', value: 'github.com/dermoumi', link: 'http://github.com/dermoumi' },
        ],
        sections: [
            {
                title: 'Éducation',
                items: [
                    {
                        prefix: 'Actuellement',
                        title: 'École Supérieure de Technologie Casablanca (ESTC)',
                        description: 'Licence Professionnelle en Génie Logiciel et Administration Avancée de Systèmes et Réseaux Informatiques',
                        notes: 'Majorant du premier semestre.'
                    }, {
                        prefix: 2016,
                        title: 'Institut Spécialisé de Technologies Appliquées Sala al-Jadida (ISTA-SAJ)',
                        description: 'Diplôme de Technicien Spécialisé en Développement Informatique.',
                        notes: 'Majorant de classe.'
                    }, {
                        prefix: 2011,
                        title: 'Lycée Mohamed VI, Sala al-Jadida',
                        description: 'Baccalauréat en Sciences de la Vie et de la Terre',
                    }
                ]
            },
            {
                title: 'Compétences',
                right: true,
                items: [
                    {
                        title: 'Notions avancées en Programmation Orientée Objet',
                        description: 'C++11, C#, Java, JavaScript, Python...'
                    }, {
                        title: 'Maitrise intermédiaire de langages de gestion de bases de donnée',
                        description: 'MySQL, Microsoft® SQL Server...'
                    }, {
                        title: "Créàtion d'applications buréau à interfaces graphiques",
                        description: 'Qt5, .NET Winforms, Swing...'
                    }, {
                        title: 'Développement Web Full-Stack',
                        description: 'CodeIgniter, Django, J2EE, Express, Vue.js...'
                    }, {
                        title: 'Développement de jeux-vidéo et applications avec accélération matérielle',
                        description: 'OpenGL, GLES, WebGL, SFML2, Löve2D...',
                    }, {
                        title: "Confortable avec l'utilisation d'outils en ligne de commande",
                        description: 'Git, SSH, Task runners...'
                    }, {
                        title: 'Notions en méthodes de développement Agile',
                        description: 'XP, SCRUM, Kanban...'
                    }
                ]
            },
            {
                title: 'Certifications',
                items: [
                    {
                        prefix: 2016,
                        title: 'Microsoft® Specialist: Programming in HTML5 with JavaScript and CSS3'
                    }, {
                        prefix: 2016,
                        title: 'Microsoft® Specialist: Programming in C#'
                    }, {
                        prefix: 2015,
                        title: 'Microsoft® Certified Professional'
                    }
                ]
            },
            {
                title: 'Expérience',
                right: true,
                items: [
                    {
                        prefix: 2017,
                        title: "Projet d'études : Site de préinscription en ligne pour la Licence Professionnelle à l'ESTC",
                        items: [
                            "Utilisation du Framework Django (et Python) pour construire un site web dynamique avec gestion d'utilisateurs et panneau d'administration",
                        ]
                    }, {
                        prefix: 2015,
                        title: "Stage de fin d'études : Caciopée S.A.R.L. (Hay Riad, Rabat)",
                        items: [
                            "Participation à la création d'une application de gestion RH pour une entité gouvernementale à l'aide d'un outil fait-maison créé avec J2EE et basé sur des technologies jBOSS.",
                            "Travail avec processus BPMN pour conception et implémentation de workflows d'application avec jBPM. Implémentation de règles métier avec DROOLS."
                        ]
                    }, {
                        prefix: 2014,
                        title: 'Projet personnel : M2N (Moteur de jeu 2D multiplateforme, C++11/Lua)',
                        items: [
                            "Maitrise de SDL2, OpenGL, GLES2, LuaJIT, Android NDK, SoLoud et FreeType2 entre autres...",
                            "Rendu de texte arabe en Unicode avec transformation à la volée.",
                            "Implémentation personnalisée de Threads sécurisés au niveau CPU et GPU sur la machine virtuelle Lua."
                        ]
                    }, {
                        prefix: 2011,
                        title: "Projet personnel : Rockout (Jeu de rythme basé sur navigateur, JavaScript/PHP)",
                        items: [
                            "Implémentation avec HTML5 Canvas, les APIs JavaScript de YouTube, Dailymotion et Vimeo, annotations Closure Compiler pour optimisation et backend en PHP avec CodeIgniter."
                        ]
                    }
                ]
            },
            {
                title: 'Langues',
                items: [
                    {
                        prefix: 'Français',
                        title: 'Courant',
                        description: "Capable d'exprimer des idées, développer un point de vue ou écrire des rapports."
                    }, {
                        prefix: 'English',
                        title: 'Courant',
                        description: "Capable d'exprimer des idées, développer un point de vue, contribuer à une discussion ou écrire des rapports."
                    }
                ]
            },
            {
                title: 'Loisirs et Intérêts',
                template: 'hobbies-section',
                items: {
                    'videogames': 'Jeux Vidéo',
                    'worldbuilding': 'Worldbuilding',
                    'gamedev': 'Gamedev',
                    'comics': 'Bandes Dessinées',
                    'lightnovels': 'Light novels'
                }
            }
        ]
    };

    Vue.component('resume-section', {
        props: ['section'],
        template: '#resume-section'
    });

    Vue.component('hobbies-section', {
        props: ['section'],
        template: '#hobbies-section'
    });

    var vm = new Vue({
        el: '#wrapper',
        data: {
            picture: '',
            firstPicture: '',
            lastName: '',
            firstName: '',
            title: '',
            info: [],
            sections: [],
        }
    });

    var languages = {
        'en': {
            label: 'english',
            data: resumeDataEn
        },
        'fr': {
            label: 'français',
            data: resumeDataFr
        }
    };

    function handleMediaChange(mql) {
        if (mql.matches) {
            for (var n in vm.sections) {
                if (vm.sections[n].right !== undefined) {
                    vm.sections[n].right = false;
                }
            }
        }
        else {
            for (var n in vm.sections) {
                if (vm.sections[n].right !== undefined) {
                    vm.sections[n].right = true;
                }
            }
        }
    }

    var mql = window.matchMedia("(max-width: 767px)");
    mql.addListener(handleMediaChange);
    handleMediaChange(mql);

    function setLanguageObject(obj) {
        vm.picture = obj.picture;
        vm.firstName = obj.firstName;
        vm.lastName = obj.lastName;
        vm.title = obj.title;
        vm.info = obj.info;
        vm.sections = obj.sections;
    }

    function setLanguage(lang) {
        if (!lang || !(lang in languages)) {
            lang = 'en';
        }

        setLanguageObject(languages[lang].data);
        langVm.currentLanguage = lang;
        window.location.hash = '#' + lang;
        handleMediaChange(mql);
    }

    function getHashLanguage() {
        return window.location.hash.substr(1) || 'en';
    }

    var langVm = new Vue({
        el: '#language-select',
        data: {
            languages: languages,
            currentLanguage: getHashLanguage()
        },
        methods: {
            setLanguage: setLanguage
        }
    })

    setLanguage(getHashLanguage());

    return true;
})();