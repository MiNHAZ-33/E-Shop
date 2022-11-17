import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer'
import { generateToken, login } from '../actions/userActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const TokenScreen = () => {

    const [balance, setBalance] = useState(0);
    const history = useNavigate();
    const dispatch = useDispatch();
    const generateTokens = useSelector(state => state.generateToken);
    const { loading, error, success } = generateTokens;

    // useEffect(() => {
        
    // }, [history, loading, success])


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(generateToken(balance))
    }


    return (
        <FormContainer>

            <div>
                {error && <Message message={error} />}
                {loading && <Loader />}
                <form onSubmit={submitHandler}>
                    <div className="form-control w-full  ">
                        <br />
                        <h1 className='text-3xl'>Generate Token</h1>
                        </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="font-semibold label-text">Enter Amount</span>

                        </label>
                        <input type="number" value={balance} placeholder="" className="input input-bordered w-full max-w-xs" onChange={(e) => setBalance(e.target.value)} />
                    </div>
                    <div className='py-4 flex justify-center items-center'>
                        <button type='submit' className=' btn btn-primary w-24'>Generate</button>
                    </div>
                    {success && < Message message={`5 tokens of ${balance} taka generated successfully`} />
                    }</form>
            </div>
        </FormContainer>
    )
}

export default TokenScreen