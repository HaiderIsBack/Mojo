import { useState } from 'react';
import PaginatedProducts from '../../components/PaginatedProducts';
import './index.css';

const Shop = () => {
    const [productsPerPage, setProductsPerPage] = useState(20);

    const handleProductsPerPage = (e) => {
        const selectedOpt = Number(e.target.value);
        setProductsPerPage(selectedOpt)
        console.log(selectedOpt)
    }
    return (
        <>
        <h2 className='text-center text-[50px] my-[50px]'>Shop</h2>
        <section className="flex p-6">
            <p>Showing 
                <select className='border-[1px] border-gray-400 mx-2 px-2 py-1' value={productsPerPage} onChange={handleProductsPerPage}>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select>
                products per page
            </p>
        </section>
        <section className='p-5'>
            <PaginatedProducts productColumns={4} maxProducts={productsPerPage} />
        </section>
        </>
    )
}

export default Shop;