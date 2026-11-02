
import React, { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        lname: "",
        email: "",
        phone: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Frontend form is ready.
        // Connect your backend API here to send the enquiry.
        setStatus(
            "Your form is ready. Connect your backend API to submit your enquiry."
        );
    };

    return (
        <>
            {/* Hero Section */}
            <section
                className="inner-header-area"
                style={{
                    backgroundImage: "url('./src/assets/img/hero-bg7.webp')",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-xs-12">
                            <div className="inner-heading">
                                <h1>Contact Us</h1>
                                <div className="space20"></div>

                                <a href="/">
                                    Home <i className="fa-solid fa-angle-right"></i>{" "}
                                    <span>Contact Us</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="contact-inner-area sp5">
                <div className="container">
                    <div className="row">
                        {/* Registered Office */}
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="single-box">
                                <div className="icons">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>

                                <div className="text">
                                    <h4>Registered Office</h4>
                                    <div className="space10"></div>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Anupam+Plaza+Mayur+Vihar+Phase+I+New+Delhi"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        203, IInd Floor, Anupam Plaza, Plot No. 3 LSC, Mayur Vihar
                                        Phase-I, New Delhi-110091
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Corporate Office */}
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="single-box">
                                <div className="icons">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>

                                <div className="text">
                                    <h4>Corporate Office</h4>
                                    <div className="space10"></div>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Bhandup+Industrial+Estate+Mumbai"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        5004, Bhandup Industrial Estate, Pannalal Compound, LBS
                                        Marg (West), Mumbai – 400078
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="single-box">
                                <div className="icons">
                                    <i className="fa-regular fa-envelope"></i>
                                </div>

                                <div className="text">
                                    <h4>Our Email</h4>
                                    <div className="space10"></div>
                                    <a href="mailto:info@vikhyatgroup.com">
                                        info@vikhyatgroup.com
                                    </a>
                                    <a href="mailto:sales@vikhyatgroup.com">
                                        sales@vikhyatgroup.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="single-box">
                                <div className="icons">
                                    <i className="fa-solid fa-phone"></i>
                                </div>

                                <div className="text">
                                    <h4>Call/Message</h4>
                                    <div className="space10"></div>
                                    <a href="tel:+919999119144">+91 99991 19144</a>
                                    <a href="tel:+918446663339">+91 84466 63339</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space70"></div>

                    {/* Contact Form Section */}
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="heading1">
                                <div className="img1">
                                    <img
                                        src="./src/assets/img/about-img11.webp"
                                        alt="Contact Vikhyat Group"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div
                                className="contact-main-boxarea"
                                data-aos="fade-left"
                                data-aos-duration="1200"
                            >
                                <div className="heading1">
                                    <h2 data-aos="zoom-in" data-aos-duration="1000">
                                        Get in Touch
                                    </h2>
                                    <div className="space16"></div>
                                </div>

                                <p>
                                    Our response time is within 30 minutes during business hours.
                                </p>

                                <div className="space16"></div>

                                <form id="ct-form" name="contact_form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="input-area">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="First Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="input-area">
                                                <input
                                                    type="text"
                                                    name="lname"
                                                    placeholder="Last Name"
                                                    value={formData.lname}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="input-area">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email Address"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="input-area">
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="Phone Number"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="input-area">
                                                <textarea
                                                    name="message"
                                                    placeholder="How can we help you?"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows="5"
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="input-area">
                                                <button type="submit" className="vl-btn1">
                                                    Send Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                {status && (
                                    <div
                                        role="status"
                                        style={{
                                            color: "#df4949",
                                            marginTop: "10px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {status}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="row">
                        <div className="space100 d-lg-block d-none"></div>
                        <div className="space50 d-lg-none d-block"></div>

                        <div className="col-lg-12">
                            <div className="contact-maps-area">
                                <iframe
                                    title="Vikhyat Group Corporate Office Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30151.482401275538!2d72.89774547431644!3d19.154309200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8667f3d0b23%3A0x2e2ed6211bffa54c!2sBhandup%20Industrial%20Estate%20Co-Operative%20Society%20Limited!5e0!3m2!1sen!2sin!4v1781604379013!5m2!1sen!2sin"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
