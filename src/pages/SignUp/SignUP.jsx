import React, { useState } from 'react'
import { CiMail } from 'react-icons/ci'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { CiLock } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import "./Signup.scss"
const SignUP = () => {
    const [showpassword, setShowpassword] = useState(false);
    const swiperImages = [
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        {
            id: 3,
            url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        }
    ];
    return (
        <>
            <div className="sign-up-parent parent">
                <div className="sign-up-cont container">
                    <div className="main-box">
                        <div className="left-side">
                            <div className="main-box-sign-up">
                                <h2>Sign Up</h2>
                                <p className='newline'>Create your account</p>
                                <div className="google-login-input">
                                    <div className="icon"><FcGoogle /><span>Sign up with Google</span></div>
                                </div>
                                <div className="main-line">
                                    Or, login with your email
                                </div>
                                <div className="email-input">
                                    <span><CiMail /></span>
                                    <input type="email" placeholder='Enter you email here' />
                                </div>
                                <div className="password-input">
                                    <span><CiLock /></span>
                                    <input type={showpassword ? "text" : "password"} placeholder='Enter you password here' />
                                    <span
                                        onClick={() => setShowpassword(!showpassword)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        {showpassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
                                    </span>
                                </div>
                                <div className="btn">Sign Up</div>
                                <p>Already have an account? <Link to="/">Log in</Link></p>
                                <div className="consent">
                                    <p>By creating an account, you consent that you have read and agree to our <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>.</p>
                                </div>
                            </div>
                        </div>
                        <div className="right-side">
                            <Swiper
                                pagination={{
                                    type: 'progressbar',
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                navigation={true}
                                loop={true}
                                modules={[Pagination, Navigation, Autoplay]}
                                className="mySwiper"
                            >
                                {swiperImages.map((image) => (
                                    <SwiperSlide key={image.id}>
                                        <img src={image.url} alt={`Slide ${image.id}`} />
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUP
