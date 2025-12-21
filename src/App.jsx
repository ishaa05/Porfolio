import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaChalkboardTeacher,FaBrain,FaExternalLinkAlt, FaLinkedin, FaGithub, FaEnvelope, FaMoon, FaSun,FaBriefcase, FaGraduationCap,FaFlask,FaCode,FaBullhorn,FaStar,FaUniversity,FaBook,FaLaptopCode,FaTrophy,FaArrowRight,FaHeart,FaPaintBrush,FaCamera,FaMusic,FaHandHoldingHeart,FaDownload,FaPaperPlane } from "react-icons/fa";
import profileImage from "./image1.jpeg";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const experiences = [
    {
      title: "Research Intern",
      company: "IIT Bombay",
      location: "Mumbai, India",
      period: "January 2025 – Present",
      icon: <FaFlask />
    },
    {
      title: "Machine Learning Intern",
      company: "Capital Quants Solutions",
      location: "Mumbai, India",
      period: "July 2025 – August 2025",
      icon: <FaBrain />
    },
    {
      title: "Teaching Assistant",
      company: "Sardar Patel Institute of Technology",
      location: "Mumbai, India",
      period: "Feb 2025 – Present",
      icon: <FaChalkboardTeacher />
    },
    {
      title: "Software Development Intern",
      company: "PiSquared Payments",
      location: "Mumbai, India",
      period: "June 2024 – August 2024",
      icon: <FaCode />
    },
    {
      title: "Head of Public Relations",
      company: "IEEE SPIT",
      location: "Mumbai, India",
      period: "September 2023 – September 2024",
      icon: <FaBullhorn />
    },
    {
      title: "Head of Public Relations",
      company: "Astrophysics Club SPIT",
      location: "Mumbai, India",
      period: "February 2024 – September 2024",
      icon: <FaStar />
    }
  ];
  const education = [
    {
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "Sardar Patel Institute of Technology",
      period: "2022 – 2026",
      gpa: "9.22 CGPA (till now)",
      icon: <FaUniversity />
    },
    {
      degree: "High School",
      institution: "Shubhamraje Junior College",
      period: "2020 – 2022",
      gpa: "99.52% (MHTCET)",
      icon: <FaUniversity />
    },
    {
      degree: "Primary Education",
      institution: "Sri Ma Vidyalaya",
      period: "2011 – 2020",
      gpa: "95.6% (CBSE class X)",
      icon: <FaUniversity />
    }
  ];
  const publications = [
  
  {
    title: "Authentic Fingerprint Reconstruction via Wavelet-ATME with Super-Resolution Verification",
    venue: "Under Review – IEEE Transactions on Information Forensics and Security (TIFS)",
    year: "2025",
    authors: "Deekshant Kumar, Prasham, Prathamesh, Vineet, Areeb, Isha Bamel, Purav, Priyanshu, Vikram Gadre, Nitin Nakadi",
    link: "",
    
    type: "Journal (Under Review)"
  },
  {
    title: "Comparative Analysis of Transformer Models for Skin Lesion Detection",
    venue: "4th IEEE International Conference on  Computer Vision and Machine Intelligence (CVMI), NIT Rourkela",
    year: "2025",
    authors: "Isha Bamel, Purav Ahya, Dr. Rupali Sawant",
    link: "",
    certificate: "/CVMI.jpg",
    type: "Conference Paper"
  },
  {
    title: "Comparative Analysis of Optimized ML and Deep Learning Models for Credit Risk Prediction",
    venue: "1st IEEE International Conference on Data Science and Intelligent Network Computing (ICDSINC), NIT Raipur",
    year: "2025",
    authors: "Isha Bamel, Purav Ahya, Prof. Siddhartha Chandra",
    link: "",
    certificate: "/ICDSINC.pdf",
    type: "Conference Paper"
  },
  {
    title: "Hybrid Optimization and Explainability-Driven Framework for Creditworthiness Assessment",
    venue: "4th IEEE International Conference on Advancement in Technology (ICONAT)",
    year: "2025",
    authors: "Purav Ahya, Isha Bamel, Prof. Siddhartha Chandra",
    link: "", // replace if available
    certificate: "/ICONAT.pdf",
    type: "Conference Paper"
  }
];
const achievements = [
  {
    title: "Barclays Hack-O-Hire 2024",
    subtitle: "Finalist",
    description: "Top 24 teams nationwide out of 1200+.",
  },
  {
    title: "Hacktoberfest 2025",
    subtitle: "Super Contributor",
    description: "Major contributions to tldr-pages (60k+ stars).",
  },
  {
    title: "GSSoC’24",
    subtitle: "Open Source Contributor",
    description: "Bug fixes, features, and documentation.",
  },
  {
    title: "GSSoC’25",
    subtitle: "Mentor",
    description: "Guided contributors on PRs, Git, and OSS practices.",
  },
  {
    title: "Student Mentor",
    subtitle: "Academic & Career",
    description: "Mentored 2nd-year undergraduates.",
  }
];
const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Projects", id: "projects" },
  { label: "Publications", id: "publications" },
  { label: "Achievements", id: "achievements" },
  { label: "Contact", id: "contact" },
];



  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} transition-colors duration-500`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className={`absolute -top-20 -left-20 w-64 h-64 rounded-full ${darkMode ? "bg-blue-700" : "bg-blue-400"} blur-3xl opacity-20`}
          animate={{
            x: mousePosition.x * 0.05,
            y: mousePosition.y * 0.05,
          }}
          transition={{ type: "spring", damping: 15 }}
        />
        <motion.div 
          className={`absolute top-1/3 -right-20 w-80 h-80 rounded-full ${darkMode ? "bg-purple-700" : "bg-purple-400"} blur-3xl opacity-20`}
          animate={{
            x: mousePosition.x * -0.03,
            y: mousePosition.y * -0.03,
          }}
          transition={{ type: "spring", damping: 15 }}
        />
        <motion.div 
          className={`absolute -bottom-20 left-1/3 w-72 h-72 rounded-full ${darkMode ? "bg-teal-700" : "bg-teal-400"} blur-3xl opacity-20`}
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", damping: 15 }}
        />
      </div>

      {/* Navbar */}
      <motion.nav
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ type: "spring", stiffness: 100 }}
  className="p-5 flex justify-between items-center backdrop-blur-sm bg-opacity-80 sticky top-0 z-50"
>
  <motion.h1
    className="text-2xl font-bold cursor-pointer"
    whileHover={{ scale: 1.05 }}
    onClick={() => scrollToSection("hero")}
  >
    Isha Bamel
  </motion.h1>

  <div className="hidden md:flex items-center gap-6">
    {navItems.map((item) => (
      <button
        key={item.id}
        onClick={() => scrollToSection(item.id)}
        className={`text-sm font-medium transition-colors
          ${darkMode
            ? "text-gray-300 hover:text-white"
            : "text-gray-700 hover:text-black"
          }`}
      >
        {item.label}
      </button>
    ))}

    {/* Dark mode toggle */}
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      className={`ml-2 p-2 rounded-full ${
        darkMode ? "bg-yellow-400 text-gray-900" : "bg-gray-800 text-white"
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </motion.button>
  </div>
</motion.nav>


      {/* Hero Section */}
<motion.div 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="flex flex-col items-center justify-center min-h-screen text-center p-5 relative"
>
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.7 }}
  >
    <motion.h2 
      className="text-5xl md:text-6xl font-extrabold mb-4 relative"
      whileHover={{ scale: 1.02 }}
    >
      <span className={`bg-clip-text text-transparent bg-gradient-to-r ${darkMode ? "from-blue-400 to-purple-500" : "from-blue-600 to-purple-600"}`}>
        Hi, I am Isha Bamel!
      </span>
    </motion.h2>
  </motion.div>

  <motion.p 
    className="text-lg max-w-xl mb-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.6 }}
  >
    Passionate full stack development enthusiast exploring the power of Machine Learning and Deep Learning to build impactful solutions.
  </motion.p>

  {/* Resume download button */}
  <motion.a
    href="/IshaBamel_Research_Resume.pdf" 
    download="IshaBamel_Research_Resume.pdf"
    className={`px-6 py-3 rounded-full font-medium text-white ${darkMode ? "bg-gradient-to-r from-blue-500 to-purple-600" : "bg-gradient-to-r from-blue-600 to-purple-700"} shadow-lg hover:shadow-xl`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.6 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Download Resume <FaDownload className="inline-block ml-2" />
  </motion.a>

  <motion.div 
    className="flex gap-6 mt-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 0.6 }}
  >
    {[
      { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/isha-bamel-b13916292/", color: "text-blue-500" },
      { icon: <FaGithub />, href: "https://github.com/ishaa05", color: darkMode ? "text-white" : "text-gray-800" },
      { icon: <FaEnvelope />, href: "mailto:isha.bamel22@gmail.com", color: "text-red-500" }
    ].map((social, index) => (
      <motion.a 
        key={index}
        href={social.href} 
        className={`text-4xl ${social.color}`}
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {social.icon}
      </motion.a>
    ))}
  </motion.div>

  <motion.div 
    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 1.5 }}
  >
    <p className="text-sm opacity-60">Scroll Down</p>
    <div className="w-1 h-6 mx-auto mt-2 bg-current rounded-full" />
  </motion.div>
</motion.div>
      {/* About Me Section */}
<motion.section id="about"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className={`py-24 px-6 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
>
  <div className="max-w-5xl mx-auto">
    <div className="mb-16 text-center">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-3 ${
          darkMode ? "bg-blue-900/30 text-blue-300" : "bg-blue-100 text-blue-800"
        }`}
      >
        Who I Am
      </motion.span>
      <h2 className="text-4xl font-bold">About Me</h2>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left Column - Photo and Quick Stats */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        {/* Profile Image with Gradient Border */}
        <div className="relative mx-auto md:mx-0 max-w-sm">
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${
            darkMode ? "from-blue-500 to-purple-600" : "from-blue-400 to-purple-500"
          } blur-sm opacity-70 transform -rotate-6 scale-105`}></div>
          <div className={`relative rounded-2xl overflow-hidden border-4 ${
            darkMode ? "border-gray-800" : "border-white"
          } shadow-xl`}>
            <img
              src={profileImage}
              alt="Developer Portrait"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Quick Stats */}
        {/* <div className="grid grid-cols-2 gap-4">
          {[
            { icon: <FaCode />, label: "Stack", value: "MERN & Flask" },
            { icon: <FaLaptopCode />, label: "Focus", value: "AI & Full-Stack" },
            { icon: <FaGithub />, label: "Projects", value: "25+" },
            { icon: <FaTrophy />, label: "Hackathons", value: "Barclays Finalist" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-4 rounded-xl ${
                darkMode ? "bg-gray-800/70 hover:bg-gray-800" : "bg-white hover:bg-gray-50"
              } shadow-md transition-all duration-300`}
            >
              <div className={`text-2xl mb-2 ${
                darkMode ? "text-blue-400" : "text-blue-600"
              }`}>
                {stat.icon}
              </div>
              <div className="text-xs uppercase font-medium text-gray-500">
                {stat.label}
              </div>
              <div className="font-bold mt-1">
                {stat.value}
              </div>
            </motion.div>
          ))}
        </div> */}
        
        {/* Hobbies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className={`p-5 rounded-xl ${
            darkMode ? "bg-gray-800/70" : "bg-white"
          } shadow-lg`}
        >
          <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${
            darkMode ? "text-blue-400" : "text-blue-600"
          }`}>
            <FaHeart className="text-lg" /> Beyond Coding
          </h3>
          
          <div className="space-y-3">
            <p>
              In my free time, I enjoy <span className="font-bold">painting, reading, and learning photography</span>. 
              I am also passionate about <span className="font-bold">reading tech and astrophysics articles</span>, 
              volunteering for meaningful causes, and playing <span className="font-bold">flute</span> as a creative escape.
            </p>
            
            <div className="flex flex-wrap gap-2 pt-3">
              {["Painting", "Photography", "Flute", "Astrophysics", "Volunteering", "Reading"].map((hobby, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${
                    darkMode 
                      ? "bg-purple-900/30 text-purple-300" 
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {idx === 0 ? <FaPaintBrush className="text-xs" /> :
                   idx === 1 ? <FaCamera className="text-xs" /> :
                   idx === 2 ? <FaMusic className="text-xs" /> :
                   idx === 3 ? <FaStar className="text-xs" /> :
                   idx === 4 ? <FaHandHoldingHeart className="text-xs" /> :
                   <FaBook className="text-xs" />}
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Column - Bio and Skills */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        {/* Bio */}
        <div className={`p-6 rounded-xl ${
          darkMode ? "bg-gray-800/70" : "bg-white"
        } shadow-lg`}>
          <div className="space-y-4 text-lg">
            <p>
              I am a passionate <span className="font-bold">Computer Engineering Undergrad</span> with expertise in <span className={`font-bold ${
                darkMode ? "text-blue-400" : "text-blue-600"
              }`}>MERN stack, Flask, Machine Learning, and Deep Learning</span>.
            </p>
            <p>
              I enjoy building innovative and impactful solutions, especially in <span className="font-bold">AI-driven applications and full-stack development</span>. I specialize in designing <span className="font-bold">scalable and efficient software solutions</span>, ensuring seamless user experiences and robust system architectures.
            </p>
            <p>
              My work spans across <span className="font-bold">building dynamic web applications, developing intelligent models, and integrating cutting-edge technologies</span> to drive innovation.
            </p>
            <p>
              Beyond coding, I have actively contributed to <span className="font-bold">open-source projects</span>, led <span className="font-bold">technical initiatives</span>, and participated in and organized <span className="font-bold">hackathons</span>, achieving recognition such as being a <span className={`font-bold ${
                darkMode ? "text-blue-400" : "text-blue-600"
              }`}>Finalist at Barclays Hack-O-Hire 2024</span>.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Technical Expertise</h3>
          
          {[
            { category: "Development", skills: ["MERN Stack", "Flask", "JavaScript", "Python", "TypeScript", "React","Java","C","HTML","CSS","Spring Boot"] },
            { category: "AI & ML", skills: ["Machine Learning", "Deep Learning", "Computer Vision",  "TensorFlow"] },
            { category: "Tools & Others", skills: ["Git", "Docker", "Postman"] }
          ].map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h4 className={`text-sm font-medium uppercase ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}>
                {skillGroup.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode 
                        ? "bg-blue-900/30 text-blue-300 hover:bg-blue-800/50" 
                        : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                    } transition-colors duration-300 cursor-pointer`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        
      </motion.div>
    </div>
  </div>
</motion.section>
       {/* Education Section */}
       <motion.section id="education"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-5 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        
        <div className="relative">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-start">
                <motion.div
                  className={`mr-6 mt-1 p-3 rounded-full ${darkMode ? "bg-purple-900 text-purple-300" : "bg-purple-100 text-purple-800"} text-2xl`}
                  whileInView={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  {edu.icon}
                </motion.div>
                
                <motion.div 
                  className={`p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"} flex-1`}
                  whileHover={{ y: -5 }}
                  whileInView={{ scale: [0.95, 1] }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <h4 className={`text-lg ${darkMode ? "text-purple-400" : "text-purple-700"}`}>{edu.institution}</h4>
                    </div>
                    <div className="mt-2 md:mt-0 md:ml-4 md:text-right">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                        {edu.period}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center">
                    <FaBook className={`mr-2 ${darkMode ? "text-green-400" : "text-green-600"}`} />
                    <span className={`font-medium ${darkMode ? "text-green-400" : "text-green-600"}`}>{edu.gpa}</span>
                  </div>
                  
                  <motion.div 
                    className={`w-full h-1 mt-4 rounded ${darkMode ? "bg-purple-800" : "bg-purple-200"} overflow-hidden`}
                  >
                    <motion.div 
                      className={`h-full ${darkMode ? "bg-purple-500" : "bg-purple-600"}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: edu.degree === "High School" || edu.degree === "Primary Education"  ? "100%" : "91%" }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
{/* Experience Section */}
<motion.section id="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-5 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">My Experience</h2>
        
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 ${darkMode ? "bg-blue-600" : "bg-blue-500"}`}></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="relative mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7,
                delay: index * 0.2 
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <motion.div 
                  className={`absolute left-0 md:left-1/2 w-10 h-10 rounded-full ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg border-2 ${darkMode ? "border-blue-500" : "border-blue-600"} transform -translate-x-1/2 flex items-center justify-center text-lg ${darkMode ? "text-blue-500" : "text-blue-600"}`}
                  whileInView={{ 
                    scale: [1, 1.4, 1],
                    rotate: [0, 180, 0]
                  }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {exp.icon}
                </motion.div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <motion.div 
                    className={`p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <h4 className={`text-lg font-semibold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>{exp.company}</h4>
                    <p className="text-sm opacity-80 mt-1">{exp.location}</p>
                    <p className={`mt-2 inline-block px-3 py-1 rounded-full text-sm ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                      {exp.period}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* Publications Section */}
<motion.section id="publications"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="py-20 px-5 max-w-5xl mx-auto"
>
  <h2 className="text-3xl font-bold mb-12 text-center">Publications</h2>

  <div className="space-y-8">
    {publications.map((paper, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.15, duration: 0.5 }}
        viewport={{ once: true }}
        className={`relative overflow-visible p-6 rounded-lg shadow-lg ${
    darkMode ? "bg-gray-800" : "bg-white"
  }`}
      >
        <h3 className="text-lg font-bold mb-1">{paper.title}</h3>

        <p className={`text-sm font-medium ${
          darkMode ? "text-blue-400" : "text-blue-600"
        }`}>
          {paper.venue} • {paper.year}
        </p>

        <p className="text-sm opacity-80 mt-1">
  {paper.authors.split(", ").map((author, idx) => (
    <span
      key={idx}
      className={author === "Isha Bamel" ? "font-semibold" : ""}
    >
      {author}
      {idx !== paper.authors.split(", ").length - 1 && ", "}
    </span>
  ))}
</p>

        <div className="flex items-center justify-between mt-4">
          <span className={`text-xs px-3 py-1 rounded-full ${
            darkMode ? "bg-purple-900/30 text-purple-300" : "bg-purple-100 text-purple-800"
          }`}>
            {paper.type}
          </span>

          {paper.link && (
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-medium flex items-center gap-1 ${
                darkMode ? "text-blue-400" : "text-blue-600"
              }`}
            >
              View Paper <FaArrowRight />
            </a>
          )}
          {paper.certificate && (
    <a
      href={paper.certificate}
      target="_blank"
      rel="noopener noreferrer"
      title="Presentation Certificate"
      className={`absolute top-4 right-4 text-xs
    ${darkMode ? "text-gray-400 hover:text-green-400" : "text-gray-500 hover:text-green-600"}
    transition`}
    >
      <FaExternalLinkAlt />
    </a>
  )}
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>
{/* Achievements Section */}
<motion.section id="achievements"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="py-20 px-5 max-w-6xl mx-auto"
>
  <h2 className="text-3xl font-bold mb-12 text-center">Achievements</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {achievements.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.4 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className={`relative p-5 rounded-lg shadow-lg cursor-default transition-all duration-300
    ${darkMode ? "bg-gray-800" : "bg-white"}
    hover:bg-gradient-to-br hover:from-blue-500/5 hover:to-purple-500/5`}
      >
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold leading-snug">
            {item.title}
          </h3>
          <span
            className={`text-xs px-2 py-1 rounded-full whitespace-nowrap
              ${darkMode
                ? "bg-blue-900/40 text-blue-300"
                : "bg-blue-100 text-blue-700"}`}
          >
            {item.subtitle}
          </span>
        </div>

        <p className="text-sm opacity-80">
          {item.description}
        </p>
      </motion.div>
    ))}
  </div>
</motion.section>


      {/* Projects Section */}
      <motion.section id="projects"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="py-20 px-5 max-w-6xl mx-auto"
>
  <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      {
        title: "FundBridge",
        description: "CrowdFunding for raising funds for various causes",
        tech: ["MERN", "Gemini API", "Streamlit"],
        link: "https://github.com/ishaa05/Crowdfunding_Website",
      },
      {
        title: "SpectraScan",
        description: "Disease Detection using deep learning",
        tech: ["HTML", "CSS", "JavaScript", "TensorFlow", "Flask"],
        link: "https://github.com/ishaa05/Spectra-Scan",
      },
      {
        title: "HackCentral",
        description: "An innovative platform designed to enhance the hackathon experience for participants, mentors, and judges.",
        tech: ["MERN", "Gemini API", "Scikit-Learn", "Streamlit", "BERT"],
        link: "https://github.com/ishaa05/HackCentral",
      },
    ].map((project, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className={`p-6 rounded-lg shadow-lg cursor-pointer ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
        onClick={() => window.open(project.link, "_blank")}
      >
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className={`text-xs px-2 py-1 rounded ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>

{/* Contact Section */}
<motion.section
  id="contact"
  className="py-20 px-5"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="max-w-6xl mx-auto">
    <motion.div 
      className="text-center mb-16"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${darkMode ? "from-blue-400 to-purple-500" : "from-blue-600 to-purple-600"}`}>
        Get In Touch
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
    </motion.div>

    <div className="flex justify-center">
      {/* Contact Form */}
      <motion.div 
        className={`p-8 rounded-xl shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"} w-full max-w-xl`}
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-6">Send Message Here</h3>
        
        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="d3f9f77d-9fc7-4623-922e-0e0dfa3c0a41" />
          
          <div className="mb-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              required 
              className={`w-full p-3 rounded-lg border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-300"} focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
          </div>
          
          <div className="mb-4">
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              required 
              className={`w-full p-3 rounded-lg border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-300"} focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
          </div>
          
          <div className="mb-6">
            <textarea 
              name="message" 
              placeholder="Message" 
              rows="6" 
              required 
              className={`w-full p-3 rounded-lg border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-300"} focus:outline-none focus:ring-2 focus:ring-purple-500`}
            ></textarea>
          </div>
          
          <motion.button 
            type="submit" 
            className="px-8 py-3 rounded-full font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Now <FaPaperPlane className="inline-block ml-2" />
          </motion.button>
        </form>
      </motion.div>
      
      
        
      
    </div>
  </div>
</motion.section>
      {/* Contact Section */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`py-10 text-center ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}
      >
        <p>Made with ❤️ by Isha Bamel</p>
      </motion.footer>
    </div>
  );
}