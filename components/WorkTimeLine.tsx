import React from 'react'
import {
    Timeline,
    TimelineContent,
    TimelineDate,
    TimelineHeader,
    TimelineIndicator,
    TimelineItem,
    TimelineSeparator,
    TimelineTitle,
} from "@/components/ui/timeline"
import { IconCircleFilled } from '@tabler/icons-react'

const WorkTimeLine = ({items}: {items: any[]}) => {
    return (
        <Timeline className='w-full'>
            {items.map((item) => (
                <TimelineItem
                    key={item.id}
                    step={item.id}
                    className="group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-8"
                >
                    <TimelineHeader>
                        <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
                        <TimelineTitle className="mt-0.5 flex justify-between">
                            {item.id === 1 ? <span className='flex items-center gap-2'>{item.title} <IconCircleFilled className='w-2 h-2 text-green-500' /></span> : <span>{item.title}</span>}
                        </TimelineTitle>
                        <TimelineIndicator className="bg-primary/10 group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="size-6 rounded-full object-cover"
                            />
                        </TimelineIndicator>
                    </TimelineHeader>
                    <TimelineContent className="text-foreground mt-2 rounded-lg border px-4 py-3">
                        {item.description.map((desc: string, index: number) => (
                            <p key={index} className='text-muted-foreground text-xs md:text-sm'>{desc}</p>
                        ))}
                        <TimelineDate className="mt-4 mb-0 text-white/80">{item.date}</TimelineDate>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    )
}

export default WorkTimeLine