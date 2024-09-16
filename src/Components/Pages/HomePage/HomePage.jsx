import React, { useEffect, useState } from 'react'
import NavBar from '../../NavBar/NavBar'
import Banner from '../../Banner/Banner'
import '../HomePage/HomePage.css'
import Cards from '../../Parts/Cards/Cards'
import Footer from '../../Parts/Footer/Footer'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'



export default function HomePage() {

    const [Home_product, setHome_products] = useState([])
    const [Top_Home_products, setTop_Home_products] = useState([])
    const [search_params, setSearch_params] = useSearchParams()


    useEffect(() => {

        const Home_products = async () => {
            try {
                const resp = await axios.get(`${process.env.REACT_APP_PRODUCT_API}/products?${search_params}`)

                const all_home_products = resp.data.data

                const Home_page_Items = all_home_products.filter((res) => res.catagory === "Homepage")
                const Top_products = all_home_products.filter((res) => res.catagory === "Homepage_TopSale")

                setHome_products(Home_page_Items)
                setTop_Home_products(Top_products)
                console.log(all_home_products[0]._id);

            } catch (error) {
                console.log(error);

            }
        }
        Home_products()
    }, [search_params])
    return (
        // Products showing in Home Page Main:

        <div className='container-fluid p-0'>
            <NavBar />  {/* the navBar is locationed here */}

            {search_params.size === 0 ? <Banner /> : ""}{/*Home Page banner component is located here */}

            <div className='home-sec2' id='home-sec2'>
                <h1>Biggest Deals On Top Brands</h1>
                <div className="row m-0">
                    {
                        Home_product.map((pro_data) => (
                            <div className="col-6 p-1 col-md-3">
                                <Cards
                                    img={pro_data.img}
                                    title={pro_data.title}
                                    price="Rs.249"
                                    off="(18% OFF)"
                                    id={pro_data._id}


                                />
                            </div>
                        ))
                    }
                </div>

            </div>
            <hr />


            {/*This is for top saling products */}


            <div className='row m-0 cards-wrapper2' id='top_men'>
                <header className='header-title'>Top Fashions Of today</header>
                {
                    Top_Home_products.map((top_pro) => (
                        <div className="col-12 p-1 mt-2 col-md-4">
                            <Cards
                                img={top_pro.img}
                                title={top_pro.title}
                                price={top_pro.price}
                                off={top_pro.off}
                                id={top_pro._id}

                            />
                        </div>
                    ))
                }

            </div>
            <hr />
            <div className="container faq-main">
                <header className='header-title'>FAQ</header>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What is your return policy?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                We offer a 30-day return policy. If you're not satisfied with your purchase, you can return it within 30 days of receiving the item. The item must be unworn, unwashed, and in its original packaging with all tags attached.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How do I return an item?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                To return an item, please visit our returns portal on the website. Enter your order number and email address, select the items you wish to return, and follow the prompts to generate a return label. Ship the package back to us using the label provided.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                When will I receive my refund?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Once we receive and inspect your return, we will process your refund. It typically takes 5-7 business days for the refund to appear in your account, depending on your payment method.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer /> {/* Page Footer is located here */}
        </div>
    )
}
