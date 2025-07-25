import React from 'react'
import { menuItems } from '../util/menuItems'
import { IoLocationOutline } from 'react-icons/io5'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'




const Footer = () => {
  return (
    <section className='w-full bg-gray-900 h-90 grid grid-cols-4 gap-10 text-[#fff] p-20'>
        <div className=''>
            <p className='text-[#06c168] text-[20px] font-[600]'>CreativeEvents</p>
            <p className='pt-5 text-gray-400'>Bringing creative minds together through workshops, exhibitions, and masterclasses.</p>
        </div>
        <div className=''>
            <p className='text-[20px] font-[600]'>Quick Links</p>
            <ul className='pt-5'>
                {menuItems.map((items, index) => {
                    return (
                        <li key={index} className='cursor-pointer pb-5 text-gray-400 hover:text-[#fff]'>{items.value}</li>
                    )
                })}
            </ul>
        </div>
        <div className=''>
            <p className='text-[20px] font-[600]'>Contact Info</p>
            <div className='flex items-center gap-5 mt-5 text-gray-400'>
                <p><IoLocationOutline size={23} /></p>
                <p>1 Connell st, Cork Ireland</p>
            </div>
            <div className='flex items-center gap-5 mt-5 text-gray-400'>
                <p><FaPhoneAlt size={20} /></p>
                <p>0899765434</p>
            </div>
            <div className='flex items-center gap-5 mt-5 text-gray-400'>
                <p><MdOutlineMail size={20} /></p>
                <p>info@chrisportfolio.com</p>
            </div>
        </div>
        <div className=''>
            <p className='text-[20px] font-[600]'>Newsletter</p>
            <p className='pt-5 text-gray-400'>Subscribe to get updates on upcoming events</p>
            <div className='flex w-full h-10 rounded-[8px] mt-3 bg-[#fff]'>
                <input text="text" className='text-[#333] px-2 outline-none' placeholder='Your email' />
                <button className='w-full rounded-tr-[8px] rounded-br-[8px] text-[#fff]  bg-[#06c168] text-[#000] font-[600]'>Subscribe</button>
            </div>
        </div>
    </section>
  )
}

export default Footer