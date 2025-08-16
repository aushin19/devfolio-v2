import React from 'react'
import EducationTimeLine from '../EducationTimeLine'

const items = [
    {
        id: 1,
        date: "Mar 2021 - Apr 2023",
        title: "MIT World Peace University",
        description:
            "Masters of Computer Applications, Computer Science",
    },
    {
        id: 2,
        date: "Mar 2018 - Apr 2021",
        title: "K K Wagh Institute of Engineering Education and Research",
        description:
            "Bachelor of Business Administration and Computer Application",
    },
    {
        id: 3,
        date: "Mar 2017 - Apr 2018",
        title: "Kendriya Vidyalaya",
        description:
            "12th Standard - CBSE Board",
    },
    {
        id: 4,
        date: "Mar 2015 - Apr 2016",
        title: "Kendriya Vidyalaya",
        description:
            "10th Standard - CBSE Board",
    }
]

const Education = () => {
    return (
        <div className='flex flex-col p-8 md:px-32 items-start justify-center gap-4 w-full'>
            <h2 className='text-4xl font-bold text-start'>Education</h2>
            <div className='md:p-4 flex items-start justify-center flex-col gap-4 w-full'>
                <EducationTimeLine items={items} />
            </div>
        </div>
    )
}

export default Education