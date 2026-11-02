import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Apne project ke hisaab se path adjust karein
import Header from "../components/Header";
import Footer from "../components/Footer";

/* ---------- Reusable icon (SVG 3 jagah repeat tha) ---------- */
const SectionIcon = ({ color = "#fff" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
            d="M9.45001 17.8772C14.2115 17.6442 18 13.7338 18 8.94408C18 7.4743 17.6433 6.08732 17.0111 4.86399C14.4764 6.3183 13.2091 7.04546 12.2507 8.02546C11.1061 9.19582 10.2724 10.6308 9.82481 12.201C9.45001 13.5159 9.45001 14.9697 9.45001 17.8772Z"
            fill={color}
        />
        <path
            d="M8.55001 17.8772C3.78851 17.6442 0 13.7338 0 8.94408C0 7.47429 0.356744 6.08731 0.988876 4.86398C3.52358 6.3183 4.79093 7.04546 5.74937 8.02547C6.89397 9.19583 7.72761 10.6308 8.17521 12.2011C8.55001 13.5159 8.55001 14.9697 8.55001 17.8772Z"
            fill={color}
        />
        <path
            d="M1.43959 4.08981C3.97405 5.54399 5.24127 6.27107 6.57492 6.60594C8.16664 7.00559 9.83338 7.00559 11.4251 6.60594C12.7587 6.27108 14.026 5.54399 16.5604 4.08982C14.9571 1.62862 12.1699 0 9 0C5.8301 0 3.04295 1.62862 1.43959 4.08981Z"
            fill={color}
        />
    </svg>
);

/* ---------- Data ---------- */
const strengths = [
    "Integrated Solutions",
    "Professional Expertise",
    "Compliance",
    "Operational Excellence",
    "Reliable Execution",
];

const reasons = [
    {
        icon: "compliance.png",
        title: "Compliance-Driven Operations",
        text: "Strict adherence to all statutory requirements including PF, ESIC, GST, Labour Laws, Professional Tax, and TDS regulations.",
        duration: 1200,
    },
    {
        icon: "workheet.png",
        title: "Experienced Workforce Management",
        text: "Professional deployment, supervision, monitoring, and reporting systems ensuring maximum workforce efficiency.",
        duration: 1300,
    },
    {
        icon: "capability.png",
        title: "Pan-India Service Capability",
        text: "Ability to execute and manage contracts across multiple states and locations.",
        duration: 1300,
    },
    {
        icon: "achievement.png",
        title: "Quality & Performance Assurance",
        text: "Service delivery governed through KPIs, SLAs, audits, and performance measurement frameworks.",
        duration: 1300,
    },
    {
        icon: "tech.png",
        title: "Technology-Enabled Operations",
        text: "Technology-Enabled Operations", // TODO: real description likhein
        duration: 1300,
    },
    {
        icon: "review.png",
        title: "Client-Centric Approach",
        text: "Customized solutions aligned with client objectives and operational requirements.",
        duration: 1300,
    },
];

/* ---------- Page ---------- */
const Hero = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <>
            {/* <Header />*/}

            {/* ===== HERO AREA ===== */}
            <div className="hero8-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="hero8-heading">
                                <h5 data-aos="fade-left" data-aos-duration="800">
                                    <SectionIcon color="#fff" /> Vikhyat Groups
                                </h5>
                                <div className="space12"></div>

                                <h1 data-aos="fade-left" data-aos-duration="900">
                                    Integrated Manpower Outsourcing, Facility Management &amp; Group Solutions
                                </h1>
                                <div className="space10"></div>

                                <p data-aos="fade-left" data-aos-duration="1000">
                                    <i>"Delivering Excellence. Ensuring Compliance. Creating Value."</i>
                                </p>
                                <div className="space12"></div>

                                <div className="btn-area1" data-aos="fade-left" data-aos-duration="1200">
                                    <Link to="/contact-us" className="vl-btn8">
                                        <span className="text">Contact Us</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-img">
                    <img src="./src/assets/img/home_banner.png" alt="" />
                </div>
            </div>

            {/* ===== ABOUT AREA ===== */}
            <div className="about7 sp1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="images image_secc">
                                <img src="./src/assets/img/vk.jpg" width="100%" alt="Vikhyat Group" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about7-heading heading7">
                                <h5 className="vl-section-subtitle" data-aos="zoom-in" data-aos-duration="900">
                                    <SectionIcon color="#02111A" />
                                    About Us
                                </h5>

                                <h2 data-aos="fade-left" data-aos-duration="1000">
                                    Manpower, Facilities and Technology Infrastructure â€” Under One Group.
                                </h2>

                                <div className="space16"></div>

                                <p data-aos="fade-left" data-aos-duration="1100">
                                    Vikhyat Group is a professionally managed and diversified business group
                                    headquartered in New Delhi, India. Established in 2011, the Group provides
                                    integrated business support solutions by bringing together workforce
                                    outsourcing, facility management and IT &amp; engineering infrastructure
                                    support under one umbrella.
                                </p>

                                <div className="space16"></div>

                                <p data-aos="fade-left" data-aos-duration="1200">
                                    Operating through its two specialized entities â€”{" "}
                                    <strong>Vikhyat Projects</strong> and <strong>Vikhyat Technology</strong> â€”
                                    the Group combines skilled manpower, technical expertise, operational
                                    efficiency and technology to deliver reliable, compliant and customized
                                    solutions. We serve Government Departments, Public Sector Undertakings
                                    (PSUs), Corporate Houses, Educational Institutions, Healthcare Facilities
                                    and Industrial Establishments across India.
                                </p>

                                <div className="space16"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <p data-aos="fade-left" data-aos-duration="1200">
                                Our approach is built on quality, statutory compliance, reliability, timely
                                execution and long-term client partnerships. Our solutions are designed to help
                                clients improve operational efficiency, strengthen service delivery and build a
                                dependable support infrastructure.
                            </p>

                            <div className="space16"></div>

                            <div className="about-details" data-aos="fade-up" data-aos-duration="1000">
                                {/* Group at a Glance */}
                                <div className="about-detail-row">
                                    <div className="about-detail-label">
                                        <span>01</span>
                                        <strong className="text-light">Group at a Glance</strong>
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

                                {/* Core Strengths */}
                                <div className="about-detail-row">
                                    <div className="about-detail-label">
                                        <span>02</span>
                                        <strong className="text-light">Core Strengths</strong>
                                    </div>

                                    <div className="about-detail-content strengths">
                                        {strengths.map((item) => (
                                            <span key={item}>{item}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== WHY CHOOSE US ===== */}
            <div className="about6 service3 sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="img2 image_secc" data-aos="fade-right" data-aos-duration="1100">
                                <img src="./src/assets/img/project-img9.png" width="100%" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="about6-heading heading6">
                                <h5 className="vl-section-subtitle" data-aos="zoom-in" data-aos-duration="900">
                                    <SectionIcon color="#02111A" /> Why Us
                                </h5>
                                <h2 className="vl-section-title" data-aos="zoom-in" data-aos-duration="1000">
                                    Why Choose Vikhyat Groups?
                                </h2>
                                <div className="space20"></div>

                                {reasons.map((item, index) => (
                                    <div key={item.title}>
                                        {index !== 0 && <div className="space24"></div>}
                                        <div
                                            className="about3-boxarea"
                                            data-aos="fade-left"
                                            data-aos-duration={item.duration}
                                        >
                                            <div className="icons">
                                                <img src={`./src/assets/img/${item.icon}`} alt="" />
                                            </div>
                                            <div className="text-area">
                                                <a href="#">{item.title}</a>
                                                <div className="space10"></div>
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<Footer />*/}
        </>
    );
};

export default Hero;
