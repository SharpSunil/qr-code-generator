import React, { useState } from 'react'
import "./header.scss"
import logo from "../../assets/logo.png"
import { CiMenuFries } from "react-icons/ci";
const Header = () => {
  const [open, setOpen] = useState(false);


  return (
    <>
      <div className="header-parent parent">
        <div className="header-cont container">
          <div className="logo"><img src={logo} /></div>
          <div className="menu">
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Contact</p>
          </div>
         {open && (

           <div className="mobile-menu" onClick={() => setOpen(false)}>
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Contact</p>
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
