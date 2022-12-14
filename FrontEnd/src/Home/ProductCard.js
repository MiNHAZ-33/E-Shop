import React from 'react'
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'

function ProductCard({ props }) {
    return (
        <div className='grid lg:grid-cols-3 gap-4 items-center justify-center mt-6 '>
            <div className="card card-compact w-64 hover:shadow-slate-600 scale-100 hover:scale-105 transition-all  bg-base-100 shadow-xl">
                <Link to={`/product/${props._id}`}>
                    <figure><img className='h-56' src={props.image} alt="" /></figure>
                </Link>
                <div className="card-body">
                    <Link to={`/product/${props._id}`}>
                        <div className='container'>
                            <h2 className="card-title">{props.name}</h2>
                        </div>
                        {/* <p>{props.description}</p> */}
                        {/* <h3 className='my-2'>{props.rating} from {props.numReviews} reviews</h3> */}
                        <Rating value={props.rating} text={props.numReviews} />
                        <div className="card-actions justify-end">
                            <p className='text-xl font-bold text-start'>{props.price} TK</p>
                            <button className="btn btn-primary btn-sm">Details</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard