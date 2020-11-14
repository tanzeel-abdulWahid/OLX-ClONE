import React, {useState} from 'react';
import './Login.css';
import {Link, useHistory} from 'react-router-dom';
import {auth} from './firebase';


function Login() {

    const histroy = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) =>{
        event.preventDefault(); //stops refresh page
        //Login
        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=>{
            histroy.push("/")
        })
        .catch((e)=> alert(e.message));
    }
    const register = (event) =>{
        event.preventDefault(); //stops refresh page
        //signUp
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            histroy.push("/")
        })
        .catch((e)=>alert(e.message))
    }
    return (
        <div className="login">
            <Link to='/'>
                <img
                className="login_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png"
                alt=""
                /></Link>  
                <div className='login_container'>
                    <h1>Sign In</h1>
                    <form>
                        <h5>Email</h5>
                        <input  value={email} onChange={event => setEmail(event.target.value)} type='email' />
                        <h5>Password</h5>
                        <input  value={password} onChange={event => setPassword(event.target.value)} type="password" />
                        <button type='submit' onClick={login} className='login_signInButton'>Sign In</button>
                    </form>
                    <p>
                    By signing-in you agree to the OLX FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>
                    <button onClick={register} className='login_registerButton'>Create Your OLX Account</button>
                </div>
        </div>
    )
}

export default Login
