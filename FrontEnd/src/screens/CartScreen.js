import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addToCart, removeFromCart } from '../actions/cartActions'
import Message from '../components/Message'

const CartScreen = () => {
    const params = useParams()
    const history = useNavigate()
    const productId = params.id;

    const cart = useSelector((state) => state.cart);

    const { cartItems } = cart;

    const qty = window.location.search ? Number(window.location.search.split('=')[1]) : 1;

    const dispatch = useDispatch();

    useEffect(() => {
        const test = () => {
            if (productId) {
                dispatch(addToCart(productId, qty))
            }
        }
        test();
    }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }
    const checkOutHandler = () => {
        history('/login?redirect=shipping')
    }

    return (
        <div className='container mx-auto'>
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? <Message message={'Your cart is Empty, buy something'} /> :
                <div className=" grid grid-cols-6 gap-5 ">
                    <div className='col-span-4'>
                        {cartItems.map(item => (
                            <div className="grid grid-cols-6 gap-2">
                                <img className='h-20 w-20' src={item.image} alt={item.image} />
                                <h1 className='col-span-2 flex items-center justify-center'>{item.name}</h1>
                                <h1 className='flex items-center justify-center'>{item.price}</h1>
                                <div className='col-span flex items-center justify-center'>
                                    <select className="block appearance-none w-full h-12 bg-black border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" value={item.qty}
                                        onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                        {[...Array(item.countInStock).keys()].map((x) => (
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                        ))}
                                    </select>
                                </div>
                                <button onClick={()=>removeFromCartHandler(item.product)}>
                                    <i className='fas fa-trash'></i>
                                </button>
                            </div>
                        ))}
                    </div>
                    <ul className='col-span-1 '>
                        <li>Total Items ({cartItems.reduce((acc, item) => acc + item.qty, 0)})</li>
                        <li>Total prices: {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</li>
                        <button type="button" onClick={checkOutHandler} className="py-2 px-4 w-full text-center font-medium  border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                Proceed to checkout
                            </button>
                    </ul>
                </div>
            }
        </div>
    )
}

export default CartScreen