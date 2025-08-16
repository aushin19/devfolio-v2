import React from 'react'
import WorkTimeLine from '../WorkTimeLine'

const items = [
    {
        id: 1,
        date: "May 2024 - Present",
        title: "Bajaj Finserv",
        description:[
            "• On-site at Bajaj Finserv, I'm working as a Full Stack Engineer",
        ],
        image: "/globe.svg",
    },
    {
        id: 2,
        date: "Feb 2024 - April 2024",
        title: "Freelance Full Stack Engineer",
        description: [
            "• Developed IPO Check Kar app, reducing research time by 70% and providing live NSE/BSE updates.",
            "• Created Device Booster Android App, enhancing gaming performance by 75% through optimized FPS and graphics.",
            "• Led two projects resulting in a 12% increase in company revenue.",
        ],
        image: "/vercel.svg",
    },
    {
        id: 3,
        date: "May 2023 - Nov 2023",
        title: "Freelance & Indie Hacking",
        description:[
            "• Developed a competitive gaming platform with 10K+ downloads and $500+ MRR through live tournaments.",
            "• Created an AI-powered video summarization tool, reducing watch time by 80% and improving learning efficiency 3x."
        ],
        image: "/next.svg",
    },
    {
        id: 4,
        date: "June 2022 – Dec 2022",
        title: "SKAITAS - Software Engineer Intern",
        description:[
            "• Designed and launched a Flutter app UI, successfully published on Google Play Store.",
            "• Developed a Custom API using Google APIs with near-zero investment."
        ],
        image: "/next.svg",
    },
    {
        id: 5,
        date: "June 2021 – Dec 2021",
        title: "DeepMid Tek - Software Engineer Intern",
        description:[
            "• Reduced time to render user buddy lists by 75% by implementing a prediction algorithm."
        ],
        image: "/next.svg",
    }
]

const Work = () => {
    return (
        <div className='flex flex-col p-8 md:px-32 items-start justify-center gap-4 w-full'>
            <h2 className='text-4xl font-bold text-start'>Work</h2>
            <div className='md:p-4 flex items-start justify-center flex-col gap-4 w-full'>
                <WorkTimeLine items={items}/>
            </div>
        </div>
    )
}

export default Work