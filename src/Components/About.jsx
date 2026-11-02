
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function SectionIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M9.45001 17.8772C14.2115 17.6442 18 13.7338 18 8.94408C18 7.4743 17.6433 6.08732 17.0111 4.86399C14.4764 6.3183 13.2091 7.04546 12.2507 8.02546C11.1061 9.19582 10.2724 10.6308 9.82481 12.201C9.45001 13.5159 9.45001 14.9697 9.45001 17.8772Z"
                fill="#02111A"
            />
            <path
                d="M8.55001 17.8772C3.78851 17.6442 0 13.7338 0 8.94408C0 7.47429 0.356744 6.08731 0.988876 4.86398C3.52358 6.3183 4.79093 7.04546 5.74937 8.02547C6.89397 9.19583 7.72761 10.6308 8.17521 12.2011C8.55001 13.5159 8.55001 14.9697 8.55001 17.8772Z"
                fill="#02111A"
            />
            <path
                d="M1.43959 4.08981C3.97405 5.54399 5.24127 6.27107 6.57492 6.60594C8.16664 7.00559 9.83338 7.00559 11.4251 6.60594C12.7587 6.27108 14.026 5.54399 16.5604 4.08982C14.9571 1.62862 12.1699 0 9 0C5.8301 0 3.04295 1.62862 1.43959 4.08981Z"
                fill="#02111A"
            />
        </svg>
    );
}

const missionPoints = [
    "Provide reliable, efficient, and customized service solutions across multiple industries.",
    "Maintain the highest standards of statutory compliance, ethics, and governance.",
    "Deliver quality-driven services through skilled manpower and advanced operational systems.",
    "Build long-term strategic partnerships based on trust, transparency, and performance.",
    "Continuously improve service delivery through innovation, technology, and process excellence.",
    "Create value-driven solutions that support business growth and operational efficiency.",
];

function About() {
    return (
        <>
            {/*  <Header />*/}

            {/* ================= HERO AREA STARTS ================= */}
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
                                <h1>About Us</h1>
                                <div className="space20"></div>

                                <a href="/">
                                    Home <i className="fa-solid fa-angle-right"></i>{" "}
                                    <span>About Us</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ================= HERO AREA ENDS ================= */}


            {/* ================= ABOUT AREA STARTS ================= */}
            <section className="about7 sp1">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6">
                            <div className="images image_secc">
                                <img
                                    src="./src/assets/img/vk.jpg"
                                    width="100%"
                                    alt="Vikhyat Group"
                                />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about7-heading heading7">

                                <h5
                                    className="vl-section-subtitle"
                                    data-aos="zoom-in"
                                    data-aos-duration="900"
                                >
                                    <SectionIcon /> About Us
                                </h5>

                                <h2
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                >
                                    Manpower, Facilities and Technology Infrastructure — Under
                                    One Group.
                                </h2>

                                <div className="space16"></div>

                                <p
                                    data-aos="fade-left"
                                    data-aos-duration="1100"
                                >
                                    Vikhyat Group is a professionally managed and diversified
                                    business group headquartered in New Delhi, India. Established
                                    in 2011, the Group provides integrated business support
                                    solutions by bringing together workforce outsourcing,
                                    facility management and IT &amp; engineering infrastructure
                                    support under one umbrella.
                                </p>

                                <div className="space16"></div>

                                <p
                                    data-aos="fade-left"
                                    data-aos-duration="1200"
                                >
                                    Operating through its two specialized entities —
                                    <strong> Vikhyat Projects </strong> and
                                    <strong> Vikhyat Technology </strong> — the Group combines
                                    skilled manpower, technical expertise, operational efficiency
                                    and technology to deliver reliable, compliant and customized
                                    solutions. We serve Government Departments, Public Sector
                                    Undertakings (PSUs), Corporate Houses, Educational
                                    Institutions, Healthcare Facilities and Industrial
                                    Establishments across India.
                                </p>

                                <div className="space16"></div>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">

                            <p
                                data-aos="fade-left"
                                data-aos-duration="1200"
                            >
                                Our approach is built on quality, statutory compliance,
                                reliability, timely execution and long-term client partnerships.
                                Our solutions are designed to help clients improve operational
                                efficiency, strengthen service delivery and build a dependable
                                support infrastructure.
                            </p>

                            <div className="space16"></div>

                            <div
                                className="about-details"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >

                                {/* GROUP AT A GLANCE */}
                                <div className="about-detail-row">

                                    <div className="about-detail-label">
                                        <span>01</span>
                                        <strong className="text-light">
                                            Group at a Glance
                                        </strong>
                                    </div>

                                    <div className="about-detail-content">

                                        <div>
                                            <small>Founded</small>
                                            <strong>2011-13</strong>
                                        </div>

                                        <div>
                                            <small>Headquarters</small>
                                            <strong>New Delhi</strong>
                                        </div>

                                        <div>
                                            <small>Presence</small>
                                            <strong>Pan-India</strong>
                                        </div>

                                    </div>
                                </div>

                                {/* CORE STRENGTHS */}
                                <div className="about-detail-row">

                                    <div className="about-detail-label">
                                        <span>02</span>
                                        <strong className="text-light">
                                            Core Strengths
                                        </strong>
                                    </div>

                                    <div className="about-detail-content strengths">
                                        <span>Integrated Solutions</span>
                                        <span>Professional Expertise</span>
                                        <span>Compliance</span>
                                        <span>Operational Excellence</span>
                                        <span>Reliable Execution</span>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ================= ABOUT AREA ENDS ================= */}


            {/* ================= LEGACY & LEADERSHIP STARTS ================= */}
            <section className="about7 sp1">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6">
                            <div className="about7-heading heading7">

                                <h5
                                    className="vl-section-subtitle"
                                    data-aos="zoom-in"
                                    data-aos-duration="900"
                                >
                                    <SectionIcon /> Legacy &amp; Leadership
                                </h5>

                                <div className="space16"></div>

                                <h2
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                >
                                    Our Force of Success
                                </h2>

                                <div className="space16"></div>

                                <h4
                                    data-aos="fade-left"
                                    data-aos-duration="1050"
                                >
                                    Mr. Durgesh Kumar
                                </h4>

                                <p
                                    className="leadership-designation"
                                    data-aos="fade-left"
                                    data-aos-duration="1100"
                                >
                                    <strong>Founder &amp; Promoter</strong>
                                    <span> | </span>
                                    Business Leader
                                    <span> | </span>
                                    Strategic Professional
                                </p>

                                <div className="space16"></div>

                                <p
                                    data-aos="fade-left"
                                    data-aos-duration="1150"
                                >
                                    Mr. Durgesh Kumar is the driving force behind Vikhyat Group.
                                    With rich professional experience and extensive expertise in
                                    domain operations, his leadership spans Strategic Planning,
                                    Operations Management, Workforce Coordination and Client
                                    Relationship Management.
                                </p>

                                <div className="space16"></div>

                                <p
                                    data-aos="fade-left"
                                    data-aos-duration="1200"
                                >
                                    Under his strategic direction, Vikhyat Group continues to
                                    expand its capabilities as an Integrated Corporate Solutions
                                    Provider across India, leveraging wide industry experience,
                                    statutory compliance and operational excellence to serve
                                    government departments, PSUs and private corporate,
                                    educational, healthcare and industrial clients.
                                </p>

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="images image_secc">
                                <img
                                    src="./src/assets/img/Leadership-Excellence.webp"
                                    width="100%"
                                    alt="Mr. Durgesh Kumar - Founder & Promoter"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* ================= LEGACY & LEADERSHIP ENDS ================= */}


            {/* ================= MISSION & VISION STARTS ================= */}
            <section className="mv-section sp1">
                <div className="container">

                    <div
                        className="mv-heading text-center"
                        data-aos="fade-up"
                    >
                        <span className="mv-subtitle">
                            OUR PURPOSE &amp; DIRECTION
                        </span>

                        <h2>Driving Excellence, Building Trust</h2>

                        <p>
                            Our mission and vision guide every decision, partnership, and
                            solution we deliver.
                        </p>
                    </div>

                    <div className="row g-4">

                        {/* OUR MISSION */}
                        <div
                            className="col-lg-7"
                            data-aos="fade-up"
                            data-aos-duration="900"
                        >
                            <div className="mv-card mv-mission">

                                <div className="mv-card-header">

                                    <div className="mv-icon">
                                        <i className="fa-solid fa-bullseye text-light"></i>
                                    </div>

                                    <div>
                                        <span className="mv-label">
                                            WHAT DRIVES US
                                        </span>

                                        <h3>Our Mission</h3>
                                    </div>

                                </div>

                                <p className="mv-intro">
                                    To deliver reliable, efficient, and customized solutions
                                    that empower businesses and create lasting value across
                                    industries.
                                </p>

                                <ul className="mv-list">
                                    {missionPoints.map((point, index) => (
                                        <li key={index}>
                                            <span className="mv-check">
                                                <i className="fa-solid fa-check"></i>
                                            </span>

                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>

                        {/* OUR VISION */}
                        <div
                            className="col-lg-5"
                            data-aos="fade-up"
                            data-aos-duration="1100"
                        >
                            <div className="mv-card mv-vision">

                                <div className="mv-card-header">

                                    <div className="mv-icon">
                                        <i className="fa-solid fa-eye"></i>
                                    </div>

                                    <div>
                                        <span className="mv-label">
                                            WHERE WE ARE HEADED
                                        </span>

                                        <h3>Our Vision</h3>
                                    </div>

                                </div>

                                <p className="mv-intro">
                                    To become India's most trusted and respected integrated
                                    service provider.
                                </p>

                                <p className="mv-text">
                                    We aim to set new benchmarks in manpower outsourcing,
                                    facility management, and project execution through
                                    innovation, compliance, operational excellence, and customer
                                    satisfaction.
                                </p>

                                <div className="mv-divider"></div>

                                <div className="mv-vision-highlight">

                                    <i className="fa-solid fa-arrow-trend-up"></i>

                                    <div>
                                        <h4>Creating Sustainable Value</h4>

                                        <p>
                                            Delivering world-class services that enhance productivity,
                                            optimize resources, and contribute to organizational
                                            growth.
                                        </p>
                                    </div>

                                </div>

                                <div className="mv-bottom-tag text-light">
                                    <i className="fa-solid fa-handshake text-light"></i>
                                    Trust. Excellence. Growth.
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* ================= MISSION & VISION ENDS ================= */}

            {/*  <Footer />*/}
        </>
    );
}

export default About;
