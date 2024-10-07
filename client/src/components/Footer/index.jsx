import './index.css';

import { LocationOn, PhoneAndroid, MailSharp } from '@mui/icons-material';

const Footer = () => {
    return (
        <>
        <footer className='bg-black mt-5 py-10 px-5 sm:px-0'>
            <div className="container mx-auto grid grid-cols-12 gap-5 text-white">
                <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                    <h1 className='text-5xl font-bold mb-5'>MOJO</h1>
                    <p className='text-sm text-gray-300 mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo eaque dolor vel natus explicabo laudantium nesciunt exercitationem illum at perspiciatis.</p>
                    <a href='' className='text-sm text-gray-300 block my-3'><LocationOn fontSize='small' /> Lorem ipsum dolor sit amet.</a>
                    <a href='tel:+923278848936' className='text-sm text-gray-300 block my-3'><PhoneAndroid fontSize='small' /> (+92) 327-8848936</a>
                    <a href='mailto:haidershahpak@gmail.com' className='text-sm text-gray-300 block my-3'><MailSharp fontSize='small' /> haidershahpak@gmail.com</a>
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                    <h4 className='font-bold uppercase mb-5'>Recent Posts</h4>
                    <div className="grid grid-cols-3 border-b-[1px] border-gray-700 py-5 pt-0">
                        <img src="/samsung-camera-post.jpg" alt="" className='w-[75px] h-[75px] object-cover' />
                        <div className="col-span-2">
                            <h6>Gadgets for capturing moments of life</h6>
                            <p className='text-sm text-gray-400'>August 12, 2022</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 py-5">
                        <img src="/braun-watch-post.jpg" alt="" className='w-[75px] h-[75px] object-cover' />
                        <div className="col-span-2">
                            <h6>Watches for Men timeless treasure</h6>
                            <p className='text-sm text-gray-400'>July 16, 2024</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-4 lg:col-span-2">
                    <h4 className='font-bold uppercase mb-5'>Our Stores</h4>
                    <ul>
                        <li className='text-sm text-gray-400 hover:text-white duration-300 my-2'><a href="#">Lahore</a></li>
                        <li className='text-sm text-gray-400 hover:text-white duration-300 my-2'><a href="#">Islamabad</a></li>
                        <li className='text-sm text-gray-400 hover:text-white duration-300 my-2'><a href="#">Karachi</a></li>
                        <li className='text-sm text-gray-400 hover:text-white duration-300 my-2'><a href="#">Rawalpindi</a></li>
                        <li className='text-sm text-gray-400 hover:text-white duration-300 my-2'><a href="#">Dubai</a></li>
                    </ul>
                </div>
                <div className="col-span-12 sm:col-span-4 lg:col-span-2">
                    <h4 className='font-bold uppercase mb-5'>Useful links</h4>
                    <ul>
                        <li className='text-sm text-gray-400 hover:text-white duration-300 my-2'><a href="#">Privacy Policy</a></li>
                        <li className='text-sm text-gray-400 hover:text-white duration-300 my-2'><a href="#">Terms & Conditions</a></li>
                        <li className='text-sm text-gray-400 hover:text-white duration-300 my-2'><a href="#">Return Policy</a></li>
                        <li className='text-sm text-gray-400 hover:text-white duration-300 my-2'><a href="#">Latest News</a></li>
                        <li className='text-sm text-gray-400 hover:text-white duration-300 my-2'><a href="#">Our Sitemap</a></li>
                    </ul>
                </div>
                <div className="col-span-12 sm:col-span-4 lg:col-span-2">
                    <h4 className='font-bold uppercase mb-5'>Footer menu</h4>
                    <ul>
                        <li className='text-sm text-gray-400 hover:text-white duration-300 my-2'><a href="#">Instagram Profile</a></li>
                        <li className='text-sm text-gray-400 hover:text-white duration-300 my-2'><a href="#">New Collection</a></li>
                        <li className='text-sm text-gray-400 hover:text-white duration-300 my-2'><a href="#">Woman Dress</a></li>
                        <li className='text-sm text-gray-400 hover:text-white duration-300 my-2'><a href="#">Contact Us</a></li>
                        <li className='text-sm text-gray-400 hover:text-white duration-300 my-2'><a href="#">About Us</a></li>
                    </ul>
                </div>
            </div>
        </footer>
        <LowerFooter />
        </>
    );
}

const LowerFooter = () => {
    return (
        <div className="bg-black text-white border-t-[1px] border-gray-700 py-5 px-5 sm:px-0">
            <div className="container mx-auto grid grid-cols-2 lg:grid-cols-3">
                <p className='text-sm place-content-center'>MOJO © {new Date().getFullYear()} By Atomic Solutions</p>
                <p className='text-sm text-center place-content-center hidden lg:block'>Syed Zulqarnain Haider</p>
                <ul className='flex justify-end items-center gap-3'>
                    <li><img src="/visa-icon.png" alt="" className='w-[30px]' loading='lazy' /></li>
                    <li><img src="/mastercard-icon.png" alt="" className='w-[30px]' loading='lazy' /></li>
                    <li><img src="/easypaisa-icon.png" alt="" className='w-[30px]' loading='lazy' /></li>
                    <li><img src="/jazzcash-icon.png" alt="" className='w-[30px]' loading='lazy' /></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;