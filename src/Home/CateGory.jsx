import React from 'react';
import Title from '../UI/Title';
import CategoryCard from './CategoryCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const CateGory = () => {
    const category = [
        { category: "avengers", name: "Avengers", img: "https://images.hdqwalls.com/download/marvels-avengers-4k-sx-1366x768.jpg" },
        { category: "spiderman", name: "spiderman", img: 'https://i.ibb.co/zR8QxRG/b2a0d1d5-625c-4603-a52f-12e8ca12e4e1.jpg' },
        { category: "star-wars", name: "star wars", img: "https://i.ibb.co/7yZB31R/4fc9bdc3be4384b2784c120fc0e61778.jpg" },
        { category: "warner-bros", name: "warners Bros", img: "https://wallpaperaccess.com/full/3031197.jpg" },
        { category: "marvel", name: "Marvel All Characters", img: "https://i.ibb.co/3kXdRpJ/342019.jpg" }
    ]
    

    return (
        <section data-aos="fade-right" className='w-[90%] mx-auto mt-20'>
            <Title title="Top Categories to choose from" />
            <div className='flex flex-wrap justify-center items-center gap-x-16'>{category.map(v => <CategoryCard key={Math.random()} data={v} />)}</div>
        </section>
    );
};

export default CateGory;