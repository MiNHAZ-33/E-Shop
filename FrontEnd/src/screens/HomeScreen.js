import React, { useEffect } from 'react';
import ProductCard from '../Home/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import CategoryName from '../components/CategoryName';
import Slider from '../components/Slider';

function HomeScreen() {

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);

    const { loading, error, products } = productList;


    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <Slider />
            <CategoryName />
            <div className='lg:px-20'>
                {loading ? (<Loader />) : error ? (<Message message={error} />) : <div className=' grid lg:grid-cols-5 md:grid-cols-3  gap-2 flex-col items-center justify-center '>
                    {products.map((product) => <ProductCard key={product._id} props={product} />)}
                </div>}
            </div>
        </>
    )
}

export default HomeScreen