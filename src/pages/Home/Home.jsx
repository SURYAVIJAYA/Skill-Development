import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Enroll from "../Enroll/Enroll";
import Footer from "../../components/Footer";
import HomeHero from "../../components/HomeHero";
import "../../styles/Home.css";

function Home() {

    return (
        <div className="home">

            {/* NAVBAR */}
            <Navbar />

            {/* HERO SECTION */}
            <HomeHero />

            <section id="courses" className="courses-section">

                <div className="courses-container">

                    <div className="courses-title">
                        <span>SKILL COURSES</span>
                        <h2>Our Top Courses</h2>
                    </div>

                    <div className="courses-grid">

                        {/* Cyclone */}
                        <div className="course-card">
                            <img src="/images/courses/cyclone.jpg" alt="Cyclone" />

                            <div className="course-content">
                                <h3>Cyclone Course</h3>
                                <p>Laser scanning & 3D modeling</p>

                                <div className="course-footer">
                                    <span className="price">₹15,999</span>
                                    <Link to="/course/cyclone" className="view-btn">View</Link>
                                </div>
                            </div>
                        </div>

                        {/* Revit */}
                        <div className="course-card">
                            <img src="/images/courses/revit.jpg" alt="Revit" />

                            <div className="course-content">
                                <h3>Revit BIM Course</h3>
                                <p>Building design & BIM modeling</p>

                                <div className="course-footer">
                                    <span className="price">₹12,999</span>
                                    <Link to="/course/revit" className="view-btn">View</Link>
                                </div>
                            </div>
                        </div>

                        {/* CAD */}
                        <div className="course-card">
                            <img src="/images/courses/cad.jpg" alt="CAD" />

                            <div className="course-content">
                                <h3>AutoCAD Course</h3>
                                <p>2D drafting & design</p>

                                <div className="course-footer">
                                    <span className="price">₹9,999</span>
                                    <Link to="/course/cad" className="view-btn">View</Link>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

            {/* STORIES + BLOG */}
            <section className="stories-blog">
                <div className="student-stories">
                    <h3>Student Stories</h3>
                    <div className="stories-container">
                        <div className="stories-column">
                            {[
                                {
                                    img: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca',
                                    text: 'The courses provided valuable knowledge that helped me grow in my career.',
                                    name: 'Lisa Bodeer'
                                },
                                {
                                    img: 'https://i.pinimg.com/736x/e7/48/a0/e748a0d20e28d05c71623656e9291924.jpg',
                                    text: 'I gained hands-on experience with real projects – it made a huge difference!',
                                    name: 'John Smith'
                                }
                            ].map((s, i) => (
                                <div key={i} className="story">
                                    <img src={s.img} alt="Student" />
                                    <div className="story-text">
                                        <p>{s.text}</p>
                                        <span>{s.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="stories-column">
                            {[
                                {
                                    img: 'https://i.pinimg.com/736x/a1/8e/9f/a18e9fa4c3b90273fc28d9995299ac29.jpg',
                                    text: 'The interactive classes made learning fun and effective.',
                                    name: 'Maria Lopez'
                                },
                                {
                                    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
                                    text: 'Supportive instructors helped me every step of the way.',
                                    name: 'Ahmed Khan'
                                }
                            ].map((s, i) => (
                                <div key={i} className="story">
                                    <img src={s.img} alt="Student" />
                                    <div className="story-text">
                                        <p>{s.text}</p>
                                        <span>{s.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* COMMUNITY CTA */}
            <section className="community-cta">
                <h2>Join Our Community</h2>
                <p>Enrich your learning today!</p>
                <button>Learn More</button>
            </section>

            {/* ABOUT SECTION */}
            <section id="about" className="about-section">

                <div className="about-container">

                    {/* LEFT SIDE TEXT */}
                    <div className="about-left">

                        <h2>About Skill Park</h2>

                        <p>
                            Skill Park is a career-focused training institute dedicated to delivering practical and industry-relevant skills in engineering and design technologies. We specialize in professional training programs such as AutoCAD, Revit, and Cyclone (3D laser scanning & modeling tools) that are widely used in construction, architecture, and industrial projects.

                            Our mission is to bridge the gap between academic learning and real-world industry requirements. Through hands-on training, live project exposure, and expert guidance, we help students develop strong technical expertise and confidence
                        </p>

                        {/* STATS */}
                        <div className="about-stats">

                            <div className="stat">
                                <h3>150+</h3>
                                <p>Students Placed</p>
                            </div>

                            <div className="stat">
                                <h3>10,000+</h3>
                                <p>Completed Projects</p>
                            </div>

                            <div className="stat">
                                <h3>24+</h3>
                                <p>Hiring Companies</p>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDE CARDS */}
                    <div className="about-right">

                        {/* MISSION */}
                        <div className="about-card">

                            <div className="card-content">
                                <span>01</span>
                                <h4>Our Mission</h4>
                                <p>To deliver practical, industry-focused training in AutoCAD, Revit, and Cyclone technologies.</p>
                            </div>

                            <div className="card-popup">
                                <h4>Our Mission</h4>
                                <p>
                                    Our mission is to empower students with practical knowledge,
                                    industry exposure and real time project experience so they
                                    become confident professionals in the IT industry.
                                </p>
                            </div>

                        </div>

                        {/* VISION */}
                        <div className="about-card">

                            <div className="card-content">
                                <span>02</span>
                                <h4>Our Vision</h4>
                                <p>To become a leading institute in engineering design education and skill development.</p>
                            </div>

                            <div className="card-popup">
                                <h4>Our Vision</h4>
                                <p>
                                    Our vision is to bridge the gap between academic learning
                                    and industry requirements by providing modern technology
                                    training and real-world development experience.
                                </p>
                            </div>

                        </div>

                        {/* GOAL */}
                        <div className="about-card">

                            <div className="card-content">
                                <span>03</span>
                                <h4>Our Goal</h4>
                                <p>To equip students with job-ready skills and help them build successful careers in the design and engineering industry.</p>
                            </div>

                            <div className="card-popup">
                                <h4>Our Goal</h4>
                                <p>
                                    Our goal is to become a leading skill development institute
                                    by providing high-quality education and training programs
                                    that meet the evolving needs of the industry.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* ENROLL SECTION */}
            <section id="enroll">
                {/* hide navbar/footer when the form appears inline on home page */}
                <Enroll noLayout />
            </section>

            {/* FOOTER */}
            <Footer />

        </div>
    );
}

export default Home;