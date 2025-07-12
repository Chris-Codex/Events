import React, { useState } from 'react'
import { useEvent } from '../context/EventContext'
import { menuItems } from '../util/menuItems';

const NavDropdown = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { navToggle } = useEvent();


  return (
    <>
        {navToggle && 
            <div className='h-59 shadow-md sm:hidden'>
                <ul className='px-6 pt-3 sm:hidden flex flex-col gap-3'>
                    {menuItems.map((item) => {
                        return (
                            <li key={item.id}
                                className={`cursor-pointer px-3 ${activeIndex === item.id ? "bg-[#eddbfa] p-2 rounded-md" : "bg-[#f5f2f7] p-2 rounded-md"}`}
                                onClick={() => setActiveIndex(item.id)}>
                                {item.value}
                            </li>
                        )
                    })}
                </ul>
            </div>
        }
    </>
  )
}

export default NavDropdown