
import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const services = [
    "EPC Projects",
    "Electrical Supply & Contracting",
    "Solar Power Solutions On-grid / Off-grid",
    "IT Infrastructure & Networking",
    "CCTV & Surveillance Systems",
    "UPS & Battery Solutions",
    "AMC Computer & IT",
    "E-Waste Management & Recycling",
    "Data Entry & Back Office Manpower",
    "Annual Maintenance Contracts",
];

function vptl() {
    return (
        <>
            <Header />

            {/* Hero Area */}
            <div
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
                                <h1>VTPL – Electrical, IT &amp; Green Energy</h1>

                                <div className="space20"></div>

                                <Link to="/">
                                    Home{" "}
                                    <i className="fa-solid fa-angle-right"></i>{" "}
                                    <span>VTPL – Electrical, IT &amp; Green Energy</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* VTPL Service Area */}
            <section className="service5">
                <div className="container">
                    <div className="row mt-5 mb-5">
                        {/* Service Details */}
                        <div
                            className="col-lg-6 col-md-6"
                            data-aos="zoom-in-up"
                            data-aos-duration="900"
                        >
                            <div className="service5-boxarea">
                                <a href="#vtpl-services" className="title">
                                    VTPL – Electrical, IT &amp; Green Energy
                                </a>

                                <div className="space16"></div>

                                <p>
                                    Electrical, technology, renewable energy and IT
                                    infrastructure solutions.
                                </p>

                                <div className="space18"></div>

                                <ul className="mv-list" id="vtpl-services">
                                    {services.map((service, index) => (
                                        <li key={index}>
                                            <span className="mv-check">
                                                <i className="fa-solid fa-check"></i>
                                            </span>

                                            <span>{service}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Service Image */}
                        <div
                            className="col-lg-6 col-md-6"
                            data-aos="zoom-in-up"
                            data-aos-duration="900"
                        >
                            <img
                                src="./src/assets/img/vtpl–electrical-itand-green-energy.webp"
                                className="img-fluid rounded"
                                alt="VTPL Electrical, IT and Green Energy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* <Footer />*/}
        </>
    );
}

export default vptl;
