import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './home.css'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Banner = () => {
    return (
        <header className='banner font-extrabold'>

            <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='bg-[#FFFFFF] lg:p-0 pt-16 relative'>
                        <img className='absolute z-30 -right-10 -top-5' width={140} src="https://i.ibb.co/GFn1T2f/chita.png" alt=""/>
                        <div className='flex justify-center items-center w-[95%] mx-auto relative'>
                            <img className='lg:w-[600px] w-[270px] ' src="https://i.ibb.co/Pj6VrVj/banner2.jpg" />
                                <div>
                                <h1 className='lg:text-6xl text-2xl'>Explore all the toys what you imagine</h1>
                                <p className='lg:text-lg text-xs mt-3'>get up to 30% off on the first order</p>
                                <button className='bg-teal-500 text-sm text-white p-2 rounded-lg mt-3 hover:bg-teal-600 hover:text-lg duration-100 '>Visit now</button>
                                </div> 
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='bg-[#fcf2ec] lg:p-0 pt-10'>
                        <img className='absolute z-30 -right-10 -top-5' width={140} src="https://i.ibb.co/GFn1T2f/chita.png" />  
                        <div className='flex justify-center items-center lg:w-[95%] w-[98%] mx-auto relative'>
                            <img className='lg:w-[470px] w-[230px]' src="https://i.ibb.co/JQmc3Qm/banner1.png" />
                            <div className='flex justify-center items-center lg:relative -left-28'>
                                <img width={230} className='lg:block hidden' src="https://i.ibb.co/R4Lftds/offer.png" alt="" />
                                <div>
                                    <h1 className='lg:text-6xl text-2xl'><span className=' text-red-600'>70%</span> Flat Discount is going on</h1>
                                    <p className='lg:text-lg text-xs mt-2'>Limited offer, so why late..!! quick buy now</p>
                                    <button className='bg-teal-500 text-sm text-white p-2 rounded-lg mt-3 hover:bg-teal-600 hover:text-lg duration-100 '>Buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='bg-[#fcf2ec] lg:p-0 pt-10'>
                        <img className='absolute z-30 -right-10 -top-5' width={140} src="https://i.ibb.co/GFn1T2f/chita.png" />
                        <div className='flex justify-center items-center lg:w-[95%] w-[98%] mx-auto relative'>
                            <img className='lg:w-[470px] w-[230px] ' src="https://i.ibb.co/ck7dwL7/banner3.png" />
                            <div>
                                <h1 className='lg:text-6xl text-2xl'>Find your best choice with us within kiddo Park.</h1>
                                <p className='lg:text-lg text-xs mt-2'>becouse we provide a qualitifull Kids accessories.....</p>
                                <button className='bg-teal-500 text-sm text-white p-2 rounded-lg mt-3 hover:bg-teal-600 hover:text-lg duration-100 '>Visit now</button>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>



            </Swiper>


        </header>
    );
};

export default Banner;





