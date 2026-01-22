import React, { useState } from 'react'
import './new_home.scss'
import { BsGlobe } from "react-icons/bs";
const New_Home = () => {
    const [url, setUrl] = useState("");
    return (
        <>
            <div className="new-home-parent parent">
                <div className="new-home-cont container">
                    <h2>Easily create a QR code <span>for any occusion in seconds</span></h2>
                    <div className="main-home-box">
                        <div className="left-box">
                            <div className="first-box">
                                <div className="left-icon"><BsGlobe /></div>
                                <div className="right-input">
                                    <label htmlFor="url">Enter or paste URL</label>
                                    <div className="input-filed">
                                        <input
                                            type="text"
                                            placeholder="https://example.com"
                                            id="url"
                                            value={url}
                                            onChange={(e) => setUrl(e.target.value)}
                                        />

                                        <div className="btn">
                                            {url.trim() ? "Download QR Code" : "Generate QR Code"}
                                        </div>
                                    </div>
                                    <p className='sample'>Your QR code will open this URL</p>


                                </div>
                            </div>
                            <div className="second-box">
                                <div className="qr-type">
                                    Or select a another type of QR code
                                </div>
                            </div>

                            <p>Our QR code generator makes it simple to create custom QR codes for various purposes. Whether you want to share your profile, website, or social media links, our tool has got you covered.</p>
                            <div className="btn">Get Started</div>
                        </div>
                        <div className="right-box">
                            <img src="https://i.ibb.co/0j6y2vY/qr-code-illustration.png" alt="qr-code-illustration" border="0" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default New_Home
