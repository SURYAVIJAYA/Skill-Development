import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home/Home";
import Enroll from "./pages/Enroll/Enroll";
import Contact from "./pages/Contact/Contact";   // ✅ important
import SplashScreen from "./components/SplashScreen";
import Placements from "./pages/Placements/Placements";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/Projects/ProjectDetails";
import NewsEvents from "./pages/NewsEvents/NewsEvents";
import CourseDetails from "./pages/Courses/CourseDetails";
import Footer from "./components/Footer";

function App() {

  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("splashShown");

    if (!hasSeenSplash) {
      setShowSplash(true);

      setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("splashShown", "true");
      }, 3000);
    }
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <div className="app-container">

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enroll" element={<Enroll />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:name" element={<ProjectDetails />} />
            <Route path="/news-events" element={<NewsEvents />} />
            <Route path="/course/:courseId" element={<CourseDetails />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;