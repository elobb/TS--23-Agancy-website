import Image from 'next/image'
import React from 'react'

const AnalisicSection = () => {
  return (
<section className="pt-10 overflow-hidden bg-gray-50 sm:pt-16 lg:pt-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Celebration helps you build beautiful website</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>

        <div className="flex flex-col items-start justify-center max-w-lg px-10 mx-auto mt-8 space-y-8 lg:max-w-xl sm:px-0 sm:space-y-0 sm:flex-row sm:mt-16 sm:space-x-6 lg:space-x-12 sm:items-center">
            <div className="flex items-center lg:flex-1">
                <svg className="flex-shrink-0 text-primary w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <p className="ml-4 text-lg font-semibold leading-snug text-black">Create powerful websites fast</p>
            </div>

            <div className="flex items-center lg:flex-1">
                <svg className="flex-shrink-0 text-primary w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <p className="ml-4 text-lg font-semibold leading-snug text-black">Easy to customize, ready to launch</p>
            </div>
        </div>

        <div className="mt-10 sm:mt-16">
            <Image width={1000} height={1000}  className="w-full max-w-3xl mx-auto -mb-16 rounded-lg shadow-xl" src="/Image/bussiness-banner.jpg" alt="bussiness" />
        </div>
    </div>
</section>


  )
}

export default AnalisicSection