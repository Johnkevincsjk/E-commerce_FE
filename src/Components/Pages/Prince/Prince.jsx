import React from 'react'
import '../Prince/Prince.css'
import NavBar from '../../NavBar/NavBar'
import Footer from '../../Parts/Footer/Footer'

export default function Prince() {
    return (
        <div>
            <NavBar />
            <div className='banner-main prince-main'>
                <div className='banner-main1'>
                    <div className='banner-img'>
                        <header>Where Little Styles Make Big <span>Smiles!</span></header>
                        <h5 className='coming-soon'>coming soon</h5>
                       
                    </div>
                </div>
                <hr />
            </div>
            <Footer />
        </div>
    )
}
