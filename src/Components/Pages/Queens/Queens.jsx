import React from 'react'
import NavBar from '../../NavBar/NavBar'
import Footer from '../../Parts/Footer/Footer'
import '../Queens/Queens.css'
import Cards from '../../Parts/Cards/Cards'

export default function Queens() {
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
                    <div className="col-6 p-1 col-md-3">
                        <Cards
                            img='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQF_quQKhj78Wl4Swi9bLhC62MaefDKGic6pUdQ_G5ElJhSX8BtMlnghh56s33zd3TFawbkH_1JpehVzdyeQW8kYGK2iywWVNJj_xkDPlQ&usqp=CAE'
                            title="Tokyo Talkies Women Co-ords Green Dress"
                            price="Rs.599 (18% OFF)"
                        />
                    </div>
                    <div className="col-6 p-1 col-md-3">
                        <Cards
                            img='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR9w-KGWLjgq7hcrVDTbXY198FNtdLaNXN5kVCyucmv7Hw8hULZXfdZ5osEXodE3f24frTiB7D0hzLyT3JjUrGegfZEslPkDZ_uk0JgJIo&usqp=CAE'
                            title="Gown Dark Green Dress"
                            price="Rs.833 (18% OFF)"
                        />
                    </div>
                    <div className="col-6 p-1 col-md-3">
                        <Cards
                            img='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSYAWtvmXMmmEXujwmhMLWR-Cj1kNBToKdBgvPn-1C4oDdWg1oPVPpGkp7f9WdCB_ytwDaGqsnnf4lpX9DsnvLBJ62M9pU8nz_tZ5ijipFB-gaQk9wRjfmUaw&usqp=CAE'
                            title="	Berrylush Women Maxi Red Dress"
                            price="Rs.1199 (18% OFF)"
                        />
                    </div>
                    <div className="col-6 p-1 col-md-3">
                        <Cards
                            img='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRIIExUSR0re8ZSf5yREkn115heH0ITzuyagR4WRh6BY6Z0Ljfh-dVbEW-HqMNAtY0EuvSONmVEvzdvId3gb2ve9zaeQzicD7jtN4voxqrjP-Rj24Y05GLOEw&usqp=CAE'
                            title="Thapnath Women Embellished Fit & Flared"
                            price="Rs.1650 (18% OFF)"
                        />
                    </div>
                    <div className="col-6 p-1 col-md-3">
                        <Cards
                            img='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRG3nq6P2N58zIu0x7GxcPSArEdAMJVfuH8_uY4GB-VW2wZD-tdb6qotpU4T9vlyomINYq9yJRJz7Sdxm9aQvao1nqWr0Ty_MlNaGdQjVcHS-61_X2nDf3S&usqp=CAE'
                            title="MABISH by Sonal Jain Satin Midi Wrap Dress"
                            price="Rs.1179 (18% OFF)"
                        />
                    </div>
                    <div className="col-6 p-1 col-md-3">
                        <Cards
                            img='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ39wOswEATEy2sj4lhbZ7cy8wterWj50rSXE548QA1CKyvrJvvrbk-jX2VJOwtYX_pJtYoRZhtvhq9rQcVfS-IQ2PKx239koNQB8MBmvs&usqp=CAE'
                            title="Round Neck Sleeveless Sheath"
                            price="Rs.890 (Rs 200 OFF)"
                        />
                    </div>
                    <div className="col-6 p-1 col-md-3">
                        <Cards
                            img='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcROvvtv52t4bCMLXSRVcU2AXnQYOYaEkUjUnpLqRa7AVeg8adxiW3MFBe5FNq4e3NbJvnQiD2qIf4NRKCg-66ipdQIRzNe-mVH10M6Ty3cn&usqp=CAE'
                            title="Rebikatrendz Women Layered Dark Blue Dress"
                            price="Rs.909 (Rs 200 OFF)"
                        />
                    </div>
                    <div className="col-6 p-1 col-md-3">
                        <Cards
                            img='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSHfq0uRBST_K6pRnGh1dhoitMiefmqTygkVhn4MasHvZi-CrztiHVugHxYFv0-pZcEsIv7aPN0tWp_z7hP5MUJe8vgOeyt_W0w9jlBOGgZ&usqp=CAE'
                            title="Athena Elegant Fuchsia Pink Balloon Puff Sleeves"
                            price="Rs.679 (Rs 100 OFF)"
                        />
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}
