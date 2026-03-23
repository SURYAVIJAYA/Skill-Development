import { useParams } from "react-router-dom";
import "../../styles/CourseDetails.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


function CourseDetails() {

  const { courseId } = useParams();

  const data = {
    cyclone: {
      title: "Cyclone 3D Laser Scanning & Modeling",
      duration: "2–3 Months",
      desc: "Leica Cyclone is a powerful software used for processing 3D laser scanning data. This course helps students learn how to convert real-world scanned data into accurate 3D models used in construction, plant design, and industrial projects.",

      topics: [
        "Introduction to 3D Laser Scanning",
        "Cyclone Interface & Tools",
        "Point Cloud Registration",
        "Data Cleaning & Processing",
        "3D Modeling from Scan Data",
        "Clash Detection",
        "Exporting Models to CAD/Revit"
      ],

      careers: [
        "Laser Scanning Engineer",
        "BIM Modeler",
        "Survey Engineer",
        "Industrial Design Engineer"
      ]
    },

    revit: {
      title: "Autodesk Revit (BIM) Course",
      duration: "2–3 Months",
      desc: "Revit is a Building Information Modeling (BIM) software used by architects, engineers, and construction professionals. This course focuses on creating intelligent 3D building models and construction documentation.",

      topics: [
        "Introduction to BIM Concepts",
        "Revit Interface & Navigation",
        "Architectural Modeling",
        "Structural & MEP Basics",
        "Families & Components",
        "2D Drawings & Documentation",
        "Rendering & Visualization"
      ],

      careers: [
        "BIM Engineer",
        "Revit Modeler",
        "Architectural Designer",
        "Structural Designer"
      ]
    },

    cad: {
      title: "AutoCAD Design Course",
      duration: "1–2 Months",
      desc: "AutoCAD is one of the most widely used design tools in engineering. This course teaches 2D drafting and basic 3D modeling used in civil, mechanical, and electrical design projects.",

      topics: [
        "AutoCAD Interface",
        "2D Drafting & Drawing Tools",
        "Dimensioning & Annotation",
        "Layers & Properties",
        "Blocks & Templates",
        "Basic 3D Modeling",
        "Plotting & Printing"
      ],

      careers: [
        "CAD Designer",
        "Drafting Engineer",
        "Mechanical Designer",
        "Civil Design Engineer"
      ]
    }
  };
  const course = data[courseId];

  if (!course) return <h2>Course Not Found</h2>;

  return (
    <div>
      {/* HEADER */}
      < Navbar />
      <div className="course-details">

        <div className="course-header">
          <img
            src={`/images/courses/${courseId}.jpg`}
            alt={course.title}
          />
          <div className="course-header-content">
            <h1>{course.title}</h1>
            <p>{course.desc}</p>
            <span className="duration">Duration: {course.duration}</span>
          </div>
        </div>

        <div className="course-body">

          <div className="course-box">
            <h2>Key Topics</h2>
            <ul>
              {course.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>

          <div className="course-box">
            <h2>Career Opportunities</h2>
            <ul>
              {course.careers.map((career, index) => (
                <li key={index}>{career}</li>
              ))}
            </ul>

          </div>

        </div>

      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default CourseDetails;