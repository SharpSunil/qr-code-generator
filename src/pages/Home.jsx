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
    twitter: "",
    image: null,
  });

  const [qrValue, setQrValue] = useState("");
  const qrRef = useRef();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files.length > 0) {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageBase64 = "";
    if (formData.image) {
      imageBase64 = await toBase64(formData.image);

      // Save in localStorage (replace old image if any)
      localStorage.setItem("profileImage", imageBase64);
    }

    // Store all details except actual image in QR
    const profileData = {
      ...formData,
      image: null, // just a placeholder
    };

    // URL-safe Base64 encoding
    const encoded = btoa(JSON.stringify(profileData))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    const profileUrl = `${window.location.origin}/profile?data=${encoded}`;
    setQrValue(profileUrl);
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
              <input
                type="file"
                name="image"
                accept="image/*"
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

export default Home;
