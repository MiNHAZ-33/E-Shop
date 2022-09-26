import React from 'react';
import products from '../Dummy/products';
import ProductCard from '../Home/ProductCard';

function HomeScreen() {
  return (
      <>
          <h1 className='container text-xl'>Latest Products</h1>
          <div className='container grid lg:grid-cols-3 gap-4 flex items-center justify-center ml-auto'>
              
          {products.map((product) => <ProductCard props={product}/>)}
          </div>
      </>
  )
}

export default HomeScreen