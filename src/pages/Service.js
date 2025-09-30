import React from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const servicesList = [
  { title: "School / College Websites", desc: "Admissions info, timetable, notices, results.", img: "school-3d.png" },
  { title: "Interior Design Website", desc: "Portfolio showcase, enquiry form.", img: "interior.webp" },
  { title: "E-Commerce Web App", desc: "Shopping cart, product pages, payments UI.", img: "cart1.webp" },
  { title: "Restaurant / Food Delivery", desc: "Menu, online booking, order tracking.", img: "Restaurant.webp" },
  { title: "Real Estate Website", desc: "Property listings, search filters, contact builder.", img: "real-estate.webp" },
  { title: "Hospital / Clinic Website", desc: "Doctor profiles, patient info.", img: "hospital.webp" },
  { title: "Blog / News Web App", desc: "Categories, comments, search, likes.", img: "blog.webp" },
  { title: "Event Management Website", desc: "Upcoming events, ticket booking, gallery.", img: "event.webp" },
  { title: "Portfolio Websites", desc: "For professionals like doctors, teachers, artists.", img: "portfoliopic.png" },
  { title: "Travel / Tourism Website", desc: "Tour packages, booking forms, gallery.", img: "travel.webp" },
  { title: "Fitness / Gym Website", desc: "Trainer profiles, class schedules.", img: "gym.webp" },
  { title: "Online Learning Platform", desc: "Courses, enroll, track progress.", img: "online.webp" }
];

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">My Services</h1>
      <p className="services-subtitle">
        I build professional, responsive websites & web apps for various industries.
      </p>

      <div className="services-grid">
        {servicesList.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-left">
              <img src={service.img} alt={service.title} className="service-img" />
            </div>
            <div className="service-right">
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
              {/* Book Now Button */}
              <button className="book-service">
                <Link to="/book">
                  <FaCalendarCheck /> <span>Book Now</span>
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="service-matter">
        <h4 className="matter">Etc... Other Websites also </h4>
        <p className="matter-text">
          Apart from interior design, portfolio websites, school websites, 
          and restaurant websites, I also provide custom web solutions tailored
          to your needs. Whether it’s a personal project or a business site, 
          I ensure it looks attractive, works smoothly, and is fully responsive on mobiles, tablets, and desktops.
        </p>
      </div>
    </div>
  );
};

export default Services;
