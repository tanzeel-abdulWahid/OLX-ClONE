import React from 'react'
import poster from './images/hero_bg_pk.jpg'
import poster2 from './images/ad.png';
import './Ads.css'
function Ads() {
    return (
        <div className="ads">
            <img className='poster' src={poster} />
            <img className='poster2'  src={poster2} />
        </div>
    )
}

export default Ads
