"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import Products from '../_mockData/Products';
import ProductCardItem from './ProductCardItem';

export default function ProductList() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        setProductList(Products)
    }, []);

    return (
        <div>
           <h2 className='font-bold text-xl flex justify-between items-center'>
               Product List 
               <span><Button>View All</Button></span>
           </h2>
           {/* Render product list here */}
           <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 mt-5'>
                {productList.map((products, index) => (
                    <ProductCardItem products={products} key={index}></ProductCardItem>
                ))}  
           </div>
        </div>
    )
}
