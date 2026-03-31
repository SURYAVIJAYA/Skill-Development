import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="navbar-container">

            {/* Single Row Navbar */}
            <div className="navbar">

                {/* Logo */}
                <img src="https://res.cloudinary.com/deuzwxg3v/image/upload/v1774864948/WhatsApp_Image_2026-03-30_at_3.27.50_PM-removebg-preview_ylr5qh.png" alt="logo" className="logo" />

                {/* Hamburger (mobile only) */}
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? "✖" : "☰"}
                </div>

                {/* Menu */}
                <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                    <li><a href="/">Home</a></li>
                    <li>
                        <a href="/#about">About</a>
                    </li>

                    <li>
                        <a href="/#courses">Courses</a>
                    </li>
                    <li><a href="/placements">Placements</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/enroll" className="cta-btn">Enroll</a></li>
                </ul>

            </div>

        </div>
    );
}

export default Navbar;