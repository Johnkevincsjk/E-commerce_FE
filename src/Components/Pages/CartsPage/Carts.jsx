import React, { useState } from 'react'
import NavBar from '../../NavBar/NavBar'
import Footer from '../../Parts/Footer/Footer'
import '../CartsPage/Carts.css'
import { PiShoppingCartFill } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../../redux/CartSlice'
import { useNavigate } from 'react-router-dom'



export default function () {
    const navi = useNavigate()
    const dispatch = useDispatch()
    const display_cart = useSelector((state) => state.cart)

    function removeCart(index) {
        dispatch(removeFromCart(index))
    }
    const handleorder = () => {
        navi('/confirmdetails')

    }


    return (
        <div className='container-fluid p-0 cart-main'>
            <NavBar />
            {display_cart.length == 0 ? (
                <div>
                    <div className="container-fluid cart-main2">
                        <h1 id='empty-cart'>Cart is empty<PiShoppingCartFill /></h1>
                    </div>

                </div>
            )
                :
                (<div className='container-fluid card-main3'>

                    {
                        display_cart.map((items, index) => {
                            console.log(items)
                            return (
                                <div className="">

                                    <div className='col-12 m-1'>

                                        <div className='cart-cards m-auto row'>
                                            <div className='image-card p-10 image-div col-6'>

                                                <img className="card-img cart-img" src={items.img} alt="" />
                                            </div>

                                            <div className="cards-body col-6">
                                                <h6 className="cards-title">
                                                    {items.title}
                                                </h6>
                                                <p className="card-text cart-pricetag">{`Rs. ${items.tot_amt}`} <span>{items.off}</span></p>
                                                <p className='fs-4'>{`Qty: ${items.qtn}`}</p>
                                                <button onClick={handleorder} className='btn btn-primary buy-btn'>Place Order</button>
                                                <button className='btn btn-danger buy-btn' onClick={() => removeCart(index)}>Remove</button>
                                            </div>
                                        </div >
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>)

            }

            <Footer />
        </div>
    )
}
