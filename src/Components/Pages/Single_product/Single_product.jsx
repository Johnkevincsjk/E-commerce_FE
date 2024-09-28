import React, { useEffect, useState } from 'react'
import NavBar from '../../NavBar/NavBar'
import Footer from '../../Parts/Footer/Footer'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import '../Single_product/Single_product.css'
import { FaStar } from "react-icons/fa";
import { addTocart } from '../../../redux/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { FaShoppingCart, FaTags } from 'react-icons/fa'
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'



export default function Single_product() {
    const [dialog_open, setdialog_open] = useState(false)

    const tog_dialog = () => {
        setdialog_open(true)
    }


    const navi = useNavigate()
    const [count, setCount] = useState(1)
    const [view_pro, setView_pro] = useState({})
    const { id } = useParams()
    const dispatch = useDispatch(null)
    const [isactiveCart, setIsactiveCart] = useState(false)
    const is_loggedin = useSelector((state) => state.Auth.isLoggedin)
    const handleorder = () => {
        if (is_loggedin) {
            navi('/confirmdetails')
        } else {
            tog_dialog()
        }
    }
    //Redux dispatch below
    const handleAddToCart = () => {

        if (is_loggedin) {
            dispatch(addTocart({
                img: view_pro.img,
                title: view_pro.title,
                price: view_pro.price,
                off: view_pro.off,
                qtn: count,
                tot_amt: add_amount

            }));
            if (!isactiveCart) {
                setIsactiveCart(true);
                toast.success('Added to cart.');
            }
        } else {
            tog_dialog()


        }


    };


    useEffect(() => {
        const ViewProducts = async () => {
            try {
                axios.get(`${process.env.REACT_APP_PRODUCT_API}/Kingswear/product/${id}`).then((resp) => setView_pro(resp.data.one_data))


            } catch (error) {
                console.log(error)
            }

        }

        ViewProducts()

    }, [])

    const add_count = () => {
        setCount(count + 1)
    }
    const decreaseCount = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const add_amount = view_pro.price * count

    return (

        view_pro && (<>
            <NavBar />

            <div className='container-fluid vh-100'>
                {!is_loggedin ? <Dialog open={dialog_open} onClose={() => setdialog_open(false)}>
                    <DialogTitle>
                        Notice: Login Required
                    </DialogTitle>
                    <DialogContent>
                        <p>You are not logged in. Please log in to continue shopping and enjoy a personalized experience. Logging in allows you to add items to your cart and proceed with your purchase smoothly.</p>
                    </DialogContent>
                    <DialogActions>
                        <button className='btn btn-danger' onClick={() => {
                            setdialog_open(false)
                            navi('/Login')


                        }}>Close</button>
                    </DialogActions>

                </Dialog> : null}

                <div className="row  py-5 ">

                    <div style={{ borderRight: "solid 1px #00000051" }} className="col-12 col-md-6  product_img d-flex justify-content-center align-items-center">
                        <div className="card" >
                            <img className='card-img' src={view_pro.img} alt="" />

                        </div>

                    </div>

                    <div className="col-12  col-md-6 product_details d-flex flex-column justify-content-center align-items-center">

                        <h2 className='m-3'><u>{view_pro.title}</u></h2>

                        <h3>{`Rs.${add_amount} ${view_pro.off}`}</h3> {/*Ratings to be implemented here */}

                        <h4 className='p-auto'>{`4.5/5`}<FaStar id='star_rate' /></h4>

                        <div className='d-flex counter align-items-center'>
                            <button onClick={add_count} className='btn btn-primary'>+</button>
                            <h6 className='show_count'>{count}</h6>
                            <button onClick={decreaseCount} className='btn btn-danger'>-</button>
                        </div>
                        <button className='btn btn-success' onClick={handleorder}>Place Order</button>
                        <button onClick={handleAddToCart} disabled={isactiveCart} className='btn btn-warning buy-btn m-2'>Add to Cart <span className='add-cart-fa'><FaShoppingCart /></span></button>
                    </div>
                </div>
            </div>
            <Footer />
        </>)
    )
}
