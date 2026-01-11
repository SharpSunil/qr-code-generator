import React, { useState } from 'react'
import "./header.scss"
import logo from "../../assets/logo.png"
import { CiMenuFries } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Header = () => {
  const [open, setOpen] = useState(false);


  return (
    <>
      <div className="header-parent parent">
        <div className="header-cont container">
          <div className="logo"><img src={logo} /></div>
          <div className="menu">
            <Link to="">Home</Link>
            <Link to="/url_qr">URL To QR Code</Link>
            <Link to="">Services</Link>
            <Link to="">Contact</Link>
          </div>
         {open && (

           <div className="mobile-menu" onClick={() => setOpen(false)}>
            <Link to="">Home</Link>
            <Link to="/url_qr">URL To QR Code</Link>
            <Link to="">Services</Link>
            <Link to="">Contact</Link>
          </div>
         )}
          <div className="toggle" onClick={() => setOpen(!open)}>
            <CiMenuFries />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
