import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './home.css'
import { Autoplay,   Navigation, Pagination } from "swiper/modules";
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
                    <div className='bg-[#FFFFFF] relative'>
                        <img className='absolute z-30 -right-10 -top-5' width={140} src="../../public/assest/chita.png" alt=""/>
                        <div className='flex justify-center items-center w-[95%] mx-auto relative'>
                            <img width={600} src="../../public/assest/banner2.jpg" />
                                <div>
                                    <h1 className='text-6xl'>Explore all the toys what you imagine</h1>
                                <p className='text-lg mt-3'>get up to 30% off on the first order</p>
                                <button className='bg-teal-500 text-sm text-white p-2 rounded-lg mt-3 hover:bg-teal-600 hover:text-lg duration-100 '>Visit now</button>
                                </div> 
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='bg-[#fcf2ec]'>
                        <img className='absolute z-30 -right-10 -top-5' width={140} src="../../public/assest/chita.png" alt="" />
                        <div className='flex justify-center items-center w-[95%] mx-auto relative'>
                            <img src="../../public/assest/banner1.png" />
                            <div className='flex justify-center items-center relative -left-28'>
                                <img width={230} src="../../public/assest/offer.png" alt="" />
                                <div>
                                    <h1 className='text-6xl'><span className=' text-red-600'>70%</span> Flat Discount is going on</h1>
                                    <p className='text-lg mt-3'>Limited offer, so why late..!! quick buy now</p>
                                    <button className='bg-teal-500 text-sm text-white p-2 rounded-lg mt-3 hover:bg-teal-600 hover:text-lg duration-100 '>Buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </SwiperSlide>

                <SwiperSlide>
                    <div className='bg-[#fcf2ec]'>
                        <img className='absolute z-30 -right-10 -top-5' width={140} src="../../public/assest/chita.png" alt="" />
                        <div className='flex justify-center items-center w-[95%] mx-auto relative'>
                            <img src="../../public/assest/banner3.png" width={470} />   
                                <div>
                                    <h1 className='text-6xl'>Find your best choice with us within kiddo Park.</h1>
                                <p className='text-lg mt-2'>becouse we provide a qualitifull Kids accessories.....</p>
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





