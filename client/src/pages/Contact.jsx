import { ChevronDownIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { IoChevronForward } from 'react-icons/io5'
import ClipLoader from 'react-spinners/ClipLoader'
import Footer from '../components/Footer'

const Contact = () => {
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
                        {/* <p className='text-slate-300 text-sm font-semibold mt-3 mb-3' >AU PAY</p> */}
                        <h1 className='text-2xl sm:text-4xl text-white text-start font-semibold' >Contact Us</h1>
                        {/* <p className=' w-2/3 sm:w-full text-xs sm:text-sm text-slate-400 mt-4' >Take Your Jewellery Store to the Next Level with AURUMM - The Ultimate Software Suite</p> */}
                        {/* <button className='bg-gradient-to-r from-[#66AA74] to-[#D7B56D] px-5 font-semibold hover:bg-gradient-to-l  mx-auto flex justify-center items-center py-2.5 rounded-[17px] text-sm mt-5 transition-all duration-300 group'>
                            Get a Free Demo
                            <IoChevronForwardOutline className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </button> */}
                        <p className='text-slate-300 text-xs font-semibold mt-5 mb-3 flex items-center gap-2' >HOME <IoChevronForward /> PRODUCT&FEATURES <IoChevronForward /> AUPAY</p>

                    </div>
                </div>
            </div>
            <div className='px-5 sm:px-14 pt-10 h-auto min-h-screen lg:px-20 bg-gradient-to-r from-[#080909] to-[#1f2937]'>
                <h2 className="text-slate-200 text-3xl py-4 " >How can we help you?</h2>
                <hr className='border-slate-500 mt-5' />
                <div className='sm:flex gap-4 pb-20' >
                    <div className='w-full sm:s-1/2  mt-20' >
                        <h2 className="text-slate-200 text-4xl py-4 " >Start Today!</h2>
                        <p className='text-slate-300 mt-3' >Ready to take the leap? Come say hi, and we'll set things up!</p>

                        <div className='mt-10' >
                            <h2 className="text-slate-200 text-2xl " >Email</h2><br />
                            <a href='mailto:support@atts.in' className='text-slate-300 mt-3' >support@atts.in</a>
                        </div>

                        <div className='mt-10' >
                            <h2 className="text-slate-200 text-2xl " >Email</h2><br />
                            <a href='https://www.instagram.com/aurumm_serv_soft/' className='text-slate-300 mt-3' >Instagram</a> <br />
                            <a href='https://www.facebook.com/people/Aurumm/61558187474609/' className='text-slate-300 mt-3' >Facebook</a>

                        </div>


                    </div>
                    <div className='w-full sm:s-1/2  p-4 mt-16' >
                        <form>
                            <div className="">
                                <label htmlFor="username" className="block text-sm/6 font-medium text-slate-300">
                                    Full Name
                                </label>
                                <div className="mt-2">
                                    <div className='w-full'  >
                                        <input
                                            id="username"
                                            name="username"
                                            type="text"
                                            placeholder="janesmith"
                                            className="block bg-slate-300 rounded-lg w-full min-w-0 grow py-1.5 pl-3 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="username" className="block text-sm/6 font-medium text-slate-300">
                                    Email Address
                                </label>
                                <div className="mt-2">
                                    <div className='w-full'  >
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter your Email"
                                            className="block bg-slate-300 rounded-lg w-full min-w-0 grow py-1.5 pl-3 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="country" className="block text-sm/6 font-medium text-slate-300">
                                    Preffered Product
                                </label>
                                <div className="mt-2 grid grid-cols-1">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-slate-300 py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    >
                                        <option>AU PAY</option>
                                        <option>AU SALES</option>
                                        <option>AU SHOP</option>
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <label htmlFor="username" className="block text-sm/6 font-medium text-slate-300">
                                    Budget
                                </label>
                                <div className="mt-2">
                                    <div className='w-full'  >
                                        <input
                                            id="username"
                                            name="username"
                                            type="text"
                                            placeholder="Enter your budget"
                                            className="block bg-slate-300 rounded-lg w-full min-w-0 grow py-1.5 pl-3 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="about" className="block text-sm/6 font-medium text-slate-300">
                                    About
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="about"
                                        name="about"
                                        placeholder='Type your message'
                                        rows={3}
                                        className="block w-full rounded-md bg-slate-300 px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="rounded-md bg-gradient-to-r from-[#66AA74]  to-[#D7B56D] px-3 w-full mt-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gradient-to-l focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Submit
                            </button>

                        </form>



                    </div>

                </div>
            </div>
            <Footer />

        </>
    )
}

export default Contact