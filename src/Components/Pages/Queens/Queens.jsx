import React, { useEffect, useState } from 'react'
import NavBar from '../../NavBar/NavBar'
import Footer from '../../Parts/Footer/Footer'
import '../Queens/Queens.css'
import Cards from '../../Parts/Cards/Cards'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

export default function Queens() {

    const [queens, setQueens] = useState([])
    const [search_params, setSearch_params] = useSearchParams()
    useEffect(() => {
        const queens_product = async () => {
            try {
                const resp = await axios.get(`${process.env.REACT_APP_PRODUCT_API}/products?${search_params}`)
                const all_home_products = resp.data.data

                const queens_data = all_home_products.filter((res) => res.catagory === "Queens")
                setQueens(queens_data)
                console.log(queens_data)

            } catch (error) {
                console.log(error)
            }
        }
        queens_product()
    }, [search_params])
    return (
        <div>
            <NavBar />
            <div className="container-fluid p-0 queens-main">
                <div className='banner-main'>
                    <div className='banner-main1'>
                        <div className='banner-img-queen'>
                            <header>Dare to Dazzle – Fashion for the <span>Fearless Woman!</span></header>
                            <h5>Shop the Latest Trends!</h5>
                            <button className='btn btn-warning btn-ui'>Check out</button>
                        </div>
                    </div>
                    <hr />
                </div>
                <header className='header-title'>Walk Like a Queen !</header>



                <div className="row m-0">

                    {
                        queens.map((pro_data) => (
                            <div className="col-6 p-1 col-md-3">
                                <Cards
                                    img={pro_data.img}
                                    title={pro_data.title}
                                    price={`Rs.${pro_data.price}`}
                                    off="(18% OFF)"
                                    id={pro_data._id}


                                />
                            </div>
                        ))
                    }
                </div>
            </div>


            <Footer />
        </div>
    )
}
