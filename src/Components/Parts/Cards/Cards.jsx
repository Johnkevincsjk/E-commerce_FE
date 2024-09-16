import React, { useEffect, useState } from 'react'
import '../Cards/Cards.css'


import { Link } from 'react-router-dom'
import { PiShoppingBagOpenFill } from "react-icons/pi";



export default function Cards(props) {
   




    return (
        <div className='card h-100 '>
            <div className='image-card p-1'>

                <img className="card-img image-size" src={props.img} alt="" />
            </div>

            <div className="cards-body m-auto">
                <h6 className="cards-title">
                    {props.title}
                </h6>
                <p className="card-text">{props.price} <span>{props.off}</span></p>
                <Link to={`/product/${props.id}`}><button className='btn btn-warning'>View Details <span><PiShoppingBagOpenFill /></span></button></Link>
                
            </div>
        </div >


    )
}
