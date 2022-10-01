import React, { useEffect } from 'react';
import ProductCard from '../Home/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

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
            {loading ? (<Loader />) : error ? (<Message message={error}/>) : <div className='container grid lg:grid-cols-3  gap-4 flex-col items-center justify-center mx-auto'>
                {products.map((product) => <ProductCard key={product._id} props={product} />)}
            </div>}
        </div>
    )
}

export default HomeScreen