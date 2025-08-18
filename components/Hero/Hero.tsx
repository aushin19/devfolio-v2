"use client"

import React from 'react'
import { Button } from '../ui/button'
import { IconBrandGithub, IconDownload } from '@tabler/icons-react'
import { Badge } from '../ui/badge'
import Link from 'next/link'
import { ContainerTextFlip } from '../container-text-flip'
import Background from '../Background'

const Hero = () => {
    return (
        <Background className="min-h-screen w-full">
            <div className='flex flex-col items-center justify-center gap-16 h-screen w-full'>
                <div className="flex flex-col items-center justify-center gap-4">
                    <Badge className='mb-4 backdrop-blur-xl bg-white/10 px-4 py-2 rounded-full text-sm border-none letter-spacing-wide' variant="outline">Welcome to Devfolio</Badge>
                    <div className='flex items-center justify-center gap-2'>
                        <h1 className='text-5xl md:text-7xl font-bold'>Hi, I'm </h1>
                        <ContainerTextFlip className='backdrop-blur-xl bg-white/10 border-none'
                            words={["Shivam", "Web Dev", "Mobile Dev", "AI Dev"]}
                        />
                    </div>
                    <div className='flex flex-col md:text-xl items-center justify-center text-center px-4 md:px-0 gap-4'>
                        <p className='text-muted-foreground'>Web, Mobile, and AI Dev <br/> believing in automating the boring stuff.</p> 
                        <p className='text-muted-foreground italic border-l-2 border-muted-foreground/50 pl-2'>Laziness, but make it look like innovation</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <Link href="https://www.linkedin.com/in/shivam-gaikwad/" target='_blank'><Button size="sm">Github <IconBrandGithub className="w-4 h-4" /></Button></Link>
                    <Link href="https://drive.google.com/file/d/1e7XWVEnqTvymImC8RPzmbh3lH-YhYjuH/view?usp=sharing" target='_blank'><Button size="sm" variant="outline">Download CV <IconDownload className="w-4 h-4" /></Button></Link>
                </div>
            </div>
        </Background>
    )
}

export default Hero