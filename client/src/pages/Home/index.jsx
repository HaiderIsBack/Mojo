import './index.css';

import { 
    BlenderOutlined,
    CameraOutlined,
    KeyboardArrowDown, 
    KeyboardArrowRight, 
    LightbulbOutlined, 
    Menu,
    SportsEsportsOutlined, 
    TvOutlined,
    SmartphoneOutlined,
    SmartToyOutlined,
    PetsOutlined,
    SoapOutlined,
    SportsFootballOutlined} from '@mui/icons-material';

import LimitedProducts from '../../components/LimitedProducts';
import HotDeals from '../../components/HotDeals';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Home = () => {
    return (
        <>
        <div className="hero-container px-7 grid grid-cols-8">
            <div className="col-span-12 lg:col-span-2 hidden lg:block">
                <div className='flex gap-3 justify-between px-3 py-3 text-white ' style={{backgroundColor: "var(--primary-accent)", border: "1px solid var(--primary-accent)"}}>
                    <div className='flex gap-2'>
                        <Menu />
                        Browse Categories
                    </div>
                    <div>
                        <KeyboardArrowDown />
                    </div>
                </div>
                <div className='flex gap-3 justify-between px-3 py-3 text-gray-950 border-[1px] border-gray-300 hover:bg-gray-100 cursor-pointer'>
                    <div className='flex gap-2 font-light'>
                        <SportsEsportsOutlined className='text-gray-600' />
                        Console
                    </div>
                    <div>
                        <KeyboardArrowRight className='text-gray-600' />
                    </div>
                </div>
                <div className='flex gap-3 justify-between px-3 py-3 text-gray-950 border-[1px] border-gray-300 hover:bg-gray-100 cursor-pointer'>
                    <div className='flex gap-2 font-light'>
                        <BlenderOutlined className='text-gray-600' />
                        Cooking
                    </div>
                    <div>
                        <KeyboardArrowRight className='text-gray-600' />
                    </div>
                </div>
                <div className='flex gap-3 justify-between px-3 py-3 text-gray-950 border-[1px] border-gray-300 hover:bg-gray-100 cursor-pointer'>
                    <div className='flex gap-2 font-light'>
                        <TvOutlined className='text-gray-600' />
                        Tv & Accessories
                    </div>
                    <div>
                        <KeyboardArrowRight className='text-gray-600' />
                    </div>
                </div>
                <div className='flex gap-3 justify-between px-3 py-3 text-gray-950 border-[1px] border-gray-300 hover:bg-gray-100 cursor-pointer'>
                    <div className='flex gap-2 font-light'>
                        <CameraOutlined className='text-gray-600' />
                        Camera & Accessories
                    </div>
                    <div>
                        <KeyboardArrowRight className='text-gray-600' />
                    </div>
                </div>
                <div className='flex gap-3 justify-between px-3 py-3 text-gray-950 border-[1px] border-gray-300 hover:bg-gray-100 cursor-pointer'>
                    <div className='flex gap-2 font-light'>
                        <LightbulbOutlined className='text-gray-600'/>
                        Lights & Accessories
                    </div>
                    <div>
                        <KeyboardArrowRight className='text-gray-600' />
                    </div>
                </div>
                <div className='flex gap-3 justify-between px-3 py-3 text-gray-950 border-[1px] border-gray-300 hover:bg-gray-100 cursor-pointer'>
                    <div className='flex gap-2 font-light'>
                        <SmartphoneOutlined className='text-gray-600' />
                        Mobile
                    </div>
                    <div>
                        <KeyboardArrowRight className='text-gray-600' />
                    </div>
                </div>
                <div className='flex gap-3 justify-between px-3 py-3 text-gray-950 border-[1px] border-gray-300 hover:bg-gray-100 cursor-pointer'>
                    <div className='flex gap-2 font-light'>
                        <SmartToyOutlined className='text-gray-600' />
                        Toys
                    </div>
                    <div>
                        <KeyboardArrowRight className='text-gray-600' />
                    </div>
                </div>
                <div className='flex gap-3 justify-between px-3 py-3 text-gray-950 border-[1px] border-gray-300 hover:bg-gray-100 cursor-pointer'>
                    <div className='flex gap-2 font-light'>
                        <PetsOutlined className='text-gray-600' />
                        Pet Food
                    </div>
                    <div>
                        <KeyboardArrowRight className='text-gray-600' />
                    </div>
                </div>
                <div className='flex gap-3 justify-between px-3 py-3 text-gray-950 border-[1px] border-gray-300 hover:bg-gray-100 cursor-pointer'>
                    <div className='flex gap-2 font-light'>
                        <SoapOutlined className='text-gray-600' />
                        Soap & Shampoos
                    </div>
                    <div>
                        <KeyboardArrowRight className='text-gray-600' />
                    </div>
                </div>
                <div className='flex gap-3 justify-between px-3 py-3 text-gray-950 border-[1px] border-gray-300 hover:bg-gray-100 cursor-pointer'>
                    <div className='flex gap-2 font-light'>
                        <SportsFootballOutlined className='text-gray-600' />
                        Outdoor Games
                    </div>
                    <div>
                        <KeyboardArrowRight className='text-gray-600' />
                    </div>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
                <nav className='hidden lg:flex gap-5 py-3 px-3 border-y-[1px] border-gray-300'>
                    <a href="#" className='hover:text-blue-700'>Home</a>
                    <a href="#" className='hover:text-blue-700'>Shop</a>
                    <a href="#" className='hover:text-blue-700'>Contact Us</a>
                    <a href="#" className='hover:text-blue-700'>Blogs</a>
                </nav>

                <div className="hero-img-container relative w-full h-[550px] p-0 lg:p-10">
                    <img src="/hero-img1.jpg" alt="Hero 1" className='w-full h-full object-cover' />
                    <h5 className='absolute top-20 left-20 text-blue-700 text-lg lg:text-2xl font-semibold'>Apple Innovation</h5>
                    <h3 className='absolute top-32 left-20 text-white text-4xl lg:text-5xl font-bold'>HIGHER<br/> LEVEL<br/> SMARTPHONE</h3>
                    <p className='absolute top-72 left-20 text-gray-200'>Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit. Deleniti, fugiat!</p>
                    <button className='absolute bottom-32 left-20 bg-blue-700 hover:bg-blue-800 text-white px-7 py-3 rounded-3xl text-sm duration-300'>BUY NOW</button>
                </div>
            </div>
        </div>

        <div className="hero-container container mx-auto hidden lg:grid grid-cols-12 gap-5">
            <div className="col-span-6 bg-gray-200 relative overflow-hidden">
                <img src="/Xbox-one-s.png" alt="Xbox One S" className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] opacity-10 z-0' />
                <div className="w-full grid grid-cols-2 gap-1 p-5 relative z-10">
                    <div>
                        <h6 className='text-blue-600 my-3'>NEW TECHNOLOGIES</h6>
                        <h5 className='text-black font-bold text-4xl mb-3'>Consoles 2024</h5>
                        <p className='text-gray-700 text-sm mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quia?</p>
                        <button className='text-white text-sm bg-blue-700 hover:bg-blue-800 duration-200 py-3 px-6 rounded-3xl'>SHOW MORE</button>
                    </div>
                    <img src="/Xbox-one-s.png" alt="Xbox One S" className='drop-shadow-2xl' />
                </div>
            </div>
            <div className="col-span-6 bg-blue-700 relative z-10">
                <img src="/samsung-phone.png" alt="Samsung Ultra" className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] opacity-10 z-0' />
                <div className="w-full grid grid-cols-2 gap-1 p-5 relative z-10">
                    <div>
                        <h6 className='text-blue-300 my-3'>SAMSUNG ACCESSORIES</h6>
                        <h5 className='text-white font-bold text-4xl mb-3'>SAMSUNG</h5>
                        <p className='text-gray-300 text-sm mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quia?</p>
                        <button className='text-black text-sm bg-white hover:bg-gray-200 duration-200 py-3 px-6 rounded-3xl'>SHOW MORE</button>
                    </div>
                    <img src="/samsung-phone.png" alt="Xbox One S" className='drop-shadow-2xl' />
                </div>
            </div>
        </div>

        <div className='block lg:hidden container mx-auto my-24'>
            <Swiper slidesPerView={1} spaceBetween={50} loop={true}>
                <SwiperSlide>
                    <div className="h-72 bg-gray-200 relative overflow-hidden">
                        <img src="/Xbox-one-s.png" alt="Xbox One S" className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] opacity-10 z-0' />
                        <div className="w-full grid grid-cols-2 gap-1 p-5 relative z-10">
                            <div>
                                <h6 className='text-blue-600 my-3'>NEW TECHNOLOGIES</h6>
                                <h5 className='text-black font-bold text-4xl mb-3'>Consoles 2024</h5>
                                <p className='text-gray-700 text-sm mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quia?</p>
                                <button className='text-white text-sm bg-blue-700 hover:bg-blue-800 duration-200 py-3 px-6 rounded-3xl'>SHOW MORE</button>
                            </div>
                            <img src="/Xbox-one-s.png" alt="Xbox One S" className='drop-shadow-2xl' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-72 bg-blue-700 relative z-10">
                        <img src="/samsung-phone.png" alt="Samsung Ultra" className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] opacity-10 z-0' />
                        <div className="w-full grid grid-cols-2 gap-1 p-5 relative z-10">
                            <div>
                                <h6 className='text-blue-300 my-3'>SAMSUNG ACCESSORIES</h6>
                                <h5 className='text-white font-bold text-4xl mb-3'>SAMSUNG</h5>
                                <p className='text-gray-300 text-sm mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quia?</p>
                                <button className='text-black text-sm bg-white hover:bg-gray-200 duration-200 py-3 px-6 rounded-3xl'>SHOW MORE</button>
                            </div>
                            <img src="/samsung-phone.png" alt="Xbox One S" className='drop-shadow-2xl' />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

        <div className="hero-container px-7 my-24">
            <LimitedProducts productColumns={4} />
        </div>

        <div className="container mx-auto my-52">
            <div className="call-to-action bg-black grid grid-cols-12 gap-0 md:gap-5 py-32 md:py-10 px-5">
                <div className="col-span-12 lg:col-span-6 place-items-center text-center">
                    <h6 className='text-gray-400 mb-2'>GAMING COLLECTION</h6>
                    <h4 className='text-white font-bold text-2xl md:text-4xl my-1'>Sony Playstation 5</h4>
                    <h4 className='text-white font-bold text-2xl md:text-4xl my-1'>Dual Shock Controller</h4>
                    <div className="flex justify-center items-center gap-5 mt-3">
                        <button className='bg-blue-600 hover:bg-blue-700 text-white py-3 px-7 rounded-3xl'>Buy Now</button>
                        <a href="#" className='text-gray-400 hover:underline hover:text-blue-600'>Read More</a>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 relative">
                    <img src="/ps5-controller.png" alt="" className='absolute' />
                </div>
            </div>
        </div>

        <div className="bg-gray-100">
            <HotDeals />                                            
        </div>

        <div className="container mx-auto my-32">
            <div className="grid grid-cols-12 gap-3">
                <div className="hidden lg:block col-span-3">
                    <div className="flex flex-col gap-5">
                        <div className="relative w-full h-[400px] p-5 bg-blue-600 overflow-hidden">
                            {/* <img src="/headphones.png" alt="" className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] opacity-30 z-0' /> */}
                            <h3 className='text-blue-300 z-10 my-3'>High Tech News</h3>
                            <h1 className='text-5xl font-bold text-white z-10 my-5'>Google Smart Home 2024</h1>
                            <button className='text-black bg-white rounded-full px-5 py-3 my-5 z-10'>Read More</button>
                        </div>
                        <div className="w-full">
                            <h3 className='uppercase text-center bg-blue-600 text-white py-4'>FEATURED Products</h3>
                            <div className="border-y-[1px] border-gray-300">
                                <div className="grid grid-cols-12 py-5 gap-3">
                                    <div className="col-span-3">
                                        <img src="/samsung-phone.png" alt="" />
                                    </div>
                                    <div className="col-span-9 flex flex-col">
                                        <h6>Samsung Galaxy S24</h6>
                                        <p className='text-blue-600'>$1000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-y-[1px] border-gray-300">
                                <div className="grid grid-cols-12 py-5 gap-3">
                                    <div className="col-span-3">
                                        <img src="/nike-shoes.png" alt="" />
                                    </div>
                                    <div className="col-span-9 flex flex-col">
                                        <h6>Nike Shoes Adult Size</h6>
                                        <p className='text-blue-600'>$299</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-y-[1px] border-gray-300">
                                <div className="grid grid-cols-12 py-5 gap-3">
                                    <div className="col-span-3">
                                        <img src="/nintendo-switch.png" alt="" />
                                    </div>
                                    <div className="col-span-9 flex flex-col">
                                        <h6>Nintendo Switch</h6>
                                        <p className='text-blue-600'>$599</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-y-[1px] border-gray-300">
                                <div className="grid grid-cols-12 py-5 gap-3">
                                    <div className="col-span-3">
                                        <img src="/ps5-controller-front.png" alt="" />
                                    </div>
                                    <div className="col-span-9 flex flex-col">
                                        <h6>PS5 Controller</h6>
                                        <p className='text-blue-600'>$150</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-9">
                    <LimitedProducts productColumns={3} maxProducts={6} />
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;