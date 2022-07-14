import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Typed from 'react-typed';
import Inaam from './inaam.pdf';
import {Link} from 'react-scroll';

const Home = () => {

    function onResumeClick() {
        window.open(Inaam);
      }
  return (
    <div name='home' className='w-full h-screen bg-[#242333]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#0e9fbc] text-3xl font-semibold'>Hello, I am</p>
        <h1 className='text-4xl sm:text-8xl font-bold text-[#FFFFFF]'>
          Inaam Azeezur Rahman
        </h1>
        

        <Typed className='text-4xl sm:text-6xl font-bold text-[#01b0d3ca]' strings={["I am a Fullstack Developer", "I am a UI/UX Designer", "I am a Football Fan", "I am an App Developer", "I am an Enthusiast to Learn"]} typeSpeed={50} loop />

        <p className='text-[#a9d2db] py-4 max-w-[700px]'>
          I'm a Full-Stack Developer and a UI/UX Designer with a desire to design and build products that are user-friendly and easy to use. I have a passion for learning new technologies and I am always looking to improve my skills and learn new things along the way to become a better developer.
        </p>
        <div className='flex justify-between'>
        <a onClick={onResumeClick}> 
        <button className='text-[#a9d2db] group rounded-[20px] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#01B0D3] hover:border-blue-300'>
            Resume
          </button>
        </a>
        <Link to='about' spy={true} smooth={true} duration={500}>
          <button className='text-[#a9d2db] group rounded-[20px] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#01B0D3] hover:border-blue-300'>
            About Me
            <span className='group-hover:rotate-90 duration-100'>
              <HiArrowNarrowRight className='ml-5 ' />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;