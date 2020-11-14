import React from 'react'
import {Link} from 'react-router-dom';

function Sellitem({url, discription, price, location, date}) {
    return (
        <div>
            <div className='products'>
            <Link className='text-decoration-none' >
            <div className='product_info border p-2 text-dark'>
            <img
                    src={url}
                    alt="gallery-img"
                    className="cover"
                    style={{ width: "16rem", height: "11rem" }}
                />
            <h4 className='mt-2 a'>Rs. {price}</h4>
            <p> {discription} </p>
            <p>{location} <span className='float-right'> {date} </span> </p>
            </div>
            </Link>
        </div>
        </div>
    )
}

export default Sellitem
