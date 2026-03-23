import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/NewsEvents.css";

const news = [
    {
        id: 1,
        type: "news",
        tag: "Technology",
        title: "AI Skin Analysis System Launched",
        image: "/images/news-events/news1.jpg",
        date: "March 10, 2026",
        description:
            "Our institute launched an AI-based system that analyzes skin and hair conditions using advanced image detection algorithms to provide personalized care recommendations.",
    },
    {
        id: 2,
        type: "news",
        tag: "Research",
        title: "Research on Natural Remedies",
        image: "/images/news-events/news2.jpg",
        date: "February 22, 2026",
        description:
            "A new research initiative focusing on natural remedies for common skin and hair problems has been started, combining traditional knowledge with modern science.",
    },
    {
        id: 3,
        type: "news",
        tag: "Innovation",
        title: "Student Innovation Showcase",
        image: "/images/news-events/news3.jpg",
        date: "January 15, 2026",
        description:
            "Students presented innovative projects related to AI, health technology and smart recommendation systems at the annual innovation showcase.",
    },
];

const events = [
    {
        id: 4,
        type: "event",
        tag: "Seminar",
        title: "AI in Healthcare Seminar",
        image: "/images/news-events/event1.jpg",
        date: "April 10, 2026",
        description:
            "Experts will discuss how artificial intelligence is transforming healthcare systems worldwide, with a focus on diagnostics and personalized treatment.",
    },
    {
        id: 5,
        type: "event",
        tag: "Workshop",
        title: "Skin Health Awareness Workshop",
        image: "/images/news-events/event2.jpg",
        date: "May 22, 2026",
        description:
            "A hands-on workshop on maintaining healthy skin using scientific methods and natural care techniques led by certified dermatology professionals.",
    },
    {
        id: 6,
        type: "event",
        tag: "Conference",
        title: "Annual Wellness Conference 2026",
        image: "/images/news-events/event1.jpg",
        date: "June 5, 2026",
        description:
            "Join industry leaders, researchers, and healthcare professionals at our flagship annual conference exploring the future of wellness and preventive healthcare.",
    },
];

const allItems = [...news, ...events];

const NewsEvents = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [selectedItem, setSelectedItem] = useState(null);

    const filtered =
        activeTab === "all"
            ? allItems
            : activeTab === "news"
            ? news
            : events;

    return (
        <>
            <Navbar />

            <div className="ne-page">
                {/* ── HERO ── */}
                <section className="ne-hero">
                    <div className="ne-hero-bg" />
                    <div className="ne-hero-content">
                        <span className="ne-eyebrow">Stay Informed</span>
                        <h1>News &amp; Events</h1>
                        <p>Discover our latest updates, research breakthroughs, and upcoming activities.</p>
                    </div>
                    <div className="ne-hero-wave">
                        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
                            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8f9fe" />
                        </svg>
                    </div>
                </section>

                {/* ── TABS ── */}
                <div className="ne-tabs-wrapper">
                    <div className="ne-tabs">
                        {["all", "news", "events"].map((tab) => (
                            <button
                                key={tab}
                                id={`tab-${tab}`}
                                className={`ne-tab ${activeTab === tab ? "active" : ""}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab === "all" ? "All" : tab === "news" ? "📰 News" : "🗓 Events"}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── GRID ── */}
                <section className="ne-grid-section">
                    <div className="ne-grid">
                        {filtered.map((item) => (
                            <article
                                key={item.id}
                                className="ne-card"
                                onClick={() => setSelectedItem(item)}
                            >
                                <div className="ne-card-img-wrap">
                                    <img src={item.image} alt={item.title} />
                                    <span className={`ne-tag ne-tag--${item.type}`}>{item.tag}</span>
                                    {item.type === "event" && (
                                        <div className="ne-date-badge">
                                            <span className="ne-date-month">
                                                {item.date.split(" ")[0]}
                                            </span>
                                            <span className="ne-date-day">
                                                {item.date.split(" ")[1].replace(",", "")}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className="ne-card-body">
                                    {item.type === "news" && (
                                        <span className="ne-card-date">{item.date}</span>
                                    )}
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <button className="ne-read-more">
                                        Read More <span>→</span>
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* ── NEWSLETTER STRIP ── */}
                <section className="ne-newsletter">
                    <div className="ne-newsletter-inner">
                        <div className="ne-newsletter-text">
                            <h2>Never Miss an Update</h2>
                            <p>Subscribe to get the latest news and event invitations straight to your inbox.</p>
                        </div>
                        <form className="ne-newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                id="newsletter-email"
                                placeholder="Enter your email address"
                            />
                            <button type="submit" id="newsletter-subscribe">Subscribe</button>
                        </form>
                    </div>
                </section>
            </div>

            {/* ── MODAL ── */}
            {selectedItem && (
                <div
                    className="ne-modal-overlay"
                    onClick={() => setSelectedItem(null)}
                >
                    <div
                        className="ne-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="ne-modal-close"
                            id="modal-close-btn"
                            onClick={() => setSelectedItem(null)}
                        >
                            ✕
                        </button>
                        <div className="ne-modal-img-wrap">
                            <img src={selectedItem.image} alt={selectedItem.title} />
                            <span className={`ne-tag ne-tag--${selectedItem.type}`}>
                                {selectedItem.tag}
                            </span>
                        </div>
                        <div className="ne-modal-body">
                            <span className="ne-modal-date">{selectedItem.date}</span>
                            <h2>{selectedItem.title}</h2>
                            <p>{selectedItem.description}</p>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default NewsEvents;