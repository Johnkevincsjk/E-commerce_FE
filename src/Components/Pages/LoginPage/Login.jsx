import React from 'react'
import '../LoginPage/Login.css'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import Login_ani from '../Assests/LoginAni.json'

export default function Login() {
    return (
        <div className='container-fluid bg-warning Login_form_main'>
            <div className="row Login_row d-flex justify-content-center align-items-center px-md-5 px-3">
                <div className="Login_ani col-12 col-md-6">
                    <Lottie id='login_ani' animationData={Login_ani} />
                </div>
                <div className='Login_form col-12 col-md-6  '>
                    <h4>Log-in</h4>
                    <form action="" className='Login_form2'>
                        <input type="email" className='form-control mb-4' placeholder='Mail id' />
                        <input type="text" className='form-control' placeholder='Password' />
                        <button className='btn btn-warning my-4'>Log-in</button>
                    </form>
                    <p>Not an user ? <Link to={'/Signin'}>Create account</Link></p>
                </div>
            </div>
        </div>
    )
}
