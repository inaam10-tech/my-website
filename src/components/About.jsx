import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll';


const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#242333] text-purple-200'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-7xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          </div>
          <div className='my-[40px] max-w-[1000px] w-full grid sm:grid-cols-2 gap-5 px-4 divide-x-[5px] divide divide-pink-600'>
            <div className='sm:text-right text-5xl font-bold'>
              <p>Hello, I am Inaam. Pleased to meet you!</p>
            </div>
            <div>
              <p className='ml-[20px]'>
              I am an enthusiastic developer with a passion to learn new technologies and
                I am always looking to improve my skills and learn new things along the way to become a better developer. I am currently a
                student at the University of Toronto studying Computer Science in the pursuit of being a phenomenal developer in this industry.

              </p> 
            </div>
          </div>
          <Link to='skills' spy={true} smooth={true} duration={500}>
          <div>
          <button className='text-purple-300 group rounded-[20px] border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-400 hover:border-purple-900 hover:text-white'>
            Skills
            <span className='group-hover:rotate-90 duration-100'>
              <HiArrowNarrowRight className='ml-5 ' />
            </span>
          </button>
            
        </div>
        </Link>
      </div>
    </div>
  );
};

export default About;