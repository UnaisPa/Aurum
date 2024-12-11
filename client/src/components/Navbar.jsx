import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react';
import { IoChevronDownOutline } from "react-icons/io5";

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Product&Features', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // Update state if scrolled past 50px
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Disclosure as="nav"
            //  className="bg-gray-800"
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-gray-800 shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="mx-auto max-w-7xl px-2 sm:px-14 lg:px-20">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
                        <div className="flex shrink-0 items-center ">

                            <div className="h-8 w-auto flex justify-center items-center">
                                <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.22702 20.613L15.0546 14.6035L12.1323 12.9815L2.85025 18.133L9.25891 7.57179L12.1323 2.83641L13.2273 4.64153L13.5581 5.18597L15.0302 7.61256L16.426 9.86814L18.8879 8.50235L17.512 6.23513L16.0393 3.808L15.7097 3.26423C14.701 1.60154 14.1039 0 12.1321 0C11.1118 0 10.2362 0.493208 9.70711 1.36473L1.28816 15.2397C1.28816 15.5825 -1.25545 17.9542 0.805935 20.0995C1.71055 21.0395 3.08626 21.2457 4.22689 20.6127L4.22702 20.613Z" fill="#61A375" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2095 12.8528L21.4142 18.1331L15.6696 14.945L12.7472 16.5671L20.0373 20.6131C21.1778 21.2461 22.5535 21.0398 23.4583 20.0999C24.3623 19.1599 24.5159 17.7767 23.8391 16.6616L20.6915 11.4752L19.2193 9.0481L16.7627 10.4118L16.7373 10.4261L18.2095 12.8531V12.8528Z" fill="#D7B56D" />
                                </svg>

                            </div>

                        </div>
                        <div className=' w-full hidden sm:flex justify-center' >
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        item.name == "Product&Features" ? <>
                                            <Menu as="div" className="relative">
                                                <div>
                                                    <MenuButton
                                                        className={classNames(
                                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                            'rounded-md px-3 py-2 text-sm font-medium',
                                                        )}
                                                    //</div>className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                                    >
                                                        <span className="absolute -inset-1.5" />
                                                        <span className="sr-only">Open user menu</span>
                                                        {/* <img
                                                            alt=""
                                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                            className="size-8 rounded-full"
                                                        /> */}
                                                        <div className='flex gap-2 items-center' > {item.name} <IoChevronDownOutline /></div>
                                                    </MenuButton>
                                                </div>
                                                <MenuItems
                                                    transition
                                                    className="absolute left-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                                >
                                                    <MenuItem>
                                                        <div

                                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                                        >
                                                            <h3 className='text-base font-semibold' >Au Pays</h3>
                                                            <p className='text-xs'>Gold saving scheme payment platform</p>
                                                        </div>
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                                        >
                                                            Settings
                                                        </a>
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                                        >
                                                            Sign out
                                                        </a>
                                                    </MenuItem>
                                                </MenuItems>
                                            </Menu>
                                        </> : <a
                                            key={item.name}
                                            href={item.href}
                                            aria-current={item.current ? 'page' : undefined}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium',
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="absolute   inset-y-0 right-0  flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button className='bg-gradient-to-r from-[#66AA74]  to-[#D7B56D] px-5 font-semibold hover:bg-gradient-to-l hover:from-[#518d5d]  hover:to-[#ac9155] py-2 rounded-[17px] text-sm' >
                            Get a Free Demo
                        </button>
                        {/* <button
                            type="button"
                            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon aria-hidden="true" className="size-6" />
                        </button> */}


                        {/* Profile dropdown */}
                        {/* <Menu as="div" className="relative ml-3">
                            <div>
                                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        className="size-8 rounded-full"
                                    />
                                </MenuButton>
                            </div>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                    >
                                        Your Profile
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                    >
                                        Settings
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                    >
                                        Sign out
                                    </a>
                                </MenuItem>
                            </MenuItems>
                        </Menu> */}
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
