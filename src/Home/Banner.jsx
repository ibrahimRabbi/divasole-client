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
        <header className='banner pt-20  py-10'>     
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Autoplay,  Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='w-[90%] mx-auto flex justify-evenly  items-center'>
                        <div data-aos="fade-right" className='w-[50%]'>
                            <h1 className='text-6xl text-start font-semibold'>Lorem ipsum dolor sit amet consectetur elit. Incidunt, perspiciatis.</h1>
                            <p className='text-base mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt impedit quidem eaque velit inventore nisi ea quibusdam, fugiat id distinctio. Voluptatem blanditiis cumque quasi eius dolor cum, libero impedit eligendi facilis tempore, inventore sed ipsam esse dignissimos ipsum provident deserunt.</p>
                        </div>
                        <img data-aos="fade-left" loading='lazy' width={350} src="https://i.ibb.co/b2r2r55/1696653667582.png" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[90%] mx-auto flex justify-evenly  items-center'>
                        <div data-aos="fade-right" className='w-[50%]'>
                            <h1 className='text-6xl text-start font-semibold'>Lorem ipsum dolor sit amet consectetur elit. Incidunt, perspiciatis.</h1>
                            <p className='text-base mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt impedit quidem eaque velit inventore nisi ea quibusdam, fugiat id distinctio. Voluptatem blanditiis cumque quasi eius dolor cum, libero impedit eligendi facilis tempore, inventore sed ipsam esse dignissimos ipsum provident deserunt.</p>
                        </div>
                        <img data-aos="fade-left" loading='lazy' width={390} src="https://i.ibb.co/BCnX2rw/1696653667574.png" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[90%] mx-auto flex justify-evenly  items-center'>
                        <div data-aos="fade-right" className='w-[50%]'>
                            <h1 className='text-6xl text-start font-semibold'>Lorem ipsum dolor sit amet consectetur elit. Incidunt, perspiciatis.</h1>
                            <p className='text-base mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt impedit quidem eaque velit inventore nisi ea quibusdam, fugiat id distinctio. Voluptatem blanditiis cumque quasi eius dolor cum, libero impedit eligendi facilis tempore, inventore sed ipsam esse dignissimos ipsum provident deserunt.</p>
                        </div>
                        <img data-aos="fade-left" loading='lazy' width={280} src="https://i.ibb.co/N7xLhCQ/1696653667588.png" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[90%] mx-auto flex justify-evenly  items-center'>
                        <div data-aos="fade-right" className='w-[50%]'>
                            <h1 className='text-6xl text-start font-semibold'>Lorem ipsum dolor sit amet consectetur elit. Incidunt, perspiciatis.</h1>
                            <p className='text-base mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt impedit quidem eaque velit inventore nisi ea quibusdam, fugiat id distinctio. Voluptatem blanditiis cumque quasi eius dolor cum, libero impedit eligendi facilis tempore, inventore sed ipsam esse dignissimos ipsum provident deserunt.</p>
                        </div>
                        <img data-aos="fade-left" loading='lazy' width={350} src="https://i.ibb.co/b62tbqv/1696653667598.png" alt="" />
                    </div>
                </SwiperSlide>


</Swiper>
            
        </header>
    );
};

export default Banner;