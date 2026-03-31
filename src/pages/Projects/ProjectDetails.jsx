import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/ProjectDetails.css";

function ProjectDetails() {

    const { name } = useParams();
    const navigate = useNavigate();

    const projects = {

        cyclone: {
            title: "Cyclone Software Project",
            image: "/images/courses/cyclone.jpg",
            description:
                "This project focuses on using Cyclone software for 3D laser scanning and point cloud data processing. It helps in creating accurate digital models of real-world structures.",
            tech: ["Leica Cyclone", "3D Laser Scanning", "Point Cloud Processing", "Data Registration"],
            features: [
                "Point cloud data processing",
                "3D model generation",
                "Accurate measurements",
                "Real-world structure visualization"
            ]
        },

        revit: {
            title: "Revit BIM Project",
            image: "/images/courses/revit.jpg",
            description:
                "This project involves building design and modeling using Autodesk Revit. It focuses on Building Information Modeling (BIM) for efficient planning and construction.",
            tech: ["Autodesk Revit", "BIM", "3D Modeling", "Architecture Design"],
            features: [
                "Building information modeling",
                "3D architectural design",
                "Structural and MEP modeling",
                "Project visualization"
            ]
        },

        cad: {
            title: "AutoCAD Design Project",
            image: "/images/courses/cad.jpg",
            description:
                "This project focuses on creating precise 2D and 3D designs using AutoCAD. It is widely used in engineering and construction for drafting and design purposes.",
            tech: ["AutoCAD", "2D Drafting", "3D Modeling", "Technical Drawing"],
            features: [
                "Precise engineering drawings",
                "2D and 3D design",
                "Layout planning",
                "Technical documentation"
            ]
        },

    };

    const project = projects[name];

    if (!project) {
        return (
            <>
                <Navbar />
                <h1 style={{ textAlign: "center", marginTop: "100px" }}>
                    Project Not Found
                </h1>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />

            <div className="project-details">

                {/* ✅ Back Button */}
                <button
                    className="back-btn"
                    onClick={() => navigate("/projects")}
                >
                    ← Back
                </button>

                <div className="project-header">
                    <h1>{project.title}</h1>
                    <p>Explore the complete details of this project</p>
                </div>

                <div className="project-container">

                    <div className="project-image">
                        <img src={project.image} alt={project.title} />
                    </div>

                    <div className="project-info">

                        <h2>Project Description</h2>
                        <p>{project.description}</p>

                        <h3>Technologies Used</h3>
                        <ul>
                            {project.tech.map((t, i) => (
                                <li key={i}>{t}</li>
                            ))}
                        </ul>

                        <h3>Project Features</h3>
                        <ul>
                            {project.features.map((f, i) => (
                                <li key={i}>{f}</li>
                            ))}
                        </ul>

                        <button className="project-btn">
                            View Project Demo
                        </button>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default ProjectDetails;