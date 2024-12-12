
import React, { useEffect, useState } from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import Description from '../components/Description';
import Cards from '../components/Cards';
import Features from '../components/Features';
import Tabs from '../components/Tabs';
import TabsComponent from '../components/Tabs';
import HelpCards from '../components/HelpCards';
import Stats from '../components/Stats';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';



const Home = () => {
    const navigate = useNavigate();

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
                        <button  onClick={()=>navigate('/contact')} className='bg-gradient-to-r from-[#66AA74] to-[#D7B56D] px-5 font-semibold hover:bg-gradient-to-l  mx-auto flex justify-center items-center py-2.5 rounded-[17px] text-sm mt-5 transition-all duration-300 group'>
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
            <div className='sm:h-screen pt-44 sm:pt-0  px-5 sm:px-14 lg:px-20 bg-gradient-to-r from-[#080909] to-[#1f2937]' >
                <p className='text-slate-200 text-center sm:text-start text-xs font-semibold mb-4' >FEATURED APPS</p>
                <h1 className='font-bold text-center sm:text-start text-white text-3xl' >AURUMM for Your Jewellery Business</h1>
                <div className='flex mt-6 sm:mt-12 w-full justify-center items-center' >

                    <Cards />

                </div>
            </div>
            <div className='h-auto  py-20 sm:py-10  px-5 sm:px-14 lg:px-20 bg-gradient-to-r from-[#080909] to-[#1f2937]' >
                <p className='text-slate-200 text-center text-xs font-semibold mb-4' >FEATURES</p>
                <h1 className='font-bold text-center text-white text-3xl' >Growth with AURUMM:<br />
                    Your Partner in Success!</h1>
                <div className='sm:flex mt-6 sm:mt-12 w-full gap-6' >
                    <div className=' w-full sm:w-3/5' >

                        <Features />
                    </div>
                    <div className='w-full sm:w-2/5 mt-6 sm:mt-0' >
                        <img className='rounded-lg' src='/dashboard.svg' />
                        <p className='text-slate-300 mt-6 hidden sm:block' >Take Your Jewellery Store to the Next Level with AURUMM</p>
                        <div className='w-full mt-4 hidden sm:block h-5 rounded-lg border border-b-0 border-slate-700' >

                        </div>
                        <div className='w-4/5 h-5 hidden sm:block rounded-lg border border-b-0 border-slate-700' >

                        </div>
                        <div className='w-3/5 h-5 hidden sm:block  rounded-lg border border-b-0 border-slate-700' >

                        </div>
                    </div>

                </div>
            </div>
            <div className='h-auto  min-h-screen  py-20 sm:py-10  px-5 sm:px-14 lg:px-20 bg-gradient-to-r from-[#080909] to-[#1f2937]' >
                <div className='' >
                    <TabsComponent />

                </div>
            </div>
            <div className='h-auto  min-h-screen  py-20 sm:py-10  px-5 sm:px-14 lg:px-20 bg-gradient-to-r from-[#080909] to-[#1f2937]' >
                <div className='' >
                    <p className='text-slate-200 text-center text-xs font-semibold mb-4' >WE'RE HERE TO HELP</p>
                    <h1 className='font-bold text-center text-white text-3xl' >This is The Future of Jewellery Store Management</h1>
                    <HelpCards />

                </div>
            </div>
            <div className='h-auto py-10  px-5 sm:px-14 lg:px-20 bg-gradient-to-r from-[#080909] to-[#1f2937]' >
                <div className='' >
                    <Stats />

                </div>
            </div>

            <div className='h-auto py-10 pb-20 px-5 sm:px-14 lg:px-20 bg-gradient-to-r from-[#080909] to-[#1f2937]' >
                <div className='' >
                    <p className='text-slate-200 text-center text-xs font-semibold mb-4' >OUR CLIENTS</p>
                    <h1 className='font-bold text-center text-white text-3xl' >Brands That Trust Us!</h1>

                    <div className="w-full flex justify-between items-center  mt-12 sm:mt-12 shadow-2xl border border-slate-700 pl-4 pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] transform transition duration-200 ease-in-out cursor-pointer" >
                        <div className='' >
                            <img src='/client1.png' />
                        </div>
                        <div className='' >
                            <img src='/client2.png' />
                        </div>
                        <div className='' >
                            <img src='/client3.png' />
                        </div>
                        <div className='' >
                            <img src='/client4.png' />
                        </div>
                        <div className='' >
                            <img src='/client6.png' />
                        </div>
                    </div>

                </div>
            </div>
            <Footer />


        </>

    )
}

export default Home
