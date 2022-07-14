import React from 'react';
import Avolta from '../assets/Avolta.png'
import Huffman from '../assets/Huffman.jpeg'
import PremDictor from '../assets/PremDictor.jpeg'
import Uber from '../assets/Uber-Eats.jpeg'
import { HiArrowNarrowRight } from 'react-icons/hi';


const Experience = () => {

    const items = [
        {
            title: 'App Development at Avolta',
            ImageUrl: '../assets/Avolta.png',
            description: 'I worked on a team of 4 to develop a mobile app for Avolta. The app was built with React Native and was used to track the progress of the company\'s projects.',
            languages: ['React Native', 'Firebase'],
            links: [],

        }, 
        {
            title: 'PremDictor',
            ImageUrl: '../assets/realestate.jpg',
            description: 'A web app that allows users to decide which team they should bet on for the Premier League season.', 
            languages: ['HTML', 'CSS', 'Python', 'Pandas', 'Flask', 'Django'],
            links: [],
        },
        {
            title: 'Uber-Eats Clone',
            imageUrl: '../assets/realestate.jpg',
            description: 'A mobile app that replicates the functionalities of UberEats. The app was built with the Yelp API, Google Places API, and Google Maps API.',
            languages: ['React Native', 'Firebase'],
            links: [],
        },
        {
            title: 'Huffman Compression',
            imageUrl: '../assets/realestate.jpg',
            description: 'A web app that allows users to compress and decompress images using Huffman compression. Resulted in compressions of 15% to 30% of the original image size.',
            languages: ['Python'],
            links: [],
        }

    ]

    const renderItems = () => {
        items.map( item => {
            return (
                <div className='w-full max-w-sm mx-auto p-4 flex flex-col justify-center h-full'>
                    <img className='rounded-[20px] w-20 mx-auto' src={item.ImageUrl} alt="HTML icon" />
                </div>
            )
        })
    }

  return (
    <div name='experience' className='w-full h-[1600px] bg-[#242333] text-red-100'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='py-[2px] text-6xl font-bold inline border-b-4 border-red-500 text-red-200'>Experience</p>
              <p className='py-[20px] font-bold text-xl'>Here are some projects that I have previously made:</p>
          </div>

          <div className='w-[800px] grid grid-cols-2 sm:grid-cols-2 gap-12 py-6'>

          <div className='h-[500px] rounded-[15px] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='rounded-[15px] w-1000 mx-auto' src={Avolta} alt="HTML icon" />
                  <div className='max-w-[400px] ml-[30px] mr-[30px] max-h-[250px]'>
                  <h1 className='my-4 text-xl font-bold'>{items[0].title}</h1>
                  <p className=''>{items[0].description}</p>
                    <div className='max-w-[400px] grid grid-cols-3 sm:grid-cols-3 gap-[5px] my-1'>
                        {
                            items[0].languages.map( language => (
                                <button type="button" className="duration-100 my-[10px] text-white hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-white-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">{language}</button>

                                )
                            )
                        }
                    </div>
                    </div>
                    
              </div>

              
              <div className='h-[500px] rounded-[15px] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='rounded-[15px] w-1000 mx-auto' src={PremDictor} alt="HTML icon" />
                  <div className='max-w-[400px] ml-[30px] mr-[30px] max-h-[250px]'>
                  <h1 className='my-4 text-xl font-bold'>{items[1].title}</h1>
                  <p className=''>{items[1].description}</p>
                    <div className='max-w-[400px] grid grid-cols-3 sm:grid-cols-3 gap-[1px] my-1'>
                        {
                            items[1].languages.map( language => (
                                <button type="button" className="duration-100 my-[10px] text-white hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-white-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">{language}</button>
                                )
                            )
                        }
                    </div>
                    </div>
                    
              </div>
              <div className='h-[500px] rounded-[15px] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='rounded-[15px] w-1000 mx-auto' src={Uber} alt="HTML icon" />
                  <div className='max-w-[400px] ml-[30px] mr-[30px] max-h-[250px]'>
                  <h1 className='my-4 text-xl font-bold'>{items[2].title}</h1>
                  <p className=''>{items[2].description}</p>
                    <div className='max-w-[400px] grid grid-cols-3 sm:grid-cols-3 gap-[1px] my-1'>
                        {
                            items[2].languages.map( language => (
                                <button type="button" className="duration-100 my-[10px] text-white hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-white-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">{language}</button>
                                )
                            )
                        }
                    </div>
                    </div>
                    
              </div>
              <div className='h-[500px] rounded-[15px] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='rounded-[15px] w-1000 mx-auto' src={Huffman} alt="HTML icon" />
                  <div className='max-w-[400px] ml-[30px] mr-[30px] max-h-[250px]'>
                  <h1 className='my-4 text-xl font-bold'>{items[3].title}</h1>
                  <p className=''>{items[3].description}</p>
                    <div className='max-w-[400px] grid grid-cols-3 sm:grid-cols-3 gap-[1px] my-1'>
                        {
                            items[3].languages.map( language => (
                                <button type="button" className="duration-100 my-[10px] text-white hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-white-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">{language}</button>
                                )
                            )
                        }
                    </div>
                    </div>
                    
              </div>
          </div>
          <div>
    </div>
      </div>
    </div>
  );
};

export default Experience;