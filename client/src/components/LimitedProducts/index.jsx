import './index.css';

import { dummyProducts } from '../../assets/products';

import ProductCard from '../ProductCard';
import { useState } from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LimitedProducts = ({ reqProductColumns, reqMaxProducts }) => {
    const productColumns = reqProductColumns || 4;
    const [productIndex, setProductIndex] = useState(0);
    const maxProducts = reqMaxProducts || 8;

    const [products, setProducts] = useState(dummyProducts);

    const handlePrevPage = () => {
        if(productIndex === 0) return;
        setProductIndex(prev => prev - maxProducts);
    }

    const handleNextPage = () => {
        if(productIndex + maxProducts >= products.length) return;
        setProductIndex(prev => prev + maxProducts);
    }

    return (
        <div className="limited-products-container">
            <nav className='w-full flex justify-between items-center border-b-[2px] border-gray-300 mb-5 px-5 pt-3'>
                <div className='flex gap-3 items-center'>
                    <h5 className='text-2xl mr-5 relative border-b-[2px] border-blue-600 mb-[-5px]'>HOT DEALS</h5>
                    <a href="#" className='text-blue-600 hidden lg:block'>NEW</a>
                    <a href="#" className='text-gray-400 hidden lg:block'>FEATURED</a> 
                    <a href="#" className='text-gray-400 hidden lg:block'>TOP SELLERS</a>
                </div>
                <div className='flex gap-3 items-center'>
                    <KeyboardArrowLeft className={productIndex === 0 ? 'text-gray-300 cursor-pointer' : "text-gray-500 hover:text-gray-600 cursor-pointer"} fontSize='large' onClick={handlePrevPage} />
                    <KeyboardArrowRight className={productIndex + maxProducts >= products.length ? 'text-gray-300 cursor-pointer' : 'text-gray-500 hover:text-gray-600 cursor-pointer'} fontSize='large' onClick={handleNextPage} />
                </div>
            </nav>
            <div className="flex gap-3 items-center mb-5 px-5">
                <a href="#" className='text-blue-600 block lg:hidden'>NEW</a>
                <a href="#" className='text-gray-400 block lg:hidden'>FEATURED</a> 
                <a href="#" className='text-gray-400 block lg:hidden'>TOP SELLERS</a>
            </div>
            <div className={ `products-list gap-3 gap-y-7 grid grid-cols-2 md:grid-cols-3 ${productColumns === 4 ? "lg:grid-cols-4" : productColumns === 3 ? "lg:grid-cols-3" : productColumns === 2 ? "lg:grid-cols-2" : ""}`}>
                {
                    products.length > 0 ? products.slice(productIndex, productIndex + maxProducts).map((product, index)=>{
                        return <ProductCard key={product.id} product={product} index={index} />
                    }) : null
                }
            </div>
        </div>
    )
}

export default LimitedProducts;