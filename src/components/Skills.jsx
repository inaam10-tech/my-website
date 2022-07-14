import React from 'react'
import GitHub from '../assets/github.png'
import Python from '../assets/python.png'
import Javascript from '../assets/javascript.png'
import ReactIcon from '../assets/react.png'
import Node from '../assets/node.png'
import Java from '../assets/java.png'
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll';

function Skills() {
    return (
        <div name='skills' className='w-full h-screen bg-[#242333] text-orange-100'>
          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
              <div>
                  <p className='py-[2px] text-6xl font-bold inline border-b-4 border-orange-500 text-orange-200'>Skills</p>
                  <p className='py-[20px] font-bold text-xl'>Here are the main programming langauges that I have experience with:</p>
              </div>
    
              <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={ReactIcon} alt="HTML icon" />
                      <p className='my-4'>REACT</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={Javascript} alt="HTML icon" />
                      <p className='my-4'>JAVASCRIPT</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
                      <p className='my-4'>PYTHON</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                      <p className='my-4'>GITHUB</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                      <p className='my-4'>NODE JS</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={Java} alt="HTML icon" />
                      <p className='my-4'>JAVA</p>
                  </div>
              </div>
              <Link to='experience' spy={true} smooth={true} duration={500}>
              <div>
          <button className='text-orange-200 group rounded-[20px] border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-600 hover:border-orange-900'>
            Experiences and Projects
            <span className='group-hover:rotate-90 duration-100'>
              <HiArrowNarrowRight className='ml-5 ' />
            </span>
          </button>
        </div>
        </Link>
          </div>
        </div>
      );
}

export default Skills