import React from 'react'
import { useSelector } from 'react-redux'
import Message from '../components/Message'

const PlaceOrderScreen = () => {

    const cart = useSelector(state => state.cart)

    cart.itemPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    cart.deliveryCharge = 70;
    cart.totalPrice = cart.itemPrice + cart.deliveryCharge

    const placeOrderHandler = () => {
        console.log('Orderis placed')
    }

    return (
        <>
            <div className='lg:px-20'>
                <h2>Shipping</h2>
                <p>
                    <strong>Address</strong> {cart.shippingAddress.address}, {cart.shippingAddress.city}, {' '} {cart.shippingAddress.postalCode}, {' '}, {cart.shippingAddress.country}
                </p>
                <br />
                <h2>Order items</h2>
                {cart.length === 0 ? <Message message={'Your cart is Empty, buy something'} /> :
                    <div className=" grid grid-cols-6 gap-5">
                        <div className='col-span-4'>
                            {cart.cartItems.map(item => (
                                <div className="grid grid-cols-6 gap-2 border-b-2">
                                    <img className='h-20 w-20' src={item.image} alt={item.image} />
                                    <h1 className='col-span-2 flex items-center justify-center'>{item.name}</h1>
                                    <h1 className='flex items-center justify-center'>{item.qty} x {item.price} </h1>
                                    <h1 className='flex items-center justify-center'> { item.qty * item.price }</h1>
                                    
                                </div>
                            ))}
                        </div>
                        <ul className='col-span-1  '>
                            <li className='pb-2 text-lg' >Total Items : { cart.itemPrice}</li>
                            <li className='pb-2 text-lg'>Delivery Charge: {cart.deliveryCharge}</li>
                            <li className='pb-2 text-lg'>Total Prices : {cart.totalPrice} TK</li>
                            <button type="button" onClick={placeOrderHandler} className="py-2 px-4 w-full text-center font-medium  border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                Proceed to checkout
                            </button>
                        </ul>
                    </div>
                }
            </div>
        </>
    )
}

export default PlaceOrderScreen