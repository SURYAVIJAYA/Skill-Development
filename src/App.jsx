import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// Pages
import Home from "./pages/Home/Home";
import Enroll from "./pages/Enroll/Enroll";
import Contact from "./pages/Contact/Contact";
import Placements from "./pages/Placements/Placements";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/Projects/ProjectDetails";
import NewsEvents from "./pages/NewsEvents/NewsEvents";
import CourseDetails from "./pages/Courses/CourseDetails";

// Components
import SplashScreen from "./components/SplashScreen";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"; // optional but recommended

function App() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("splashShown");

    if (!hasSeenSplash) {
      setShowSplash(true);

      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("splashShown", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Splash Screen
  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="app-container">

      {/* Navbar (shows on all pages) */}

      {/* Main Content */}
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

      {/* Footer */}
    </div>
  );
}

export default App;   