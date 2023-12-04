import React from 'react';
import Marquee from "react-fast-marquee";
import Title from '../UI/Title';
const Marque = () => {
    return (
        <section className='w-[90%] mx-auto mb-16'>
            <div className='w-1/2 text-center mx-auto'>
                <Title title='Available Brand'/>
            </div>
            <Marquee>
                <div className='space-x-14 mt-7'>
                    <div className="avatar">
                        <div className="w-36 rounded-full">
                            <img src="https://i.ibb.co/tmYscrc/images.jpg" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-36 rounded-full">
                            <img src="https://i.ibb.co/N9Bcw3v/download-2.jpg" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-36 rounded-full">
                            <img src=" https://i.ibb.co/41JPvrw/download.png" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-36 rounded-full">
                            <img src=" https://i.ibb.co/BThQgnH/download-1.jpg" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-36 rounded-full">
                            <img src="https://i.ibb.co/zZp3RVt/download.jpg" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-36 rounded-full">
                            <img src="https://i.ibb.co/q0QbNZx/channels4-profile.jpg" />
                        </div>
                    </div>
                </div>
            </Marquee>
        </section>
    );
};

export default Marque;