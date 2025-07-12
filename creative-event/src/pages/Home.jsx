import React, { useState } from 'react'
import Header from '../components/Header'
import NavDropdown from '../components/NavDropdown'
import { cardMenuItems, subMenuicons } from '../util/menuItems'


const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeIndex_, setActiveIndex_] = useState(0)

  return (
    <main>
        <section>
            <Header />
            <NavDropdown />

            <main className='px-5 sm:px-15'>
                <section>
                    <h1 className='text-[#7B61FF] text-[23px] font-bold text-center pt-10  sm:text-[38px]'>Creative Events & Workshops</h1>
                    <div className='grid sm:flex justify-between items-center mt-10 sm:mt-5'>
                        <div className=''>
                            <ul className='flex gap-3 sm:gap-6'>
                                {cardMenuItems.map((item) => {
                                    return (
                                        <li key={item.id}
                                            onClick={() => setActiveIndex(item.id)}
                                            className={`${activeIndex === item.id ? 
                                                "bg-purple-600 text-[#fff] px-1 rounded-[100px] sm:bg-purple-600 text-[#fff] pt-2 pb-2 px-3 rounded-[100px]" : 
                                                "bg-gray-200 text-[#000] pt-2 pb-2 px-3 rounded-[100px]"}`}
                                        >
                                            {item.value}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className='flex mt-3 gap-4 sm:flex sm:gap-10'>
                            {subMenuicons.map((icon, index) => {
                                const Iconcomponent = icon.icon;
                                return (
                                    <div 
                                        className={`flex items-center gap-1 ${activeIndex_ === index ? "bg-purple-600 text-[#fff] pt-2 pb-2 px-5 rounded-[100px]" : "bg-gray-200 text-[#000] pt-2 pb-2 px-5 rounded-[100px]"}`}
                                        key={index}
                                        onClick={() => setActiveIndex_(index)}
                                    >
                                        <Iconcomponent size={23} />
                                        <p>{icon.label}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </section>
    </main>
  )
}

export default Home