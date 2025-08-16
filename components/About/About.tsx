import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col p-8 md:px-32 items-start justify-center gap-4 w-full'>
      <h2 className='text-4xl font-bold text-start w-full'>About Me</h2>
      <div className='md:p-4 flex items-start justify-center flex-col gap-4'>
          <p className='text-muted-foreground'>Full stack developer with <span className='text-white font-bold'>3+ years of experience</span>  building web apps that balance clean design with solid engineering. <span className='text-white font-bold'>Skilled in React, Node.js, and modern databases</span></p>
          <p className='text-muted-foreground border-l-2 border-muted-foreground/50 pl-4 mt-8 italic'>Lately, I’ve been  diving into  AI—experimenting with <span className='text-white font-bold underline'>LLMs, RAGs, Autonomous Agents, Vector Databases, Fine-tuning, and Prompt engineering</span></p>
        </div>
    </div>
  )
}

export default About