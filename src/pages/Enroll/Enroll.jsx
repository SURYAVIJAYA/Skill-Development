import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/Enroll.css";
import enrollImg from "../../assets/enroll.png"; // your image path

function Enroll({ noLayout = false }) {
    return (
        <>
            {!noLayout && <Navbar />}

            <div className="enroll-section">
                <div className="enroll-card">

                    {/* LEFT IMAGE */}
                    <div className="enroll-image">
                        <img src={enrollImg} alt="Enroll" />
                    </div>

                    {/* RIGHT FORM */}
                    <div className="enroll-form">

                        <h2>Course Enrollment Form</h2>

                        <div className="form-row">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                        </div>

                        <div className="form-row">
                            <input type="email" placeholder="Email ID" />
                            <input type="text" placeholder="Phone Number" />
                        </div>

                        <div className="form-row">
                            <select>
                                <option>Select Course</option>
                                <option>Web Development</option>
                                <option>Python</option>
                                <option>Java</option>
                            </select>

                            <select>
                                <option>Education Level</option>
                                <option>Degree</option>
                                <option>Intermediate</option>
                                <option>BTech</option>
                            </select>
                        </div>

                        <div className="gender">
                            Gender:
                            <label><input type="radio" name="gender" /> Male</label>
                            <label><input type="radio" name="gender" /> Female</label>
                        </div>

                        <textarea placeholder="Message"></textarea>

                        <button className="submit-btn">Submit</button>

                    </div>
                </div>
            </div>

            {!noLayout && <Footer />}
        </>
    );
}

export default Enroll;