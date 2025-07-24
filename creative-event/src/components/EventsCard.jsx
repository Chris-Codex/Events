import React, { useState } from 'react'
import { events } from '../util/menuItems'
import MainEventsModal from './MainEventsModal'
import { useEvent } from '../context/EventContext'
import { GoSearch } from 'react-icons/go'


const EventsCard = () => {
    const [active, setActive] = useState(null)
    const [modals, setModals] = useState(false);
    const [search, setSearch] = useState("")

    const { category } = useEvent()

    const handleModal = (index) => {
        setActive(index)
        setModals((prev) => !prev)
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }


    const filterMatch = events.filter((items) => {
        const categoryMatch = !category || category === "All" || items.category === category;

        const searchMatch = !search || items.name.includes(search);

        return categoryMatch && searchMatch;
    })
    

  return (
    <>
        <div className="flex w-full px-2  h-10 mt-10 mb-10">
            <form  className='flex w-full justify-center items-center'>
                <input text="text" name="search" value={search} 
                    onChange={handleChange} placeholder='Search Events' className='relative w-full max-w-[700px] rounded-[10px] px-4 h-12 border border-gray-200 outline-[#06c168]' />
            </form> 
        </div>
        <section className='relative grid grid-cols-1 px-6 sm:px-20 md:grid-cols-2 lg:grid-cols-3 w-full mt-2 mb-15 gap-4 '>
            {filterMatch.map((item, index) => {
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