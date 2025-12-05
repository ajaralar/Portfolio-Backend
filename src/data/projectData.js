import dotenv from 'dotenv';

// Load environment variables
dotenv.config();
const BACK_DOMAIN = process.env.BACK_DOMAIN

export const projectData = {
    sectionTitle: 'PROJECTS',
    sectionBody: [
        "A showcase of my recent work, demonstrating proficiency across the full development lifecycle—from conceptual UI/UX design to scalable, well-architected backend implementation.",
        "Each project highlights my ability to solve real-world problems using the MERN stack, Firebase, and cloud technologies."
    ],

    projects: [
        {
            imageSrc: `${BACK_DOMAIN}/images/projects/under_construction.png`,
            title: 'Fitspo: AI Powered Fitness Application',
            shortTitle: 'Fitspo',
            tools: ['Firebase', 'Express'],
            myRole: 'Full-stack Developer',
            description: 'For our Capstone project, Me and my group developed a mobile application that outputs meal plans and workout plans using supervised machine learning'
        },
        {
            imageSrc: `${BACK_DOMAIN}/images/projects/under_construction.png`,
            title: 'Michael Karikitan\'s Gallery',
            shortTitle: 'Media Gallery',
            tools: ['MongoDB', 'Express', 'ReactJs', 'NodeJs', 'AWS S3 Bucket'],
            myRole: 'Full-stack Developer',
            description: 'Built a modern media gallery website for a professional photographer/videographer specializing in wedding venues. The application is a full MERN stack solution designed for high performance. It features efficient, scalable storage using AWS S3 Buckets to host thousands of high-resolution image and video assets, ensuring fast load times and reliable asset delivery for a professional client showcase.'
        },
        {
            imageSrc: `${BACK_DOMAIN}/images/projects/under_construction.png`,
            title: 'Aralar Benisano Printing',
            shortTitle: 'ABP Services',
            tools: ['MongoDB', 'Express', 'ReactJs', 'NodeJs', 'AWS S3 Bucket', 'ThreeJs'],
            myRole: 'Full-stack Developer',
            description: 'Developed an interactive marketing site for a local printing business. The platform aims to boost online exposure and sales by providing a streamlined product viewing experience. It features an integrated Three.js component to offer customers a 3D preview or customization of the business\' printing catalogue.'
        }
    ]
}