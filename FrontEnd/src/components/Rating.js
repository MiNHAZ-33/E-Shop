import React from 'react'

function Rating({ value, text, color }) {
    return (
        <div className='my-2'>
            <span>
                <i style={{ color }} className={
                    value >= 1 ? 'fa-solid fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'
                }>
                </i>
            </span>
            <span>
                <i style={{ color }} className={
                    value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'
                }>
                </i>
            </span>
            <span>
                <i style={{ color }} className={
                    value >= 3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'
                }>
                </i>
            </span>
            <span>
                <i style={{ color }} className={
                    value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'
                }>
                </i>
            </span>
            <span>
                <i style={{ color }} className={
                    value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'
                }>
                </i>
            </span>
            <span className='mx-2'>{text && text} Reviews</span>
        </div>
    )
}

Rating.defaultProps = {
    color: '#f8e825'
}

export default Rating