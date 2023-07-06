"use client";

import Image from 'next/image';

import { useRouter } from 'next/navigation';
import React from 'react'


const Page = () => {

    const router = useRouter();
  return (
    <aside>
        <h1 className='text-black font-semibold pt-4 text-3xl text-center hover:opacity-70'>Arcade Games</h1>
       
        <div className='bg-gray-100 m-5 p-4 rounded-2xl h-fit'>
        
        <div className='flex flex-row flex-wrap space-x-3 space-y-2 mt-4 mb-4'>
        <div className='aspect-ratio-square rounded-xl shadow-lg bg-white border border-white hover:bg-blue-500 hover:text-white hover:scale-105 transition'>
            <Image 
              src="/games/OmNom.jpg"
              alt='Total Defence'
              width={250}
              height={200}
              className='rounded-lg'
            />
            <div className='font-bold leading-7 text-center py-2 px-2 cursor-pointer rounded-full'
                 onClick={() => router.push("https://play.famobi.com/om-nom-run")}>
                 Play
            </div>
        </div>

        <div className='aspect-ratio-square rounded-xl shadow-lg bg-white border border-white hover:text-white hover:bg-blue-500 hover:scale-105 transition'>
            <Image 
              src="/games/pengu.jpg"
              alt='Neon Breaker'
              width={250}
              height={200}
              className='rounded-lg'
            />
            <div className='font-bold leading-7 text-center py-2 px-2 cursor-pointer rounded-full'
                 onClick={() => router.push("https://play.famobi.com/pengu-slide")}>
                 Play
            </div>
        </div>

        <div className='aspect-ratio-square rounded-xl shadow-lg bg-white border border-white hover:text-white hover:bg-blue-500 hover:scale-105 transition'>
            <Image 
              src="/games/garden.jpg"
              alt='Dragon Run'
              width={250}
              height={200}
              className='rounded-lg'
            />
            <div className='font-bold leading-7 text-center py-2 px-2 cursor-pointer rounded-full'
                 onClick={() => router.push("https://play.famobi.com/garden-bloom")}>
                 Play
            </div>
        </div>

        <div className='aspect-ratio-square rounded-xl shadow-lg bg-white border border-white hover:text-white hover:bg-blue-500 hover:scale-105 transition'>
            <Image 
              src="/games/smash.jpg"
              alt='World dart'
              width={250}
              height={200}
              className='rounded-lg'
            />
            <div className='font-bold leading-7 text-center py-2 px-2 cursor-pointer rounded-full'
                 onClick={() => router.push("https://play.famobi.com/tower-smash")}>
                 Play
            </div>
        </div>

        <div className='aspect-ratio-square rounded-xl shadow-lg bg-white border border-white hover:text-white hover:bg-blue-500 hover:scale-105 transition'>
            <Image 
              src="/games/uncle.jpg"
              alt='Dragon Run'
              width={250}
              height={200}
              className='rounded-lg'
            />
            <div className='font-bold leading-7 text-center py-2 px-2 cursor-pointer rounded-full'
                 onClick={() => router.push("https://play.famobi.com/uncle-ahmed")}>
                 Play
            </div>
        </div>

        <div className='aspect-ratio-square rounded-xl shadow-lg bg-white border border-white hover:text-white hover:bg-blue-500 hover:scale-105 transition'>
            <Image 
              src="/games/zoo.jpg"
              alt='Ice Skating'
              width={250}
              height={200}
              className='rounded-lg'
            />
            <div className='font-bold leading-7 text-center py-2 px-2 cursor-pointer rounded-full'
                 onClick={() => router.push("https://play.famobi.com/zoo-feeder")}>
                 Play
            </div>
        </div>

        
        </div>
        </div>

    </aside>
    
  )
}

export default Page;