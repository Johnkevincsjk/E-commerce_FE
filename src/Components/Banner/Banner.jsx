import React from 'react'
import '../Banner/Banner.css'

export default function Banner() {
    return (
        <div className='banner-main home-page-banner'>
            <div className='banner-main1'>
                <div className='banner-img'>
                    <header>Unleash Your Inner <span>King</span></header>
                    <h5>Shop the New Collection</h5>
                    <button className='btn btn-warning btn-ui'>Check out</button>
                </div>
            </div>
            <hr />
        </div>
    )
}
