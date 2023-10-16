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
        <header className='banner pt-11  '>     
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
                    <div className='w-[90%] pt-6 mx-auto flex justify-evenly  items-center'>
                        <div data-aos="fade-right" className='w-[50%]'>
                            <h1 className='text-[40px] text-teal-700 text-start font-semibold'>Get your best choice with toys park. becouse we provide us a quality full products</h1>
                            <p className='text-base mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt impedit quidem eaque velit inventore nisi ea quibusdam, fugiat id distinctio. Voluptatem blanditiis cumque quasi eius dolor cum, libero impedit  </p>
                        </div>
                        <img data-aos="fade-left" loading='lazy' width={350} src="https://i.ibb.co/b2r2r55/1696653667582.png" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[90%] mx-auto flex justify-evenly  items-center'>
                        <div data-aos="fade-right" className='w-[50%]'>
                            <h1 className='text-4xl text-teal-700 text-start font-semibold tracking-normal leading-normal'>Thousend of variant toys available in the toys park</h1>
                            <p className='text-base mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt impedit quidem eaque velit inventore nisi ea quibusdam, fugiat id distinctio. Voluptatem blanditiis cumque quasi eius dolor cum, libero impedit</p>
                        </div>
                        <img data-aos="fade-left" loading='lazy' width={380} src="https://i.ibb.co/BCnX2rw/1696653667574.png" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[90%] mx-auto pt-11 flex justify-evenly  items-center'>
                        <div data-aos="fade-right" className='w-[50%]'>
                            <h1 className='text-4xl text-pink-700 text-start font-semibold tracking-normal leading-normal'>60% discount has running  on the transfermar toys</h1>
                            <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt impedit quidem eaque velit inventore nisi ea quibusdam, fugiat id distinctio. Voluptatem blanditiis cumque quasi eius dolor cum, libero impedit  </p>
                        </div>
                        <img data-aos="fade-left" loading='lazy' width={260} src="https://i.ibb.co/N7xLhCQ/1696653667588.png" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[90%] mx-auto pt-11 flex justify-evenly  items-center'>
                        <div data-aos="fade-right" className='w-[50%]'>
                            <h1 className='text-4xl text-purple-700 text-start font-semibold tracking-normal leading-normal'>so why you getting late!
                            lets Enjoy and Explore toys park world</h1>
                            <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt impedit quidem eaque velit inventore nisi ea quibusdam, fugiat id distinctio. Voluptatem blanditiis cumque quasi eius dolor cum, libero impedit  </p>
                        </div>
                        <img data-aos="fade-left" loading='lazy' width={350} src="https://i.ibb.co/b62tbqv/1696653667598.png" alt="" />
                    </div>
                </SwiperSlide>


</Swiper>
            
        </header>
    );
};

export default Banner;