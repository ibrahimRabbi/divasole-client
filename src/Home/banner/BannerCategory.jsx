import React from 'react';
import { Link } from 'react-router-dom';


const BannerCategory = () => {

    const categoryData = [
        { name: 'Womans & Girls Fashion', type: ['Sharee', 'Borka', 'Hijab', "Kameez", 'Wstern', 'Mens-Inner-Wear', 'Female-Shoes', 'Plazzos', 'Jewellery', 'Makeup'] },
        { name: 'Mens & Boys Fashion', type: ['T-shirt', 'Shirt', 'Jeans', 'Mens-Shoes', "Mens-sunglass", 'Shorts', 'Punjabi', 'Female-Inner-Wear'] },
        { name: 'Health and Beauty', type: ["Hair Care", "Body Care"] },
        { name: 'Watch & bag', type: ['Mens-Watchs', 'Female-Watchs', 'Mens-Bags', 'Female-bags', 'Girl-School-Bag', 'Boys-School-Bag'] },
        { name: 'Baby & Mother', type: ['Nano milk', 'Wippers', 'Teddy bear'] },
        { name: 'Household & Stationery', type: [ 'Kitchen Accessories', 'Furniture'] },
        { name: 'Art and craft', type: ['Wall Art', 'Canvas', 'Artificila Tree', 'Vase', 'Light', "wall Mount Watch", 'Mirror', 'Lamp', 'Carpet'] },
        { name: 'Electronic Accessories', type: [ 'Gyser', 'Blender', 'Rice Cooker', 'Refrigaretor'] },
        { name: 'Gadget & Devices', type: ['Computer', 'Mobail', 'Laptop'] },
    ]




    return (
        <div>
            <ul className='menu space-y-1 bg-slate-50 pr-4 rounded-lg w-60 text-zinc-950 text-sm lg:flex hidden  lg:z-50'>
                {
                    categoryData.map(v => {
                        return (
                            <li key={Math.random()}>
                                <details>
                                    <summary>{v.name}</summary>
                                    <ul className='space-y-1 text-zinc-600'>
                                        {v.type.map(value => {
                                            return (
                                                <li key={Math.random()}>
                                                    <Link to={value}>{value}</Link>
                                                </li>

                                            )
                                        })}
                                    </ul>
                                </details>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    );
};

export default BannerCategory;

// lg: absolute