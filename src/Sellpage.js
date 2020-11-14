import React from 'react'
import {useStateValue} from './StateProvider';
import Sellitem from './Sellitem';

function Sellpage() {
    const [{ sell }] = useStateValue();

    return (
        <div className='container d-flex justify-content-between flex-wrap mt-3'>
            {sell.map((item)=>(
                <Sellitem 
                url = {item.url}
                discription = {item.discription}
                price = {item.price}
                location = {item.location}
                date = "Today"/>
                
            ))}
        </div>
    )
}

export default Sellpage
