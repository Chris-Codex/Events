import React, { useState } from 'react'
import { events } from '../util/menuItems'


const EventsCard = () => {
    const [data, setData] = useState(events)

  return (
    <section className='grid grid-cols-1 px-6 sm:px-20 md:grid-cols-2 lg:grid-cols-3 w-full mt-15 gap-4 '>
         {data.map((item) => {
            return (
                <div className='w-full rounded-md shadow-lg' key={item.id}>
                    <img src={item.image} className='w-full aspect-video object-cover rounded-tl-[10px] rounded-tr-[10px] object-fit' alt='image' />
                    <div className='px-4 py-6'>
                        <h1 className='text-[19px] font-bold'>{item.name}</h1>
                        <p className='text-[#424242]'>{item.time}</p>
                        <p className='text-[#828282] pb-4'>{item.sub_title}</p>
                        <div className='relative w-full h-2 rounded-[100px] bg-gray-200'>
                            <div className='w-full text-[#fff] h-2 rounded-[100px] bg-purple-600' style={{ width: `${(item.attendees / 100) * 100}%`}}></div>
                        </div>
                        <p className='text-[#828282] mt-2'>{item.attendees}/{100} attendees</p>
                    </div>
                </div>
            )
         })}    
    </section>
  )
}

export default EventsCard