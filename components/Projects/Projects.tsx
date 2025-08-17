import React from 'react'
import ProjectCards from '../ProjectCards'

const items = [
    {
        id: 1,
        title: "IPO Check Kar",
        description: <p className='text-muted-foreground text-sm'>An Android app for real-time IPO tracking and alerts that has <span className='text-white font-bold'>already generated $200+ in monthly recurring revenue</span>, achieved over 1,000 downloads with 500+ monthly active users, and helps investors cut their research time by 70% through live NSE/BSE updates and instant allotment status tracking.</p>,
        image: "/ipo.webp",
        link: "https://ipocheckkar.vercel.app",
        github: "https://github.com/shivam-kumar-singh/ipocheckkar",
        tech: ["React", "Node.js", "MongoDB"],
        date: "Mar 2025 - Jul 2025",
        type: "Android App",
    },
    {
        id: 2,
        title: "IPO Check Kar",
        description: <p className='text-muted-foreground text-sm'>An Android app for real-time IPO tracking and alerts that has <span className='text-white font-bold'>already generated $200+ in monthly recurring revenue</span>, achieved over 1,000 downloads with 500+ monthly active users, and helps investors cut their research time by 70% through live NSE/BSE updates and instant allotment status tracking.</p>,
        image: "/ipo.webp",
        link: "https://ipocheckkar.vercel.app",
        github: "https://github.com/shivam-kumar-singh/ipocheckkar",
        tech: ["React", "Node.js", "MongoDB"],
        date: "Mar 2025 - Jul 2025",
        type: "Android App",
    },
    {
        id: 3,
        title: "IPO Check Kar",
        description: <p className='text-muted-foreground text-sm'>An Android app for real-time IPO tracking and alerts that has <span className='text-white font-bold'>already generated $200+ in monthly recurring revenue</span>, achieved over 1,000 downloads with 500+ monthly active users, and helps investors cut their research time by 70% through live NSE/BSE updates and instant allotment status tracking.</p>,
        image: "/ipo.webp",
        link: "https://ipocheckkar.vercel.app",
        github: "https://github.com/shivam-kumar-singh/ipocheckkar",
        tech: ["React", "Node.js", "MongoDB"],
        date: "Mar 2025 - Jul 2025",
        type: "Android App",
    },
    {
        id: 4,
        title: "IPO Check Kar",
        description: <p className='text-muted-foreground text-sm'>An Android app for real-time IPO tracking and alerts that has <span className='text-white font-bold'>already generated $200+ in monthly recurring revenue</span>, achieved over 1,000 downloads with 500+ monthly active users, and helps investors cut their research time by 70% through live NSE/BSE updates and instant allotment status tracking.</p>,
        image: "/ipo.webp",
        link: "https://ipocheckkar.vercel.app",
        github: "https://github.com/shivam-kumar-singh/ipocheckkar",
        tech: ["React", "Node.js", "MongoDB"],
        date: "Mar 2025 - Jul 2025",
        type: "Android App",
    }
]

const Projects = () => {
    return (
        <div className='flex flex-col p-8 md:px-32 items-start justify-center gap-8 w-full'>
            <div className='flex flex-col items-start justify-start gap-2 w-full'>
                <h2 className='text-4xl font-bold text-start'>Projects</h2>
                <p className='text-muted-foreground text-sm'>I’ve built everything from simple websites to complex web applications. Here are a few projects I’m especially proud of.</p>
            </div>
            <div className='md:p-4 flex items-start justify-start flex-wrap gap-2 w-full'>
                <div className="grid md:grid-cols-2 gap-4 w-full">
                    {items.map(item => <ProjectCards key={item.id} item={item} />)}
                </div>
            </div>
        </div>
    )
}

export default Projects