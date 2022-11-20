import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderDetails, payOrder } from '../actions/orderActions'
import { useParams } from 'react-router-dom';
import Message from '../components/Message'
import Loader from '../components/Loader';
import { userPayment } from '../actions/userActions';
import SuccessMessage from '../components/SuccessMessage';

const OrderScreen = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const orderId = params.id;

    const orderDetails = useSelector(state => state.orderDetails);
    const { order, loading, error } = orderDetails;
    const userDetails = useSelector(state => state.userDetails);
    const { loading: userLoading, error: userError, user } = userDetails;
    const orderPay = useSelector(state => state.orderPay);
    const { loading: loadingPay, success: successPay, error: errorpay } = orderPay;

    useEffect(() => {
        dispatch(getOrderDetails(orderId))
        if (!order || successPay) {
            dispatch(getOrderDetails(orderId))
        }
    }, [dispatch, successPay])

    const paymentHandler = () => {
        dispatch(payOrder(orderId));
        dispatch(userPayment(user._id, order.totalPrice))
    }


    return (
        loading ? <Loader /> : error ? <Message message={error} /> : <>
            <div className='lg:px-20'>
                <ul className="steps items-center justify-center px-10 pb-4">
                    <li className="step step-info">Added to cart</li>
                    <li className="step step-info">Shipping Details</li>
                    <li className="step step-info">Balance</li>
                    <li className="step step-info" data-content="?">Pay</li>
                </ul>
                <h2 className='text-xl font-bold'>Order Details</h2>
                <p>
                    <strong>Address</strong> {order.shippingAddress.address}, {order.shippingAddress.city}, {' '} {order.shippingAddress.postalCode}, {' '}, {order.shippingAddress.country}
                </p>
                <br />
                <h2>Order items</h2>
                {order.length === 0 ? <Message message={'Your order history is Empty, buy something'} /> :
                    <div className=" grid grid-cols-6 gap-5">
                        <div className='col-span-4'>
                            {order.orderItems.map(item => (
                                <div className="grid grid-cols-6 gap-2 border-b-2">
                                    <img className='h-20 w-20' src={item.image} alt={item.image} />
                                    <h1 className='col-span-2 flex items-center justify-center'>{item.name}</h1>
                                    <h1 className='flex items-center justify-center'>{item.qty} x {item.price} </h1>
                                    <h1 className='flex items-center justify-center'> {item.qty * item.price}</h1>
                                </div>
                            ))}
                        </div>
                        <ul className='col-span-1  '>
                            <div className=" w-80 font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <button aria-current="true" type="button" class="py-2 px-4 w-full font-medium text-left text-white bg-blue-700 border-b border-gray-200 cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600">
                                    <div className='container grid grid-cols-2  gap-4 '>
                                        <h1>Total Items :</h1>
                                        <h1>{order.orderItems.reduce((acc, item) => acc + item.qty, 0)}</h1>
                                    </div>
                                </button>
                                <button aria-current="true" type="button" class="py-2 px-4 w-full font-medium text-left text-white bg-blue-700 border-b border-gray-200 cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600">
                                    <div className='container grid grid-cols-2  gap-4 '>
                                        <h1>Delivery Charge:</h1>
                                        <h1>{order.shippingPrice} Taka</h1>
                                    </div>
                                </button>
                                <button aria-current="true" type="button" class="py-2 px-4 w-full font-medium text-left text-white bg-blue-700 border-b border-gray-200 cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600">
                                    <div className='container grid grid-cols-2  gap-4 '>
                                        <h1>Total Price:</h1>
                                        <h1>{order.totalPrice} Taka</h1>
                                    </div>
                                </button>

                            </div>
                            <li>
                                <div className='grid grid-col-2'>
                                    <p className='font-bold pb-2'> Payment Status: </p>
                                    {order.isPaid ? (<SuccessMessage message={'Paid'} />) : (<button onClick={paymentHandler} className='btn'>Pay</button>)}
                                    {userLoading && loadingPay && <Loader />}
                                </div>
                                <div className='grid grid-col-2'>
                                    <p className='font-bold py-2'> Delivery Status: </p>
                                    {order.isDelivered ? <Message message={'Delivered'} /> : <Message message={'Not Delivered'} />}
                                </div>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </>
    )
}

export default OrderScreen