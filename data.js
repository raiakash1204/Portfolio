// Personal Information Data Store
// This centralized data structure makes it easy to add/modify content without touching the main code

const personalData = {
  // Basic Information
  personal: {
    name: {
      first: "Akash",
      last: "Rai"
    },
    title: "Electrical Engineering Student & Developer",
    description: "Electrical Engineering student at RGIPT, exploring the intersection of technology, creativity, and innovation through AI, web development, and sound engineering.",
    contact: {
      phone: "+91-9125-106-501",
      email: "raiakash1204@gmail.com",
      github: "github.com/raiakash1204",
      linkedin: "linkedin.com/in/akash-rai-a7052325a"
    }
  },

  // Typing Animation Texts
  typingTexts: [
    'Artificial Intelligence',
    'Machine Learning',
    'Large Language Models',
    'Web Development',
    'Backend Development',
    'Audio DSP',
    'Systems Engineering',
    'Sound Design',
    '3D Modelling'
  ],

  // Education Timeline
  education: [
    {
      year: "2024-2028",
      degree: "B.Tech in Electrical Engineering",
      specialization: "E-Vehicle Technology Specialization",
      institution: "Rajiv Gandhi Institute of Petroleum Technology",
      location: "Raebareli, Uttar Pradesh, India",
      period: "2024 - 2028 (Expected)"
    },
    {
      year: "2023",
      degree: "Higher Secondary (12th)",
      institution: "Kumud Lata Convent School",
      location: "Prayagraj, Uttar Pradesh, India",
      period: "2023"
    },
    {
      year: "2021",
      degree: "Secondary (10th)",
      institution: "Bethany Convent Senior Secondary School",
      location: "Prayagraj, Uttar Pradesh, India",
      period: "2021"
    }
  ],

  // Skills Data
  skills: {
    programming: [
      { name: "HTML", icon: "fab fa-html5", color: "#E34F26" },
      { name: "CSS", icon: "fab fa-css3-alt", color: "#1572B6" },
      { name: "JavaScript", icon: "fab fa-js-square", color: "#F7DF1E" },
      { name: "C", icon: "fas fa-code", color: "#A8B9CC" },
      { name: "C++", icon: "fas fa-code", color: "#00599C" },
      { name: "Python", icon: "fab fa-python", color: "#3776AB" },
      { name: "SQL", icon: "fas fa-database", color: "#336791" }
    ],
    frameworks: [
      { name: "JUCE", icon: "🎵", color: "#FF6B35" },
      { name: "NumPy", icon: "fas fa-calculator", color: "#013243" },
      { name: "Pandas", icon: "🐼", color: "#150458" },
      { name: "Matplotlib", icon: "fas fa-chart-line", color: "#11557C" },
      { name: "PyTorch", icon: "fas fa-fire", color: "#EE4C2C" },
      { name: "TensorFlow", icon: "fas fa-brain", color: "#FF6F00" }
    ],
    tools: [
      { name: "GitHub", icon: "fab fa-github", color: "#181717" },
      { name: "MATLAB", icon: "fas fa-square-root-alt", color: "#0076A8" },
      { name: "Simulink", icon: "fas fa-project-diagram", color: "#0076A8" },
      { name: "LT Spice", icon: "fas fa-bolt", color: "#FF6B35" },
      { name: "Jupyter", icon: "fas fa-book", color: "#F37626" },
      { name: "Blender", icon: "fas fa-cube", color: "#F5792A" },
      { name: "Premiere Pro", icon: "fas fa-video", color: "#9999FF" },
      { name: "After Effects", icon: "fas fa-magic", color: "#9999FF" },
      { name: "Canva", icon: "fas fa-palette", color: "#00C4CC" }
    ],
    special: [
      { name: "Sound Engineering", icon: "fas fa-headphones", color: "#FF6B35" },
      { name: "Prompt Engineering", icon: "fas fa-robot", color: "#00D4AA" },
      { name: "Linux OS", icon: "fab fa-linux", color: "#FCC624" },
      { name: "Pro Tools", icon: "fas fa-sliders-h", color: "#7B68EE" },
      { name: "Ableton Live", icon: "fas fa-music", color: "#FF6B35" },
      { name: "3D-Printing", icon: "fas fa-print", color: "#FF6B35" }
    ]
  },

  // // Projects Data
  //    id: ,
//      title: ,
//      shortDescription: ,
//      fullDescription: ,
//      icon: ,
//      technologies: [],
//      features: [
//   
//     ],
//      challenges: ,
//      github: "",
//      demo: ""




  projects: [
    {
      id: "cruciatus",
      title: "Cruciatus – AI Math Solver",
      shortDescription: "AI-powered handwritten equation detection and solving system",
      fullDescription: "An advanced AI-powered application that detects and solves handwritten mathematical equations using computer vision and machine learning. Developed for KodeKurrent 2025 PS101, Cruciatus combines cutting-edge technologies to create a seamless math-solving experience. The system uses OpenCV for image preprocessing, PyTorch for deep learning models, and the Gemini API for enhanced mathematical reasoning.",
      icon: "🧮",
      technologies: ["Flask", "SQLite", "Gemini API", "PyTorch", "OpenCV", "NumPy", "Matplotlib"],
      features: [
        "Real-time handwritten equation detection",
        "Multi-format equation support",
        "Step-by-step solution breakdown",
        "User history and progress tracking",
        "RESTful API for integration"
      ],
      challenges: "Achieving high accuracy in handwritten character recognition while maintaining real-time performance was the primary challenge. We implemented custom preprocessing algorithms and optimized model inference.",
      github: "https://github.com/raiakash1204",
      demo: "#"
    },
    {
  id: "scriba",
  title: "Scriba – Resume Builder",
  shortDescription: "An intuitive and modern resume builder web app",
  fullDescription: "Scriba is a web-based resume builder that helps users create professional resumes quickly. It offers easy editing, multiple templates, and export options like PDF/DOCX. Built with React and Node.js, it supports real-time previews and version management. Free and open-source for everyone.",
  icon: "📄",
  technologies: ["TypeScript", "React", "Node.js", "Netlify", "HTML5", "CSS3"],
  features: [
    "Interactive resume editor with sections",
    "Export as PDF, DOCX, etc.",
    "Modern, customizable templates",
    "Manage multiple resume versions",
    "Live preview with instant updates"
  ],
  challeges: "Balancing flexible templates with smooth real-time editing was tricky. Also tackled cross-browser issues and reliable export features.",
  github: "https://github.com/raiakash1204/Scriba",
  demo: "https://scriba-resume.netlify.app/"
},   

    {
      id: "handwriting-ai",
      title: "Handwritten Character Recognition",
      shortDescription: "CNN model achieving 98% accuracy on character recognition",
      fullDescription: "A Convolutional Neural Network achieving 98% accuracy on handwritten character recognition tasks. This project implements a state-of-the-art CNN architecture trained on EMNIST and MNIST datasets. The model incorporates advanced preprocessing techniques and data augmentation for robust character recognition.",
      icon: "✍️",
      technologies: ["Python", "TensorFlow", "Keras", "NumPy", "OpenCV", "Matplotlib"],
      features: [
        "98% accuracy on test datasets",
        "Support for letters and digits",
        "Real-time inference capability",
        "Data augmentation pipeline",
        "Model performance visualization"
      ],
      challenges: "Balancing model complexity with performance while achieving high accuracy across diverse handwriting styles required extensive hyperparameter tuning and architecture optimization.",
      github: "https://github.com/raiakash1204",
      demo: "#"
    },
    {
      id: "todo-app",
      title: "Todo List Application",
      shortDescription: "Full-stack web app with user authentication and database",
      fullDescription: "A full-stack web application with user authentication and comprehensive task management features. A complete task management solution built with Flask, featuring user authentication, task categorization, and progress tracking. The application provides a clean, intuitive interface for managing daily tasks.",
      icon: "📝",
      technologies: ["Flask", "SQLite", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
      features: [
        "User registration and authentication",
        "Task creation, editing, and deletion",
        "Task categories and priorities",
        "Due date reminders",
        "Progress tracking and statistics"
      ],
      challenges: "Implementing secure user authentication and designing an efficient database schema for task relationships while maintaining application performance.",
      github: "https://github.com/raiakash1204",
      demo: "#"
    },
    {
      id: "tux-lite",
      title: "Tux-lite Linux Distro",
      shortDescription: "Custom LXQt Arch Linux build optimized for legacy hardware",
      fullDescription: "A custom lightweight Linux distribution based on Arch Linux, optimized for legacy hardware. Tux-lite is a custom Linux distribution built on Arch Linux with LXQt desktop environment. Designed specifically for legacy hardware, it provides a modern Linux experience with minimal resource usage.",
      icon: "🐧",
      technologies: ["Arch Linux", "LXQt", "systemd", "bash", "pacman"],
      features: [
        "Lightweight LXQt desktop environment",
        "Optimized for legacy hardware",
        "Custom systemd services",
        "Pre-configured development tools",
        "Minimal resource footprint"
      ],
      challenges: "Creating a stable, lightweight distribution while maintaining compatibility with modern software required careful package selection and extensive testing on various hardware configurations.",
      github: "https://github.com/raiakash1204",
      demo: "#"
    },
    {
      id: "equalizer",
      title: "3Q – 3-Band Equalizer Plugin",
      shortDescription: "Real-time DSP audio plugin with spectrum analyzer",
      fullDescription: "A professional audio plugin featuring real-time DSP processing and spectrum analysis. Built with the JUCE framework, 3Q is a professional-grade 3-band equalizer plugin with real-time spectrum analysis. The plugin features low, mid, and high frequency controls with visual feedback.",
      icon: "🎚️",
      technologies: ["C++", "JUCE Framework", "DSP", "Audio Programming"],
      features: [
        "Real-time 3-band equalization",
        "Spectrum analyzer with visual feedback",
        "Low-latency audio processing",
        "Cross-platform compatibility",
        "Professional audio quality"
      ],
      challenges: "Implementing real-time audio processing with minimal latency while providing accurate spectrum analysis required deep understanding of DSP principles and optimization techniques.",
      github: "https://github.com/raiakash1204",
      demo: "#"
    }
  ],

  // Certifications and Awards
  certifications: [
    {
      id: "kodekurrent-2025",
      title: "KodeKurrent 2025",
      subtitle: "Finalist",
      icon: "🏆",
      description: "Achieved finalist position in the prestigious coding competition organized by IEEE SB RGIPT.",
      year: "2025",
      organization: "IEEE SB RGIPT"
    },
    {
      id: "reliance-scholar",
      title: "Reliance Foundation",
      subtitle: "UG Scholar",
      icon: "🎓",
      description: "Selected among top 5000 students out of 100,000+ applicants for the undergraduate scholarship program.",
      year: "2024",
      organization: "Reliance Foundation"
    },
    {
      id: "math-olympiad",
      title: "International Math Olympiad",
      subtitle: "4x Gold Medalist",
      icon: "🥇",
      description: "Gold medals in International Mathematics Olympiad for four consecutive years.",
      year: "2016, 2018, 2019, 2020",
      organization: "International Mathematics Olympiad"
    },
    {
      id: "cs-olympiad",
      title: "National CS Olympiad",
      subtitle: "Gold Medalist",
      icon: "💻",
      description: "Awarded gold medal in National Computer Science Olympiad for exceptional programming skills.",
      year: "2018",
      organization: "National Computer Science Olympiad"
    }
  ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = personalData;
}