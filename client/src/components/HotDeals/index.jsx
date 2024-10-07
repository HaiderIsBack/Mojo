import { useEffect, useState } from 'react';
import './index.css';

import { Shuffle, FavoriteBorderOutlined } from '@mui/icons-material';

import { Swiper, SwiperSlide } from 'swiper/react';

const HotDeals = () => {

    useEffect(() => {
        const imgBoxes = document.querySelectorAll(".special-img-box");

        imgBoxes.forEach((imgBox) => {
            imgBox.addEventListener("mousemove", (event) => {
                const img = imgBox.getElementsByTagName("img")[0];
                const rect = imgBox.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width * 100;
                const y = (event.clientY - rect.top) / rect.height * 100;
                
                img.style.transformOrigin = `${x}% ${y}%`; // Changes the zoom origin based on mouse position
                img.style.transform = "scale(1.5)"; // Maintains the zoom effect
            });
            imgBox.addEventListener('mouseleave', () => {
                const img = imgBox.getElementsByTagName("img")[0];
                img.style.transformOrigin = "center"; // Resets the origin to center
                img.style.transform = "scale(1)"; // Resets the zoom
            });
        });

        return () => {
            imgBoxes.forEach((imgBox) => {
                imgBox.removeEventListener("mousemove", (event) => {
                    const rect = imgBox.getBoundingClientRect();
                    const x = (event.clientX - rect.left) / rect.width * 100;
                    const y = (event.clientY - rect.top) / rect.height * 100;
                    
                    img.style.transformOrigin = `${x}% ${y}%`; // Changes the zoom origin based on mouse position
                    img.style.transform = "scale(1.5)"; // Maintains the zoom effect
                });
                imgBox.removeEventListener('mouseleave', () => {
                    img.style.transformOrigin = "center"; // Resets the origin to center
                    img.style.transform = "scale(1)"; // Resets the zoom
                });
            });
        }
    }, []);

    return (
        <div className="hotdeals container mx-auto w-full py-20">
            <center>
                <h3 className='inline-block relative z-10 text-2xl font-bold uppercase border-b-2 border-blue-600 mb-[-2px]'>Todays Hot Deals</h3>
            </center>
            <div className="w-full hidden lg:grid grid-cols-12 gap-5 border-t-2 border-gray-300 py-10">
                <div className="col-span-12 lg:col-span-4 px-5 lg:px-0 text-center">
                    <div className="w-full h-[300px] lg:h-[400px] bg-white border-[1px] border-gray-300 rounded-lg relative overflow-hidden group">
                        <img src="/Xbox-one-s.png" alt="" className='w-full h-full scale-75 group-hover:scale-110 duration-300 cursor-pointer object-cover drop-shadow-lg' />
                        <button className='absolute bottom-[-25%] left-0 w-full bg-blue-600 text-white py-3 opacity-0 group-hover:opacity-100 group-hover:bottom-0 duration-300'>Add to Cart</button>

                        <div className="absolute top-1 right-1 flex flex-col gap-2 opacity-0 group-hover:opacity-100 duration-300 z-10">
                            <div className="p-2 bg-white text-black border-[1px] border-gray-300 rounded-lg cursor-pointer">
                                <Shuffle className='hover:text-blue-600 duration-200 transition' />
                            </div>
                            <div className="p-2 bg-white text-black border-[1px] border-gray-300 rounded-lg cursor-pointer">
                                <FavoriteBorderOutlined className='hover:text-blue-600 duration-200 transition' />
                            </div>
                        </div>
                    </div>
                    <h6 className='font-bold my-2 mb-0'>Xbox One S</h6>
                    <p className='text-gray-400'>Console</p>
                    <p className='text-blue-600'>$159</p>
                    <div className="countdown">
                        <CountDown targetDate={"Jan 1, 2025 00:00:00"} />
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-4 px-5 lg:px-0 text-center">
                    <div className="w-full h-[200px] lg:h-[400px] bg-white border-[1px] border-gray-300 rounded-lg relative overflow-hidden group">
                        <img src="/spiderman-mask.png" alt="" className='w-full h-full scale-100 group-hover:scale-110 duration-300 cursor-pointer object-cover drop-shadow-lg' />
                        <button className='absolute bottom-[-25%] left-0 w-full bg-blue-600 text-white py-3 opacity-0 group-hover:opacity-100 group-hover:bottom-0 duration-300'>Add to Cart</button>

                        <div className="absolute top-1 right-1 flex flex-col gap-2 opacity-0 group-hover:opacity-100 duration-300 z-10">
                            <div className="p-2 bg-white text-black border-[1px] border-gray-300 rounded-lg cursor-pointer">
                                <Shuffle className='hover:text-blue-600 duration-200 transition' />
                            </div>
                            <div className="p-2 bg-white text-black border-[1px] border-gray-300 rounded-lg cursor-pointer">
                                <FavoriteBorderOutlined className='hover:text-blue-600 duration-200 transition' />
                            </div>
                        </div>
                    </div>
                    <h6 className='font-bold my-2 mb-0'>Spiderman Adult Mask</h6>
                    <p className='text-gray-400'>Clothes</p>
                    <p className='text-blue-600'>$159</p>
                    <div className="countdown">
                        <CountDown targetDate={"Oct 3, 2024 15:37:00"} />
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-4 px-5 lg:px-0 text-center">
                    <div className="w-full h-[200px] lg:h-[400px] bg-white border-[1px] border-gray-300 rounded-lg relative overflow-hidden group">
                        <img src="/ps5-controller-front.png" alt="" className='w-full h-full scale-100 group-hover:scale-110 duration-300 cursor-pointer object-cover drop-shadow-lg' />
                        <button className='absolute bottom-[-25%] left-0 w-full bg-blue-600 text-white py-3 opacity-0 group-hover:opacity-100 group-hover:bottom-0 duration-300'>Add to Cart</button>

                        <div className="absolute top-1 right-1 flex flex-col gap-2 opacity-0 group-hover:opacity-100 duration-300 z-10">
                            <div className="p-2 bg-white text-black border-[1px] border-gray-300 rounded-lg cursor-pointer">
                                <Shuffle className='hover:text-blue-600 duration-200 transition' />
                            </div>
                            <div className="p-2 bg-white text-black border-[1px] border-gray-300 rounded-lg cursor-pointer">
                                <FavoriteBorderOutlined className='hover:text-blue-600 duration-200 transition' />
                            </div>
                        </div>
                    </div>
                    <h6 className='font-bold my-2 mb-0'>PS5 Dual Shock Controller</h6>
                    <p className='text-gray-400'>Console</p>
                    <p className='text-blue-600'>$159</p>
                    <div className="countdown">
                        <CountDown targetDate={"Jan 1, 2025 00:00:00"} />
                    </div>
                </div>
            </div>

            {/* Swiper */}
            <Swiper className='block lg:hidden border-t-2 border-gray-300 py-10' loop={false} slidesPerView={1}>
                <SwiperSlide>
                <div className="px-5 lg:px-0 text-center">
                    <div className="w-full h-[325px] lg:h-[400px] bg-white border-[1px] border-gray-300 rounded-lg relative overflow-hidden group">
                        <img src="/Xbox-one-s.png" alt="" className='w-full h-full scale-75 group-hover:scale-100 duration-300 cursor-pointer object-cover drop-shadow-lg' />
                        <button className='absolute bottom-[-25%] left-0 w-full bg-blue-600 text-white py-3 opacity-0 group-hover:opacity-100 group-hover:bottom-0 duration-300'>Add to Cart</button>

                        <div className="absolute top-1 right-1 flex flex-col gap-2 opacity-0 group-hover:opacity-100 duration-300 z-10">
                            <div className="p-2 bg-white text-black border-[1px] border-gray-300 rounded-lg cursor-pointer">
                                <Shuffle className='hover:text-blue-600 duration-200 transition' />
                            </div>
                            <div className="p-2 bg-white text-black border-[1px] border-gray-300 rounded-lg cursor-pointer">
                                <FavoriteBorderOutlined className='hover:text-blue-600 duration-200 transition' />
                            </div>
                        </div>
                    </div>
                    <h6 className='font-bold my-2 mb-0'>Xbox One S</h6>
                    <p className='text-gray-400'>Console</p>
                    <p className='text-blue-600'>$159</p>
                    <div className="countdown">
                        <CountDown targetDate={"Jan 1, 2025 00:00:00"} />
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="px-5 lg:px-0 text-center">
                    <div className="w-full h-[325px] lg:h-[400px] bg-white border-[1px] border-gray-300 rounded-lg relative overflow-hidden group">
                        <img src="/spiderman-mask.png" alt="" className='w-full h-full scale-75 group-hover:scale-100 duration-300 cursor-pointer object-cover drop-shadow-lg' />
                        <button className='absolute bottom-[-25%] left-0 w-full bg-blue-600 text-white py-3 opacity-0 group-hover:opacity-100 group-hover:bottom-0 duration-300'>Add to Cart</button>

                        <div className="absolute top-1 right-1 flex flex-col gap-2 opacity-0 group-hover:opacity-100 duration-300 z-10">
                            <div className="p-2 bg-white text-black border-[1px] border-gray-300 rounded-lg cursor-pointer">
                                <Shuffle className='hover:text-blue-600 duration-200 transition' />
                            </div>
                            <div className="p-2 bg-white text-black border-[1px] border-gray-300 rounded-lg cursor-pointer">
                                <FavoriteBorderOutlined className='hover:text-blue-600 duration-200 transition' />
                            </div>
                        </div>
                    </div>
                    <h6 className='font-bold my-2 mb-0'>Spiderman Adult Mask</h6>
                    <p className='text-gray-400'>Clothes</p>
                    <p className='text-blue-600'>$159</p>
                    <div className="countdown">
                        <CountDown targetDate={"Oct 3, 2024 15:37:00"} />
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="col-span-12 lg:col-span-4 px-5 lg:px-0 text-center">
                    <div className="w-full h-[325px] lg:h-[400px] bg-white border-[1px] border-gray-300 rounded-lg relative overflow-hidden group">
                        <img src="/ps5-controller-front.png" alt="" className='w-full h-full scale-75 group-hover:scale-100 duration-300 cursor-pointer object-cover drop-shadow-lg' />
                        <button className='absolute bottom-[-25%] left-0 w-full bg-blue-600 text-white py-3 opacity-0 group-hover:opacity-100 group-hover:bottom-0 duration-300'>Add to Cart</button>

                        <div className="absolute top-1 right-1 flex flex-col gap-2 opacity-0 group-hover:opacity-100 duration-300 z-10">
                            <div className="p-2 bg-white text-black border-[1px] border-gray-300 rounded-lg cursor-pointer">
                                <Shuffle className='hover:text-blue-600 duration-200 transition' />
                            </div>
                            <div className="p-2 bg-white text-black border-[1px] border-gray-300 rounded-lg cursor-pointer">
                                <FavoriteBorderOutlined className='hover:text-blue-600 duration-200 transition' />
                            </div>
                        </div>
                    </div>
                    <h6 className='font-bold my-2 mb-0'>PS5 Dual Shock Controller</h6>
                    <p className='text-gray-400'>Console</p>
                    <p className='text-blue-600'>$159</p>
                    <div className="countdown">
                        <CountDown targetDate={"Jan 1, 2025 00:00:00"} />
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
            
            <center>
                <button className='bg-blue-600 text-white hover:bg-blue-700 duration-300 py-3 px-7 rounded-full'>View Deals</button>
            </center>
        </div>
    );
}

const CountDown = ({targetDate}) => {
    const [time, setTime] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
    });
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const countdownDate = new Date(targetDate).getTime();
        const timer = setInterval(()=>{
            const now = new Date().getTime();

            const distance = countdownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(days < 10){
                days = "0" + days;
            }
            if(hours < 10){
                hours = "0" + hours;
            }
            if(minutes < 10){
                minutes = "0" + minutes;
            }
            if(seconds < 10){
                seconds = "0" + seconds;
            }

            if(distance < 0){
                clearInterval(timer);
                setIsExpired(true);
                return;
            }

            setTime({days, hours, minutes, seconds});
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <>
        { !(isExpired) ? (<div className="flex justify-center items-center gap-2 my-3">
            <div className="box p-3 bg-white border-2 border-blue-600 rounded-md">
                <h6 className='text-blue-600 text-xs lg:text-md'>{time.days}</h6>
                <p className='text-xs'>Days</p>
            </div>
            :
            <div className="box p-3 bg-white border-2 border-blue-600 rounded-md">
                <h6 className='text-blue-600 text-xs lg:text-md'>{time.hours}</h6>
                <p className='text-xs'>Hours</p>
            </div>
            :
            <div className="box p-3 bg-white border-2 border-blue-600 rounded-md">
                <h6 className='text-blue-600 text-xs lg:text-md'>{time.minutes}</h6>
                <p className='text-xs'>Minutes</p>
            </div>
            :
            <div className="box p-3 bg-white border-2 border-blue-600 rounded-md">
                <h6 className='text-blue-600 text-xs lg:text-md'>{time.seconds}</h6>
                <p className='text-xs'>Seconds</p>
            </div>
        </div>) : <p className='text-red-600 font-bold text-center my-8 uppercase'>Expired</p>}
        </>
    );
}

export default HotDeals;