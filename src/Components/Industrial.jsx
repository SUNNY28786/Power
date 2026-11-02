
import React from "react";
import { Link } from "react-router-dom";

const services = [
    "Infrastructure Development",
    "Industrial Plant Solutions",
    "Civil Engineering & Construction",
    "Construction Project Management PMC",
    "MEP Services",
    "Turnkey Projects",
    "Fabrication & Erection",
    "Horticulture & Landscaping Services - Industrial Township",
    "Integrated Facility Management",
    "Waste Management & Garbage Disposal",
    "Scrap Management & Disposal",
    "Industrial Supply & Trading",
    "Skilled & Unskilled Manpower",
];

function Industrial() {
    return (
        <>
            {/* HERO AREA STARTS */}
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
                                <h1>
                                    VPPL – Infrastructure &amp; Industrial Solutions
                                </h1>

                                <div className="space20"></div>

                                <Link to="/">
                                    Home <i className="fa-solid fa-angle-right"></i>{" "}
                                    <span>
                                        VPPL – Infrastructure &amp; Industrial Solutions
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* HERO AREA ENDS */}

            {/* VPPL SERVICE AREA STARTS */}
            <div className="service5">
                <div className="container">
                    <div className="row mt-5 mb-5">
                        {/* LEFT SIDE: SERVICES */}
                        <div
                            className="col-lg-6 col-md-6"
                            data-aos="zoom-in-up"
                            data-aos-duration="900"
                        >
                            <div className="service5-boxarea">
                                <h2 className="title">
                                    VPPL – Infrastructure &amp; Industrial Solutions
                                </h2>

                                <div className="space16"></div>

                                <p>
                                    Infrastructure, industrial and project execution
                                    solutions for public and private sector organizations.
                                </p>

                                <div className="space18"></div>

                                <div className="divclas2334">
                                    <ul className="mv-list">
                                        {services.map((service) => (
                                            <li key={service}>
                                                <span className="mv-check">
                                                    <i className="fa-solid fa-check"></i>
                                                </span>

                                                <span>{service}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE: IMAGE */}
                        <div
                            className="col-lg-6 col-md-6"
                            data-aos="zoom-in-up"
                            data-aos-duration="900"
                        >
                            <img
                                src="/assets/img/vppl–infrastructure-and-industrial-solutions.webp"
                                className="img-fluid rounded"
                                alt="VPPL Infrastructure and Industrial Solutions"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* VPPL SERVICE AREA ENDS */}

            {/*
        DHPL, DSSPL aur additional service sections
        original PHP mein commented the, isliye yahan
        bhi active nahi kiye gaye hain.
      */}
        </>
    );
}

export default Industrial;
