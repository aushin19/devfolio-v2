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

  
  const EducationTimeLine = ({items}: {items: any[]}) => {
    return (
      <Timeline defaultValue={items.length} className='w-full'>
        {items.map((item) => (
          <TimelineItem key={item.id} step={item.id}>
            <TimelineHeader>
              <TimelineSeparator />
              <TimelineTitle className="-mt-0.5">{item.title}</TimelineTitle>
              <TimelineIndicator />
            </TimelineHeader>
            <TimelineContent>
              {item.description}
              <TimelineDate className="mt-2 mb-0 text-white/80">{item.date}</TimelineDate>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    )
  }
  
  export default EducationTimeLine