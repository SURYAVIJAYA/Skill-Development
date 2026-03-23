import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/Projects.css";

function Projects() {

  const navigate = useNavigate();

  const openProject = (name) => {
    navigate(`/project/${name}`);
  };

  return (

    <>
      <Navbar />

      <section className="projects-section">

        <h2 className="projects-title">Our Projects</h2>

        <div className="projects-container">


          <div className="card left1" onClick={() => openProject("cyclone")}>
            <img src="/images/ai.jpg" />
            <h3>Cyclone</h3>
          </div>

          <div className="card center" onClick={() => openProject("revit")}>
            <img src="/images/web.jpg" />
            <h3>Revit</h3>
          </div>

          <div className="card right1" onClick={() => openProject("cad")}>
            <img src="/images/marketing.jpg" />
            <h3>AutoCad</h3>
          </div>

        </div>

      </section>
      {/* OUR EXPERTS SECTION */}
      <h2 className="experts-title">
        Our <span>Extraordinary</span> Team
      </h2>
      <p className="experts-subtitle">
        Guided by industry professionals passionate about mentoring and innovation.
      </p>
      <div className="experts-container">

        <div className="expert-card">
          <img src="/images/experts/expert1.jpg" alt="expert" />
          <h3>Sarah Wilson</h3>
          <p>Cyclone Specialist</p>
        </div>

        <div className="expert-card">
          <img src="/images/experts/expert2.jpg" alt="expert" />
          <h3>Michael Smith</h3>
          <p>Revit Engineer</p>
        </div>

        <div className="expert-card">
          <img src="/images/experts/expert3.jpg" alt="expert" />
          <h3>David Johnson</h3>
          <p>AutoCad Designer</p>
        </div>

        <div className="expert-card">
          <img src="/images/experts/expert4.jpg" alt="expert" />
          <h3>Emily Clark</h3>
          <p>Digital Marketing Expert</p>
        </div>

      </div>

      <Footer />
    </>

  );

}

export default Projects;