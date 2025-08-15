import React from 'react'


const MainEventsModal = ({ modal, setModal, items}) => {
   
  return (
    <>
      {modal && (
        <div className='fixed inset-0 bg-black/60 z-[999] flex justify-center items-center rounded-md'>
          <div className='grid grid-cols-1 h-150 rounded-md sm:flex sm:justify-between w-full max-w-[350px] sm:max-w-[1110px] md:w-11/12 sm:h-140 shadow-md bg-[#fff]'>
                <div className='h-40 sm:h-auto relative w-full rounded-tl-md rounded-bl-md bg-cover bg-center  bg-no-repeat' style={{ backgroundImage: `url(${items ? items.image : ""})`}}>
                  <div className='absolute flex justify-center items-center rounded-[100px] inset-0 z-90 m-6 text-[#fff] bg-gradient-to-r from-gray-50 via-[#06c168] to-green-700 w-30 h-8 font-[600]'>
                    {items.category}
                  </div>
                  <div onClick={() => setModal(false)} className='md:hidden block bg-[#fff] top-5 absolute cursor-pointer flex items-center justify-center rounded-[50px] font-bold shadow w-10 h-10 right-6'>X</div>
                </div>

                <div className='relative w-full p-8'>
                  <div onClick={() => setModal(false)} className='hidden sm:flex absolute cursor-pointer flex items-center justify-center rounded-[50px] font-bold shadow w-10 h-10 right-6'>X</div>
                  <h2 className='text-[27px] font-bold md:pt-12'>{items.name}</h2>
                  <span className='text-[#424242]'>{items.time}</span>
                  <p className='text-[#828282]'>{items.sub_title}</p>
                  <div className='relative w-full h-2 rounded-[100px] bg-gray-200 mt-5'>
                      <div className='w-full text-[#fff] h-2 rounded-[100px] bg-gradient-to-r from-gray-50 via-[#06c168] to-green-700' style={{ width: `${(items.attendees / 100) * 100}%`}}></div>
                  </div>
                  <p className='text-[#828282] mt-2'>{items.attendees}/{100} attendees</p>
                  <p className='text-[#424242] pt-6'>{items.description}</p>

                  <div className='w-full h-13 font-[600] rounded-md mt-8 flex text-[#fff] items-center justify-center bg-[#06c168]'>RSVP Now</div>
                </div>
            </div>
        </div>
      )}
    </>
  )
}

export default MainEventsModal