import React, { useEffect, useState } from 'react'
import NavBar from '../../NavBar/NavBar'
import Footer from '../../Parts/Footer/Footer'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../Single_product/Single_product.css'
import { FaStar } from "react-icons/fa";
import { addTocart } from '../../../redux/CartSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { FaShoppingCart, FaTags } from 'react-icons/fa'


export default function Single_product(props) {
    const [count, setCount] = useState(1)
    const [view_pro, setView_pro] = useState({})
    const { id } = useParams()
    const dispatch = useDispatch(null)
    const [isactiveCart, setIsactiveCart] = useState(false)

    //Redux dispatch below
    const handleAddToCart = () => {
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
    };


    useEffect(() => {
        const ViewProducts = async () => {
            try {
                axios.get(`${process.env.REACT_APP_PRODUCT_API}/product/${id}`).then((resp) => setView_pro(resp.data.one_data))


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
                        <button className='btn btn-success'>Buy now</button>
                        <button onClick={handleAddToCart} disabled={isactiveCart} className='btn btn-warning buy-btn m-2'>Add to Cart <span className='add-cart-fa'><FaShoppingCart /></span></button>
                    </div>
                </div>
            </div>
            <Footer />
        </>)
    )
}
