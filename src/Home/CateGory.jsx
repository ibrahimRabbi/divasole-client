import React from 'react';
import Title from '../UI/Title';
import CategoryCard from './CategoryCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const CateGory = () => {
    const category = [
        { category: 'avangers', subCategory:'avengers', name: "Avengers", img: "https://images.hdqwalls.com/download/marvels-avengers-4k-sx-1366x768.jpg" },
        { category: 'spiderman', subCategory: 'spiderman', name: "Spiderman", img: 'https://i.ibb.co/zR8QxRG/b2a0d1d5-625c-4603-a52f-12e8ca12e4e1.jpg' },
        { category: "star-wars", subCategory: 'null', name: "Star wars", img: "https://i.ibb.co/7yZB31R/4fc9bdc3be4384b2784c120fc0e61778.jpg" },
        { category: "warner-bros", subCategory: 'null', name: "Warners Bros", img: "https://wallpaperaccess.com/full/3031197.jpg" },
        { category: "marvel", subCategory: 'null', name: "Marvel All Characters", img: "https://i.ibb.co/3kXdRpJ/342019.jpg" },
        { category: "transfarmer", subCategory: 'null', name: "Transfarmer", img: "https://i.ibb.co/B319PfC/peakpx.jpg" },
    ]
    

    return (
        <section  className='w-[90%] relative -top-28 z-20 mx-auto'>
            <div data-aos="fade-right" className='flex flex-wrap justify-center items-center gap-x-16'>{category.map(v => <CategoryCard key={Math.random()} data={v} />)}</div>
        </section>
    );
};

export default CateGory;