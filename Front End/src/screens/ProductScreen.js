import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../Dummy/products'

const ProductScreen = () => {

    const params = useParams();

    const  match  = params.id

    const product = products.find((p) => p._id === match)

    return (
        <div>{ product.name }</div>
    )
}

export default ProductScreen