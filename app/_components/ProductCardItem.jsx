"use client";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import React from 'react';
import Image from 'next/image';

export default function ProductCardItem({ products }) {
  return (
    <div className="flex justify-center p-5">
      <Card className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 w-[300px] h-[400px]">
        <div className="relative w-full h-[250px]">
          <Image
            src={products?.image}
            alt={products?.name}
            width={250}
            height={250}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Price with Red color */}
        <h2 className='font-semibold text-xl text-red-600 mt-2'>{`${products?.price}`}</h2> {/* Red price color */}

        <div className='mt-3'>
          {/* Product Name */}
          <h2 className='font-bold text-xl text-gray-800'>{products?.name}</h2>

          <div className="mt-3 flex items-center gap-3">
            <Image
              src={products?.user?.image}                                                                                                                      
              alt="user"
              width={30}
              height={30}
              className="rounded-full border-2 border-gray-300"
            />                                                                                                                                 
            <h3 className='text-sm text-gray-500'>{products?.user?.name}</h3>
          </div>

         <Button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition-all ease-in-out duration-300">
          Add to Cart
        </Button>

        </div>
      </Card>
    </div>
  );
}
