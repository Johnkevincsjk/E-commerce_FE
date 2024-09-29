import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import '../PaymentPage/Payment.css'
import { color } from 'framer-motion'

export default function Payment() {

    const [payment, setPayment] = useState("")
    const total_items = useSelector((state) => state.cart)
    const total_amt = total_items.reduce((total, items) => total + items.tot_amt, 0)

    const handlePaymentSubmit = (e) => {

        e.preventDefault()
        if (payment != total_amt) {
            toast.error("Enter correct amount")

        } else {
            var option = {
                key: '',
                key_secret: '',
                amount: payment * 100,
                currency: "INR",
                name: 'Kingswear',
                description: 'Project purpose',
                handler: function (response) {
                    toast.info(response.razorpay_payment_id)
                },
                prefill: {
                    name: "John Kevin",
                    email: 'johnkevin.csjk@gmail.com',
                    contact: "8056134047"

                },
                notes: {
                    address: 'Razoroay coorparate office'
                },
                theme: {
                    color: "#ffd700"
                }
            };
            const pay_ini = new window.Razorpay(option)
            pay_ini.open()

        }

    }

    return (
        <div className='container-fluid bg-warning payment-main'>
            <h1>Payment</h1>
            <div className="paymentform">
                <div className='payment_card'>
                    <h5>{`Order Total ${total_amt}`}</h5>
                </div>
                <div className="payment_body">
                    <form action="" onSubmit={handlePaymentSubmit}>
                        <input className='form-control w-5 m-3' type="number" placeholder='Enter amount' onChange={(e) => setPayment(e.target.value)} value={payment} />
                        <button className='btn btn-success' type='submit' >Process to pay</button>
                    </form>



                </div>
            </div>

        </div>
    )
}
