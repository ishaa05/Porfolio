import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaChalkboardTeacher, FaBrain, FaExternalLinkAlt, FaLinkedin, FaGithub, FaEnvelope, FaMoon, FaSun, FaBriefcase, FaGraduationCap, FaFlask, FaCode, FaBullhorn, FaStar, FaUniversity, FaBook, FaLaptopCode, FaTrophy, FaArrowRight, FaHeart, FaPaintBrush, FaCamera, FaMusic, FaHandHoldingHeart, FaDownload, FaPaperPlane, FaUser } from "react-icons/fa";
import ibAvatar from "./assets/ib-avatar.svg";
import Pic from "./assets/image1.jpeg";
const profileImage = ibAvatar;
const profilepic = ibAvatar;
// Placeholder for profile image - replace with your actual image
// import profileImage from "./image1.jpeg";
//const profileImage = ibAvatar; // Set this to your image path when ready

// Animated Particle Component
const Particle = ({ x, y, delay, size, color, subtle = false }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color} ${subtle ? 'opacity-20' : 'opacity-60'}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
      }}
      animate={{
        y: [0, subtle ? -15 : -30, 0],
        x: [0, Math.random() * (subtle ? 10 : 20) - (subtle ? 5 : 10), 0],
        scale: [1, subtle ? 1.1 : 1.2, 1],
        opacity: subtle ? [0.1, 0.3, 0.1] : [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: subtle ? 5 + Math.random() * 3 : 3 + Math.random() * 2,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
};



// Floating Code Snippets Component
const FloatingCode = ({ text, x, y, delay, subtle = false }) => {
  return (
    <motion.div
      className={`absolute font-mono text-xs ${subtle ? 'opacity-5' : 'opacity-20'}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
      animate={{
        y: [0, subtle ? -50 : -100, 0],
        rotate: [0, subtle ? 2 : 5, subtle ? -2 : -5, 0],
        opacity: subtle ? [0.03, 0.08, 0.03] : [0.1, 0.3, 0.1],
      }}
      transition={{
        duration: subtle ? 12 + Math.random() * 6 : 8 + Math.random() * 4,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    >
      {text}
    </motion.div>
  );
};

// Animated Gradient Orb
const GradientOrb = ({ x, y, size, color1, color2, delay, subtle = false }) => {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${subtle ? 'opacity-10' : 'opacity-30'}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color1}, ${color2})`,
      }}
      animate={{
        x: [0, subtle ? 25 : 50, subtle ? -25 : -50, 0],
        y: [0, subtle ? 25 : 50, subtle ? -25 : -50, 0],
        scale: [1, subtle ? 1.2 : 1.5, 1],
      }}
      transition={{
        duration: subtle ? 30 + Math.random() * 15 : 20 + Math.random() * 10,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
};

// Interactive Background Component
const InteractiveBackground = ({ darkMode, mousePosition, subtle = false }) => {
  const particleCount = subtle ? 20 : 50;
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    size: Math.random() * (subtle ? 4 : 6) + (subtle ? 1 : 2),
    color: darkMode 
      ? ['bg-blue-400', 'bg-purple-400', 'bg-teal-400', 'bg-pink-400'][Math.floor(Math.random() * 4)]
      : ['bg-blue-500', 'bg-purple-500', 'bg-teal-500', 'bg-pink-500'][Math.floor(Math.random() * 4)],
  }));

  const codeSnippets = subtle 
    ? ["const portfolio = 'awesome';", "function createMagic() {}"]
    : [
        "const portfolio = 'awesome';",
        "function createMagic() {}",
        "import { creativity } from 'mind';",
        "let innovation = true;",
        "class Portfolio extends React {}",
      ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Gradient Orbs */}
      <GradientOrb 
        x={10} 
        y={20} 
        size={subtle ? 300 : 400} 
        color1={darkMode ? "#3b82f6" : "#60a5fa"} 
        color2={darkMode ? "#8b5cf6" : "#a78bfa"} 
        delay={0}
        subtle={subtle}
      />
      <GradientOrb 
        x={80} 
        y={60} 
        size={subtle ? 350 : 500} 
        color1={darkMode ? "#8b5cf6" : "#c084fc"} 
        color2={darkMode ? "#06b6d4" : "#22d3ee"} 
        delay={2}
        subtle={subtle}
      />
      <GradientOrb 
        x={50} 
        y={80} 
        size={subtle ? 250 : 350} 
        color1={darkMode ? "#ec4899" : "#f472b6"} 
        color2={darkMode ? "#3b82f6" : "#60a5fa"} 
        delay={4}
        subtle={subtle}
      />

      {/* Particles */}
      {particles.map((particle) => (
        <Particle key={particle.id} {...particle} subtle={subtle} />
      ))}

      {/* Floating Code Snippets */}
      {codeSnippets.map((code, i) => (
        <FloatingCode
          key={i}
          text={code}
          x={Math.random() * 80 + 10}
          y={Math.random() * 80 + 10}
          delay={i * 1.5}
          subtle={subtle}
        />
      ))}

      {/* Animated Grid Pattern */}
      <motion.div
        className={`absolute inset-0 ${subtle ? 'opacity-5' : 'opacity-10'}`}
        style={{
          backgroundImage: `linear-gradient(${darkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(96, 165, 250, 0.1)'} 1px, transparent 1px),
                            linear-gradient(90deg, ${darkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(96, 165, 250, 0.1)'} 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: subtle ? 30 : 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Mouse-following spotlight effect - only in hero */}
      {!subtle && (
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: darkMode 
              ? 'radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent 70%)'
              : 'radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent 70%)',
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
};

// Animated Text Component
const AnimatedText = ({ text, className = "" }) => {
  const words = text.split(" ");

  return (
    <h2 className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
          }}
          whileHover={{ scale: 1.1, color: "#8b5cf6" }}
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
};

// Glowing Button Component
const GlowingButton = ({ children, onClick, className = "" }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`relative px-8 py-4 rounded-full font-medium text-white overflow-hidden ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const heroRef = useRef(null);

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
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Check if hero section is visible
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setIsHeroVisible(rect.top >= -100 && rect.bottom <= window.innerHeight + 100);
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
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
      link: "",
      certificate: "/ICONAT.pdf",
      type: "Conference Paper"
    }
  ];

  const achievements = [
    {
      title: "Barclays Hack-O-Hire 2024",
      subtitle: "Finalist",
      description: "Top 24 teams nationwide out of 1200+ participants.",
    },
    {
      title: "Hacktoberfest 2025",
      subtitle: "Super Contributor",
      description: "Contributions to tldr-pages (60k+ stars).",
    },
    {
      title: "GSSoC'24",
      subtitle: "Open Source Contributor",
      description: "Bug fixes, features, and documentation.",
    },
    {
      title: "GSSoC'25",
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
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} transition-colors duration-500 relative`}>
      {/* Interactive Background - Subtle for all sections */}
      <InteractiveBackground darkMode={darkMode} mousePosition={mousePosition} subtle={true} />
      
      {/* Hero Section Enhanced Background Overlay - More Vibrant (only visible in hero) */}
      <div className={`fixed inset-0 overflow-hidden pointer-events-none z-0 hero-background-overlay transition-opacity duration-500 ${isHeroVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Additional vibrant particles for hero only */}
        {Array.from({ length: 30 }).map((_, i) => (
          <Particle
            key={`hero-particle-${i}`}
            x={Math.random() * 100}
            y={Math.random() * 100}
            delay={Math.random() * 2}
            size={Math.random() * 6 + 2}
            color={darkMode 
              ? ['bg-blue-400', 'bg-purple-400', 'bg-teal-400', 'bg-pink-400'][Math.floor(Math.random() * 4)]
              : ['bg-blue-500', 'bg-purple-500', 'bg-teal-500', 'bg-pink-500'][Math.floor(Math.random() * 4)]
            }
            subtle={false}
          />
        ))}
        {/* Additional code snippets for hero */}
        {["const portfolio = 'awesome';", "function createMagic() {}", "import { creativity } from 'mind';"].map((code, i) => (
          <FloatingCode
            key={`hero-code-${i}`}
            text={code}
            x={Math.random() * 80 + 10}
            y={Math.random() * 80 + 10}
            delay={i * 1.5}
            subtle={false}
          />
        ))}
        {/* Mouse-following spotlight effect - only in hero */}
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: darkMode 
              ? 'radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent 70%)'
              : 'radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent 70%)',
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className={`p-5 flex justify-between items-center backdrop-blur-md bg-opacity-90 sticky top-0 z-50 border-b ${
          darkMode ? "bg-gray-900/80 border-gray-800" : "bg-white/80 border-gray-200"
        }`}
      >
        <motion.h1
          className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05, x: 5 }}
          onClick={() => scrollToSection("hero")}
        >
          Isha Bamel
        </motion.h1>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors relative group
                ${darkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"}
              `}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {item.label}
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"
              />
            </motion.button>
          ))}

          {/* Dark mode toggle */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className={`ml-2 p-2 rounded-full ${
              darkMode ? "bg-yellow-400 text-gray-900" : "bg-gray-800 text-white"
            }`}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.div
        id="hero"
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center min-h-screen text-center p-5 relative z-10"
      >
        {/* Animated Profile Image */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
          className="mb-8 relative"
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-50"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          {profileImage ? (
            <motion.img
              src={profileImage}
              alt="Isha Bamel"
              className="relative w-48 h-48 rounded-full object-cover border-4 border-white shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          ) : (
            <motion.div
              className="relative w-48 h-48 rounded-full border-4 border-white shadow-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaUser className="text-6xl text-white opacity-80" />
            </motion.div>
          )}
        </motion.div>

        {/* Animated Name */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-6"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-extrabold mb-4 relative"
            whileHover={{ scale: 1.02 }}
          >
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
              darkMode ? "from-blue-400 via-purple-500 to-pink-500" : "from-blue-600 via-purple-600 to-pink-600"
            }`}>
              Hi, I am{" "}
            </span>
            <motion.span
              className={`inline-block font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${
                darkMode 
                  ? "from-blue-400 via-purple-500 to-pink-500" 
                  : "from-blue-600 via-purple-600 to-pink-600"
              }`}
              style={{
                backgroundImage: darkMode
                  ? "linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6, #60a5fa)"
                  : "linear-gradient(90deg, #2563eb, #9333ea, #ec4899, #2563eb)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Isha Bamel!
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Animated Description */}
        <motion.p
          className="text-xl md:text-2xl max-w-2xl mb-8 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Passionate{" "}
          <motion.span
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            full stack development
          </motion.span>{" "}
          enthusiast exploring the power of{" "}
          <motion.span
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            Machine Learning
          </motion.span>{" "}
          and{" "}
          <motion.span
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            Deep Learning
          </motion.span>{" "}
          to build impactful solutions.
        </motion.p>

        {/* Resume download button */}
        <motion.a
          href="/IshaBamel_Research_Resume.pdf"
          download="IshaBamel_Research_Resume.pdf"
          className="relative px-8 py-4 rounded-full font-medium text-white overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          />
          <span className="relative z-10 flex items-center gap-2">
            Download Resume <FaDownload className="inline-block" />
          </span>
        </motion.a>

        {/* Social Links */}
        <motion.div
          className="flex gap-8 mt-10 mb-20 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {[
            { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/isha-bamel-b13916292/", color: "text-blue-500", name: "LinkedIn" },
            { icon: <FaGithub />, href: "https://github.com/ishaa05", color: darkMode ? "text-white" : "text-gray-800", name: "GitHub" },
            { icon: <FaEnvelope />, href: "mailto:isha.bamel22@gmail.com", color: "text-red-500", name: "Email" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className={`text-5xl ${social.color} relative group`}
              whileHover={{ scale: 1.3, rotate: [0, -10, 10, -10, 0], y: -5 }}
              whileTap={{ scale: 0.9 }}
              
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1, type: "spring", stiffness: 300 }}
            >
              {social.icon}
              <motion.span
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 whitespace-nowrap z-20"
                initial={{ y: -10 }}
                whileHover={{ y: 0 }}
              >
                {social.name}
              </motion.span>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <p className="text-sm opacity-60 mb-2">Scroll Down</p>
          <motion.div
            className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
            animate={{ height: [8, 16, 8] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>

      {/* About Me Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className={`py-24 px-6 relative z-10 ${darkMode ? "bg-gray-900/20" : "bg-gray-50/20"} backdrop-blur-sm`}
      >
        <div className="max-w-5xl mx-auto relative z-10">
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
            <motion.h2
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
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
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${
                    darkMode ? "from-blue-500 to-purple-600" : "from-blue-400 to-purple-500"
                  } blur-sm opacity-70`}
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className={`relative rounded-2xl overflow-hidden border-4 ${
                    darkMode ? "border-gray-800" : "border-white"
                  } shadow-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center min-h-[300px]`}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {profileImage ? (
                    <img
                      src={Pic}
                      alt="Developer Portrait"
                      className="w-full h-auto object-cover"
                    />
                  ) : (
                    <FaUser className="text-8xl text-white opacity-80" />
                  )}
                </motion.div>
              </div>

              {/* Hobbies Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className={`p-5 rounded-xl ${
                  darkMode ? "bg-gray-800/70" : "bg-white"
                } shadow-lg border-2 ${
                  darkMode ? "border-purple-900/30" : "border-purple-200"
                }`}
              >
                <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${
                  darkMode ? "text-blue-400" : "text-blue-600"
                }`}>
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaHeart className="text-lg" />
                  </motion.span>{" "}
                  Beyond Coding
                </h3>

                <div className="space-y-3">
                  <p>
                    In my free time, I enjoy <span className="font-bold">painting, reading, and learning photography</span>.
                    I am also passionate about <span className="font-bold">reading tech and astrophysics articles</span>,
                    volunteering for meaningful causes, and playing <span className="font-bold">flute</span> as a creative escape.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-3">
                    {["Painting", "Photography", "Flute", "Astrophysics", "Volunteering", "Reading"].map((hobby, idx) => (
                      <motion.span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${
                          darkMode
                            ? "bg-purple-900/30 text-purple-300"
                            : "bg-purple-100 text-purple-800"
                        }`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {idx === 0 ? <FaPaintBrush className="text-xs" /> :
                          idx === 1 ? <FaCamera className="text-xs" /> :
                            idx === 2 ? <FaMusic className="text-xs" /> :
                              idx === 3 ? <FaStar className="text-xs" /> :
                                idx === 4 ? <FaHandHoldingHeart className="text-xs" /> :
                                  <FaBook className="text-xs" />}
                        {hobby}
                      </motion.span>
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
              } shadow-lg border-2 ${
                darkMode ? "border-blue-900/30" : "border-blue-200"
              }`}>
                <div className="space-y-4 text-lg">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    I am a passionate <span className="font-bold">Computer Engineering Undergrad</span> with expertise in{" "}
                    <span className={`font-bold ${
                      darkMode ? "text-blue-400" : "text-blue-600"
                    }`}>MERN stack, Flask, Machine Learning, and Deep Learning</span>.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    I enjoy building innovative and impactful solutions, especially in{" "}
                    <span className="font-bold">AI-driven applications and full-stack development</span>. I specialize in designing{" "}
                    <span className="font-bold">scalable and efficient software solutions</span>, ensuring seamless user experiences and robust system architectures.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    My work spans across <span className="font-bold">building dynamic web applications, developing intelligent models, and integrating cutting-edge technologies</span> to drive innovation.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Beyond coding, I have actively contributed to <span className="font-bold">open-source projects</span>, led{" "}
                    <span className="font-bold">technical initiatives</span>, and participated in and organized{" "}
                    <span className="font-bold">hackathons</span>, achieving recognition such as being a{" "}
                    <span className={`font-bold ${
                      darkMode ? "text-blue-400" : "text-blue-600"
                    }`}>Finalist at Barclays Hack-O-Hire 2024</span>.
                  </motion.p>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Technical Expertise</h3>

                {[
                  { category: "Development", skills: ["MERN Stack", "Flask", "JavaScript", "Python", "TypeScript", "React", "Java", "C", "HTML", "CSS", "Spring Boot"] },
                  { category: "AI & ML", skills: ["Machine Learning", "Deep Learning", "Computer Vision", "TensorFlow"] },
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
                        <motion.span
                          key={idx}
                          className={`px-3 py-1 rounded-full text-sm ${
                            darkMode
                              ? "bg-blue-900/30 text-blue-300 hover:bg-blue-800/50"
                              : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                          } transition-colors duration-300 cursor-pointer`}
                          whileHover={{ scale: 1.1, y: -2 }}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                          viewport={{ once: true }}
                        >
                          {skill}
                        </motion.span>
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
      <motion.section
        id="education"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-5 max-w-4xl mx-auto relative z-10"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="relative">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-start">
                <motion.div
                  className={`mr-6 mt-1 p-3 rounded-full ${darkMode ? "bg-purple-900 text-purple-300" : "bg-purple-100 text-purple-800"} text-2xl relative`}
                  whileInView={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.3, rotate: 360 }}
                >
                  {edu.icon}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-purple-500"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                </motion.div>

                <motion.div
                  className={`p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"} flex-1 border-2 ${
                    darkMode ? "border-purple-900/30" : "border-purple-200"
                  }`}
                  whileHover={{ y: -5, scale: 1.02 }}
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
                      className={`h-full bg-gradient-to-r from-purple-500 to-pink-500`}
                      initial={{ width: 0 }}
                      whileInView={{
                        width: edu.degree === "High School" || edu.degree === "Primary Education" ? "100%" : "91%"
                      }}
                      transition={{ duration: 1.5, delay: 0.3 + index * 0.1 }}
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
      <motion.section
        id="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-5 max-w-4xl mx-auto relative z-10"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 ${darkMode ? "bg-blue-600" : "bg-blue-500"}`}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "top" }}
          />

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
                  className={`absolute left-0 md:left-1/2 w-12 h-12 rounded-full ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg border-4 ${darkMode ? "border-blue-500" : "border-blue-600"} transform -translate-x-1/2 flex items-center justify-center text-lg ${darkMode ? "text-blue-500" : "text-blue-600"} z-10`}
                  whileInView={{
                    scale: [1, 1.4, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ scale: 1.5, rotate: 360 }}
                >
                  {exp.icon}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-blue-500"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                </motion.div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <motion.div
                    className={`p-6 rounded-lg shadow-lg border-2 ${
                      darkMode ? "bg-gray-800 border-blue-900/30" : "bg-white border-blue-200"
                    }`}
                    whileHover={{ y: -5, scale: 1.02 }}
                    initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <h4 className={`text-lg font-semibold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>{exp.company}</h4>
                    <p className="text-sm opacity-80 mt-1">{exp.location}</p>
                    <motion.p
                      className={`mt-2 inline-block px-3 py-1 rounded-full text-sm ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {exp.period}
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Publications Section */}
      <motion.section
        id="publications"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-5 max-w-5xl mx-auto relative z-10"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Publications
        </motion.h2>

        <div className="space-y-8">
          {publications.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative overflow-visible p-6 rounded-lg shadow-lg border-2 ${
                darkMode ? "bg-gray-800 border-purple-900/30" : "bg-white border-purple-200"
              }`}
              whileHover={{ y: -5, scale: 1.02 }}
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
                    className={author === "Isha Bamel" ? "font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent" : ""}
                  >
                    {author}
                    {idx !== paper.authors.split(", ").length - 1 && ", "}
                  </span>
                ))}
              </p>

              <div className="flex items-center justify-between mt-4">
                <motion.span
                  className={`text-xs px-3 py-1 rounded-full ${
                    darkMode ? "bg-purple-900/30 text-purple-300" : "bg-purple-100 text-purple-800"
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {paper.type}
                </motion.span>

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
                  <motion.a
                    href={paper.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Presentation Certificate"
                    className={`absolute top-4 right-4 text-xs
                      ${darkMode ? "text-gray-400 hover:text-green-400" : "text-gray-500 hover:text-green-600"}
                      transition`}
                    whileHover={{ scale: 1.5, rotate: 15 }}
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        id="achievements"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-5 max-w-6xl mx-auto relative z-10"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateY: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, rotateY: 5, scale: 1.05 }}
              className={`relative p-5 rounded-lg shadow-lg cursor-default transition-all duration-300 border-2 ${
                darkMode ? "bg-gray-800 border-purple-900/30" : "bg-white border-purple-200"
              } overflow-hidden group`}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <motion.span
                    className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${
                      darkMode
                        ? "bg-blue-900/40 text-blue-300"
                        : "bg-blue-100 text-blue-700"
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.subtitle}
                  </motion.span>
      </div>

                <p className="text-sm opacity-80">
                  {item.description}
        </p>
      </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-5 max-w-6xl mx-auto relative z-10"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
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
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotateY: 5, scale: 1.05 }}
              className={`p-6 rounded-lg shadow-lg cursor-pointer border-2 ${
                darkMode ? "bg-gray-800 border-blue-900/30" : "bg-white border-blue-200"
              } overflow-hidden group relative`}
              onClick={() => window.open(project.link, "_blank")}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className={`text-xs px-2 py-1 rounded ${
                        darkMode ? "bg-gray-700" : "bg-gray-200"
                      }`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-5 relative z-10"
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
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="flex justify-center">
            {/* Contact Form */}
            <motion.div
              className={`p-8 rounded-xl shadow-lg border-2 ${
                darkMode ? "bg-gray-800 border-purple-900/30" : "bg-white border-purple-200"
              } w-full max-w-xl`}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Send Message Here</h3>

              <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="d3f9f77d-9fc7-4623-922e-0e0dfa3c0a41" />

                <div className="mb-4">
                  <motion.input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className={`w-full p-3 rounded-lg border ${
                      darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div className="mb-4">
                  <motion.input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className={`w-full p-3 rounded-lg border ${
                      darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div className="mb-6">
                  <motion.textarea
                    name="message"
                    placeholder="Message"
                    rows="6"
                    required
                    className={`w-full p-3 rounded-lg border ${
                      darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    whileFocus={{ scale: 1.02 }}
                  ></motion.textarea>
                </div>

                <motion.button
                  type="submit"
                  className="px-8 py-3 rounded-full font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md hover:shadow-lg transition-all w-full"
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

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`py-10 text-center relative z-10 ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}
      >
        <motion.p
          className="text-lg"
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          Made with{" "}
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block"
          >
            ❤️
          </motion.span>{" "}
          by Isha Bamel
        </motion.p>
      </motion.footer>
    </div>
  );
}