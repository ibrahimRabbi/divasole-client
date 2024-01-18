import React from 'react';


const BannerCategory = () => {

    const categoryData = [
        { name: 'Womans & Girls Fashion', type: ['Tradition wera', 'muslin wear', 'western', 'shoes', 'jewellery'] },
        { name: 'Mens & Boys Fashion', type: ['T-shirt', 'shirt', 'jeans', 'shoes', 'shorts'] },
        { name: 'Health and Beauty', type: ['Tradition wera', 'muslin wear', 'western', 'shoes', 'jewellery'] },
        { name: 'Watch & bag', type: ['Tradition wera', 'muslin wear', 'western', 'shoes', 'jewellery'] },
        { name: 'Baby & Mother', type: ['Tradition wera', 'muslin wear', 'western', 'shoes', 'jewellery'] },
        { name: 'Household & Stationery', type: ['Tradition wera', 'muslin wear', 'western', 'shoes', 'jewellery'] },
        { name: 'Electronic Accessories', type: ['Tradition wera', 'muslin wear', 'western', 'shoes', 'jewellery'] },
        { name: 'Gadget & Devices', type: ['Tradition wera', 'muslin wear', 'western', 'shoes', 'jewellery'] },
        { name: 'Sports & Outdoor', type: ['Tradition wera', 'muslin wear', 'western', 'shoes', 'jewellery'] },
    ]


    return (
        <div>
            <ul className='menu bg-slate-50 pr-4 rounded-lg w-60 text-zinc-700 text-sm lg:flex hidden lg:absolute lg:z-50'>
                {
                    categoryData.map(v => {
                        return (
                            <li key={Math.random()}>
                                <details>
                                    <summary>{v.name}</summary>
                                    <ul className='space-y-2'>
                                        {v.type.map(value => <li key={Math.random()}>{value}</li>)}
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