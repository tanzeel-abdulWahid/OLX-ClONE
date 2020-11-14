import React from 'react';
import './Product.css';
import {Link, useHistory} from 'react-router-dom';
import {useStateValue} from './StateProvider';

function Product({id, discription, img, date, price, location}) {
    const histroy = useHistory();
    const [{itemPage}, dispatch] = useStateValue();


    const newPage = () =>{
        dispatch({
            type: 'NEW_PAGE',
            page :{
                id: id,
                discription:discription,
                img:img,
                date:date,
                price:price,
                location:location,
            },
        });
        // histroy.push("/ProductPage")
    }

    return (
        <div className='products' onClick={newPage}>
        
            <div className='product_info border p-2 text-dark'>
            <img
                    src={img}
                    alt="gallery-img"
                    className="cover"
                    style={{ width: "16rem", height: "11rem" }}
                />
            <h4 className='mt-2 a'>Rs. {price}</h4>
            <p> {discription} </p>
            <p>{location} <span className='float-right'> {date} </span> </p>
            </div>
            
        </div>
    )
}

export default Product
