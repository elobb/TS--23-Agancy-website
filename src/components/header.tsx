"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { AnimatePresence, motion } from "motion/react";

const Header = () => {
    const [isActive, setActive] = useState(false)
    return (
        <header className="  bg-white lg:pb-0 sticky top-0 left-0 w-full z-40 shadow">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* <!-- lg+ --> */}
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <a href="#" title="" className="flex">
                            <Image width={500} height={500} className="w-auto h-8 lg:h-10" src="/Image/logo.png" alt="" />
                        </a>
                    </div>

                    <Button
                        
                    onClick={() => setActive(!isActive)} type="button" className="inline-flex p-2  transition-all duration-200 rounded-md md:hidden  text-white focus:translate-y-0.5 duration-200">
                        {isActive ?
                            <svg className="  w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            :
                            <svg className={cn("  w-6 h-6")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                            </svg>
                        }
                    </Button>

                    <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                        <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-primary"> Features </a>

                        <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-primary"> Solutions </a>

                        <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-primary"> Resources </a>

                        <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-primary"> Pricing </a>
                    </div>

                    <Button asChild className='px-6 py-4 min-h-12 ml-10 text-white hidden md:block'>
                        <a href="#" title=""  > Get started now </a>
                    </Button>
                </nav>

                {/* <!-- xs to lg --> */}
                {isActive &&
                    <AnimatePresence>

                        <motion.nav initial={{
                            opacity: 0, scale: .4
                        }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .3, ease: "anticipate" }}
                            className={cn("   pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden transform transition-all    w-full  duration-200  ", {
                            })}>
                            <div className="flow-root">
                                <div className="flex flex-col px-6 -my-2 space-y-1">
                                    <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-primary"> Features </a>

                                    <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-primary"> Solutions </a>

                                    <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-primary"> Resources </a>

                                    <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-primary"> Pricing </a>
                                </div>
                            </div>

                            <div className="px-6 mt-6">
                                <Button asChild className='px-6 py-4 min-h-12 text-white '>
                                    <a href="#" title=""  > Get started now </a>
                                </Button>
                            </div>
                        </motion.nav>
                    </AnimatePresence>
                }
            </div>
        </header>
    )
}

export default Header