import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import "./App.scss";
import Home1 from "./pages/Home1";
import Header from "./componants/Header/Header";
import Footer from "./componants/Footer/Footer";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home1" element={<Home1 /> } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
