import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const HeroSection = () => {
  return (
<section className="py-10 bg-white sm:py-16 md:py-24 lg:py-36">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div className="relative mb-12">
                <Image width={1000} height={1000} className="w-full rounded-md" src="/Image/hero-banner.jpg" alt="HeroBanner" />

                <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                    <div className="overflow-hidden bg-white rounded border border-gray-100 shadow">
                        <div className="px-10 py-6">
                            <div className="flex items-center">
                                <p className="flex-shrink-0 text-3xl font-bold text-primary sm:text-4xl">37%</p>
                                <p className="pl-6 text-sm font-medium text-black sm:text-lg">High Conversions <br />on Landing Pages</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='space-y-3'>
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                    <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Build a perfect team within hours.</h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia conse duis enim velit mollit. Exercitation veniam.</p>
                 <Button asChild  className='px-7  min-h-12 py-4 text-white'>
                <a href="#" title=""> Explore more </a>
                 </Button>
            </div>
        </div>
    </div>
</section>  )
}

export default HeroSection