import React, { useState } from 'react'
import { IoMoonOutline, RxHamburgerMenu } from '../assets/icons/icons'
import { useEvent } from '../context/EventContext'
import { menuItems } from '../util/menuItems'



const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { handleNavToggle } = useEvent();

  return (
    <header className='flex justify-between items-center px-5 sm:px-20 w-full h-16 shadow-sm'>
        <h1 className='text-[#7B61FF] text-2xl font-bold'>CreativeEvents</h1>
        <nav className='hidden lg:block'>
            <ul className='flex gap-7 items-center'>
              {menuItems.map((item) => {
                return (
                  <li key={item.id}
                      onClick={() => setActiveIndex(item.id)}
                      className={`cursor-pointer ${activeIndex === item.id ? "text-purple-600" : ""}`}
                  >
                    {item.value}
                  </li>
                )
              })}
              <IoMoonOutline size={20} />
            </ul>
        </nav>
        <RxHamburgerMenu size={28} className='sm:hidden' onClick={handleNavToggle} />
    </header>
  )
}

export default Header