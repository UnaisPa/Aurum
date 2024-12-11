// import React from 'react'

// const Home = () => {
//     return (
//         <div className="mx-auto max-w-7xl px-2 sm:px-14 lg:px-20">
//             <div className='absolute' >
//                 <img className='bg-conver' src='/bg-aur.png' />
//             </div>
//             <div className=' relative text-red-500 ' >
//                 Hello
//             </div>
//         </div>
//     )
// }

// export default Home
import React, { useEffect, useState } from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import Description from '../components/Description';
import Cards from '../components/Cards';



const Home = () => {

    return (
        <>
            <div className="relative h-screen w-full overflow-hidden">
                {/* Background Image */}
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/bg2-awr.png"
                    alt="Background"
                />

                {/* Centered Text */}
                <div className="relative flex items-center justify-center h-full">
                    <div className='text-center ' >
                        <h1 className='text-2xl sm:text-5xl text-white text-center font-semibold' >360° Software Solutions for<br />
                            Your <span className='bg-gradient-to-r from-[#66AA74]  to-[#D7B56D] text-transparent bg-clip-text'>JEWELLERY</span> Store</h1>
                        <p className=' w-2/3 sm:w-full mx-auto text-xs sm:text-sm text-slate-400 mt-4' >Take Your Jewellery Store to the Next Level with AURUMM - The Ultimate Software Suite</p>
                        <button className='bg-gradient-to-r from-[#66AA74] to-[#D7B56D] px-5 font-semibold hover:bg-gradient-to-l  mx-auto flex justify-center items-center py-2.5 rounded-[17px] text-sm mt-5 transition-all duration-300 group'>
                            Get a Free Demo
                            <IoChevronForwardOutline className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>

                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center h-screen px-2 sm:px-14 lg:px-20 bg-gradient-to-r from-[#080909] to-[#1f2937]' >
                <div className='sm:flex w-full' >

                    <div className='w-full sm:w-[50%] mt-10 sm:mt-0' >
                        <img src='/mockups-aur.svg' />
                    </div>
                    <div className='mt-5 px-5 sm:px-0 sm:mt-0 w-full sm:w-[50%] pt-12' >
                        <Description />
                    </div>

                </div>
            </div>
            <div className='h-screen pt-44 sm:pt-0  px-5 sm:px-14 lg:px-20 bg-gradient-to-r from-[#080909] to-[#1f2937]' >
                <p className='text-slate-200 text-center sm:text-start text-xs font-semibold mb-4' >FEATURED APPS</p>
                <h1 className='font-bold text-center sm:text-start text-white text-3xl' >AURUMM for Your Jewellery Business</h1>
                <div className='flex mt-6 sm:mt-12 w-full justify-center items-center' >

                    <Cards />

                </div>
            </div>
        </>

    )
}

export default Home
