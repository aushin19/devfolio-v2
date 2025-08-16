import React from 'react'
import Image from 'next/image'
import { IconBrandGithub } from '@tabler/icons-react'

const About = () => {
  return (
    <div className='flex flex-col p-8 md:px-32 items-center justify-center gap-4 h-screen'>
      <h2 className='text-4xl font-bold text-start w-full'>About Me</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16'>
        <div className='flex items-center justify-center'>
          <Image src="https://tailark.com/_next/image?url=%2Fpayments.png&w=3840&q=100" alt="About" width={1207} height={929} />
        </div>
        <div className='md:p-4 flex items-start justify-center flex-col gap-4'>
          <p className='text-muted-foreground'>Gemini is evolving to be more than just the models. <span className='text-white font-bold'>It supports an entire ecosystem</span> — from products innovate.</p>
          <p className='text-muted-foreground'>It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate</p>
          <p className='border-l-2 border-muted-foreground/50 pl-4 mt-8'>Using TailsUI has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly. <span className='mt-8 flex flex-col text-muted-foreground font-bold text-lg'>Shivam Gaikwad, CEO<IconBrandGithub className='w-8 h-8'/></span></p>
        </div>
      </div>
    </div>
  )
}

export default About