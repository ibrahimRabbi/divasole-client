import React from 'react';
import offer1 from '../../public/feature1.jpg'
import offer2 from '../../public/feature2.jpg'
import offer3 from '../../public/feature3.jpg'
import offer4 from '../../public/feature4.jpg'
const  Offer = () => {
    return (
        <section className='w-full items-center grid lg:grid-cols-5 grid-cols-2 gap-6 mt-8 p-2 bg-[#fdf6e4] rounded-lg text-center'  >
            <img width={230} src={offer1} alt="" />
            <img width={280} src={offer2} alt="" />
            <img width={230} src={offer3}  alt="" />
            <img width={260} src={offer4} alt="" />
            <img className='hidden lg:inline-block' width={240} src={offer1} alt="" />
        </section>
    );
};

export default Offer;