import React from 'react';
import Title from '../../UI/Title';
import CategoryCard from './CategoryCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import Shoes from '../../../public/categoryImg/shoes.jpg'
import Shirt from '../../../public/categoryImg/shirt.jpg'
import Watchs from '../../../public/categoryImg/watch.jpg'
import Bag from '../../../public/categoryImg/bag.jpg'
import Canvas from '../../../public/categoryImg/canvas.jpg'
import Kameez from '../../../public/categoryImg/kameez.jpg'
import Sunglass from '../../../public/categoryImg/sunglass.jpg'


const CateGory = () => {
    const category = [
        { category: 'Mens-Shoes' ,img: Shoes},
        { category: 'Teddy bear',  img: "https://i.ibb.co/qMMBJwt/teddy3.webp" },
        { category: "Canvas",  img: Canvas},
        { category: "T-shirt", img: Shirt},
        { category: 'Mens-Watchs', img: Watchs},
        { category: "Female-bags", img: Bag},
        { category: 'kameez', img: Kameez },
        { category: "Mens-sunglass",  img:Sunglass},
        { category: "Star Wars",  img: "https://i.ibb.co/N7thNj8/starWars.webp"},
        { category: 'Soft Toys', img: "https://i.ibb.co/X7Kb0Zz/octopus-babby-doll-stuff2.webp"},
    ]


    return (
        <section className='w-full mt-10'>
            <h1 className='banner text-2xl font-bold'>
              Trending categories
            </h1>
            <div data-aos="fade-right" className='grid lg:grid-cols-5 grid-cols-2 mt-4'>{category.map(v => <CategoryCard key={Math.random()} data={v}/>)}</div>
        </section>
    );
};

export default CateGory;