import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { listProducts, deleteProduct } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductListScreen = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList;
    const history = useNavigate();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    const productDelete = useSelector(state => state.productDelete);
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = productDelete;


    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            
            dispatch(listProducts())
        } else {
            history('/login')
        }
    }, [dispatch, history, userInfo, successDelete]) 

    const deleteHandler = (id) => {
        // dispatch(deleteUser(id))
        dispatch(deleteProduct(id))
    }

    const createProductHandler = () => {
        //creaet a new product
    }

    return (
        <div className='px-5'>
            <h1 className='text-xl font-bold py-3'>Products</h1>
            {loading ? <Loader /> : error ? <Message message={error} /> : <div className="overflow-x-auto">
                <button onClick={createProductHandler} className='btn items-center justify-center'>Add Product</button>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        
                            {products.map(product => (
                                <tr key={product._id}>
                                    <td>{  product._id }</td>
                                    <td>{  product.name }</td>
                                    <td>{  product.price }</td>
                                    {/* <td>{product.isAdmin ? (<i className='fas fa-check' style={{ color: 'green' }}> </i>) : (<i className='fas fa-items' style={{ color: 'red' }}></i>)}</td> */}
                                    <td>{ product.category}</td>
                                    <td>{ product.brand}</td>
                                    <td>
                                        <Link to={`/admin/product/${product._id}/edit`}>
                                            <button className='btn'> <i className='fas fa-edit'></i> </button>
                                        </Link>
                                            <button  onClick={()=>deleteHandler(product._id)} className='btn'> <i className='fas fa-trash'></i> </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>}
        </div>
    )
}

export default ProductListScreen