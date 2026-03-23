import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/Placements.css";

function Placements() {
  return (
    <div className="placements-page">

      {/* Navbar */}
      <Navbar />

      {/* HERO */}
      <section className="placements-hero">
        <h1>Our Placement Success</h1>
        <p>Our students are placed in top companies across India</p>
      </section>

      {/* STATS */}
      <section className="placement-stats">

        <div className="stat-card">
          <h2>500+</h2>
          <p>Students Placed</p>
        </div>

        <div className="stat-card">
          <h2>120+</h2>
          <p>Companies Visited</p>
        </div>

      </section>

      {/* STUDENT PLACEMENTS */}
      <section className="students-section">

        <h2>Placed Students</h2>

        <div className="students-grid">

          <div className="student-card">
            <img src="/students/student1.jpg" alt="student"/>
            <h3>Rahul Kumar</h3>
            <p className="company">TCS</p>
            <span className="package">Package: 6 LPA</span>
          </div>

          <div className="student-card">
            <img src="/students/student2.jpg" alt="student"/>
            <h3>Anjali Sharma</h3>
            <p className="company">Infosys</p>
            <span className="package">Package: 5 LPA</span>
          </div>

          <div className="student-card">
            <img src="/students/student3.jpg" alt="student"/>
            <h3>Ravi Teja</h3>
            <p className="company">Wipro</p>
            <span className="package">Package: 4.5 LPA</span>
          </div>

          <div className="student-card">
            <img src="/students/student4.jpg" alt="student"/>
            <h3>Charan Dadi</h3>
            <p className="company">Google</p>
            <span className="package">Package: 45 LPA</span>
          </div>

        </div>

      </section>

      {/* COMPANY LOGOS */}
      <section className="companies-section">

        <h2>Top Recruiting Companies</h2>

        <div className="companies-grid">

          <img src="/companies/google.png" alt="Google" />
          <img src="/companies/tcs.png" alt="TCS" />
          <img src="/companies/infosys.png" alt="Infosys" />
          <img src="/companies/wipro.png" alt="Wipro" />
          <img src="/companies/amazon.png" alt="Amazon" />
          <img src="/companies/microsoft.png" alt="Microsoft" />
          <img src="/companies/capgemini.png" alt="Capgemini" />
          <img src="/companies/accenture.png" alt="Accenture" />
          <img src="/companies/cognizant.png" alt="Cognizant" />
          <img src="/companies/ibm.png" alt="IBM" />
          <img src="/companies/techmahindra.png" alt="Tech Mahindra" />
          <img src="/companies/hcl.png" alt="HCL" />

        </div>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Placements;