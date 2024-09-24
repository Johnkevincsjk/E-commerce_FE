import React from 'react'
import '../NavBar/NavBar.css'
import { PiShoppingCartFill } from "react-icons/pi"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SearchBox from '../Parts/SearchBox/SearchBox'
import { toast } from 'react-toastify'
export default function NavBar() {
    const NoOfCarts = useSelector((state) => state.cart)

    const isLogged = useSelector((state) => state.Auth.isLoggedin)

    console.log(isLogged)

    const handleclick = () => {
        toast.info("User has been logged out", {
            position: "top-center"
        })
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg nav-main">
                <div className="container-fluid">
                    <a className="navbar-brand nav-head" href="#home-sec2">Kings Wear</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-main1" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link active nav-btns" aria-current="page" href="#">Home</Link>

                            </li>

                            <li className="nav-item">
                                <a className="nav-link nav-btns" href="#footer-nav">Contact</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle nav-btns" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to={'/'} className="dropdown-item nav-btns" href="#top_men">Kings</Link></li>
                                    <li><Link to={'/Queens'} className="dropdown-item nav-btns" href="#">Queens</Link ></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link to={'/Kids'} className="dropdown-item nav-btns" href="#">Kids</Link></li>

                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link to={'/Login'} onClick={isLogged === true ? handleclick : null} className="nav-link nav-btns bg-dark rounded text-white" >{isLogged === true ? "LOGOUT" : "LOGIN"}</Link>
                            </li>
                            <Link to={'/AddCart'} className="nav-link nav-btns nav-cart-btn" aria-disabled="true"><PiShoppingCartFill id='nav-cart-btn' /><small>{NoOfCarts.length}</small></Link>


                        </ul>
                        {/*Search bar need to be placed below */}
                        <SearchBox />
                    </div>
                </div>
            </nav>
        </div>
    )
}
