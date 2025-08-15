import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./Home.scss";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    website: "",
    facebook: "",
    instagram: "",
    twitter: ""
  });

  const [qrValue, setQrValue] = useState("");
  const qrRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a clean readable format for QR code
    const qrData = `
Name: ${formData.name}
Contact: ${formData.contactNumber}
Email: ${formData.email}
Website: ${formData.website}
Facebook: ${formData.facebook}
Instagram: ${formData.instagram}
Twitter: ${formData.twitter}
    `.trim();

    setQrValue(qrData);
  };

  const downloadQR = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "my_qrcode.png";
    a.click();
  };

  return (
    <div className="home-parent parent">
      <div className="home-container container">
        <p>If you submit this form automatically generate a QR code</p>

        <div className="main-box">
          {/* Left Side Form */}
          <div className="left-side">
            <h3>Enter Your Details</h3>
            <form className="main-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="url"
                name="website"
                placeholder="Website Link"
                value={formData.website}
                onChange={handleChange}
              />
              <input
                type="url"
                name="facebook"
                placeholder="Facebook Profile Link"
                value={formData.facebook}
                onChange={handleChange}
              />
              <input
                type="url"
                name="instagram"
                placeholder="Instagram Profile Link"
                value={formData.instagram}
                onChange={handleChange}
              />
              <input
                type="url"
                name="twitter"
                placeholder="Twitter Profile Link"
                value={formData.twitter}
                onChange={handleChange}
              />
              <button className="btn" type="submit">
                Generate QR Code
              </button>
            </form>
          </div>

          {/* Right Side QR Code Preview */}
          <div className="right-side" ref={qrRef}>
            <h3>Preview and download option for your QR-Code</h3>
            {qrValue ? (
              <>
                <QRCodeCanvas value={qrValue} size={200} includeMargin={true} />
                <br />
                <button className="btn" onClick={downloadQR}>
                  Download QR Code
                </button>
              </>
            ) : (
              <p>No QR code generated yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
