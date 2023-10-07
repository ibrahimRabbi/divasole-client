import React from 'react';
import Title from '../UI/Title';
import CategoryCard from './CategoryCard';

const CateGory = () => {
    const category = ["avangers","spiderman","star wars","warners Bros","Marvel All Characters"]
    return (
        <section className='w-[90%] mx-auto my-20'>
            <Title title="Top Categories to choose from" />
            <div className='flex flex-wrap justify-center items-center gap-x-16'>{category.map(v => <CategoryCard key={Math.random()} name={v} />)}</div>
        </section>
    );
};

export default CateGory;