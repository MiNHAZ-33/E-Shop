import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addToCart } from '../actions/cartActions'

const CartScreen = () => {
    const params = useParams()
    const history = useNavigate()
    const productId = params.id

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

    return (
        <div>CartScreen</div>
    )
}

export default CartScreen