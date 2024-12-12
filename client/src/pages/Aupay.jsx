import { Description } from '@headlessui/react'
import React from 'react'
import { IoChevronForward } from 'react-icons/io5'
import AupayText from '../components/AupayText'
import TextRight from '../components/TextRight'
import Footer from '../components/Footer'

const Aupay = () => {
    return (
        <>
            <div className="relative px-5 sm:px-14 lg:px-20 h-[80vh] w-full overflow-hidden">
                {/* Background Image */}
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/bgau.png"
                    alt="Background"
                />

                {/* Centered Text */}
                <div className="relative flex items-center justify-start h-full">
                    <div className='text-start' >
                        <p className='text-slate-300 text-sm font-semibold mt-3 mb-3' >AU PAY</p>
                        <h1 className='text-2xl sm:text-4xl text-white text-start font-semibold' >An Exclusive Savings Scheme Payment<br />

                            App for Your Jewellery Store!</h1>
                        {/* <p className=' w-2/3 sm:w-full text-xs sm:text-sm text-slate-400 mt-4' >Take Your Jewellery Store to the Next Level with AURUMM - The Ultimate Software Suite</p> */}
                        {/* <button className='bg-gradient-to-r from-[#66AA74] to-[#D7B56D] px-5 font-semibold hover:bg-gradient-to-l  mx-auto flex justify-center items-center py-2.5 rounded-[17px] text-sm mt-5 transition-all duration-300 group'>
                            Get a Free Demo
                            <IoChevronForwardOutline className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </button> */}
                        <p className='text-slate-300 text-xs font-semibold mt-5 mb-3 flex items-center gap-2' >HOME <IoChevronForward /> PRODUCT&FEATURES <IoChevronForward /> AUPAY</p>

                    </div>
                </div>
            </div>
            <div className='w-full h-auto flex justify-center items-center min-h-screen px-2 sm:px-14 lg:px-20 bg-gradient-to-r from-[#080909] to-[#1f2937]' >

                <div className='w-full sm:flex mt-10 gap-10' >
                    <div className=' w-full sm:w-1/2 mt-10 sm:mt-0' >
                        <img className='w-8/12 mx-auto sm:mx-0 sm:ml-auto' src='/aupay.svg' />

                    </div>
                    <div className='w-full text-center sm:text-start sm:w-1/2 mt-10 sm:mt-0' >
                        <AupayText type='PAY' head='The Golden Gold App' desc="We're Making Jewellery Scheme
                    Payments Easier" text="AU Pay introduces a chit scheme payment system that transcends the ordinary - providing your patrons with a secure and efficient way to make their jewellery dreams a reality. Whether they're acquiring a timeless piece for themselves or expressing love through a thoughtful gift, AU Pay ensures that every instalment paid is smooth and as memorable as the purchase itself.Give your customers an immersive chit-scheme management platform where sophistication meets simplicity - experience AU Pay today!" />
                    </div>

                </div>
            </div>
            <div className='w-full h-auto flex justify-center items-center min-h-[90vh] px-2 sm:px-14 lg:px-20 bg-gradient-to-r from-[#080909] to-[#1f2937]' >

                <div className='w-full sm:flex gap-10' >
                    <div className='w-full text-center sm:text-start sm:w-1/2 mt-10 sm:mt-0' >
                        <TextRight type='PAY' head='Digi Gold' desc="Next-Gen Gold Investment Platform" text="DIGI GOLD offers real-time investment in gold, fully backed by actual gold stored in secure vaults. With AU.Pay‘s DIGI GOLD, your customers can easily buy, store, and sell gold online in small, affordable amounts. Whether it‘s 1 gram or 100 grams, DIGI GOLD provides a secure, accessible, and convenient investment solution for all." />
                    </div>
                    <div className=' w-full sm:w-1/2 mt-10 sm:mt-0' >
                        <img className='w-6/12 mx-auto sm:mx-0 sm:mr-auto' src='/digi.svg' />

                    </div>

                </div>
            </div>
            <div className='w-full h-auto pb-16 px-2 sm:px-14 lg:px-20 bg-gradient-to-r from-[#080909] to-[#1f2937] ' >
                <p className='text-slate-200 text-center sm:text-start text-xs font-semibold pb-4 pt-10 sm:pt-0' >FEATURES</p>
                <div className="w-full  mt-10 sm:mt-0  border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] transition duration-200 ease-in-out cursor-pointer" >
                    <h2 className="text-slate-200 text-2xl mt-4 font-semibold mb-2" >Chit & Scheme Management</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-2 text-slate-400 text-sm" >Facilitates seamless administration and tracking of various chit funds and schemes.</p>
                    <div className='sm:flex gap-3 mt-4' >
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                            Flexible Scheme Creation and Management.
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                            Automated Tracking of Schemes.
                        </div>

                    </div>

                </div>
                <div className="w-full  mt-10 sm:mt-5  border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] transition duration-200 ease-in-out cursor-pointer" >
                    <h2 className="text-slate-200 text-2xl mt-4 font-semibold mb-2" >Payment Management</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-2 text-slate-400 text-sm" >Simplifies transaction processing and invoicing for enhanced financial efficiency.</p>
                    <div className='sm:flex gap-3 mt-4' >
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Streamlined Payments
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Seamless Integration
                        </div>

                    </div>

                </div>
                <div className="w-full  mt-10 sm:mt-5  border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] transition duration-200 ease-in-out cursor-pointer" >
                    <h2 className="text-slate-200 text-2xl mt-4 font-semibold mb-2" >Customer Management</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-2 text-slate-400 text-sm" >Enables comprehensive customer relationship management with segmentation and personalized communication tools.</p>
                    <div className='sm:flex gap-3 mt-4' >
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Customer Database Maintenance
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Profile Management
                        </div>
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Segmentation
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Personalised Interaction Tools
                        </div>

                    </div>

                </div>
                <div className="w-full  mt-10 sm:mt-5  border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] transition duration-200 ease-in-out cursor-pointer" >
                    <h2 className="text-slate-200 text-2xl mt-4 font-semibold mb-2" >Purchase Management</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-2 text-slate-400 text-sm" >With AU Pay, customers can keep track of all of their purchases with ease!</p>
                    <div className='sm:flex gap-3 mt-4' >
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Efficient tracking of purchased goods
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Comprehensive Product Details
                        </div>

                    </div>

                </div>
               
                <div className="w-full  mt-10 sm:mt-5  border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] transition duration-200 ease-in-out cursor-pointer" >
                    <h2 className="text-slate-200 text-2xl mt-4 font-semibold mb-2" >Loyalty & Reward Points</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-2 text-slate-400 text-sm" >Drives customer retention and engagement with customizable loyalty programs and reward point systems.</p>
                    <div className='sm:flex gap-3 mt-4' >
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Easy Point Redemption
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Customizable Loyalty Programs
                        </div>

                    </div>

                </div>
                <div className="w-full  mt-10 sm:mt-5  border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] transition duration-200 ease-in-out cursor-pointer" >
                    <h2 className="text-slate-200 text-2xl mt-4 font-semibold mb-2" >Email/ SMS/ Whatsapp Notification</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-2 text-slate-400 text-sm" >Automates communication channels to keep customers informed and engaged throughout their journey.</p>
                    <div className='sm:flex gap-3 mt-4' >
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Automated Updates
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Personalized Messaging
                        </div>

                    </div>

                </div>
                <div className="w-full  mt-10 sm:mt-5  border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] transition duration-200 ease-in-out cursor-pointer" >
                    <h2 className="text-slate-200 text-2xl mt-4 font-semibold mb-2" >Enquiry & Follow-up</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-2 text-slate-400 text-sm" >Keep all your customer inquiries in check and maintain perfect follow-up systems for efficient sales management!</p>
                    <div className='sm:flex gap-3 mt-4' >
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Centralized Inquiries
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Automated Follow-Ups
                        </div>

                    </div>

                </div>
                <div className="w-full  mt-10 sm:mt-5  border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] transition duration-200 ease-in-out cursor-pointer" >
                    <h2 className="text-slate-200 text-2xl mt-4 font-semibold mb-2" >Online Payment Module</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-2 text-slate-400 text-sm" >Provides a secure and user-friendly platform for online transactions, ensuring convenience and reliability.</p>
                    <div className='sm:flex gap-3 mt-4' >
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Safe and Secure
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Ease of Usage
                        </div>

                    </div>

                </div>


            </div>
            <Footer />
        </>
    )
}

export default Aupay