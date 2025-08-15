import React, { useState } from 'react'
import { IoMoonOutline, RxHamburgerMenu } from '../assets/icons/icons'
import { useEvent } from '../context/EventContext'
import { menuItems } from '../util/data'
import { Link } from 'react-router-dom'



const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { handleNavToggle } = useEvent();

  return (
    <header className='flex justify-between items-center px-5  md:px-9 w-full h-16 shadow-sm'>
        <div className='flex justify-between container mx-auto'>
          <h1 className='bg-gradient-to-r from-gray-600 to-[#06c168] bg-clip-text text-transparent text-2xl font-bold'>CreativeEvents</h1>
          <nav className='hidden lg:block'>
              <ul className='flex gap-7 items-center'>
                {menuItems.map((item) => {
                  return (
                    <Link to={`/${item.type}`} key={item.id}>
                      <li key={item.id}
                        onClick={() => setActiveIndex(item.id)}
                        className={`cursor-pointer ${activeIndex === item.id ? "text-[#06c168]" : ""}`}
                      >
                        {item.value}
                      </li>
                    </Link>
                  )
                })}
                <IoMoonOutline size={20} />
              </ul>
          </nav>
          <RxHamburgerMenu size={28} className='sm:hidden' onClick={handleNavToggle} />
        </div>
    </header>
  )
}

export default Header