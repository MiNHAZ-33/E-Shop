import React, { useEffect } from 'react';
import ProductCard from '../Home/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import CategoryName from '../components/CategoryName';
import Slider from '../components/Slider';
import FilteredProduct from '../components/FilteredProduct';
import { useParams } from 'react-router-dom';

function HomeScreen() {

    const dispatch = useDispatch();

    const params = useParams();

    const keyword = params.keyword;

    const productList = useSelector(state => state.productList);

    const { loading, error, products } = productList;


    useEffect(() => {
        dispatch(listProducts(keyword))
    }, [dispatch, keyword])

    return (
        <>
            <Slider />
            <p className='lg:px-20 text-xl font-bold'>Today's Hot Deals</p>
            <div className='lg:px-20'>
                {loading ? (<Loader />) : error ? (<Message message={error} />) : <div className=' grid lg:grid-cols-5 md:grid-cols-3  gap-2 flex-col items-center justify-center '>
                    {products.map((product) => <ProductCard key={product._id} props={product} />)}
                </div>}
                <div className='grid grid-cols-4 py-5'>
                    <div>
                        <CategoryName />
                    </div>
                    <div className='grid col-span-3'>

                        <FilteredProduct />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeScreen