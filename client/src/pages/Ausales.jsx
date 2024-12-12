import { Description } from '@headlessui/react'
import React from 'react'
import { IoChevronForward } from 'react-icons/io5'
import AupayText from '../components/AupayText'
import TextRight from '../components/TextRight'
import Footer from '../components/Footer'
import HelpCards from '../components/HelpCards'

const Ausales = () => {
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
                        <p className='text-slate-300 text-sm font-semibold mt-3 mb-3' >AU SALES</p>
                        <h1 className='text-2xl sm:text-4xl text-white text-start font-semibold' >Inventory Management has Never<br/>

Looked So Luxurious.</h1>
                        {/* <p className=' w-2/3 sm:w-full text-xs sm:text-sm text-slate-400 mt-4' >Take Your Jewellery Store to the Next Level with AURUMM - The Ultimate Software Suite</p> */}
                        {/* <button className='bg-gradient-to-r from-[#66AA74] to-[#D7B56D] px-5 font-semibold hover:bg-gradient-to-l  mx-auto flex justify-center items-center py-2.5 rounded-[17px] text-sm mt-5 transition-all duration-300 group'>
                            Get a Free Demo
                            <IoChevronForwardOutline className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </button> */}
                        <p className='text-slate-300 text-xs font-semibold mt-5 mb-3 flex items-center gap-2' >HOME <IoChevronForward /> PRODUCT&FEATURES <IoChevronForward /> AUSALES</p>

                    </div>
                </div>
            </div>
            <div className='w-full h-auto flex justify-center items-center min-h-screen px-2 sm:px-14 lg:px-20 bg-gradient-to-r from-[#080909] to-[#1f2937]' >

                <div className='w-full sm:flex mt-10 gap-10' >
                    <div className=' w-full sm:w-1/2 mt-10 sm:mt-0' >
                        <img className='w-10/12 mx-auto sm:mx-0 sm:ml-auto' src='/ausales.svg' />

                    </div>
                    <div className='w-full text-center sm:text-start sm:w-1/2 mt-10 sm:mt-0' >
                        <AupayText type='SALES' head='The Hybrid ERP Magic' desc="Inventory Management Excellence
In Every Tap" text="At AURUMM, we understand the artistry and precision that goes into every piece of jewellery. AU Sales is a testament to that understanding, offering an unparalleled solution for managing your jewellery store inventory. With a focus on simplicity and sophistication, AU Sales streamlines your operations and makes tracking your inventory the easiest it has ever been: allowing you to focus on what truly matters your craft." />
                    </div>

                </div>
            </div>
            <div className='h-auto  min-h-screen  py-20 sm:py-10  px-5 sm:px-14 lg:px-20 bg-gradient-to-r from-[#080909] to-[#1f2937]' >
                <div className='' >
                    <p className='text-slate-200 text-center text-xs font-semibold mb-4' >WHY AURUMM - AU SALES?</p>
                    <h1 className='font-bold text-center text-white text-3xl' >This is The Future of Jewellery Store Management</h1>
                    <HelpCards />

                </div>
            </div>
            <div className='w-full h-auto pb-16 px-2 sm:px-14 lg:px-20 bg-gradient-to-r from-[#080909] to-[#1f2937] ' >
                <p className='text-slate-200 text-center sm:text-start text-xs font-semibold pb-4 pt-10 sm:pt-0' >FEATURES</p>
                <div className="w-full  mt-10 sm:mt-0  border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] transition duration-200 ease-in-out cursor-pointer" >
                    <h2 className="text-slate-200 text-2xl mt-4 font-semibold mb-2" >Real-Time Integration of HO & Branches</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-2 text-slate-400 text-sm" >Seamlessly sync operations between headquarters and branches for efficient management.</p>
                    <div className='sm:flex gap-3 mt-4' >
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Seamless Communication
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Centralized Control
                        </div>

                    </div>

                </div>
                <div className="w-full  mt-10 sm:mt-5  border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] transition duration-200 ease-in-out cursor-pointer" >
                    <h2 className="text-slate-200 text-2xl mt-4 font-semibold mb-2" >Estimation & Billing</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-2 text-slate-400 text-sm" >Streamline the process of estimating costs and generating bills for smooth transactions.</p>
                    <div className='sm:flex gap-3 mt-4' >
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Customizable Templates
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Automated Processes
                        </div>

                    </div>

                </div>
                <div className="w-full  mt-10 sm:mt-5  border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] transition duration-200 ease-in-out cursor-pointer" >
                    <h2 className="text-slate-200 text-2xl mt-4 font-semibold mb-2" >Stock & RFID Inventory Management</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-2 text-slate-400 text-sm" >Utilize RFID technology for precise inventory tracking and efficient stock management..</p>
                    <div className='sm:flex gap-3 mt-4' >
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Precision Tracking
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Efficient Stock Control
                        </div>
                        

                    </div>

                </div>
                <div className="w-full  mt-10 sm:mt-5  border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] transition duration-200 ease-in-out cursor-pointer" >
                    <h2 className="text-slate-200 text-2xl mt-4 font-semibold mb-2" >Order Management</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-2 text-slate-400 text-sm" >Simplify order processing and tracking to enhance customer service and satisfaction.</p>
                    <div className='sm:flex gap-3 mt-4' >
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Streamlined Processing
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Enhanced Tracking
                        </div>

                    </div>

                </div>
               
                <div className="w-full  mt-10 sm:mt-5  border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] transition duration-200 ease-in-out cursor-pointer" >
                    <h2 className="text-slate-200 text-2xl mt-4 font-semibold mb-2" >Karighar Management</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-2 text-slate-400 text-sm" >Effectively manage artisans and workshops to ensure smooth production processes.</p>
                    <div className='sm:flex gap-3 mt-4' >
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Artisan Coordination
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Workshop Oversight
                        </div>

                    </div>

                </div>
                <div className="w-full  mt-10 sm:mt-5  border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] transition duration-200 ease-in-out cursor-pointer" >
                    <h2 className="text-slate-200 text-2xl mt-4 font-semibold mb-2" >Staff Management</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-2 text-slate-400 text-sm" >Efficiently handle employee scheduling, performance tracking, and payroll management.</p>
                    <div className='sm:flex gap-3 mt-4' >
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Schedule Optimization
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Performance Tracking
                        </div>

                    </div>

                </div>
                <div className="w-full  mt-10 sm:mt-5  border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] transition duration-200 ease-in-out cursor-pointer" >
                    <h2 className="text-slate-200 text-2xl mt-4 font-semibold mb-2" >HUID</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-2 text-slate-400 text-sm" >Implement unique identifiers for products to enhance security and streamline inventory management.</p>
                    <div className='sm:flex gap-3 mt-4' >
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Unique Product Identification
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Enhanced Security Measures
                        </div>

                    </div>

                </div>
                <div className="w-full  mt-10 sm:mt-5  border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] transition duration-200 ease-in-out cursor-pointer" >
                    <h2 className="text-slate-200 text-2xl mt-4 font-semibold mb-2" >Scheduled Report & Notification</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-2 text-slate-400 text-sm" >Stay informed with scheduled reports and timely notifications for better decision-making and operational efficiency.</p>
                    <div className='sm:flex gap-3 mt-4' >
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Timely Insights
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Proactive Alerts
                        </div>

                    </div>

                </div>


            </div>
            <Footer />
        </>
    )
}

export default Ausales