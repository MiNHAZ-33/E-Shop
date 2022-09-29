import React, { useState, useEffect } from 'react';
import ProductCard from '../Home/ProductCard';
import axios from 'axios';

function HomeScreen() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get('/api/products');
            setProducts(data)
        }
        fetchProduct();
    }, [])

    return (
        <div className='lg:px-20'>
            <h1 className=' sm:flex items-center justify-center text-2xl'>Latest Products</h1>
            <div className='container grid lg:grid-cols-3  gap-4 flex-col items-center justify-center mx-auto'>
                {products.map((product) => <ProductCard props={product} />)}
            </div>
        </div>
    )
}

export default HomeScreen