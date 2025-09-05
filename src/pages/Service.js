// src/pages/Service.js
import React, { useState } from "react";
import axios from "axios";

const Service = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    websiteType: "", // 👈 same name as backend
    message: "",
  });

  const [popup, setPopup] = useState({ show: false, type: "", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://portfolio-backend-qsgb.onrender.com/api/contact", formData);


      setPopup({ show: true, type: "success", message: res.data.message });
      setFormData({ name: "", email: "", phone: "", websiteType: "", message: "" });
    } catch (err) {
      setPopup({ show: true, type: "error", message: "❌ Booking Failed. Try again!" });
    }
    setTimeout(() => setPopup({ show: false, type: "", message: "" }), 3000);
  };

  return (
    <section className="service-page">
      <div className="container">
        <h2>Book Your Service</h2>
        <p>Fill out the form below and we will contact you shortly.</p>

        {popup.show && <div className={`popup ${popup.type}`}>{popup.message}</div>}

        <form onSubmit={handleSubmit} className="service-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <label>Mobile Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <label>Type of Website</label>
            <select name="websiteType" value={formData.websiteType} onChange={handleInputChange} required>
              <option value="">-- Select --</option>
              <option value="Business">Business Website</option>
              <option value="E-commerce">E-commerce Website</option>
              <option value="Portfolio">Portfolio</option>
              <option value="school">School/College</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea name="message" rows="4" value={formData.message} onChange={handleInputChange} required></textarea>
          </div>

          <button type="submit" className="service-book-btn">📩 Book Now</button>

        </form>
      </div>
    </section>
  );
};

export default Service;
