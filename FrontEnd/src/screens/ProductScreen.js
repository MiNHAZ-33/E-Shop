
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { createProductReview, listProductDetails } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Rating from '../components/Rating';
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants';

const ProductScreen = () => {
    const params = useParams();
    const history = useNavigate()
    const match = params.id

    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);

    const { loading, error, product } = productDetails;

    const productReviewCreate = useSelector(state => state.productCreateReview);

    const { error: errorReview, success: successReview } = productReviewCreate;

    const userLogIn = useSelector(state => state.userLogin);

    const { userInfo } = userLogIn;


    useEffect(() => {
        if (successReview) {
            alert('Review Submitted');
            setRating(0);
            setComment(' ');
            dispatch({type: PRODUCT_CREATE_REVIEW_RESET})
        }
        dispatch(listProductDetails(match))
    }, [dispatch, successReview ])

    const addToCartHandler = () => {
        history(`/cart/${match}?qty=${qty}`)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createProductReview(match, {
            rating,
            comment
        } ))
    }
    return (

        <div className='container mx-auto lg:px-20 sm:px-10 pt-5 '>
            {loading ? <Loader /> : error ? <Message message={error} /> :
                <>
                    <div className='flex justify-center items-center '>
                        <div className="container grid lg:grid-cols-3 sm:grid-cols-1  gap-x-8 ">
                            <img src={product.image} alt={product.name} />

                            <ul className="text-xl font-medium text-gray-900  dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li className="py-4 px-4 w-full border-b border-gray-200 dark:border-gray-600">
                                    <h1>{product.name}</h1>
                                </li>
                                <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600"> <Rating value={product.rating} text={product.numReviews} /></li>
                                <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
                                    <h1 className='text-2xl'> Price : {product.price} TK</h1>
                                </li>
                                <li className="py-2 px-4 w-full ">Description : {product.description}</li>
                            </ul>
                            <div className=" w-80 font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <button aria-current="true" type="button" class="py-2 px-4 w-full font-medium text-left text-white bg-blue-700 border-b border-gray-200 cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600">
                                    <div className='container grid grid-cols-2  gap-4 '>
                                        <h1>Price :</h1>
                                        <h1>{product.price}</h1>
                                    </div>
                                </button>
                                <button aria-current="true" type="button" class="py-2 px-4 w-full font-medium text-left text-white bg-blue-700 border-b border-gray-200 cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600">
                                    <div className='container grid grid-cols-2  gap-4 '>
                                        <h1>Status :</h1>
                                        <h1>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</h1>
                                    </div>
                                </button>

                                {product.countInStock > 0 && <div className='container grid grid-cols-2  gap-4 py-2 px-4 bg-gray-800'>
                                    <h1>Quantity :</h1>
                                    <div className="inline-block relative">
                                        <select className="block appearance-none w-full bg-black border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" value={qty}
                                            onChange={(e) => setQty(e.target.value)}>
                                            {[...Array(product.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                            ))}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>
                                }
                                <button type="button" onClick={addToCartHandler} className="py-2 px-4 w-full text-center font-medium  border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold py-2'>Reviews</h2>
                        {product.reviews.length === 0 && <Message message={'No reviews yet'} />}
                        {product.reviews.map((review) => (
                            <ul>
                                <li> <strong>{review.name}</strong></li>
                                <li> <Rating value={review.rating} /></li>
                                <li>{review.comment}</li>
                            </ul>
                        ))}
                        <h2 className='text-xl font-bold py-2'>Write a review</h2>
                        {userInfo ? (
                            <form onSubmit={submitHandler}>
                                <div className="form-control w-full  ">

                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <select value={rating} onChange={(e)=>setRating(e.target.value)} class="block appearance-none w-56 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option value={'1'}>1 Star</option>
                                        <option value={'2'}>2 Star</option>
                                        <option value={'3'}>3 Star</option>
                                        <option value={'4'}>4 Star</option>
                                        <option value={'5'}>5 Star</option>
                                    </select>
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text">Review</span>
                                    </label>
                                    <input type="text" value={comment} placeholder="Type your review here" className="input input-bordered w-full max-w-xs" onChange={(e) => setComment(e.target.value)} />
                                </div>
                                <div className='py-4 flex justify-center items-center'>
                                    <button type='submit' className=' btn btn-primary w-24'>Add review</button>
                                </div>

                            </form>
                        ) : <Message message={'You need to be logged in to give review'} />}
                    </div>
                </>}
            <Link className='btn btn-dark'>Back</Link>
        </div>
    )
}

export default ProductScreen