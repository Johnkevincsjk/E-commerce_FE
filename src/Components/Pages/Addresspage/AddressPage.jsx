import React from 'react'
import './AddressPage.css'
import NavBar from '../../NavBar/NavBar'
import axios from 'axios'
import { useFormik } from 'formik'
import Address_val from './Address_val'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function AdressPage() {
    const navi = useNavigate()

    const isLogin = useSelector((state) => state.Auth.isLoggedin)
    const cartItems = useSelector((state) => state.cart);

    // Calculate the total amount by summing up 'tot_amt' for each item in the cart
    const totalAmount = cartItems.reduce((total, item) => total + item.tot_amt, 0);

    const { handleBlur, handleChange, handleSubmit, values, resetForm, touched, errors } = useFormik({
        initialValues: {
            mailid: '',
            receiverName: '',
            address: '',
            state: '',
            pincode: ''
        },
        validationSchema: Address_val,
        onSubmit: async (values) => {

            try {
                const update_data = await axios.post(`${process.env.REACT_APP_PRODUCT_API}/buy/buydetails`, values)


                if (isLogin === true) {
                    if (update_data.data.success === true) {
                        toast("Details saved")
                        navi('/Payment')
                    }
                } else {
                    toast.error('Something went wrong')

                }
            } catch (error) {
                console.log(error)
                toast.error('Something went wrong')
            }



        }
    })

    return (
        <div className='container-fluid p-0 userdetails_main'>
            <NavBar />
            <div className='userdetails_form'>
                <h3>Confirm Your details</h3>
                <h6>Total Amount: Rs.{totalAmount}</h6>
                <form onSubmit={handleSubmit} className='text-start w-100'>


                    <input type="email" className='form-control mt-3' placeholder='Confirm mailid'
                        name='mailid'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.mailid} />
                    {touched.mailid && errors.mailid ? (
                        <div className="text-danger ps-2 m-0 form-error">{errors.mailid}</div>
                    ) : null}


                    <input type="text" className='form-control mt-3' placeholder='Receiver Name'
                        name='receiverName'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.receiverName}
                    />
                    {touched.receiverName && errors.receiverName ? (
                        <div className="text-danger ps-2 m-0 form-error">{errors.receiverName}</div>
                    ) : null}



                    <input type="text" className='form-control mt-3' placeholder='Address'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.address}
                        name='address' />
                    {touched.address && errors.address ? (
                        <div className="text-danger ps-2 m-0 form-error">{errors.address}</div>
                    ) : null}



                    <input type="text" className='form-control mt-3' placeholder='State'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.state}
                        name='state'
                    />
                    {touched.state && errors.state ? (
                        <div className="text-danger ps-2 m-0 form-error">{errors.state}</div>
                    ) : null}
                    <input type="number" className='form-control mt-3' placeholder='Pincode'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.pincode}
                        name='pincode' />
                    {touched.pincode && errors.pincode ? (
                        <div className="text-danger ps-2 m-0 form-error">{errors.pincode}</div>
                    ) : null}
                    <button type='submit' className='btn btn-success mt-3' >Save</button>
                </form>
            </div>

        </div>
    )
}
