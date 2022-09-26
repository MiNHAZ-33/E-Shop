import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Rating from '../components/Rating';
import products from '../Dummy/products'

const ProductScreen = () => {

    const params = useParams();

    const match = params.id

    const product = products.find((p) => p._id === match)

    return (
        <div className='container lg:px-20 sm:px-10'>
            <div className='flex justify-center items-center '>
                <div className="container grid lg:grid-cols-3 sm:grid-cols-1  gap-x-8 ">
                    <img src={product.image} alt={product.name} />

                    <ul class="text-xl font-medium text-gray-900  dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li class="py-4 px-4 w-full border-b border-gray-200 dark:border-gray-600">
                            <h1>{product.name}</h1>
                        </li>
                        <li class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"> <Rating value={product.rating} text={product.numReviews} /></li>
                        <li class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
                            <h1 className='text-2xl'> Price : {product.price} $</h1>
                        </li>
                        <li class="py-2 px-4 w-full ">Description : {product.description}</li>
                    </ul>
                    <div class=" w-80 font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <button aria-current="true" type="button" class="py-2 px-4 w-full font-medium text-left text-white bg-blue-700 border-b border-gray-200 cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600">
                            <div className='container grid grid-cols-2  gap-4 '>
                                <h1>Price :</h1>
                                <h1>{product.price}</h1>
                            </div>
                        </button>
                        <button aria-current="true" type="button" class="py-2 px-4 w-full font-medium text-left text-white bg-blue-700 border-b border-gray-200 cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600">
                        <div className='container grid grid-cols-2  gap-4 '>
                                <h1>Status :</h1>
                                <h1>In Stock</h1>
                            </div>
                        </button>

                        <button type="button" class="py-2 px-4 w-full text-center font-medium  border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                            Order Now
                        </button>

                    </div>
                    <h1>This is number fourth </h1>
                </div>
            </div>
            <Link className='btn btn-dark'>Back</Link>
        </div>
    )
}

export default ProductScreen