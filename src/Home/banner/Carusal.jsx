import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../home.css';
AOS.init();

import BannerImage1 from '../../../public/banner/shoesBanner3.jpg'
import BannerImage2 from '../../../public/banner/cloth.jpg'

const Carusal = () => {
    return (
        <div className='lg:w-[80%] w-full'>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper">
                <SwiperSlide>
                        <img src={BannerImage1} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={BannerImage2}  />
                </SwiperSlide>

                
            </Swiper> 
        </div>
    );
};

export default Carusal;