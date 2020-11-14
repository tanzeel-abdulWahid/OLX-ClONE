import { Link } from '@material-ui/core'
import React from 'react'
import './Headertwo.css'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Headertwo() {
    const nav = [
        {ID: 1, label: 'Mobile Phones'},
        {ID: 2, label: 'Cars'},
        {ID: 3, label: 'Motorcycles'},
        {ID: 4, label: 'Houses'},
        {ID: 5, label: 'TV-video-Audio'},
        {ID: 6, label: 'Tablets'},
        {ID: 7, label: 'Land and plots'},
    ]
    return (
        <div className='headertwo'>
        <h5 className=''>All categories</h5>
        <KeyboardArrowDownIcon />
        <div className='headertwo_nav'>
            {nav.map(item=>{
                return <p className='headertwo_navitems'> {(item.label)} </p>
            })}
            </div>

        </div>
    )
}

export default Headertwo
