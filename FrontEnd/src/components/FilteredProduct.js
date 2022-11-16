import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../Home/ProductCard';

const FilteredProduct = () => {


    const productList = useSelector(state => state.productFilter);

    const { products } = productList;


    return (
        <>  
            <div className='lg:px-20'>
                <div className=' grid lg:grid-cols-5 md:grid-cols-3  gap-2 flex-col items-center justify-center '>
                    {products.map((product) => <ProductCard key={product._id} props={product} />)}
                </div>
            </div>
        </>
    )
}

export default FilteredProduct