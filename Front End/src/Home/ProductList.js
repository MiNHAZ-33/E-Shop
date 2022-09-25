import React from 'react'

import ProductCard from './ProductCard';
import { Products } from '../Dummy/DummyProduct';

function ProductList() {
  
    return (
        <div className='grid lg:grid-cols-3 gap-4 flex items-center justify-center'>
            {Products.map(product => (
                 <ProductCard props={product}/>
            ))}
            
        </div>
  )
}

export default ProductList