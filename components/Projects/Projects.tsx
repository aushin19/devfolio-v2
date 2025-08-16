import React from 'react'

const Projects = () => {
    return (
        <div className='flex flex-col p-8 md:px-32 items-start justify-center gap-8 w-full'>
            <div className='flex flex-col items-start justify-start gap-2 w-full'>
                <h2 className='text-4xl font-bold text-start'>Projects</h2>
                <p className='text-muted-foreground text-sm'>I’ve built everything from simple websites to complex web applications. Here are a few projects I’m especially proud of.</p>
            </div>
            <div className='md:p-4 flex items-start justify-start flex-wrap gap-2 w-full'>
                <div className="grid md:grid-cols-2 gap-4 w-full">
                    <div className="p-8 rounded-lg bg-muted">1</div>
                    <div className="p-8 rounded-lg bg-muted">2</div>
                    <div className="p-8 rounded-lg bg-muted">3</div>
                    <div className="p-8 rounded-lg bg-muted">4</div>
                    <div className="p-8 rounded-lg bg-muted">5</div>
                    <div className="p-8 rounded-lg bg-muted">6</div>
                </div>
            </div>
        </div>
    )
}

export default Projects