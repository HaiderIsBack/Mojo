import { useEffect, useState } from 'react';
import './index.css';

// Icon Imports
import { 
    KeyboardArrowDownSharp,
    MailOutline,
    Shuffle, 
    ShoppingCartOutlined, 
    FavoriteBorderOutlined, 
    Facebook, 
    LinkedIn, 
    Twitter, 
    Instagram, 
    Menu} from '@mui/icons-material';

const Nav = () => {
    const [showFixedNavbar, setShowFixedNavbar] = useState(false);

    useEffect(() => {
        window.onscroll = function() {showNavbar()};

        function showNavbar() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                setShowFixedNavbar(true);
            } else {
                setShowFixedNavbar(false);
            }
        }
    }, []);
    return (
        <>
            <TopHeader />
            <nav className='py-12 px-7 grid grid-cols-4 gap-2 items-center'>
                <div className="block lg:hidden">
                    <Menu />
                </div>
                <div className="brand-title col-span-2 lg:col-span-1">
                    <h1 className='font-bold text-3xl sm:text-5xl leading-none text-center mt-2 cursor-default'>MOJO</h1>
                </div>
                <div className="search-bar col-span-2 hidden lg:grid grid-cols-3 gap-2 px-5 rounded-3xl border-2 border-gray-900 align-middle">
                    <input type="text" name="" id="" placeholder='Search Products' className='outline-none col-span-2 py-2' />
                    <div className="search-filter dropdown group py-2">
                        <div className="dropdown-text pl-5 cursor-pointer border-l-[1px] border-gray-600">All Categories <KeyboardArrowDownSharp fontSize='small' /></div>
                        <div className="dropdown-content hidden group-hover:block absolute bg-white border text-black border-gray-300 mt-2 shadow-lg">
                        <menu>
                            <li className='px-5 py-3 w-72 hover:text-blue-700 font-medium cursor-pointer'><a href="#">Consoles (Nintendo Switch)</a></li>
                            <li className='px-5 py-3 w-72 hover:text-blue-700 font-medium cursor-pointer'><a href="#">Gadgets</a></li>
                            <li className='px-5 py-3 w-72 hover:text-blue-700 font-medium cursor-pointer'><a href="#">Tv & Accessories</a></li>
                            <li className='px-5 py-3 w-72 hover:text-blue-700 font-medium cursor-pointer'><a href="#">Computers, Laptops & Accessories</a></li>
                        </menu>
                    </div>
                    </div>
                </div>
                <div className="flex justify-end gap-2 pl-5">
                    <a href="#" className='hidden lg:block hover:text-blue-700'>Login / Register</a>
                    <div className="flex justify-end gap-3">
                        <a href="#" className='hidden lg:block hover:text-blue-700'><FavoriteBorderOutlined /></a>
                        <a href="#" className='hidden lg:block hover:text-blue-700'><Shuffle /><sup className='bg-blue-600 text-white rounded-full' style={{padding: "0.1rem 0.2rem"}}>2</sup></a>
                        <a href="#" className='flex items-center hover:text-blue-700'><ShoppingCartOutlined /> $14.00</a>
                    </div>
                </div>
            </nav>

            {
                showFixedNavbar ? (
                    <FixedNavbar />
                ) : null
            }
        </>
    )
}

const TopHeader = () => {
    return (
        <>
        <div className="top-header-container flex justify-between align-middle px-7 font-normal text-xs">
            <div className="left-section hidden lg:flex gap-0">
                <div className="language dropdown group relative py-3 px-4 border-l-[0.2px] border-gray-300">
                    <div className="dropdown-text cursor-pointer">English <KeyboardArrowDownSharp fontSize='small' /></div>
                    <div className="dropdown-content hidden group-hover:block absolute bg-white border text-black border-gray-300 mt-2 shadow-lg">
                        <menu>
                            <li className='px-10 py-3 hover:text-blue-700 font-medium cursor-pointer'><a href="#">Dutch</a></li>
                            <li className='px-10 py-3 hover:text-blue-700 font-medium cursor-pointer'><a href="#">Hindi</a></li>
                            <li className='px-10 py-3 hover:text-blue-700 font-medium cursor-pointer'><a href="#">Urdu</a></li>
                        </menu>
                    </div>
                </div>
                <div className="country dropdown group relative py-3 px-4 border-l-[0.2px] border-gray-300">
                    <div className="dropdown-text cursor-pointer">Pakistan <KeyboardArrowDownSharp fontSize='small' /></div>
                    <div className="dropdown-content hidden group-hover:block absolute bg-white border text-black border-gray-300 mt-2 shadow-lg">
                        <menu>
                            <li className='px-10 py-3 hover:text-blue-700 font-medium cursor-pointer'><a href="#">Germany</a></li>
                            <li className='px-10 py-3 hover:text-blue-700 font-medium cursor-pointer'><a href="#">Japan</a></li>
                            <li className='px-10 py-3 hover:text-blue-700 font-medium cursor-pointer'><a href="#">USA</a></li>
                        </menu>
                    </div>
                </div>
                <h6 className='hidden lg:block py-3 px-4 border-l-[0.2px] border-gray-300'>Free Shipping for all orders of $150</h6>
            </div>
            <div className="right-section flex w-full lg:w-auto justify-center items-center gap-0">
                <menu className='flex gap-1 px-4 border-none lg:border-r-[0.2px] border-gray-300'>
                    <li className='py-2 hover:text-blue-200 transition duration-200'><a href="http://" target="_blank" rel="noopener noreferrer"><Facebook fontSize='small' /></a></li>
                    <li className='py-2 hover:text-blue-200 transition duration-200'><a href="http://" target="_blank" rel="noopener noreferrer"><Instagram fontSize='small' /></a></li>
                    <li className='py-2 hover:text-blue-200 transition duration-200'><a href="http://" target="_blank" rel="noopener noreferrer"><LinkedIn fontSize='small' /></a></li>
                    <li className='py-2 hover:text-blue-200 transition duration-200'><a href="http://" target="_blank" rel="noopener noreferrer"><Twitter fontSize='small' /></a></li>
                </menu>
                <a href="#" className='hidden lg:block py-3 px-4 border-r-[0.2px] border-gray-300 hover:text-blue-200 transition duration-200'><MailOutline fontSize='small' /> News Letter</a>
                <a href="#" className='hidden lg:block py-3 px-4 border-r-[0.2px] border-gray-300 hover:text-blue-200 transition duration-200'>Contact Us</a>
                <a href="#" className='hidden lg:block py-3 px-4 border-r-[0.2px] border-gray-300 hover:text-blue-200 transition duration-200'>FAQ</a>
            </div>
        </div>
        </>
    )
}

const FixedNavbar = () => {
    return (
        <>
        <div className="fixed top-0 left-0 w-full py-4 bg-white border-b-2 border-blue-600 z-20">
            <div className="grid grid-cols-12">
                <div className="flex lg:hidden justify-center items-center col-span-3 pl-2">
                    <Menu />
                </div>
                <div className="col-span-6 lg:col-span-3">
                    <div className="brand-title">
                        <h1 className='font-bold text-3xl sm:text-4xl leading-none text-center mt-2 cursor-default'>MOJO</h1>
                    </div>
                </div>
                <div className="hidden lg:block col-span-6">
                    <nav className='flex gap-5 py-3 px-3  justify-center'>
                        <a href="#" className='hover:text-blue-700'>Home</a>
                        <a href="#" className='hover:text-blue-700'>Shop</a>
                        <a href="#" className='hover:text-blue-700'>Contact Us</a>
                        <a href="#" className='hover:text-blue-700'>Blogs</a>
                    </nav>
                </div>
                <div className="col-span-3">
                    <div className="flex items-center h-full gap-2 pl-5">
                        <a href="#" className='hidden lg:block hover:text-blue-700'>Login / Register</a>
                        <div className="flex gap-3">
                            <a href="#" className='hidden lg:block hover:text-blue-700'><FavoriteBorderOutlined /></a>
                            <a href="#" className='hidden lg:block hover:text-blue-700'><Shuffle /><sup className='bg-blue-600 text-white rounded-full' style={{padding: "0.1rem 0.2rem"}}>2</sup></a>
                            <a href="#" className='flex items-center hover:text-blue-700'><ShoppingCartOutlined /> $14.00</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Nav;