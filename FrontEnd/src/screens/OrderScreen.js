import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderDetails } from '../actions/orderActions'
import { useParams } from 'react-router-dom';
import Message from '../components/Message'
import Loader from '../components/Loader';

const OrderScreen = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const orderId = params.id;

    const orderDetails = useSelector(state => state.orderDetails);
    const { order, loading, error } = orderDetails;

    useEffect(() => {
        dispatch(getOrderDetails(orderId))
    }, [dispatch, orderId])


    return (
        loading ? <Loader /> : error ? <Message message={error} /> :
            <div className='lg:px-20'>
                <h2>Order History</h2>
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
                            <li className='pb-2 text-lg' >Total Items : {order.orderItems.reduce((acc, item) => acc + item.qty, 0)}</li>
                            <li className='pb-2 text-lg'>Delivery Charge: {order.shippingPrice}</li>
                            <li className='pb-2 text-lg'>Total Prices : {order.totalPrice} TK</li>
                            <li>
                            <div className='grid grid-col-2'>
                            <p> Payment Status: </p>
                            {order.isPaid ? <Message message={'Paid'}/> : <Message message={'Not Paid'}/>}
                            </div>
                            <div className='grid grid-col-2'>
                            <p> Delivery Status: </p>
                            {order.isDelivered ? <Message message={'Delivered'}/> : <Message message={'Not Delivered'}/>}
                            </div>
                            </li>
                        </ul>
                    </div>
                }
            </div>
    )
}

export default OrderScreen