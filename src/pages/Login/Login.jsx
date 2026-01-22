import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { CiMail } from "react-icons/ci";
import './login.scss'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <>
      <div className="login-parent parent">
        <div className="login-cont container">
            <div className="main-box">
                <h2>Welcome Back!</h2>
                <div className="google-login-input">
                    <div className="icon"><FcGoogle /><span>Sign in with Google</span></div>
                </div>
                <div className="main-line">
                    Or, login with your email
                    </div>
                <div className="email-input">
                    <span><CiMail /></span>
                    <input type="email" placeholder='Enter you email here' />
                </div>
                <div className="btn">Log in</div>

                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login
