import React from 'react';
import Title from '../UI/Title';
import CategoryCard from './CategoryCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const CateGory = () => {
    const category = [
        { category: 'softToys', subCategory: 'null', name: "Soft Toys", img: "https://i.ibb.co/X7Kb0Zz/octopus-babby-doll-stuff2.webp" },
        { category: 'teddy', subCategory: 'null', name: "Teddy Bear", img: "https://i.ibb.co/qMMBJwt/teddy3.webp" },
        { category: "warner-bros", subCategory: 'null', name: "Warners Bros", img: "https://i.ibb.co/M62zKjT/tweety.webp" },
        { category: "marvel", subCategory: 'null', name: "Characters", img: "https://i.ibb.co/BjFt74t/character1.jpg" },
        { category: 'avangers', subCategory: 'avengers', name: "Avengers", img: "https://i.ibb.co/XkxKwvt/avengers.webp" },
        { category: "star-wars", subCategory: 'null', name: "Star wars", img: "https://i.ibb.co/N7thNj8/starWars.webp" },
        { category: 'spiderman', subCategory: 'spiderman', name: "Spiderman", img: 'https://i.ibb.co/zR8QxRG/b2a0d1d5-625c-4603-a52f-12e8ca12e4e1.jpg' },
        
        { category: "transfarmer", subCategory: 'null', name: "Transfarmer", img: "https://i.ibb.co/jyNJJJV/transfarmer.jpg" },

        { category: "car", subCategory: 'null', name: "Car Toys", img: "https://i.ibb.co/WGfhbr7/car.webp" },
    ]
    

    return (
        <section className='w-[100%] mx-auto  mt-20'>
            <div className='w-1/2 text-center mx-auto'>
                <Title title='Shop by Category'/>
            </div>
            <div data-aos="fade-right" className='flex relative -top-6  flex-wrap justify-center items-center gap-10'>{category.map(v => <CategoryCard key={Math.random()} data={v} />)}</div>
        </section>
    );
};

export default CateGory;