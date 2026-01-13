const BACK_DOMAIN = process.env.BACK_DOMAIN

export const techResumeData = {
    // Personal Identifiable Information
    name: 'JOSE RICKY ARALAR JR',
    work: ['Software Developer', 'UI/UX Designer', 'Cloud Engineer'],
    state: 'Virginia',
    city: 'Fredericksburg',
    age: 23,

    // Skills list
    skills: [
        { name: 'Web development', progress: 90 },
        { name: 'UI/UX Design', progress: 80 },
        { name: 'AWS Cloud', progress: 30 }
    ],

    // Tech list
    techs: [
        { icon: 'html', name: 'HTML Icon' },
        { icon: 'css', name: 'CSS Icon' },
        { icon: 'javaScript', name: 'JavaScript Icon' },
        { icon: 'android', name: 'Android Studio Icon' },
        { icon: 'aws', name: 'AWS Icon' },
        { icon: 'canva', name: 'Canva Icon' },
        { icon: 'express', name: 'Express Icon' },
        { icon: 'figma', name: 'Figma Icon' },
        { icon: 'firebase', name: 'Firebase Icon' },
        { icon: 'git', name: 'Git Icon' },
        { icon: 'java', name: 'Java Icon' },
        { icon: 'jira', name: 'Jira Icon' },
        { icon: 'laravel', name: 'Laravel Icon' },
        { icon: 'monggo', name: 'MonggoDB Icon' },
        { icon: 'node', name: 'NodeJs Icon' },
        { icon: 'php', name: 'Php Icon' },
        { icon: 'python', name: 'Python Icon' },
        { icon: 'react', name: 'React Icon' },
        { icon: 'sql', name: 'SQL Icon' },
        { icon: 'vs', name: 'VS Code Icon' }
    ],

    // Collection List (Education, Experience, Courses, and Certificates)
    collections: [
        {
            icon: 'hat',
            collectionHeader: 'Education',
            items: [
                {
                    university: 'Philippine Christian University',
                    location: 'Manila, Philippines',
                    date: 'Jan 2020 - May 2025',
                    bullet: [
                        'Bachelor of Science in Information and Technology',
                        'Consistent Dean\'s Lister',
                        'Cum Laude'
                    ]
                }
            ]
        },

        {
            icon: 'case',
            collectionHeader: 'Experience',
            items: [
                {
                    role: 'IT Support Intern',
                    company: 'TTEC (Formerly TeleTech)',
                    location: 'Manila, Philippines',
                    date: 'Sept 2024 - Jan 2025',
                    bullet: [
                        'Supported fellow interns by performing inventory checks to ensure accuracy and organization of IT assets',
                        'Assisted IT professionals in resolving variety of technical issues by handling support tickets and escalating complex problems as needed',
                        'Developed foundational knowledge of networking principles and network troubleshooting',
                        'Provided hands on technical support by performing hardware maintenance'
                    ]
                },
                {
                    role: 'IT Support Volunteer',
                    company: 'Harvest of Souls for Christ Church',
                    location: 'Manila, Philippines',
                    date: 'Jan 2016 - May 2025',
                    bullet: [
                        'Responsible for diagnosing and resolving both software and hardware issues, ensuring all systems run smoothly',
                        'Managed and organized the setup and maintenance of complex cable systems for instruments, mixers, and other audio-visual equipment',
                        'Handled almost 100% of the multimedia production, including managing live streams, operating ProPresenter, and overseeing output to multiple screens during events and services',
                        'Improved communication and leadership skills by mentoring music and media trainees'
                    ]
                }
            ]
        },

        {
            icon: 'idea',
            collectionHeader: 'Courses and Training',
            items: [
                {
                    title: 'Figma UI UX Design Essentials',
                    issuedBy: 'Udemy',
                    issuedOn: 'Oct 21, 2025',
                    learning: '“Gained advanced proficiency in Figma, focusing on Auto Layout, Variants, and Prototyping to build scalable design systems. Applied core UX principles to deliver high-fidelity, interactive prototypes ready for developer handoff”',
                    url: 'https://www.udemy.com/certificate/UC-92d45692-5c4f-4f98-8f2f-f8479e9a420b'
                }
            ]
        },

        {
            icon: 'verified',
            collectionHeader: 'Certifications',
            items: [
                {
                    imgSrc: `${BACK_DOMAIN}/images/certifications/badge.png`,
                    title: 'AWS Certified Cloud Practitioner',
                    issuedBy: 'AWS',
                    issuedOn: 'Sept 29, 2025',
                    url: 'https://www.credly.com/badges/50e0e9bb-c414-4150-b581-6f570b908ac8/public_url'
                }
            ]
        }
    ]
}
