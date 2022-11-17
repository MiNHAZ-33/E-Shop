import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../actions/orderActions'
import { useNavigate } from 'react-router-dom';
import Message from '../components/Message'
import { ORDER_CREATE_RESET } from '../constants/orderConstant';
import { getUserDetails } from '../actions/userActions';

const PlaceOrderScreen = () => {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const history = useNavigate();

    cart.itemPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    cart.shippingPrice = 70;
    cart.totalPrice = cart.itemPrice + cart.shippingPrice;


    const orderCreate = useSelector(state => state.orderCreate);
    const userDetails = useSelector(state => state.userDetails);
    const { user } = userDetails;
    const { order, success, error } = orderCreate;

    const remainBalance = user.balance - cart.totalPrice;

    useEffect(() => {
        dispatch(getUserDetails('profile'));
        if (success) {
            history(`/order/${order._id}`)
            dispatch({ type: ORDER_CREATE_RESET })
        }
    }, [history, success])


    const placeOrderHandler = () => {
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: 'bkash',
            shippingPrice: cart.shippingPrice,
            itemsPrice: cart.itemPrice,
            totalPrice: cart.totalPrice

        }))
    }

    return (
        <>
            <div className='lg:px-20 pt-5'>
                <h2 className='text-xl'>Shipping Location: </h2>
                <p>
                    <strong>Address : </strong> {cart.shippingAddress.address}, {cart.shippingAddress.city}, {' '} {cart.shippingAddress.postalCode}, {' '} <br></br> {cart.shippingAddress.country}
                </p>
                <br />
                <h2>Order items</h2>
                {cart.length === 0 ? <Message message={'Your cart is Empty, buy something'} /> :
                    <div className=" grid grid-cols-6 gap-5">
                        <div className='col-span-4'>
                            {cart.cartItems.map(item => (
                                <div key={item.name} className="grid grid-cols-6 gap-2 border-b-2">
                                    <img className='h-20 w-20' src={item.image} alt={item.image} />
                                    <h1 className='col-span-2 flex items-center justify-center'>{item.name}</h1>
                                    <h1 className='flex items-center justify-center'>{item.qty} x {item.price} </h1>
                                    <h1 className='flex items-center justify-center'> {item.qty * item.price}</h1>

                                </div>
                            ))}
                        </div>
                        <ul className='col-span-1  '>
                            <h1 className='text-xl font-bold'>Order Summery</h1>
                            <li className='pb-2 text-lg' >Total Items : {cart.itemPrice}</li>
                            <li className='pb-2 text-lg'>Delivery Charge: {cart.shippingPrice}</li>
                            <li className='pb-2 text-lg'>Total Prices : {cart.totalPrice} TK</li>
                            <li className='pb-2 text-lg'>Your balance : {user.balance} TK</li>
                            <li className='pb-2 text-lg'>Remaining balance : {remainBalance} TK</li>
                            {error && <Message message={error} />}
                            <button type="button" disabled={remainBalance < 0} onClick={placeOrderHandler} className="py-2 px-4 w-full text-center font-medium  border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                {remainBalance < 0 ? 'Not enough balance' : 'Proceed'}
                            </button>
                        </ul>
                    </div>
                }
            </div>
        </>
    )
}

export default PlaceOrderScreen