import dotenv from 'dotenv';

// Load environment variables
dotenv.config();
const BACK_DOMAIN = process.env.BACK_DOMAIN

export const projectData = {
    sectionTitle: 'PROJECTS',
    sectionBody: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim '],

    projects: [
        {
            imageSrc: `${BACK_DOMAIN}/images/projects/under_construction.png`,
            title: 'Fitspo: AI Powered Fitness Application',
            shortTitle: 'Fitspo',
            tools: ['Firebase', 'Express'],
            myRole: 'Backend and Frontend Developer',
            description: 'For our Capstone project, Me and my group developed a mobile application that outputs meal plans and workout plans using supervised machine learning'
        }
    ]
}