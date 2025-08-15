import React from 'react'


const EventsInfoModal = ({ modal, setModal, items}) => {
    const score = parseInt(items.attendees);
    const maxScore = 100
    const percent = (score / maxScore) * 100;

  return (
    <>
        {modal && 
            <div className='fixed inset-0 bg-black/60 z-[999] md:px-4  flex items-center justify-center bg-opacity-1'>
                <div className='z-50 bg-white w-full max-w-[350px]  sm:max-w-[1110px] md:max-w-[1110px] lg:max-w-[1110px] h-150 md:h-110 rounded-md  shadow-md grid grid-cols-1 sm:h-90 sm:grid sm:grid-cols-2'>
                    <div className='h-40 sm:h-auto relative w-full rounded-tl-md rounded-bl-md bg-cover bg-center' style={{ backgroundImage: `url(${items.image})`}}>
                        <div className='flex justify-center items-center text-[#fff] font-[600] m-5 bg-gradient-to-r from-gray-200 to-[#06C168] w-30 h-8 rounded-[100px]'>
                            {items.category}
                        </div>
                        <div onClick={() => setModal(false)} className='absolute right-4 top-4 cursor-pointer flex items-center bg-[#fff] justify-center rounded-[50px] font-bold shadow w-10 h-10 md:hidden'>X</div>
                    </div>

                    <div className='w-full p-8'>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-[27px] font-bold'>{items.name}</h2>
                            <div onClick={() => setModal(false)} className='cursor-pointer flex items-center justify-center rounded-[50px] font-bold shadow w-10 h-10 hidden md:flex'>X</div>
                        </div>
                        <span className='text-[#424242]'>{items.time}</span>
                        <p className='text-[#828282]'>{items.sub_title}</p>
                        <div className='text-[#424242] flex items-center w-full h-2 mt-4 bg-gray-200 rounded-full overflow-hidden'>
                            <div className='bg-gradient-to-r from-gray-50 via-[#06c168] to-green-700' style={{ width: `${percent}%`}}>
                                <p className='text-[#fff] text-[5px]'>{score / maxScore}</p>
                            </div>
                        </div>
                        <p className='text-[#828282] mt-2'>{score}/100 attendees</p>
                        <p className='mt-6 text-[#424242]'>{items.description}</p>
                        <div className='w-full h-13 font-[600] rounded-md mt-8 flex text-[#fff] items-center justify-center bg-[#06c168]'>
                            RSVP Now
                        </div>
                    </div>
                </div>
            </div>
        }
    </>
  )
}

export default EventsInfoModal


