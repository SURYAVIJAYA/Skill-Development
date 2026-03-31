import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Logo & About */}

                <div className="footer-section">
                    <img src="https://res.cloudinary.com/deuzwxg3v/image/upload/v1774864948/WhatsApp_Image_2026-03-30_at_3.27.50_PM-removebg-preview_ylr5qh.png" alt="logo" className="footer-logo" />

                    <p>
                        Skill Park provides industry-focused training
                        in AutoCAD, Revit, Cyclone (3D laser scanning),
                        and modern design technologies.
                    </p>

                    {/* Social Icons */}
                    <div className="footer-icons">
                        <span>🌐</span>
                        <span>💼</span>
                        <span>📧</span>
                    </div>
                </div>


                {/* Quick Links */}

                <div className="footer-section">
                    <h3>Quick Links</h3>

                    <ul>
                        <li><Link to="/">Home</Link></li>

                        <li>
                            <Link
                                to="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = "/#about";
                                }}
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = "/#courses";
                                }}
                            >
                                Courses
                            </Link>
                        </li>

                        <li><Link to="/placements">Placements</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/news-events">News & Events</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>


                {/* Courses */}

                <div className="footer-section">
                    <h3>Courses</h3>

                    <ul>
                        <li>Cyclone</li>
                        <li>Revit</li>
                        <li>AutoCAD</li>

                    </ul>
                </div>


                {/* Contact */}

                <div className="footer-section">
                    <h3>Contact Us</h3>

                    <p>Visakhapatnam, Andhra Pradesh</p>
                    <p>skillpark@gmail.com</p>

                </div>

            </div>


            {/* Bottom */}

            <div className="footer-bottom">
                © 2026 Skill Park. All Rights Reserved.
            </div>

        </footer>
    );
}

export default Footer;