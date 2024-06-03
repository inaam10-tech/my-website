// src/TextField.js
import React, { useState } from 'react';


const TextField = () => {
    const [inputValue, setInputValue] = useState('');
    const secretName = process.env.REACT_APP_SECRET_NAME;
    const secretMessage = process.env.REACT_APP_SECRET_MESSAGE;
    const secretName1 = process.env.REACT_APP_SECRET_NAME1;
    const secretMessage1 = process.env.REACT_APP_SECRET_MESSAGE1;




    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    // useEffect(() => {
    //     console.log('Secret Name:', secretName); // Check if the secret name is logged
    //     console.log('Secret Name:', secretMessage); // Check if the secret name is logged

    // }, []);


    return (
        <>
        <div className='w-full items-center flex space-x-5 justify-center' >
            <input
                className='text-white bg-transparent outline-0 text-4xl text-center p-2 font-bold'
                type="text"
                placeholder='Secret Password'
                id="textInput"
                value={inputValue}
                onChange={handleChange}
            />
            {/* <div>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 text-purple-100 text bg-white dark:bg-[#242333] rounded-md group-hover:bg-opacity-0">
                        Submit
                    </span>
                </button>
            </div> */}
        </div>
        <div className='flex items-center justify-center'> 
            {inputValue.toLowerCase() === secretName && (
                <div>
                    <p className='text-4xl hover:text-6xl hover:text-pink-500 font-bold duration-150'>{secretMessage}</p>

                </div>
            )}
            {inputValue.toLowerCase() === secretName1 && (
                <div>
                    <p className='text-4xl hover:text-6xl hover:text-pink-500 font-bold duration-150'>{secretMessage1}</p>
                    <p className='text-4xl hover:text-6xl duration-150'></p>

                </div>
            )}


        </div>
    </>
        
    );
};

export default TextField;
