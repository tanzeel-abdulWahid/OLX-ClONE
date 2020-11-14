import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AddIcon from '@material-ui/icons/Add';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import {useStateValue} from './StateProvider';
import { auth } from './firebase';


function Header() {

    const [{ user }] = useStateValue();

    const login = () =>{
        if (user){
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png"
            className="header_logo"
            alt="" />
            </Link>

            <div className='header_searchOne'>
                <SearchSharpIcon className='header_searchIcon' />
                <input type='text' className='header_searchoneinput' placeholder='Search city, area or locality'  />
                <KeyboardArrowDownIcon />
            </div>
            

            <div className='header_searchtwo'>
                <input type='text' className='header_searchtwoinput' placeholder='Find Cars, Mobile Phones and more...' />
                <SearchSharpIcon className='header_searchIcon' />
            </div>

            <div className='d-flex align-items-center header_nav'>

            <div className='header_icons'>
            <span className='ml-1'>{user? <NotificationsNoneIcon/> : ''}</span>
                <span className='ml-2'> {user? <ChatBubbleOutlineIcon/>: ''} </span>
            </div>

            <div className='header_loginBtn'>
                <Link to={!user && '/login'} className='text-decoration-none'>
                    <p onClick={login}>{user? "Log Out" : "Login"}</p>
                </Link>
            </div>

            <div className='header_sellBtn'>
            <Link to={user? "/sell" : "/login"} className='text-decoration-none'>
                <p><AddIcon /> Sell</p>
                </Link>
            </div>

            </div>
        </div>
    )
}

export default Header
