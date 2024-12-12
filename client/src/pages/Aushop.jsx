import { Description } from '@headlessui/react'
import React from 'react'
import { IoChevronForward } from 'react-icons/io5'
import AupayText from '../components/AupayText'
import TextRight from '../components/TextRight'
import Footer from '../components/Footer'
import HelpCards from '../components/HelpCards'

const Aushop = () => {
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
                        <p className='text-slate-300 text-sm font-semibold mt-3 mb-3' >AU SHOP</p>
                        <h1 className='text-2xl sm:text-4xl text-white text-start font-semibold' >IThe Ultimate Jewellery<br/>

E-Commerce Platform!</h1>
                        {/* <p className=' w-2/3 sm:w-full text-xs sm:text-sm text-slate-400 mt-4' >Take Your Jewellery Store to the Next Level with AURUMM - The Ultimate Software Suite</p> */}
                        {/* <button className='bg-gradient-to-r from-[#66AA74] to-[#D7B56D] px-5 font-semibold hover:bg-gradient-to-l  mx-auto flex justify-center items-center py-2.5 rounded-[17px] text-sm mt-5 transition-all duration-300 group'>
                            Get a Free Demo
                            <IoChevronForwardOutline className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </button> */}
                        <p className='text-slate-300 text-xs font-semibold mt-5 mb-3 flex items-center gap-2' >HOME <IoChevronForward /> PRODUCT&FEATURES <IoChevronForward /> AUSHOP</p>

                    </div>
                </div>
            </div>
            <div className='w-full h-auto flex justify-center items-center min-h-screen px-2 sm:px-14 lg:px-20 bg-gradient-to-r from-[#080909] to-[#1f2937]' >

                <div className='w-full sm:flex mt-10 gap-10' >
                    <div className=' w-full sm:w-1/2 mt-10 sm:mt-0' >
                        <img className='w-8/12 mx-auto sm:mx-0 sm:ml-auto' src='/aushop.svg' />

                    </div>
                    <div className='w-full text-center sm:text-start sm:w-1/2 mt-10 sm:mt-0' >
                        <AupayText type='SHOP' head='Open Your Shop To World' desc="A Smooth Jewellery Shopping
Experience" text="Welcome to AU Shop, where luxury intertwines seamlessly with the cutting-edge world of e-commerce! Our platform is meticulously designed to be the haven for dedicated jewellery stores, offering your establishment an unparalleled and sleek platform to launch your e-commerce apps with grace and innovation." />
                    </div>

                </div>
            </div>
            <div className='h-auto  min-h-screen  py-20 sm:py-10  px-5 sm:px-14 lg:px-20 bg-gradient-to-r from-[#080909] to-[#1f2937]' >
                <div className='' >
                    <p className='text-slate-200 text-center text-xs font-semibold mb-4' >WHY AURUMM - AU SHOP?</p>
                    <h1 className='font-bold text-center text-white text-3xl' >Sparkles and Joy, Now Made Hassle-Free!</h1>
                    <HelpCards />

                </div>
            </div>
            <div className='w-full h-auto pb-16 px-2 sm:px-14 lg:px-20 bg-gradient-to-r from-[#080909] to-[#1f2937] ' >
                <p className='text-slate-200 text-center sm:text-start text-xs font-semibold pb-4 pt-10 sm:pt-0' >FEATURES</p>
                <div className="w-full  mt-10 sm:mt-0  border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] transition duration-200 ease-in-out cursor-pointer" >
                    <h2 className="text-slate-200 text-2xl mt-4 font-semibold mb-2" >Product Management</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-2 text-slate-400 text-sm" >Discover a world of possibilities and give your customers a breezy online shopping experience with AU Shop.</p>
                    <div className='sm:flex gap-3 mt-4' >
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Effortless Catalog Management
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Customisable Product Showcases
                        </div>

                    </div>

                </div>
                <div className="w-full  mt-10 sm:mt-5  border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] transition duration-200 ease-in-out cursor-pointer" >
                    <h2 className="text-slate-200 text-2xl mt-4 font-semibold mb-2" >Payment Management</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-2 text-slate-400 text-sm" >We provide a host of payment options and features to make transactions easier for your customers.</p>
                    <div className='sm:flex gap-3 mt-4' >
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Secure Payment Gateways
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Flexible Payment Options
                        </div>

                    </div>

                </div>
                <div className="w-full  mt-10 sm:mt-5  border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] transition duration-200 ease-in-out cursor-pointer" >
                    <h2 className="text-slate-200 text-2xl mt-4 font-semibold mb-2" >Live Shop</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-2 text-slate-400 text-sm" >If customers can't come to the store, take the store to your customers and make it an unforgettable experience!</p>
                    <div className='sm:flex gap-3 mt-4' >
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Live-Shop Exclusives
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                      Real-Time Engagement
                        </div>
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Interactive Virtual Showcases
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Instant Transactions
                        </div>
                        

                    </div>

                </div>
                <div className="w-full  mt-10 sm:mt-5  border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] transition duration-200 ease-in-out cursor-pointer" >
                    <h2 className="text-slate-200 text-2xl mt-4 font-semibold mb-2" >Enquiry & Follow-up Management</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-2 text-slate-400 text-sm" >With our flawless enquiry feature, your customers can make their concerns known at any time!</p>
                    <div className='sm:flex gap-3 mt-4' >
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Customisable Enquiry Forms
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Automated Follow-Up
                        </div>

                    </div>

                </div>
               
                <div className="w-full  mt-10 sm:mt-5  border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] transition duration-200 ease-in-out cursor-pointer" >
                    <h2 className="text-slate-200 text-2xl mt-4 font-semibold mb-2" >Data Management</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-2 text-slate-400 text-sm" >Make shopping on AU Shop a personalised experience, specially catered to every customer.</p>
                    <div className='sm:flex gap-3 mt-4' >
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Advanced Inventory Tracking
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Customer Behaviour Analysis
                        </div>

                    </div>

                </div>
                <div className="w-full  mt-10 sm:mt-5  border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] transition duration-200 ease-in-out cursor-pointer" >
                    <h2 className="text-slate-200 text-2xl mt-4 font-semibold mb-2" >Category Management</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-2 text-slate-400 text-sm" >Seamless segmentation and easy browsing for your customers - now made possible with AU Shop!</p>
                    <div className='sm:flex gap-3 mt-4' >
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Improved Supplier Relationship
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Order Receipt and Review
                        </div>

                    </div>

                </div>
                <div className="w-full  mt-10 sm:mt-5  border border-slate-700 pl-4 shadow-lg pt-4 pr-4 pb-4 rounded-lg bg-gradient-to-r  from-[#1d2222] to-[#1f2937] transition duration-200 ease-in-out cursor-pointer" >
                    <h2 className="text-slate-200 text-2xl mt-4 font-semibold mb-2" >Customer Relationship Management</h2>
                    {/* <hr className="border-slate-700 mt-4" /> */}
                    <p className="mt-2 text-slate-400 text-sm" >Make your customer base stick. Make them feel loved and remembered to keep them coming back!</p>
                    <div className='sm:flex gap-3 mt-4' >
                        <div className=" px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Automated birthday and anniversary wishes
                        </div>
                        <div className="mt-2 sm:mt-0 px-3 rounded-lg border flex justify-center items-center gap-2 border-slate-700  py-2 text-sm text-slate-200  bg-[#1f2937] shadow-md">
                        Customer-centric customisations
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

export default Aushop