import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Title from '../UI/Title';


const Arrival = () => {


    return (
        <section className="py-20 w-[90%] mt-20 mx-auto">
             <Title title='new Arrival'/>
            <div className='mt-16'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                      
                        <img src="https://i.ibb.co/30yyCPs/Black-Panther-Black-Panther-Posing-Marvel-Outdoor-Graphic-11-W-x-11-H.jpg" />
                         
                    </SwiperSlide>
                    <SwiperSlide>
                        <img   src="https://i.ibb.co/zR8QxRG/b2a0d1d5-625c-4603-a52f-12e8ca12e4e1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/qWFTPwJ/1696676380914.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/9Nz9cnp/fc962b580c5c74a247a09df8911f7b23.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/Vmr8yNZ/FB-IMG-1690052128298.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/CHF4k96/FB-IMG-1690086785913.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/NtD8KmG/FB-IMG-1690053038306.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/jTyRYtv/FB-IMG-1690096862344.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/mJjgnGV/FB-IMG-1690086778831.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Arrival;
