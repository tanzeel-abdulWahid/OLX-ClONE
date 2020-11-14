import React, {useState} from 'react'
import "./Sell.css"
import {Link, useHistory} from 'react-router-dom';
import {useStateValue} from './StateProvider';

function Sell() {
const history = useHistory();
    const [url, setUrl] = useState('');
    const [price, setPrice] = useState('');
    const [discription, setDiscription] = useState('');
    const [location, setLocation] = useState('');


    const [{sell}, dispatch] = useStateValue();
const sellItem = () =>{
    if (url === "" || price === "" || location === "" || discription === ""){
        alert("fill completly")
    }else{
        dispatch({
            type : "SELL_ITEM",
            item:{
                url : url,
                price: price,
                discription: discription,
                location:location
            }
        })
        history.push("/")
        

    }
}
    return (
        <div className='sell d-flex flex-column justify-content-center align-items-center mt-5'>
                <Link to='/'>
                <img
                className="login_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png"
                alt=""
                /></Link> 

    <form>
        <div className="form-group row">
            <label className="col-sm-3 col-form-label">Url</label>
            <div className="col-sm-9">
                <input value={url} onChange={event => setUrl(event.target.value)}  required type="text" className="form-control" />
            </div>
        </div>

        <div className="form-group row">
            <label className="col-sm-3 col-form-label">Price</label>
            <div className="col-sm-9">
                <input  value={price} onChange={event => setPrice(event.target.value)}  required type="number" className="form-control" />
            </div>
        </div>


        <div className="form-group row">
            <label className="col-sm-3 col-form-label">Discription</label>
            <div className="col-sm-9">
                <input  value={discription} onChange={event => setDiscription(event.target.value)} required type="text" className="form-control" />
            </div>
        </div>

        <div className="form-group row">
            <label  className="col-sm-3 col-form-label">Location</label>
            <div className="col-sm-9">
                <input value={location} onChange={event => setLocation(event.target.value)} required type="text" className="form-control" />
            </div>
        </div>

    </form>

    <button onClick={sellItem} type="submit" class="btn btn-light">Sell</button>

        </div>
    )
}

export default Sell
