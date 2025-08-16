"use client"

import React from 'react'
import { Button } from '../ui/button'
import { IconBrandGithub, IconDownload, IconStar } from '@tabler/icons-react'
import { Badge } from '../ui/badge'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-16 h-screen w-full relative'>
            <div
                className="absolute inset-0"
                style={{
                    zIndex: 0,
                    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(220, 40, 18, 0.20), transparent 90%), #000000",
                }}
            />
            {/* Main Content Layer */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-4">
                <Badge className='mb-4' variant="outline"><IconStar /> Software Engineer</Badge>
                <motion.h1 className='text-4xl md:text-6xl'>Hi, I'm Shivam!</motion.h1>
                <div className='flex flex-col md:text-xl items-center justify-center text-center px-4 md:px-0'>
                    <p className='text-muted-foreground'>Crafting weird stuff 'cause I’m too lazy so I automate</p>
                    <p className='text-muted-foreground'>Laziness, but make it look like innovation</p>
                </div>
            </div>
            <div className='relative z-10 flex items-center justify-center gap-8'>
                <Button size="sm">Github <IconBrandGithub className="w-4 h-4" /></Button>
                <Button size="sm" variant="outline">Download CV <IconDownload className="w-4 h-4" /></Button>
            </div>
        </div>
    )
}

export default Hero