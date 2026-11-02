import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Agar logo src/assets/img/ me hai to import karo (path apne folder ke hisaab se adjust karna)
import logo from "../assets/img/logo.jpg";

/* ---------- Menu data (desktop + mobile dono me use hoga) ---------- */
const menuItems = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    {
        label: "Core Service",
        children: [
            {
                label: "VPPL - Infrastructure & Industrial Solutions",
                to: "/industrial", // trailing spaces hata diye
            },
            {
                label: "VTPL - Electrical, IT & Green Energy",
                to: "/vptl", // App.jsx me bhi same route hona chahiye (/vptl ya /vtpl)
            },
        ],
    },
    { label: "Our Industries", to: "/industries" },
    { label: "Contact Us", to: "/contact" },
];

const Header = () => {
    const [sticky, setSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null); // mobile dropdown
    const [scrollPct, setScrollPct] = useState(0);
    const pathRef = useRef(null);
    const [pathLength, setPathLength] = useState(0);

    /* Progress circle ki length nikalna */
    useEffect(() => {
        const el = pathRef.current;
        if (el && typeof el.getTotalLength === "function") {
            setPathLength(el.getTotalLength());
        }
    }, []);

    /* Scroll: sticky header + progress circle */
    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY;
            const height =
                document.documentElement.scrollHeight - window.innerHeight;
            setSticky(scrollTop > 100);
            setScrollPct(height > 0 ? scrollTop / height : 0);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* Mobile menu open hone par body scroll lock */
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const closeMenu = () => {
        setMenuOpen(false);
        setOpenDropdown(null);
    };

    return (
        <>
            {/* ===== PROGRESS (scroll to top) ===== */}
            <div className="paginacontainer">
                <div
                    className={`progress-wrap ${scrollPct > 0.05 ? "active-progress" : ""}`}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <svg
                        className="progress-circle svg-content"
                        width="100%"
                        height="100%"
                        viewBox="-1 -1 102 102"
                    >
                        <path
                            ref={pathRef}
                            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                            style={{
                                strokeDasharray: pathLength,
                                strokeDashoffset: pathLength - scrollPct * pathLength,
                            }}
                        />
                    </svg>
                </div>
            </div>

            {/* ===== HEADER ===== */}
            <header className="homepage6-body">
                <div
                    id="vl-header-sticky"
                    className={`vl-header-area vl-transparent-header ${sticky ? "header-sticky" : ""}`}
                >
                    <div className="container">
                        <div className="row align-items-center row-bg1">
                            {/* Logo */}
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="vl-logo">
                                    <Link to="/">
                                        <img src={logo} alt="Vikhyat Group" />
                                    </Link>
                                </div>
                            </div>

                            {/* Desktop menu */}
                            <div className="col-lg-7 d-none d-lg-block">
                                <div className="vl-main-menu text-center">
                                    <nav className="vl-mobile-menu-active">
                                        <ul>
                                            {menuItems.map((item) =>
                                                item.children ? (
                                                    <li className="has-dropdown" key={item.label}>
                                                        <a href="#0" onClick={(e) => e.preventDefault()}>
                                                            {item.label} <span></span>
                                                        </a>
                                                        <ul className="sub-menu">
                                                            {item.children.map((sub) => (
                                                                <li key={sub.label}>
                                                                    <Link to={sub.to}>{sub.label}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                ) : (
                                                    <li key={item.label}>
                                                        <Link to={item.to}>
                                                            {item.label} <span></span>
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            {/* Enquire button + mobile toggle */}
                            <div className="col-lg-3 col-md-6 col-6">
                                <div className="vl-hero-btn d-none d-lg-block text-end">
                                    <div className="hero-btn1">
                                        <Link to="/contact" className="vl-btn6">
                                            <span className="text">Enquire Now</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="vl-header-action-item d-block d-lg-none">
                                    <button
                                        type="button"
                                        className="vl-offcanvas-toggle"
                                        onClick={() => setMenuOpen(true)}
                                    >
                                        <i className="fa-solid fa-bars-staggered"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* ===== MOBILE HEADER (OFFCANVAS) ===== */}
            <div className="homepage6-body">
                <div className={`vl-offcanvas ${menuOpen ? "vl-offcanvas-open" : ""}`}>
                    <div className="vl-offcanvas-wrapper">
                        <div className="vl-offcanvas-header d-flex justify-content-between align-items-center mb-90">
                            <div className="vl-offcanvas-logo">
                                <Link to="/" onClick={closeMenu}>
                                    {/* Ye file public/assets/img/logo2.png me honi chahiye */}
                                    <img src="/assets/img/logo2.png" alt="Vikhyat Group" />
                                </Link>
                            </div>
                            <div className="vl-offcanvas-close">
                                <button
                                    type="button"
                                    className="vl-offcanvas-close-toggle"
                                    onClick={closeMenu}
                                >
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                        </div>

                        {/* Mobile menu */}
                        <div className="vl-offcanvas-menu d-lg-none mb-40">
                            <nav>
                                <ul>
                                    {menuItems.map((item) =>
                                        item.children ? (
                                            <li className="has-dropdown" key={item.label}>
                                                <a
                                                    href="#0"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setOpenDropdown(
                                                            openDropdown === item.label ? null : item.label
                                                        );
                                                    }}
                                                >
                                                    {item.label}
                                                </a>
                                                <ul
                                                    className="sub-menu"
                                                    style={{
                                                        display: openDropdown === item.label ? "block" : "none",
                                                    }}
                                                >
                                                    {item.children.map((sub) => (
                                                        <li key={sub.label}>
                                                            <Link to={sub.to} onClick={closeMenu}>
                                                                {sub.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ) : (
                                            <li key={item.label}>
                                                <Link to={item.to} onClick={closeMenu}>
                                                    {item.label}
                                                </Link>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </nav>
                        </div>

                        <div className="space20"></div>
                        <div className="vl-offcanvas-info">
                            <h3 className="vl-offcanvas-sm-title">Contact Info</h3>
                            <div className="space20"></div>
                            <span>
                                <a href="mailto:sales@vikhyatprojects.com">
                                    <i className="fa-regular fa-envelope"></i> sales@vikhyatprojects.com
                                </a>
                            </span>
                            <span>
                                <a href="tel:+919999119144">
                                    <i className="fa-solid fa-phone"></i> +91-9999119144
                                </a>
                            </span>
                            <span>
                                <a href="tel:+918446663339">
                                    <i className="fa-solid fa-phone"></i> +91-8446663339
                                </a>
                            </span>
                            <span>
                                <a href="#0" onClick={(e) => e.preventDefault()}>
                                    <i className="fa-solid fa-location-dot"></i> 5004, Bhandup Industrial
                                    Estate, Pannalal Compound, LBS Marg (West), Mumbai â€“ 400078
                                </a>
                            </span>
                        </div>

                        <div className="space20"></div>
                        <div className="vl-offcanvas-social">
                            <h3 className="vl-offcanvas-sm-title">Follow Us</h3>
                            <div className="space20"></div>
                            <a href="#0"><i className="fab fa-facebook-f"></i></a>
                            <a href="#0"><i className="fab fa-twitter"></i></a>
                            <a href="#0"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#0"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>

                <div
                    className={`vl-offcanvas-overlay ${menuOpen ? "vl-offcanvas-overlay-open" : ""}`}
                    onClick={closeMenu}
                ></div>
            </div>
        </>
    );
};

export default Header;
