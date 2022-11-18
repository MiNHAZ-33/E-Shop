import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FormContainer from '../components/FormContainer'
import { getUserDetails, updateUser, } from '../actions/userActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProductDetails, updateProduct } from '../actions/productActions';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';
import axios from 'axios';

const ProductEditScreen = () => {
    const params = useParams();
    const productId = params.id;
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [uploading, setUploading] = useState(false);

    const history = useNavigate();
    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, product } = productDetails;
    const productUpdate = useSelector(state => state.productUpdate);
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = productUpdate;

    useEffect(() => {

        if (successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET });
            history(`/admin/productlist`)
        } else {

            if (!product.name || product._id !== productId) {
                dispatch(listProductDetails(productId))
            } else {
                setName(product.name);
                setPrice(product.price);
                setImage(product.image);
                setBrand(product.brand);
                setCategory(product.category);
                setCountInStock(product.countInStock);
                setDescription(product.description);
            }
        }
    }, [dispatch, history, successUpdate, productId, product])

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        setUploading(true)
        try {
            const config = {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            }

            const { data } = await axios.post('/api/upload', formData, config)
            
            setImage(data);
            setUploading(false)

        } catch (error) {
            console.log(error)
            setUploading(false)
        }
        
    }

    const submitHandler = (e) => {
        e.preventDefault();
        //update product
        dispatch(updateProduct({
            _id: productId,
            name,
            price,
            image,
            brand,
            category,
            description,
            countInStock
        }))
    }


    return (
        <FormContainer>

            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-control w-full  ">
                        <br />
                        <h1 className='text-3xl'>Edit Product</h1>
                        {loading && <Loader />}
                        {error && <Message message={error} />}
                        <br />
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" value={name} placeholder="Enter product Name" className="input input-bordered w-full max-w-xs" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" value={price} placeholder="Enter price" className="input input-bordered w-full max-w-xs" onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        {/* <input type="text" value={image} placeholder="Enter  image url" className="input input-bordered w-full max-w-xs" onChange={(e) => setImage(e.target.value)} /> */}
                        <input type="file" onChange={uploadFileHandler} className="file-input file-input-bordered file-input-success w-full max-w-xs py-2" />
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">brand</span>
                        </label>
                        <input type="text" value={brand} placeholder="Enter your brand" className="input input-bordered w-full max-w-xs" onChange={(e) => setBrand(e.target.value)} />
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" value={category} placeholder="Enter your category" className="input input-bordered w-full max-w-xs" onChange={(e) => setCategory(e.target.value)} />
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Count in stock</span>
                        </label>
                        <input type="number" value={countInStock} placeholder="Number in stock" className="input input-bordered w-full max-w-xs" onChange={(e) => setCountInStock(e.target.value)} />
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" value={description} placeholder="Enter your description" className="input input-bordered w-full max-w-xs" onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className='py-4 flex justify-center items-center'>
                        <button type='submit' className=' btn btn-primary w-24'>Update</button>
                    </div>
                    <div className='py-4 flex justify-center items-center'>
                        <Link to={'/admin/productlist'}>
                            <button className=' btn btn-primary w-24'>Back</button>
                        </Link>
                    </div>
                </form>
            </div>
        </FormContainer>
    )
}


export default ProductEditScreen