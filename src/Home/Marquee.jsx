import React from 'react';
import Title from '../UI/Title';
const Marque = () => {
    return (
        <section className='w-[95%] mx-auto mb-16'>
            <div className='w-1/2 text-center mx-auto'>
                <Title title='Available Brand'/>
            </div>
            
            <div className='flex justify-center flex-wrap gap-16 items-center mx-auto'>
                <img src="https://i.ibb.co/kGSC9H0/company-Fun-Fit.webp"/>
                <img src=" https://i.ibb.co/30DWT9G/company-Toybox.webp"  />
                <img className='w-[170px]' src="https://i.ibb.co/bNK1CdQ/Disney.jpg" />
                <img width={150} src="https://i.ibb.co/5sfHyGf/lego.jpg"  />
                <img src="https://i.ibb.co/f95RMrR/wowToys.webp"  />
           </div>
            
        </section>
    );
};

export default Marque;