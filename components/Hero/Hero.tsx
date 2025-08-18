"use client"

import React from 'react'
import { Button } from '../ui/button'
import { IconBrandGithub, IconDownload } from '@tabler/icons-react'
import { Badge } from '../ui/badge'
import Link from 'next/link'
import { ContainerTextFlip } from '../container-text-flip'

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-16 h-screen w-full relative'>
            <div
                className="absolute inset-0"
                style={{
                    zIndex: 0,
                    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(220, 40, 18, 0.30), transparent 90%), #000000",
                }}
            />
            <div className="relative z-10 flex flex-col items-center justify-center gap-4">
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
            <div className='relative z-10 flex items-center justify-center gap-4'>
                <Link href="https://www.linkedin.com/in/shivam-gaikwad/" target='_blank'><Button size="sm">Github <IconBrandGithub className="w-4 h-4" /></Button></Link>
                <Link href="https://drive.google.com/file/d/1e7XWVEnqTvymImC8RPzmbh3lH-YhYjuH/view?usp=sharing" target='_blank'><Button size="sm" variant="outline">Download CV <IconDownload className="w-4 h-4" /></Button></Link>
            </div>
        </div>
    )
}

export default Hero