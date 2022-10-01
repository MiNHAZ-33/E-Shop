import React, {useEffect } from 'react';
import ProductCard from '../Home/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { listProducts } from '../actions/productActions';

function HomeScreen() {

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);

    const { loading, error, products } = productList;

    
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    
    console.log(products)

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