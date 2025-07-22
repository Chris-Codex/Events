import React, { useState } from 'react'
import { events } from '../util/menuItems'
import MainEventsModal from './MainEventsModal'


const EventsCard = () => {
    const [active, setActive] = useState(null)
    const [modals, setModals] = useState(false);

    const handleModal = (index) => {
        setActive(index)
        setModals((prev) => !prev)
    }

    console.log(active)

  return (
    <>
        <section className='relative grid grid-cols-1 px-6 sm:px-20 md:grid-cols-2 lg:grid-cols-3 w-full mt-15 mb-15 gap-4 '>
            {events.map((item, index) => {
                return (
                    <div className='relative cursor-pointer w-full rounded-md shadow-lg' key={item.id} onClick={() => handleModal(index)}>
                        <div className='absolute flex justify-center items-center rounded-[100px] inset-0 z-90 m-6 text-[#fff] bg-[#06c168] to-green-700 w-30 h-8 font-[600]'>
                            {item.category}
                        </div>
                        <img src={item.image} className='w-full aspect-video object-cover rounded-tl-[10px] rounded-tr-[10px] object-fit' alt='image' />
                        <div className='px-4 py-6'>
                            <h1 className='text-[19px] font-bold'>{item.name}</h1>
                            <p className='text-[#424242]'>{item.time}</p>
                            <p className='text-[#828282] pb-4'>{item.sub_title}</p>
                            <div className='relative w-full h-2 rounded-[100px] bg-gray-200'>
                                <div className='w-full text-[#fff] h-2 rounded-[100px] bg-gradient-to-r from-gray-50 via-[#06c168] to-green-700' style={{ width: `${(item.attendees / 100) * 100}%`}}></div>
                            </div>
                            <p className='text-[#828282] mt-2'>{item.attendees}/{100} attendees</p>
                        </div>
                    </div>
                )
            })} 
        </section>
        
        {events && active !== null && <MainEventsModal items={events[active]} modal={modals} setModal={setModals} />}
    </>
  )
}

export default EventsCard