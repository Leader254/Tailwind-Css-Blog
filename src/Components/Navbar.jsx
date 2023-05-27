/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import './Navbar.css'

const Navbar = () => {

    const [nav,setNav] = useState(false);

    const handleNav = () =>{
        setNav(!nav);
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold cursor-pointer text-[#00df9a] m-4'>SAM.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4 cursor-pointer link link-underline link-underline-black'>Home</li>
            <li className='p-4 cursor-pointer link link-underline link-underline-black'>Company</li>
            <li className='p-4 cursor-pointer link link-underline link-underline-black'>Resources</li>
            <li className='p-4 cursor-pointer link link-underline link-underline-black'>About</li>
            <li className='p-4 cursor-pointer link link-underline link-underline-black'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-[#000300] border-r-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'} >
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>SAM.</h1>
            <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600 link link-underline link-underline-black'>Home</li>
            <li className='p-4 border-b border-gray-600 link link-underline link-underline-black'>Company</li>
            <li className='p-4 border-b border-gray-600 link link-underline link-underline-black'>Resources</li>
            <li className='p-4 border-b border-gray-600 link link-underline link-underline-black'>About</li>
            <li className='p-4 '>Contact</li> 
            </ul>
        </div>
    </div>
  )
}

export default Navbar