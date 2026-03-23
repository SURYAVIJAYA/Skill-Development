const coursesData = {
  fullstack: {
    id: "fullstack",
    title: "Full Stack Development",
    tagline: "From zero to full-stack engineer — build real-world web apps",
    duration: "6 Months",
    level: "Beginner to Advanced",
    image: "/images/courses/fullstack.jpg",
    color: "#0A0A6B",
    accent: "#FFD800",
    highlights: ["Live Projects", "Job Assistance", "Certificate", "Mentorship"],
    overview:
      "Master both front-end and back-end development. You'll learn how to design stunning UIs, build powerful REST APIs, manage databases, and deploy production-ready applications.",
    modules: [
      {
        number: "01",
        title: "Web Foundations",
        duration: "2 Weeks",
        topics: [
          "HTML5 Fundamentals & Semantics",
          "CSS3 – Flexbox, Grid & Animations",
          "Responsive Web Design",
          "Git & GitHub Basics",
        ],
      },
      {
        number: "02",
        title: "JavaScript & ES6+",
        duration: "3 Weeks",
        topics: [
          "Core JavaScript Concepts",
          "ES6+ Features – Arrow Functions, Destructuring",
          "DOM Manipulation",
          "Fetch API & Promises / Async-Await",
        ],
      },
      {
        number: "03",
        title: "React.js – Front End",
        duration: "4 Weeks",
        topics: [
          "React Components & JSX",
          "State Management with useState & useEffect",
          "React Router & Navigation",
          "Context API & Custom Hooks",
        ],
      },
      {
        number: "04",
        title: "Node.js & Express – Back End",
        duration: "4 Weeks",
        topics: [
          "Node.js Runtime & npm",
          "Express.js REST API Development",
          "Middleware, Authentication & JWT",
          "File Uploads & Error Handling",
        ],
      },
      {
        number: "05",
        title: "Databases",
        duration: "3 Weeks",
        topics: [
          "MongoDB – Collections & CRUD",
          "Mongoose ODM",
          "MySQL Basics & Joins",
          "Database Design & Relationships",
        ],
      },
      {
        number: "06",
        title: "Deployment & Projects",
        duration: "2 Weeks",
        topics: [
          "Hosting on Vercel / Render / Heroku",
          "CI/CD Basics",
          "Capstone Project – Full Stack App",
          "Resume & Interview Prep",
        ],
      },
    ],
  },

  python: {
    id: "python",
    title: "Python Programming",
    tagline: "Master Python from basics to automation and scripting",
    duration: "3 Months",
    level: "Beginner to Intermediate",
    image: "/images/courses/python.jpg",
    color: "#1a6e1a",
    accent: "#FFD800",
    highlights: ["Hands-on Coding", "Real Projects", "Certificate", "Job Support"],
    overview:
      "Learn Python programming from the ground up. This course covers core programming concepts, object-oriented design, file handling, web scraping, automation and introductory data handling.",
    modules: [
      {
        number: "01",
        title: "Python Basics",
        duration: "2 Weeks",
        topics: [
          "Variables, Data Types & Operators",
          "Conditions & Loops",
          "Functions & Scope",
          "Lists, Tuples, Dicts & Sets",
        ],
      },
      {
        number: "02",
        title: "Object-Oriented Python",
        duration: "2 Weeks",
        topics: [
          "Classes & Objects",
          "Inheritance & Polymorphism",
          "Magic Methods & Dunder Functions",
          "Modules & Packages",
        ],
      },
      {
        number: "03",
        title: "File Handling & Exceptions",
        duration: "1 Week",
        topics: [
          "Reading & Writing Files",
          "CSV & JSON Handling",
          "Exception Handling – Try / Except",
          "Custom Exceptions",
        ],
      },
      {
        number: "04",
        title: "Libraries & Automation",
        duration: "2 Weeks",
        topics: [
          "os, sys, datetime Libraries",
          "Web Scraping with BeautifulSoup",
          "Automation with PyAutoGUI",
          "Regular Expressions (re module)",
        ],
      },
      {
        number: "05",
        title: "Intro to Data & Project",
        duration: "2 Weeks",
        topics: [
          "NumPy & Pandas Basics",
          "Data Cleaning & Exploration",
          "Mini Project – Automation Script",
          "Final Project & Presentation",
        ],
      },
    ],
  },

  datascience: {
    id: "datascience",
    title: "Data Science & AI",
    tagline: "Analyse data, build ML models and deploy AI solutions",
    duration: "5 Months",
    level: "Intermediate to Advanced",
    image: "/images/courses/datascience.jpg",
    color: "#7b1fa2",
    accent: "#FFD800",
    highlights: ["Kaggle Projects", "ML Models", "Certificate", "Industry Mentors"],
    overview:
      "A comprehensive journey through data analysis, machine learning, deep learning and AI application development. Work on real datasets and build models that solve real-world problems.",
    modules: [
      {
        number: "01",
        title: "Python for Data Science",
        duration: "2 Weeks",
        topics: [
          "NumPy – Arrays & Operations",
          "Pandas – DataFrames & Series",
          "Data Cleaning & Transformation",
          "Matplotlib & Seaborn Visualisation",
        ],
      },
      {
        number: "02",
        title: "Statistics & EDA",
        duration: "2 Weeks",
        topics: [
          "Descriptive Statistics",
          "Probability & Distributions",
          "Hypothesis Testing",
          "Exploratory Data Analysis (EDA)",
        ],
      },
      {
        number: "03",
        title: "Machine Learning",
        duration: "4 Weeks",
        topics: [
          "Supervised Learning – Regression & Classification",
          "Unsupervised Learning – Clustering",
          "Model Evaluation & Cross-Validation",
          "Feature Engineering & Selection",
        ],
      },
      {
        number: "04",
        title: "Deep Learning & Neural Networks",
        duration: "3 Weeks",
        topics: [
          "Neural Network Architecture",
          "TensorFlow / Keras Basics",
          "CNN for Image Recognition",
          "RNN & LSTM for Sequences",
        ],
      },
      {
        number: "05",
        title: "NLP & Generative AI",
        duration: "2 Weeks",
        topics: [
          "Text Pre-processing & Tokenisation",
          "Sentiment Analysis",
          "Transformers & BERT Overview",
          "Intro to LLMs & Prompt Engineering",
        ],
      },
      {
        number: "06",
        title: "Deployment & Capstone",
        duration: "2 Weeks",
        topics: [
          "Model Deployment with Flask / FastAPI",
          "Streamlit Dashboards",
          "Capstone Project on Real Dataset",
          "Portfolio & Interview Preparation",
        ],
      },
    ],
  },

  uiux: {
    id: "uiux",
    title: "UI / UX Design",
    tagline: "Design beautiful, user-centred digital experiences",
    duration: "3 Months",
    level: "Beginner to Intermediate",
    image: "/images/courses/uiux.jpg",
    color: "#bf360c",
    accent: "#FFD800",
    highlights: ["Figma Projects", "Portfolio", "Certificate", "Design Reviews"],
    overview:
      "Learn the complete UI/UX design process — from user research and wireframing to high-fidelity prototypes and usability testing. Build a professional portfolio of real-world projects.",
    modules: [
      {
        number: "01",
        title: "Design Thinking & UX Basics",
        duration: "1 Week",
        topics: [
          "What is UX Design?",
          "Design Thinking Process",
          "User Research Methods",
          "Empathy Mapping & Personas",
        ],
      },
      {
        number: "02",
        title: "Wireframing & Information Architecture",
        duration: "2 Weeks",
        topics: [
          "Sketching & Low-Fidelity Wireframes",
          "Information Architecture",
          "User Flows & Journey Maps",
          "Figma Basics",
        ],
      },
      {
        number: "03",
        title: "Visual Design & UI Principles",
        duration: "3 Weeks",
        topics: [
          "Typography, Colour & Spacing",
          "UI Design Principles & Gestalt Laws",
          "Design Systems & Component Libraries",
          "High-Fidelity UI Design in Figma",
        ],
      },
      {
        number: "04",
        title: "Prototyping & Interactions",
        duration: "2 Weeks",
        topics: [
          "Interactive Prototypes in Figma",
          "Micro-Interactions & Animations",
          "Mobile-First & Responsive Design",
          "Handoff to Developers",
        ],
      },
      {
        number: "05",
        title: "Usability Testing & Portfolio",
        duration: "2 Weeks",
        topics: [
          "Usability Testing Methods",
          "A/B Testing Basics",
          "Capstone Project – End-to-End App Design",
          "Portfolio Building & Presentation",
        ],
      },
    ],
  },
};

export default coursesData;
