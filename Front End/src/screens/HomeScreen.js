import React from 'react';
import products from '../Dummy/products';
import ProductCard from '../Home/ProductCard';

function HomeScreen() {
    return (
        <div className='lg:px-20'>
            <h1 className=' text-2xl'>Latest Products</h1>
            <div className='container grid lg:grid-cols-3  gap-4 flex-col items-center justify-center mx-auto'>
                {products.map((product) => <ProductCard props={product} />)}
            </div>
        </div>
    )
}

export default HomeScreen