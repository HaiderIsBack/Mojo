import { useEffect, useState } from "react";
import { dummyProducts } from "../../assets/products";
import ProductCard from "../ProductCard";


const PaginatedProducts = ({ productColumns, maxProducts }) => {

    const [pageIndex, setPageIndex] = useState(0);
    const [products, setProducts] = useState(dummyProducts);

    const numberOfPages = Math.ceil(products.length / maxProducts);

    const handlePrevPage = () => {
        if(pageIndex <= 0) return;
        setPageIndex(prev => prev - maxProducts);
    }

    const handleNextPage = () => {
        if(pageIndex + maxProducts >= products.length) return;
        setPageIndex(prev => prev + maxProducts);
    }

    const goToPage = (index) => {
        if(index * maxProducts === pageIndex) return;
        setPageIndex(index * maxProducts)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pageIndex])

    return (
    <>
        <div className={ `products-list gap-3 gap-y-7 grid grid-cols-2 md:grid-cols-3 ${productColumns === 4 ? "lg:grid-cols-4" : productColumns === 3 ? "lg:grid-cols-3" : productColumns === 2 ? "lg:grid-cols-2" : ""}`}>
            {
                products.length > 0 ? products.slice(pageIndex, pageIndex + maxProducts).map((product, index)=>{
                    return <ProductCard key={product.id} product={product} index={index} />
                }) : <p>No products at the moment!</p>
            }
        </div>
        <br />
        {
            products.length > 0 && numberOfPages > 1 ? (
                <div className="w-full flex justify-center items-center gap-3">
                    { pageIndex !== 0 && <button onClick={handlePrevPage} className="bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white border-[1px] border-blue-700 text-sm duration-300 px-3 py-2">Previous</button>}
                    {
                        Array.from({ length: numberOfPages }, (_, i) => i + 1).map(pageNumber => {
                            return (
                                <button key={pageNumber} onClick={() => goToPage(pageNumber - 1)} className={ (pageNumber - 1) * maxProducts === pageIndex ? "bg-blue-700 hover:bg-blue-800 text-white border-[1px] border-blue-700 text-sm duration-300 px-3 py-2 scale-110" : "bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white border-[1px] border-blue-700 text-sm duration-300 px-3 py-2"}>{pageNumber}</button>
                            )
                        })
                    }
                    { pageIndex < (numberOfPages - 1) * maxProducts && <button onClick={handleNextPage} className="bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white border-[1px] border-blue-700 text-sm duration-300 px-3 py-2">Next</button>}
                </div>
             ) : null
        }
    </>
    );
}

export default PaginatedProducts;