import React from 'react';
import Avolta from '../assets/Avolta.png'
import Huffman from '../assets/Huffman.jpeg'
import PremDictor from '../assets/PremDictor.jpeg'
import Uber from '../assets/Uber-Eats.jpeg'

const Experience = () => {
    const items = [
        {
            title: 'App Development at Avolta',
            imageUrl: Avolta,
            description: 'I worked on a team of 4 to develop a mobile app for Avolta. The app was built with React Native and was used to track the progress of the company\'s projects.',
            languages: ['React Native', 'Firebase'],
            links: [],
        },
        {
            title: 'PremDictor',
            imageUrl: PremDictor,
            description: 'A web app that allows users to decide which team they should bet on for the Premier League season.', 
            languages: ['HTML', 'CSS', 'Python', 'Pandas', 'Flask', 'Django'],
            links: [],
        },
        {
            title: 'Uber-Eats Clone',
            imageUrl: Uber,
            description: 'A mobile app that replicates the functionalities of UberEats. The app was built with the Yelp API, Google Places API, and Google Maps API.',
            languages: ['React Native', 'Firebase'],
            links: [],
        },
        {
            title: 'Huffman Compression',
            imageUrl: Huffman,
            description: 'A web app that allows users to compress and decompress images using Huffman compression. Resulted in compressions of 15% to 30% of the original image size.',
            languages: ['Python'],
            links: [],
        }
    ];

    return (
        <div name='experience' className='w-full bg-[#242333] text-red-100'>
            <div className='max-w-[1000px] mx-auto p-4'>
                <p className='py-[2px] text-4xl md:text-6xl font-bold inline border-b-4 border-red-500 text-red-200'>Experience</p>
                <p className='py-[20px] font-bold text-lg md:text-xl'>Here are some projects that I have previously made:</p>
                <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6'>
                    {items.map((item, index) => (
                        <div key={index} className='gitrounded-[15px] shadow-md hover:shadow-lg transition duration-300'>
                            <img className='rounded-t-[15px] w-full' src={item.imageUrl} alt={item.title} />
                            <div className='p-4'>
                                <h1 className='text-xl font-bold'>{item.title}</h1>
                                <p>{item.description}</p>
                                <div className='grid grid-cols-3 gap-2 mt-2'>
                                    {item.languages.map((language, index) => (
                                        <button key={index} type="button" className="text-white border border-red-700 bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-sm px-4 py-1.5 text-center">{language}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
