import React from 'react'
import { IoMoonOutline, RxHamburgerMenu } from '../assets/icons/icons'
import { useEvent } from '../context/EventContext'


const Header = () => {
  const {navToggle,
    handleNavToggle} = useEvent();

  return (
    <header className='flex justify-between items-center px-5 sm:px-15 w-full h-16 shadow-sm'>
        <h1 className='text-[#7B61FF] text-2xl font-bold'>CreativeEvents</h1>
        <nav className='hidden lg:block'>
            <ul className='flex gap-7 items-center'>
              <li>Events</li>
              <li>About</li>
              <li>Contact</li>
              <li>Policy</li>
              <IoMoonOutline size={20} />
            </ul>
        </nav>
        <RxHamburgerMenu size={28} className='sm:hidden' onClick={handleNavToggle} />
    </header>
  )
}

export default Header