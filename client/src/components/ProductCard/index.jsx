
import { useEffect, useRef } from 'react';
import { Shuffle, FavoriteBorderOutlined, KeyboardArrowDown } from '@mui/icons-material';

import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';

const ProductCard = ({product, index}) => {
    const productRef = useRef(null);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl
        }));
    }

    // useEffect(()=>{
    //     gsap.to(productRef.current, {
    //         opacity: 1,
    //         y: 0,
    //         delay: index * 0.15,
    //         duration: 0.5,
    //         ease: "power3.out",
    //         scrollTrigger: {
    //             target: productRef.current,
    //             start: "1300px center",
    //             end: "bottom center"
    //         }
    //     });
    // },[]);
    return (
        <div className="product-wrapper group/outer" ref={productRef}>
            <div className="product border-[1px] border-gray-400 rounded-lg shadow-lg hover:translate-y-[-20px] duration-200 p-2 relative">
                <center>
                    <Link to={"/product/" + product.id}>
                        <img src={product.imageUrl} alt="" className='w-24 h-24 sm:w-32 sm:h-32 lg:w-52 lg:h-52 object-contain drop-shadow-2xl hover:scale-110 cursor-pointer duration-150' loading='lazy' />
                    </Link>
                </center>
                <h4 className='pt-5 border-t-2 border-gray-200 text-xs lg:text-lg w-full overflow-hidden block whitespace-nowrap text-ellipsis'>{product.name}</h4>
                <p className='text-gray-400 text-xs lg:text-md w-full overflow-hidden block whitespace-nowrap text-ellipsis'>{product.category}</p>
                <h4 className='text-blue-600 text-xs lg:text-md'>${product.price}</h4>
                <div className="details-section group cursor-pointer text-xs lg:text-md">
                    <p>Details <KeyboardArrowDown style={{fontSize: "17px"}} className='rotate-[-90deg] group-hover:rotate-0' /></p>
                    <div className="details w-full invisible max-h-0 overflow-hidden group-hover:max-h-52 group-hover:visible transition-all duration-300 delay-300">
                        {
                            product.details ? product.details.map((detail, i) => {
                                return <div key={`${detail}-${i}`} className="w-full flex justify-between items-center border-dashed border-t-[1px] border-gray-500 p-1">
                                    <h6 className='text-black'>{detail.name}</h6>
                                    <h6 className='text-gray-400'>{detail.description}</h6>
                                </div>
                            }) : null
                        }
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                    <button className='w-full col-span-2 sm:col-span-1 bg-transparent hover:bg-blue-600 hover:text-white duration-200 border-[1px] border-blue-600 text-blue-600 text-xs lg:text-md mt-2 py-3' onClick={addToCart}>Add to Cart</button>
                    <button className='w-full hidden sm:block bg-blue-600 hover:bg-blue-700 text-xs lg:text-md text-white mt-2 py-3'>Buy Now</button>
                </div>
                <div className="absolute top-1 right-1 flex flex-col gap-2 opacity-0 group-hover/outer:opacity-100 duration-300">
                    <div className="p-2 bg-white text-black border-[1px] border-gray-300 rounded-lg cursor-pointer">
                        <Shuffle className='hover:text-blue-600 duration-200 transition' />
                    </div>
                    <div className="p-2 bg-white text-black border-[1px] border-gray-300 rounded-lg cursor-pointer">
                        <FavoriteBorderOutlined className='hover:text-blue-600 duration-200 transition' />
                    </div>
                </div>
                {
                    product.hot ? <span className='absolute top-1 left-1 bg-red-600 text-white p-2 rounded-lg'>Hot</span> : null
                }
            </div>
        </div>
    )
}

export default ProductCard;