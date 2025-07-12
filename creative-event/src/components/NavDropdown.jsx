import React from 'react'
import { useEvent } from '../context/EventContext'

const NavDropdown = () => {
    const { navToggle } = useEvent();
    
  return (
    <>
        {navToggle && 
            <div className='h-42 shadow-md sm:hidden'>
                <ul className='px-10 pt-3 sm:hidden flex flex-col gap-3'>
                    <li>Events</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Policy</li>
                </ul>
            </div>
        }
    </>
  )
}

export default NavDropdown