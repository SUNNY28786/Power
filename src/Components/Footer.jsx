import React from "react";

const Footer = () => {
    return (
        <>
            {/*===== CTA AREA STARTS =======*/}
            <div className="cta4-aection-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cta-bg-area">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="cta-heading">
                                            <h2 data-aos="zoom-in" data-aos-duration="900">
                                                Transform Your Workforce & Transform Your Future
                                            </h2>
                                            <div className="space16"></div>
                                            <p>
                                                Ready to take the next step? Whether you're looking to
                                                build your dream team or find the perfect career.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="row">
                                            {/* Phone */}
                                            <div
                                                className="col-lg-6 col-md-6"
                                                data-aos="zoom-in"
                                                data-aos-duration="1000"
                                            >
                                                <div className="cta-contact-area">
                                                    <div className="icons">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="32"
                                                            height="32"
                                                            viewBox="0 0 32 32"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M17.7333 9.0013C19.0357 9.2554 20.2325 9.89232 21.1708 10.8306C22.1091 11.7688 22.746 12.9656 23 14.268M17.7333 3.66797C20.4391 3.96856 22.9621 5.1802 24.8884 7.10398C26.8145 9.02776 28.0295 11.5493 28.3333 14.2546M23.6667 29.0013C12.2528 29.0013 3 19.7485 3 8.33464C3 7.81968 3.01884 7.30912 3.05585 6.80361C3.09833 6.22346 3.11957 5.9334 3.2716 5.66934C3.39752 5.45065 3.62067 5.24325 3.84797 5.13364C4.12241 5.0013 4.44251 5.0013 5.08268 5.0013H8.83909C9.37744 5.0013 9.64661 5.0013 9.87736 5.0899C10.0812 5.16817 10.2627 5.29529 10.4059 5.4601C10.568 5.64668 10.66 5.89965 10.844 6.40558L12.3988 10.6814C12.6128 11.27 12.7199 11.5643 12.7017 11.8436C12.6857 12.0898 12.6016 12.3267 12.4589 12.528C12.2971 12.7563 12.0286 12.9175 11.4915 13.2397L9.66667 14.3346C11.2692 17.8665 14.1335 20.7345 17.6667 22.3346L18.7616 20.5098C19.0839 19.9726 19.2449 19.7041 19.4732 19.5424C19.6745 19.3997 19.9115 19.3156 20.1577 19.2996C20.4369 19.2814 20.7313 19.3885 21.32 19.6025L25.5957 21.1573C26.1016 21.3413 26.3547 21.4333 26.5412 21.5954C26.706 21.7386 26.8332 21.9201 26.9113 22.124C27 22.3546 27 22.6238 27 23.1622V26.9186C27 27.5588 27 27.8789 26.8676 28.1533C26.758 28.3806 26.5507 28.6038 26.332 28.7297C26.0679 28.8817 25.7779 28.9029 25.1977 28.9454C24.6921 28.9825 24.1816 29.0013 23.6667 29.0013Z"
                                                                stroke="#706897"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="text">
                                                        <p>Call Us 24/7</p>
                                                        <div className="space10"></div>
                                                        <a href="tel:+919999119144">+91 99991 19144</a>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Email */}
                                            <div
                                                className="col-lg-6 col-md-6"
                                                data-aos="zoom-in"
                                                data-aos-duration="1100"
                                            >
                                                <div className="cta-contact-area">
                                                    <div className="icons">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="34"
                                                            height="34"
                                                            viewBox="0 0 34 34"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M5.66667 25.4987L12.75 16.9987M28.3333 25.4987L21.25 16.9987M4.25 11.332L14.4854 18.1555C15.3942 18.7615 15.8485 19.0645 16.3397 19.1821C16.7738 19.2862 17.2262 19.2862 17.6603 19.1821C18.1515 19.0645 18.6058 18.7615 19.5146 18.1555L29.75 11.332M8.78333 26.9154H25.2167C26.8035 26.9154 27.597 26.9154 28.203 26.6065C28.7361 26.335 29.1696 25.9015 29.4412 25.3684C29.75 24.7623 29.75 23.9688 29.75 22.382V11.6154C29.75 10.0286 29.75 9.23514 29.4412 8.62906C29.1696 8.09593 28.7361 7.66248 28.203 7.39085C27.597 7.08203 26.8035 7.08203 25.2167 7.08203H8.78333C7.19652 7.08203 6.40311 7.08203 5.79703 7.39085C5.26389 7.66248 4.83045 8.09593 4.55882 8.62906C4.25 9.23514 4.25 10.0285 4.25 11.6154V22.382C4.25 23.9688 4.25 24.7623 4.55882 25.3684C4.83045 25.9015 5.26389 26.335 5.79703 26.6065C6.40311 26.9154 7.19651 26.9154 8.78333 26.9154Z"
                                                                stroke="#706897"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="text">
                                                        <p>Mail Us Anytime</p>
                                                        <div className="space10"></div>
                                                        <a href="mailto:info@vikhyatgroup.com">
                                                            info@vikhyatgroup.com
                                                        </a>
                                                        <br />
                                                        <a href="mailto:sales@vikhyatgroup.com">
                                                            sales@vikhyatgroup.com
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*===== CTA AREA ENDS =======*/}

            {/*===== FOOTER AREA STARTS =======*/}
            <div className="vl-footer6-section-area">
                <div className="container">
                    <div className="row">
                        {/* Logo + About */}
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-logo-area">
                                <img src="./src/assets/img/logo2.png" alt="Vikhyat Group" />
                                <div className="space16"></div>
                                <p>
                                    We’re committed to delivering top-quality roofing service that
                                    protect your home & enhance it value. With years of expertise
                                    focus customer.
                                </p>
                                <div className="space24"></div>
                                <ul className="social-links">
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-lg col-md-6">
                            <div className="space30 d-lg-none d-block"></div>
                            <div className="footer-widget-area foot-padding1">
                                <h3>Quick Links</h3>
                                <img src="assets/img/border.png" width="120" alt="" />
                                <ul>
                                    <li>
                                        <a href="about-us.php">About Us</a>
                                    </li>
                                    <li>
                                        <a href="core-service-portfolio.php">Core Services</a>
                                    </li>
                                    <li>
                                        <a href="industries.php">Industries</a>
                                    </li>
                                    <li>
                                        <a href="contact-us.php">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Our Services */}
                        <div className="col-lg col-md-6">
                            <div className="space30 d-lg-none d-block"></div>
                            <div className="footer-widget-area foot-padding2">
                                <h3>Our Services</h3>
                                <img src="assets/img/border.png" width="120" alt="" />
                                <ul>
                                    <li>
                                        <a href="core-service-portfolio.php">
                                            Manpower Outsourcing Solutions
                                        </a>
                                    </li>
                                    <li>
                                        <a href="core-service-portfolio.php">
                                            Integrated Facility Management
                                        </a>
                                    </li>
                                    <li>
                                        <a href="core-service-portfolio.php">
                                            Cleaning, Sanitation & Disinfection
                                        </a>
                                    </li>
                                    <li>
                                        <a href="core-service-portfolio.php">
                                            Repair, Maintenance & Installation
                                        </a>
                                    </li>
                                    <li>
                                        <a href="core-service-portfolio.php">Specialized Services</a>
                                    </li>
                                    <li>
                                        <a href="core-service-portfolio.php">
                                            Project Execution & Infrastructure
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="col-lg col-md-6 contact-inner-area">
                            <div className="space30 d-lg-none d-block"></div>
                            <div className="footer-widget-area">
                                <h3>Contact Info</h3>
                                <img src="assets/img/border.png" width="120" alt="" />
                                <div className="space10"></div>
                                <div className="footer_ads">
                                    <ul>
                                        {/* Address 1 */}
                                        <li>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="60"
                                                height="60"
                                                viewBox="0 18 32 32"
                                                fill="none"
                                            >
                                                <path
                                                    d="M16.0013 28C20.668 23.2 25.3346 18.9019 25.3346 13.6C25.3346 8.29807 21.156 4 16.0013 4C10.8466 4 6.66797 8.29807 6.66797 13.6C6.66797 18.9019 11.3346 23.2 16.0013 28Z"
                                                    stroke="#fff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M16 17.332C18.2092 17.332 20 15.5412 20 13.332C20 11.1229 18.2092 9.33203 16 9.33203C13.7908 9.33203 12 11.1229 12 13.332C12 15.5412 13.7908 17.332 16 17.332Z"
                                                    stroke="#fff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <a href="#">
                                                <span>
                                                    203, IInd Floor, Anupam Plaza, Plot No. 3 LSC, Mayur
                                                    Vihar Phase-I, New Delhi-110091
                                                </span>
                                            </a>
                                        </li>

                                        {/* Address 2 */}
                                        <li>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="60"
                                                height="60"
                                                viewBox="0 18 32 32"
                                                fill="none"
                                            >
                                                <path
                                                    d="M16.0013 28C20.668 23.2 25.3346 18.9019 25.3346 13.6C25.3346 8.29807 21.156 4 16.0013 4C10.8466 4 6.66797 8.29807 6.66797 13.6C6.66797 18.9019 11.3346 23.2 16.0013 28Z"
                                                    stroke="#fff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M16 17.332C18.2092 17.332 20 15.5412 20 13.332C20 11.1229 18.2092 9.33203 16 9.33203C13.7908 9.33203 12 11.1229 12 13.332C12 15.5412 13.7908 17.332 16 17.332Z"
                                                    stroke="#fff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <a href="#">
                                                <span>
                                                    5004, Bhandup Industrial Estate, Pannalal Compound, LBS
                                                    Marg (West), Mumbai – 400078
                                                </span>
                                            </a>
                                        </li>

                                        {/* Emails */}
                                        <li>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="25"
                                                height="25"
                                                viewBox="0 0 34 34"
                                                fill="none"
                                            >
                                                <path
                                                    d="M5.66667 25.4987L12.75 16.9987M28.3333 25.4987L21.25 16.9987M4.25 11.332L14.4854 18.1555C15.3942 18.7615 15.8485 19.0645 16.3397 19.1821C16.7738 19.2862 17.2262 19.2862 17.6603 19.1821C18.1515 19.0645 18.6058 18.7615 19.5146 18.1555L29.75 11.332M8.78333 26.9154H25.2167C26.8035 26.9154 27.597 26.9154 28.203 26.6065C28.7361 26.335 29.1696 25.9015 29.4412 25.3684C29.75 24.7623 29.75 23.9688 29.75 22.382V11.6154C29.75 10.0286 29.75 9.23514 29.4412 8.62906C29.1696 8.09593 28.7361 7.66248 28.203 7.39085C27.597 7.08203 26.8035 7.08203 25.2167 7.08203H8.78333C7.19652 7.08203 6.40311 7.08203 5.79703 7.39085C5.26389 7.66248 4.83045 8.09593 4.55882 8.62906C4.25 9.23514 4.25 10.0285 4.25 11.6154V22.382C4.25 23.9688 4.25 24.7623 4.55882 25.3684C4.83045 25.9015 5.26389 26.335 5.79703 26.6065C6.40311 26.9154 7.19651 26.9154 8.78333 26.9154Z"
                                                    stroke="#fff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <a href="mailto:info@vikhyatgroup.com">
                                                <span>info@vikhyatgroup.com</span>
                                            </a>
                                        </li>

                                        <li>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="25"
                                                height="25"
                                                viewBox="0 0 34 34"
                                                fill="none"
                                            >
                                                <path
                                                    d="M5.66667 25.4987L12.75 16.9987M28.3333 25.4987L21.25 16.9987M4.25 11.332L14.4854 18.1555C15.3942 18.7615 15.8485 19.0645 16.3397 19.1821C16.7738 19.2862 17.2262 19.2862 17.6603 19.1821C18.1515 19.0645 18.6058 18.7615 19.5146 18.1555L29.75 11.332M8.78333 26.9154H25.2167C26.8035 26.9154 27.597 26.9154 28.203 26.6065C28.7361 26.335 29.1696 25.9015 29.4412 25.3684C29.75 24.7623 29.75 23.9688 29.75 22.382V11.6154C29.75 10.0286 29.75 9.23514 29.4412 8.62906C29.1696 8.09593 28.7361 7.66248 28.203 7.39085C27.597 7.08203 26.8035 7.08203 25.2167 7.08203H8.78333C7.19652 7.08203 6.40311 7.08203 5.79703 7.39085C5.26389 7.66248 4.83045 8.09593 4.55882 8.62906C4.25 9.23514 4.25 10.0285 4.25 11.6154V22.382C4.25 23.9688 4.25 24.7623 4.55882 25.3684C4.83045 25.9015 5.26389 26.335 5.79703 26.6065C6.40311 26.9154 7.19651 26.9154 8.78333 26.9154Z"
                                                    stroke="#fff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <a href="mailto:sales@vikhyatgroup.com">
                                                <span>sales@vikhyatgroup.com</span>
                                            </a>
                                        </li>

                                        {/* Phones */}
                                        <li>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="25"
                                                height="25"
                                                viewBox="0 0 32 32"
                                                fill="none"
                                            >
                                                <path
                                                    d="M17.7333 9.0013C19.0357 9.2554 20.2325 9.89232 21.1708 10.8306C22.1091 11.7688 22.746 12.9656 23 14.268M17.7333 3.66797C20.4391 3.96856 22.9621 5.1802 24.8884 7.10398C26.8145 9.02776 28.0295 11.5493 28.3333 14.2546M23.6667 29.0013C12.2528 29.0013 3 19.7485 3 8.33464C3 7.81968 3.01884 7.30912 3.05585 6.80361C3.09833 6.22346 3.11957 5.9334 3.2716 5.66934C3.39752 5.45065 3.62067 5.24325 3.84797 5.13364C4.12241 5.0013 4.44251 5.0013 5.08268 5.0013H8.83909C9.37744 5.0013 9.64661 5.0013 9.87736 5.0899C10.0812 5.16817 10.2627 5.29529 10.4059 5.4601C10.568 5.64668 10.66 5.89965 10.844 6.40558L12.3988 10.6814C12.6128 11.27 12.7199 11.5643 12.7017 11.8436C12.6857 12.0898 12.6016 12.3267 12.4589 12.528C12.2971 12.7563 12.0286 12.9175 11.4915 13.2397L9.66667 14.3346C11.2692 17.8665 14.1335 20.7345 17.6667 22.3346L18.7616 20.5098C19.0839 19.9726 19.2449 19.7041 19.4732 19.5424C19.6745 19.3997 19.9115 19.3156 20.1577 19.2996C20.4369 19.2814 20.7313 19.3885 21.32 19.6025L25.5957 21.1573C26.1016 21.3413 26.3547 21.4333 26.5412 21.5954C26.706 21.7386 26.8332 21.9201 26.9113 22.124C27 22.3546 27 22.6238 27 23.1622V26.9186C27 27.5588 27 27.8789 26.8676 28.1533C26.758 28.3806 26.5507 28.6038 26.332 28.7297C26.0679 28.8817 25.7779 28.9029 25.1977 28.9454C24.6921 28.9825 24.1816 29.0013 23.6667 29.0013Z"
                                                    stroke="#fff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <a href="tel:+919999119144">
                                                <span>+91 99991 19144</span>
                                            </a>
                                        </li>

                                        <li>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="25"
                                                height="25"
                                                viewBox="0 0 32 32"
                                                fill="none"
                                            >
                                                <path
                                                    d="M17.7333 9.0013C19.0357 9.2554 20.2325 9.89232 21.1708 10.8306C22.1091 11.7688 22.746 12.9656 23 14.268M17.7333 3.66797C20.4391 3.96856 22.9621 5.1802 24.8884 7.10398C26.8145 9.02776 28.0295 11.5493 28.3333 14.2546M23.6667 29.0013C12.2528 29.0013 3 19.7485 3 8.33464C3 7.81968 3.01884 7.30912 3.05585 6.80361C3.09833 6.22346 3.11957 5.9334 3.2716 5.66934C3.39752 5.45065 3.62067 5.24325 3.84797 5.13364C4.12241 5.0013 4.44251 5.0013 5.08268 5.0013H8.83909C9.37744 5.0013 9.64661 5.0013 9.87736 5.0899C10.0812 5.16817 10.2627 5.29529 10.4059 5.4601C10.568 5.64668 10.66 5.89965 10.844 6.40558L12.3988 10.6814C12.6128 11.27 12.7199 11.5643 12.7017 11.8436C12.6857 12.0898 12.6016 12.3267 12.4589 12.528C12.2971 12.7563 12.0286 12.9175 11.4915 13.2397L9.66667 14.3346C11.2692 17.8665 14.1335 20.7345 17.6667 22.3346L18.7616 20.5098C19.0839 19.9726 19.2449 19.7041 19.4732 19.5424C19.6745 19.3997 19.9115 19.3156 20.1577 19.2996C20.4369 19.2814 20.7313 19.3885 21.32 19.6025L25.5957 21.1573C26.1016 21.3413 26.3547 21.4333 26.5412 21.5954C26.706 21.7386 26.8332 21.9201 26.9113 22.124C27 22.3546 27 22.6238 27 23.1622V26.9186C27 27.5588 27 27.8789 26.8676 28.1533C26.758 28.3806 26.5507 28.6038 26.332 28.7297C26.0679 28.8817 25.7779 28.9029 25.1977 28.9454C24.6921 28.9825 24.1816 29.0013 23.6667 29.0013Z"
                                                    stroke="#fff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <a href="tel:+918446663339">
                                                <span>+91 84466 63339</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space20"></div>

                    {/* Copyright */}
                    <div className="col-lg-12">
                        <div className="copyright-area">
                            <a href="#">
                                Copyright © 2026 Vikhyat Group All Rights Reserved
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/*===== FOOTER AREA ENDS =======*/}
        </>
    );
};

export default Footer;