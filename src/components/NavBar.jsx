import React, { useState } from 'react'
import Inaam from '../assets/Inaam-Light-Logo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedinIn, FaInstagram} from 'react-icons/fa'
import {Link} from 'react-scroll'

function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#242333] text-[#FFFFFF] font-bold text-xl'>
      <div>
        <img src={Inaam} alt='Inaam' style={{width: '80px'}} />
      </div>

        <ul className='hidden md:flex'>
          <li className='hover:text-2xl duration-150'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
          </li>
          
          <li className='hover:text-2xl duration-150'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
          </li>
          <li className='hover:text-2xl duration-150'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
          </li>
          <li className='hover:text-2xl duration-150'>
          <Link to='experience' smooth={true} duration={500}>
            Experience
          </Link>
          </li>
        </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        
        {!nav ?   <FaBars/> : <FaTimes />}
        
        
      </div>

      {/* Mobile View */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#242333] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link to='experience' smooth={true} duration={500}>
            Experience
          </Link>
        </li>
      </ul>


      {/* Social Icons */} 
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#1d1a1a]'>
            <a className='flex justify-between items-center w-full ' href='https://github.com/inaam10-tech'>
              GitHub <FaGithub size={25} className='text-gray-300'/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-blue-600'>
            <a className='flex justify-between items-center w-full ' href='https://www.linkedin.com/in/inaam-azeezur-rahman-b3a8b819b/'>
              LinkedIn <FaLinkedinIn size={25} className='text-blue-300'/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#833AB4]'>
            <a className='flex justify-between items-center w-full ' href='https://www.instagram.com/inaam.29/'>
              GitHub <FaInstagram size={25} className='text-purple-300'/>
            </a>
          </li>
        </ul>
      </div>



    </div>
  )
}

export default Navbar