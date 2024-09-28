import React from 'react'
import Lottie from 'lottie-react'
import Login_ani from '../Assests/LoginAni.json'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import Signin_val from './Signin_validation'
import '../SigninPage/Signin.css'
import axios from 'axios'
import { toast } from 'react-toastify'
export default function Signin() {
    const navi = useNavigate()
    const { values, handleBlur, handleSubmit, handleChange, errors, resetForm, touched } = useFormik({
        initialValues: {
            username: "",
            mailid: '',
            password: '',
            Cpassword: ''
        },
        validationSchema: Signin_val,
        onSubmit: async (values) => {
            try {

                const user_data_signin = await axios.post(`${process.env.REACT_APP_Auth}/auth/Signin`, values)

                if (user_data_signin.data.isSignin === true) {
                    toast.success('Acount created successfully')
                    navi('/Login')

                } else {
                    toast.error('User already exist')
                    resetForm()
                }

                console.log(user_data_signin.data.isSignin)

            } catch (error) {
                toast.error('Something went wrong')
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
                <div className='signin_form col-12 col-md-6  '>
                    <h4>Sign-in</h4>
                    <form action="" className='Login_form2' onSubmit={handleSubmit}>

                        <input
                            name='username'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.username}
                            type="text" className='form-control mt-2 ' placeholder='Full name' />
                        {touched.username && errors.username ? (
                            <div className="text-danger ps-2 m-0 form-error">{errors.username}</div>
                        ) : null}
                        <input
                            name='mailid'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.mailid}
                            type="email" className='form-control mt-2 ' placeholder='Mail ID' />
                        {
                            touched.mailid && errors.mailid ? <div className="text-danger ps-2 m-0 form-error">{errors.mailid}</div> : null
                        }
                        <input
                            name='password'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                            type="password" className='form-control mt-2 ' placeholder='Create password' />
                        {
                            touched.password && errors.password ? <div className="text-danger ps-2 m-0 form-error">{errors.password}</div> : null
                        }
                        <input
                            name='Cpassword'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.Cpassword}
                            type="password" className='form-control mt-2 ' placeholder='Confirm password' />
                        {
                            touched.Cpassword && errors.Cpassword ? <div className="text-danger ps-2 m-0 form-error">{errors.Cpassword}</div> : null
                        }
                        <button className='btn btn-warning my-4' type='submit'>Sign-in</button>
                    </form>
                    <p>Already an user ? <Link to={'/Login'}>Log-in</Link></p>
                </div>
            </div>
        </div>
    )
}
