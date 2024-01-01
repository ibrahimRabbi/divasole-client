import React from 'react';
import Title from '../UI/Title';
const Marque = () => {
    return (
        <section className='w-[95%] mx-auto mb-16'>
            <div className='w-1/2 text-center mx-auto'>
                <Title title='Available Brand'/>
            </div>
            
            <div className='grid grid-cols-5 items-center gap-20 w-[90%] mx-auto'>
                <img src="https://i.ibb.co/kGSC9H0/company-Fun-Fit.webp" alt="" srcset="" />
                <img src=" https://i.ibb.co/30DWT9G/company-Toybox.webp" alt="" srcset="" />
                <img src="https://i.ibb.co/bNK1CdQ/Disney.jpg" alt="" srcset="" />
                <img width={150} src="https://i.ibb.co/5sfHyGf/lego.jpg" alt="" srcset="" />
                <img src="https://i.ibb.co/f95RMrR/wowToys.webp" alt="" srcset="" />
           </div>
            
        </section>
    );
};

export default Marque;