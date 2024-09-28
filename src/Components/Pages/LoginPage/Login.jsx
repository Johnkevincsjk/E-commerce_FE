import React from 'react'
import '../LoginPage/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react'
import Login_ani from '../Assests/LoginAni.json'
import { useFormik } from 'formik'
import Login_val from './Login_val'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setisLoggedin } from '../../../redux/AuthSlice'

export default function Login() {
    const navi = useNavigate()
    const auth_dispatch = useDispatch()

    const { values, errors, handleBlur, handleSubmit, touched, handleChange } = useFormik({
        initialValues: {
            mailid: '',
            password: ''
        },
        validationSchema: Login_val,
        onSubmit: async (values) => {

            try {
                const Login_data = await axios.post(`${process.env.REACT_APP_Auth}/auth/Login`, values)
                auth_dispatch(setisLoggedin(Login_data.data.success))
                if (Login_data.data.success === true) {
                    toast.success('Login successfully')
                    navi('/')

                }



            } catch (error) {
                toast.error('Invaid userid or password')
                console.log(error)
            }

        }

    })

    return (
        <div className='container-fluid bg-warning Login_form_main'>
            <div className="row Login_row d-flex justify-content-center align-items-center px-md-5 px-3">
                <div className="Login_ani col-12 col-md-6">
                    <Lottie id='login_ani' animationData={Login_ani} />
                </div>
                <div className='Login_form col-12 col-md-6  '>
                    <h4>Log-in</h4>
                    <form action="" className='Login_form2 text-start' onSubmit={handleSubmit}>
                        <input
                            name='mailid'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.mailid}
                            type="email" className='form-control mt-4' placeholder='Mail id'
                        />
                        {touched.mailid && errors.mailid ? (
                            <div className="text-danger ps-2 m-0 form-error">{errors.mailid}</div>
                        ) : null}
                        <input
                            name='password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            type="password" className='form-control  mt-4' placeholder='Password'
                        />
                        {touched.mailid && errors.mailid ? (
                            <div className="text-danger ps-2 m-0 form-error">{errors.password}</div>
                        ) : null}
                        <button className='btn btn-warning my-4'>Log-in</button>
                    </form>
                    <p>Not an user ? <Link to={'/Signin'}>Create account</Link></p>
                </div>
            </div>
        </div>
    )
}
