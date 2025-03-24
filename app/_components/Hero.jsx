// app/_components/Hero.jsx
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <div className='bg-gradient-to-r from-purple-800 to-blue-700 p-10 px-10 md:px-28 lg:px-48'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 pt-20 items-center'>
        <div>
          <h2 className='font-extrabold text-5xl text-white'>
            Speed up your creative flow
          </h2>
          <p className='text-gray-200 mt-5'>
            Join our company where hundreds of designers are creatively working and making huge profits.
          </p>
          <div className='flex gap-5 mt-8'>
            <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-all">Explore</Button>
            <Button className="bg-purple-500 text-white hover:bg-purple-600 transition-all">Sell</Button>
          </div>
        </div>
        <div className='flex items-center justify-center'> 
          <Image src='/vercel.svg' alt='pc' width={300} height={300} />
        </div>
      </div>
    </div>
  )
}
