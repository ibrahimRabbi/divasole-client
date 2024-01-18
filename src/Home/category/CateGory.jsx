import React from 'react';
import Title from '../../UI/Title';
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
        { category: "star-wars", subCategory: 'null', name: "Star wars", img: "https://i.ibb.co/N7thNj8/starWars.webp" },
        { category: 'softToys', subCategory: 'null', name: "Soft Toys", img: "https://i.ibb.co/X7Kb0Zz/octopus-babby-doll-stuff2.webp" },
    ]


    return (
        <section className='w-full mt-10'>
            <h1 className='banner text-2xl font-bold'>
               categories
            </h1>
            <div data-aos="fade-right" className='grid lg:grid-cols-5 grid-cols-3 mt-4'>{category.map(v => <CategoryCard key={Math.random()} data={v} />)}</div>
        </section>
    );
};

export default CateGory;