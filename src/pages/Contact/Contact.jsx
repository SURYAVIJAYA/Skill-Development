import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ChatWidget from "../../components/ChatWidget";
import "../../styles/Contact.css";

function Contact() {
    return (

        <div className="contact-page">
            {/* floating chat widget */}
            <ChatWidget />

            {/* NAVBAR */}
            <Navbar />

            {/* Hero Section */}
            <section className="contact-hero">
                <h1>Contact</h1>
            </section>



            {/* Contact Form */}
            <section className="contact-form-section">
                <form className="contact-form">

                    <h2>Reach & Get In Touch With Us !</h2>

                    <div className="fields-grid">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <input type="text" placeholder="Your Number" />
                        <input type="text" placeholder="Your Subject" />
                    </div>

                    <textarea placeholder="Your Message"></textarea>

                    <button type="submit">Send Message</button>

                </form>
            </section>

            {/* Map Section */}
            <section className="map">
                <iframe
                    title="map"
                    src="https://maps.google.com/maps?q=visakhapatnam&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>
            </section>

            {/* FOOTER */}
            <Footer />

        </div>
    );
}

export default Contact;