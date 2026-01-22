import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import "./App.scss";
import Home1 from "./pages/Home1";
import Header from "./componants/Header/Header";
import Footer from "./componants/Footer/Footer";
import Url_qr from "./pages/URL-qr/Url_qr";
import Login from "./pages/Login/Login";
import SignUP from "./pages/SignUp/SignUP";
import New_Home from "./pages/Home/New_Home";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<New_Home />} />
         <Route path="/home1" element={<Home1 /> } />
         <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUP /> } />
       
        <Route path="/url_qr" element={<Url_qr />} />
        <Route path="/profile" element={<Profile />} />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
