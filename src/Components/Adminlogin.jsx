
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, "");

function Adminlogin() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // ADMIN LOGIN
    const handleLogin = async (e) => {
        e.preventDefault();

        setError("");

        if (!API_URL) {
            setError("API URL is missing. Please check your .env file.");
            return;
        }

        if (!email.trim() || !password) {
            setError("Please enter email and password.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(
                `${API_URL}/api/admin/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email.trim().toLowerCase(),
                        password,
                    }),
                }
            );

            const responseText = await response.text();

            console.log("Login Status:", response.status);
            console.log("Login Response:", responseText);

            let data = {};

            try {
                data = responseText ? JSON.parse(responseText) : {};
            } catch {
                throw new Error(
                    "Backend returned an invalid response. Check your server."
                );
            }

            if (!response.ok) {
                throw new Error(
                    data.message || `Login failed (${response.status})`
                );
            }

            if (!data.success || !data.token) {
                throw new Error(
                    data.message || "Authentication failed."
                );
            }

            // Save login details
            localStorage.setItem("adminToken", data.token);
            localStorage.setItem(
                "admin",
                JSON.stringify(data.admin)
            );

            console.log("Admin Login Successful");

            // Redirect to dashboard
            // Redirect to separate Admin Dashboard
            window.location.href = "http://localhost:3000";

        } catch (err) {
            console.error("Login Error:", err);

            setError(
                err.message || "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <style>{`
        .admin-login-wrapper {
          min-height: 100vh;
          background: linear-gradient(
            135deg,
            #0f172a 0%,
            #1e3a8a 55%,
            #4338ca 100%
          );
          position: relative;
          overflow: hidden;
        }

        .admin-login-wrapper::before,
        .admin-login-wrapper::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          opacity: .35;
        }

        .admin-login-wrapper::before {
          width: 340px;
          height: 340px;
          background: #3b82f6;
          top: -100px;
          left: -100px;
        }

        .admin-login-wrapper::after {
          width: 380px;
          height: 380px;
          background: #8b5cf6;
          bottom: -120px;
          right: -120px;
        }

        .admin-login-shell {
          position: relative;
          z-index: 1;
          max-width: 940px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, .35);
        }

        .admin-login-side {
          background: linear-gradient(
            160deg,
            rgba(255,255,255,.12),
            rgba(255,255,255,.04)
          );
          backdrop-filter: blur(10px);
          color: #fff;
        }

        .admin-login-badge {
          width: 64px;
          height: 64px;
          border-radius: 18px;
          background: rgba(255, 255, 255, .15);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, .25);
        }

        .admin-login-form-col {
          background: #fff;
        }

        .admin-login-form-col .input-group-text {
          background: #f1f5f9;
          border-right: 0;
          color: #64748b;
          border-radius: 12px 0 0 12px;
        }

        .admin-login-form-col .form-control {
          background: #f1f5f9;
          border-left: 0;
          border-radius: 0 12px 12px 0;
          padding: 12px 14px;
          font-size: 15px;
        }

        .admin-login-form-col .form-control:focus {
          background: #fff;
          box-shadow: none;
          border-color: #ced4da;
        }

        .admin-login-form-col .input-group:focus-within
        .input-group-text,
        .admin-login-form-col .input-group:focus-within
        .form-control {
          border-color: #3b82f6;
          background: #fff;
        }

        .admin-login-form-col .input-group:focus-within {
          box-shadow: 0 0 0 4px rgba(59, 130, 246, .15);
          border-radius: 12px;
        }

        .admin-login-btn {
          background: linear-gradient(90deg, #2563eb, #4f46e5);
          border: 0;
          border-radius: 12px;
          padding: 12px;
          font-weight: 600;
          letter-spacing: .3px;
          color: #fff;
          transition: transform .15s ease, box-shadow .15s ease;
          box-shadow: 0 8px 20px rgba(37, 99, 235, .35);
        }

        .admin-login-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          color: #fff;
          box-shadow: 0 12px 26px rgba(37, 99, 235, .45);
        }

        .admin-login-btn:disabled {
          opacity: .75;
          cursor: not-allowed;
        }
      `}</style>

            <div className="admin-login-wrapper d-flex align-items-center justify-content-center p-3">

                <div className="admin-login-shell row g-0 w-100">

                    {/* Left Brand Panel */}
                    <div className="admin-login-side col-lg-5 d-none d-lg-flex flex-column justify-content-center p-5">

                        <div className="admin-login-badge mb-4">
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
                            </svg>
                        </div>

                        <h2 className="fw-bold mb-1">
                            Vikhyat Group
                        </h2>

                        <p
                            className="small mb-4"
                            style={{ letterSpacing: "3px", opacity: .8 }}
                        >
                            ADMINISTRATION PANEL
                        </p>

                        <p style={{ opacity: .85, lineHeight: 1.7 }}>
                            Apni website ka content, inquiries aur settings
                            ek hi jagah se safely manage karein.
                        </p>

                    </div>

                    {/* Right Login Form */}
                    <div className="admin-login-form-col col-12 col-lg-7 p-4 p-sm-5">

                        <div className="d-lg-none text-center mb-4">
                            <h3 className="fw-bold mb-0">
                                Vikhyat Group
                            </h3>

                            <small
                                className="text-muted"
                                style={{ letterSpacing: "3px" }}
                            >
                                ADMINISTRATION PANEL
                            </small>
                        </div>

                        <h3 className="fw-bold mb-1">
                            Admin Login
                        </h3>

                        <p className="text-muted mb-4">
                            Login to manage your website
                        </p>

                        <form onSubmit={handleLogin}>

                            {/* Email */}
                            <label className="form-label fw-semibold small">
                                Email Address
                            </label>

                            <div className="input-group mb-3">

                                <span className="input-group-text">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>

                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter admin email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoComplete="username"
                                    required
                                />

                            </div>

                            {/* Password */}
                            <label className="form-label fw-semibold small">
                                Password
                            </label>

                            <div className="input-group mb-3">

                                <span className="input-group-text">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </span>

                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="current-password"
                                    required
                                />

                            </div>

                            {/* Error Message */}
                            {error && (
                                <div
                                    className="alert alert-danger py-2 small mb-3"
                                    role="alert"
                                >
                                    {error}
                                </div>
                            )}

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="admin-login-btn btn w-100 mt-2"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span
                                            className="spinner-border spinner-border-sm me-2"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                        Please wait...
                                    </>
                                ) : (
                                    "Login"
                                )}
                            </button>

                        </form>

                        <p className="text-center text-muted small mt-4 mb-0">
                            © {new Date().getFullYear()} Vikhyat Group.
                            All rights reserved.
                        </p>

                    </div>

                </div>

            </div>
        </>
    );
}

export default Adminlogin;
