import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./Home.scss";

const Home1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    website: "",
    facebook: "",
    instagram: "",
    twitter: "",
  });

  const [qrValue, setQrValue] = useState("");
  const qrRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format data as readable text
    const profileText = `
Name: ${formData.name}
Contact Number: ${formData.contactNumber}
Email: ${formData.email}
Website: ${formData.website || "N/A"}
Facebook: ${formData.facebook || "N/A"}
Instagram: ${formData.instagram || "N/A"}
Twitter: ${formData.twitter || "N/A"}
`;

    setQrValue(profileText);
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
        <p>Fill out the form to generate a QR code for your profile</p>

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
            <h3>Preview and Download</h3>
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

export default Home1;
