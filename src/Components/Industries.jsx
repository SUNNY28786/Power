
import React from "react";

const industries = [
    "Government Departments",
    "Public Sector Undertakings (PSUs)",
    "Corporate Offices",
    "Industrial Facilities",
    "Manufacturing Units",
    "Educational Institutions",
];

export default function Industries() {
    return (
        <>
            {/* Hero Area Start */}
            <div
                className="inner-header-area"
                style={{
                    backgroundImage: "url('./src/assets/img/vtpl-electrical-it-and-green-energy.webp)",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-xs-12">
                            <div className="inner-heading">
                                <h1>Industries</h1>

                                <div className="space20"></div>

                                <a href="/">
                                    Home{" "}
                                    <i className="fa-solid fa-angle-right"></i>{" "}
                                    <span>Industries</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hero Area End */}

            {/* Industries Area Start */}
            <section className="mv-section sp1">
                <div className="container">
                    <div className="mv-heading text-center" data-aos="fade-up">
                        <span className="mv-subtitle">
                            Client Engagement Philosophy
                        </span>

                        <h2>Building Partnerships Beyond Contracts</h2>

                        <p>
                            At Vikhyat Group, we believe that successful business
                            relationships are built on trust, transparency,
                            accountability, and consistent performance. Our objective
                            is not merely to provide services but to become a strategic
                            partner contributing to our clients' long-term success
                            through operational excellence and value creation.
                        </p>
                    </div>

                    <div className="row g-4">
                        {/* Industries List */}
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-duration="900"
                        >
                            <div className="mv-card mv-mission">
                                <ul className="mv-list">
                                    {industries.map((industry) => (
                                        <li key={industry}>
                                            <span className="mv-check">
                                                <i className="fa-solid fa-check"></i>
                                            </span>

                                            <span>{industry}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Leadership Image */}
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-duration="900"
                        >
                            <div className="images image_secc">
                                <img
                                    src="./src/assets/img/Leadership-Excellence.webp"
                                    width="100%"
                                    alt="Mr. Durgesh Kumar - Founder and Promoter"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Industries Area End */}
        </>
    );
}
