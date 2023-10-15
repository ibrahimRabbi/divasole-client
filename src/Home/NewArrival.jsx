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
                        <img src="https://i.ibb.co/mSv6hCW/1696676380836.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/89PQmHx/1696676380931-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/bbmZTnc/1696676380904.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/jTX8VsL/1696676380872.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src=" https://i.ibb.co/V2FqNbm/1696676380939.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/jMcVfMq/1696676380914.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/ry9Y9b0/1696676380894.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Arrival;
