import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions';

const ShippingScreen = () => {
    
    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;

    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);

    const history = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address, city, postalCode, country }));
        history('/placeorder')
    }

    return (
        <FormContainer>

        <div>
            <form onSubmit={submitHandler}>
            <div className="form-control w-full  ">
                    <br />
                    <h1 className='text-3xl'>Where to deliver?</h1>
                    <br />
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input type="text" value={address} placeholder="Enter your address" className="input input-bordered w-full max-w-xs" onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text">City</span>
                    </label>
                    <input type="text" value={city} placeholder="Enter your City" className="input input-bordered w-full max-w-xs" onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Postal Code</span>

                    </label>
                    <input type="text" value={postalCode} placeholder="Enter your Postal Code" className="input input-bordered w-full max-w-xs" onChange={(e) => setPostalCode(e.target.value)} />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Country</span>

                    </label>
                    <input type="text" value={country} placeholder="Enter your country" className="input input-bordered w-full max-w-xs" onChange={(e) => setCountry(e.target.value)} />
                </div>
                <div className='py-4 flex justify-center items-center'>
                    <button type='submit' className=' btn btn-primary w-24'>Confirm</button>
                </div>
            </form>
        </div>
        </FormContainer>
    )
}

export default ShippingScreen;