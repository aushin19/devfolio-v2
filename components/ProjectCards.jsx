import React from 'react'
import { Card, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card'
import Image from 'next/image'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import Link from 'next/link'
import { IconBrandGithub, IconCircleFilled, IconWorld } from '@tabler/icons-react'

const ProjectCards = ({ item }) => {
    return (
        <Card className='@container/card border-none'>
            <CardContent className='flex flex-col gap-4'>
                <Image src={item.image} alt={item.title} width={1024} height={720} className='rounded-xl object-cover p-0 m-0' />
                <div className='flex flex-col gap-2 mt-2'>
                    <div className='flex items-center justify-between w-full'>
                        <CardTitle>{item.title}</CardTitle>
                        <Badge variant="outline" className='font-bold'><IconCircleFilled className='w-2 h-2 text-green-500' />{item.type}</Badge>
                    </div>
                    <CardDescription>{item.date}</CardDescription>
                </div>
                <CardDescription>{item.description}</CardDescription>
                <div className='flex items-center justify-start flex-wrap gap-2 mt-2'>
                    {item.tech.map((tech, key) => <Badge key={key} variant="outline" className='bg-muted text-white border-none font-bold'>{tech}</Badge>)}
                </div>
            </CardContent>
            <CardFooter>
                <div className='flex items-center gap-2 w-full'>
                    {item.github && (
                        <Link href={item.github} target='_blank'>
                            <Button variant="default" size="sm" className='bg-white text-black border-none text-xs font-bold'><IconBrandGithub className='w-2 h-2' /> Source</Button>
                        </Link>
                    )}
                    {item.link && (
                        <Link href={item.link} target='_blank'>
                            <Button variant="default" size="sm" className='bg-white text-black border-none text-xs font-bold'><IconWorld className='w-2 h-2' /> Website</Button>
                        </Link>
                    )}
                </div>
            </CardFooter>
        </Card>
    )
}

export default ProjectCards