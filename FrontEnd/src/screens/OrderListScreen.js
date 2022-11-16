import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { listOrders } from '../actions/orderActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const OrderListScreen = () => {
    const dispatch = useDispatch();
    const orderList = useSelector(state => state.orderList);
    const userDelete = useSelector(state => state.userDelete);
    const { loading, error, orders } = orderList;

    useEffect(() => {
        dispatch(listOrders())
    }, [dispatch])


    return (
        <>
            <h1>Orders</h1>

            {loading ? <Loader /> : error ? <Message message={error} /> : <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User</th>
                            <th>Date</th>
                            <th>Total Price</th>
                            <th>Paid</th>
                            <th>Delivered</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>


                        {orders.map(order => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.user && order.user.name}</td>
                                <td>{order.createdAt.substring(0, 10)}</td>
                                <td>{order.totalPrice} TK</td>
                                <td>{order.isPaid ? 'Paid' : 'Not Paid'}</td>
                                <td>{order.isDelivered ? 'Delivered' : 'Not Deliverd'}</td>
                                <td>
                                    <Link to={`/order/${order._id}`}>
                                        <button className='btn'> Details </button>
                                        </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>}
        </>
    )
}

export default OrderListScreen