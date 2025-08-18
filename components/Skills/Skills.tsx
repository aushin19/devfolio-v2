import React from 'react'
import { Badge } from '../ui/badge'
import { IconBrandDocker, IconBrandMongodb, IconBrandMysql, IconBrandNextjs, IconBrandNodejs, IconBrandPython, IconBrandReact, IconBrandTailwind, IconBrandTypescript } from '@tabler/icons-react'

const items = [
    {
        id: 1,
        name: "React",
        image: <IconBrandReact className='w-8 h-8' />
    },
    {
        id: 2,
        name: "Node.js",
        image: <IconBrandNodejs className='w-8 h-8' />
    },
    {
        id: 3,
        name: "Next.js",
        image: <IconBrandNextjs className='w-8 h-8' />
    },
    {
        id: 4,
        name: "Tailwind CSS",
        image: <IconBrandTailwind className='w-8 h-8' />
    },
    {
        id: 5,
        name: "TypeScript",
        image: <IconBrandTypescript className='w-8 h-8' />
    },
    {
        id: 6,
        name: "Python",
        image: <IconBrandPython className='w-8 h-8' />
    },
    {
        id: 7,
        name: "MongoDB",
        image: <IconBrandMongodb className='w-8 h-8' />
    },
    {
        id: 8,
        name: "PostgreSQL",
        image: ""
    },
    {
        id: 9,
        name: "MySQL",
        image: <IconBrandMysql className='w-8 h-8' />
    },
    {
        id: 11,
        name: "Docker",
        image: <IconBrandDocker className='w-8 h-8' />
    },
    {
        id: 12,
        name: "Java",
        image: ""
    },
    {
        id: 13,
        name: "C++",
        image: ""
    }
]

const Skills = () => {
    return (
        <div className='flex flex-col p-8  items-start justify-center gap-4 w-full'>
            <h2 className='text-4xl font-bold text-start'>Skills</h2>
            <div className='md:p-4 flex items-start justify-start flex-wrap gap-2 w-full'>
                {items.map(item => {
                    return (
                        <Badge key={item.id} variant="outline" className={`text-sm font-bold`}>{item.name} {item.image}</Badge>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills