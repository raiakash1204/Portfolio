// Global variables
let currentTheme = localStorage.getItem('theme') || 'light';
let typingTexts = [
  'Artificial Intelligence',
  'Machine Learning',
  'Large Language Models',
  'Web Development',
  'Backend Development',
  'Audio DSP',
  'Systems Engineering',
  'Sound Design',
  '3D Modelling'
];
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;

// Project data
const projectData = {
  'cruciatus': {
    title: 'Cruciatus – AI Math Solver',
    description: 'An advanced AI-powered application that detects and solves handwritten mathematical equations using computer vision and machine learning.',
    fullDescription: 'Developed for KodeKurrent 2025 PS101, Cruciatus combines cutting-edge technologies to create a seamless math-solving experience. The system uses OpenCV for image preprocessing, PyTorch for deep learning models, and the Gemini API for enhanced mathematical reasoning.',
    technologies: ['Flask', 'SQLite', 'Gemini API', 'PyTorch', 'OpenCV', 'NumPy', 'Matplotlib'],
    features: [
      'Real-time handwritten equation detection',
      'Multi-format equation support',
      'Step-by-step solution breakdown',
      'User history and progress tracking',
      'RESTful API for integration'
    ],
    challenges: 'Achieving high accuracy in handwritten character recognition while maintaining real-time performance was the primary challenge. We implemented custom preprocessing algorithms and optimized model inference.',
    github: 'https://github.com/raiakash1204',
    demo: '#'
  },
  'startup-portal': {
    title: 'Startup Registration Portal',
    description: 'A comprehensive web portal developed for the Ministry of AYUSH supporting multilingual startup registrations.',
    fullDescription: 'Built as part of SIH1642, this portal streamlines the startup registration process for the Ministry of AYUSH. The system supports multiple Indian languages and provides a user-friendly interface for entrepreneurs.',
    technologies: ['Django', 'Bootstrap', 'JavaScript', 'SQLite', 'HTML5', 'CSS3'],
    features: [
      'Multilingual support (Hindi, English, and regional languages)',
      'Document upload and verification',
      'Application status tracking',
      'Admin dashboard for processing',
      'Email notifications and alerts'
    ],
    challenges: 'Implementing robust multilingual support while ensuring data consistency across different language inputs required careful database design and extensive testing.',
    github: 'https://github.com/raiakash1204',
    demo: '#'
  },
  'handwriting-ai': {
    title: 'AI Model for Handwritten Character Recognition',
    description: 'A Convolutional Neural Network achieving 98% accuracy on handwritten character recognition tasks.',
    fullDescription: 'This project implements a state-of-the-art CNN architecture trained on EMNIST and MNIST datasets. The model incorporates advanced preprocessing techniques and data augmentation for robust character recognition.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'OpenCV', 'Matplotlib'],
    features: [
      '98% accuracy on test datasets',
      'Support for letters and digits',
      'Real-time inference capability',
      'Data augmentation pipeline',
      'Model performance visualization'
    ],
    challenges: 'Balancing model complexity with performance while achieving high accuracy across diverse handwriting styles required extensive hyperparameter tuning and architecture optimization.',
    github: 'https://github.com/raiakash1204',
    demo: '#'
  },
  'todo-app': {
    title: 'Todo List Application',
    description: 'A full-stack web application with user authentication and comprehensive task management features.',
    fullDescription: 'A complete task management solution built with Flask, featuring user authentication, task categorization, and progress tracking. The application provides a clean, intuitive interface for managing daily tasks.',
    technologies: ['Flask', 'SQLite', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    features: [
      'User registration and authentication',
      'Task creation, editing, and deletion',
      'Task categories and priorities',
      'Due date reminders',
      'Progress tracking and statistics'
    ],
    challenges: 'Implementing secure user authentication and designing an efficient database schema for task relationships while maintaining application performance.',
    github: 'https://github.com/raiakash1204',
    demo: '#'
  },
  'tux-lite': {
    title: 'Tux-lite Linux Distribution',
    description: 'A custom lightweight Linux distribution based on Arch Linux, optimized for legacy hardware.',
    fullDescription: 'Tux-lite is a custom Linux distribution built on Arch Linux with LXQt desktop environment. Designed specifically for legacy hardware, it provides a modern Linux experience with minimal resource usage.',
    technologies: ['Arch Linux', 'LXQt', 'systemd', 'bash', 'pacman'],
    features: [
      'Lightweight LXQt desktop environment',
      'Optimized for legacy hardware',
      'Custom systemd services',
      'Pre-configured development tools',
      'Minimal resource footprint'
    ],
    challenges: 'Creating a stable, lightweight distribution while maintaining compatibility with modern software required careful package selection and extensive testing on various hardware configurations.',
    github: 'https://github.com/raiakash1204',
    demo: '#'
  },
  'equalizer': {
    title: '3Q – 3-Band Equalizer Plugin',
    description: 'A professional audio plugin featuring real-time DSP processing and spectrum analysis.',
    fullDescription: 'Built with the JUCE framework, 3Q is a professional-grade 3-band equalizer plugin with real-time spectrum analysis. The plugin features low, mid, and high frequency controls with visual feedback.',
    technologies: ['C++', 'JUCE Framework', 'DSP', 'Audio Programming'],
    features: [
      'Real-time 3-band equalization',
      'Spectrum analyzer with visual feedback',
      'Low-latency audio processing',
      'Cross-platform compatibility',
      'Professional audio quality'
    ],
    challenges: 'Implementing real-time audio processing with minimal latency while providing accurate spectrum analysis required deep understanding of DSP principles and optimization techniques.',
    github: 'https://github.com/raiakash1204',
    demo: '#'
  }
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeTheme();
  initializePreloader();
  initializeCursor();
  initializeNavigation();
  initializeScrollEffects();
  initializeTypingAnimation();
  initializeParticles();
  initializeSkillFilters();
  initializeFormHandling();
  initializeProjectModals();
  initializeAnimations();
  initializeBackToTop();
});

// Theme Management
function initializeTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
}

// Preloader
function initializePreloader() {
  const preloader = document.getElementById('preloader');
  
  setTimeout(() => {
    preloader.classList.add('hidden');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }, 2000);
}

// Custom Cursor
function initializeCursor() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const cursor = document.getElementById('cursor');
  const cursorTrail = document.getElementById('cursor-trail');
  
  let mouseX = 0, mouseY = 0;
  let trailX = 0, trailY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });
  
  // Smooth trail animation
  function animateTrail() {
    trailX += (mouseX - trailX) * 0.1;
    trailY += (mouseY - trailY) * 0.1;
    
    cursorTrail.style.left = trailX + 'px';
    cursorTrail.style.top = trailY + 'px';
    
    requestAnimationFrame(animateTrail);
  }
  animateTrail();
  
  // Magnetic effect for interactive elements
  const magneticElements = document.querySelectorAll('a, button, .project-card, .skill-item');
  
  magneticElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      cursor.classList.add('magnetic');
    });
    
    element.addEventListener('mouseleave', () => {
      cursor.classList.remove('magnetic');
    });
  });
}

// Navigation
function initializeNavigation() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  // Scroll effect for navbar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  
  // Smooth scrolling and active link highlighting
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
      
      // Close mobile menu
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
  
  // Update active navigation link based on scroll position
  window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// Scroll Effects
function initializeScrollEffects() {
  // Scroll progress bar
  const scrollProgress = document.getElementById('scroll-progress');
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    scrollProgress.style.width = scrollPercent + '%';
  });
  
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    '.timeline-item, .project-card, .flip-card, .contact-item, .contact-form, .skill-item'
  );
  
  animateElements.forEach(element => {
    observer.observe(element);
  });
}

// Typing Animation
function initializeTypingAnimation() {
  const typingElement = document.getElementById('typing-text');
  
  function type() {
    const currentText = typingTexts[typingIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      typingIndex = (typingIndex + 1) % typingTexts.length;
      typeSpeed = 500; // Pause before next word
    }
    
    setTimeout(type, typeSpeed);
  }
  
  type();
}

// Particle System
function initializeParticles() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const particlesContainer = document.getElementById('particles');
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    createParticle();
  }
  
  function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 4 + 2;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const animationDuration = Math.random() * 4 + 2;
    const delay = Math.random() * 2;
    
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.animationDuration = animationDuration + 's';
    particle.style.animationDelay = delay + 's';
    
    particlesContainer.appendChild(particle);
  }
}

// Skills Filter
function initializeSkillFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillItems = document.querySelectorAll('.skill-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter skills
      skillItems.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
          item.classList.remove('hide');
          item.classList.add('show');
        } else {
          item.classList.remove('show');
          item.classList.add('hide');
        }
      });
    });
  });
  
  // Initialize all skills as visible
  skillItems.forEach(item => {
    item.classList.add('show');
  });
}

// Form Handling
function initializeFormHandling() {
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const formData = new FormData(contactForm);
    
    // Show loading state
    submitButton.classList.add('loading');
    
    try {
      // Simulate form submission (replace with actual endpoint)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message
      showFormMessage('Thank you! Your message has been sent successfully.', 'success');
      contactForm.reset();
      
    } catch (error) {
      // Show error message
      showFormMessage('Sorry, there was an error sending your message. Please try again.', 'error');
    } finally {
      // Remove loading state
      submitButton.classList.remove('loading');
    }
  });
  
  function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type} show`;
    
    setTimeout(() => {
      formMessage.classList.remove('show');
    }, 5000);
  }
}

// Project Modals
function initializeProjectModals() {
  const projectCards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.querySelector('.modal-close');
  
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project');
      const project = projectData[projectId];
      
      if (project) {
        showProjectModal(project);
      }
    });
  });
  
  modalClose.addEventListener('click', hideProjectModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      hideProjectModal();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      hideProjectModal();
    }
  });
  
  function showProjectModal(project) {
    modalBody.innerHTML = `
      <h2>${project.title}</h2>
      <p class="project-modal-description">${project.fullDescription}</p>
      
      <h3>Technologies Used</h3>
      <div class="project-modal-tech">
        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
      
      <h3>Key Features</h3>
      <ul class="project-modal-features">
        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
      
      <h3>Challenges & Solutions</h3>
      <p>${project.challenges}</p>
      
      <div class="project-modal-links">
        <a href="${project.github}" target="_blank" class="btn btn-primary">View on GitHub</a>
        ${project.demo !== '#' ? `<a href="${project.demo}" target="_blank" class="btn btn-secondary">Live Demo</a>` : ''}
      </div>
    `;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  
  function hideProjectModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
}

// Initialize Animations
function initializeAnimations() {
  // Add CSS for modal styles
  const modalStyles = `
    .project-modal-description {
      font-size: var(--font-size-lg);
      color: var(--text-secondary);
      margin-bottom: var(--spacing-xl);
      line-height: var(--line-height-relaxed);
    }
    
    .project-modal-tech {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-sm);
      margin-bottom: var(--spacing-xl);
    }
    
    .project-modal-features {
      margin-bottom: var(--spacing-xl);
      padding-left: var(--spacing-lg);
    }
    
    .project-modal-features li {
      margin-bottom: var(--spacing-sm);
      color: var(--text-secondary);
    }
    
    .project-modal-links {
      display: flex;
      gap: var(--spacing-lg);
      margin-top: var(--spacing-xl);
      flex-wrap: wrap;
    }
    
    #modal-body h2 {
      color: var(--text-primary);
      margin-bottom: var(--spacing-lg);
      font-size: var(--font-size-2xl);
    }
    
    #modal-body h3 {
      color: var(--primary-color);
      margin: var(--spacing-xl) 0 var(--spacing-md) 0;
      font-size: var(--font-size-lg);
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = modalStyles;
  document.head.appendChild(styleSheet);
}

// Back to Top Button
function initializeBackToTop() {
  const backToTopButton = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Handle resize events
window.addEventListener('resize', debounce(() => {
  // Reinitialize particles on resize
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const particlesContainer = document.getElementById('particles');
    particlesContainer.innerHTML = '';
    
    const particleCount = Math.min(50, Math.floor(window.innerWidth / 20));
    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }
  }
}, 250));

// Performance optimization
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    // Initialize non-critical features
    console.log('Portfolio loaded successfully!');
  });
}

// Service Worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // navigator.serviceWorker.register('/sw.js')
    //   .then(registration => console.log('SW registered'))
    //   .catch(registrationError => console.log('SW registration failed'));
  });
}

// Additional particle creation function (needed for resize handler)
function createParticle() {
  const particlesContainer = document.getElementById('particles');
  if (!particlesContainer) return;
  
  const particle = document.createElement('div');
  particle.className = 'particle';
  
  const size = Math.random() * 4 + 2;
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const animationDuration = Math.random() * 4 + 2;
  const delay = Math.random() * 2;
  
  particle.style.width = size + 'px';
  particle.style.height = size + 'px';
  particle.style.left = x + 'px';
  particle.style.top = y + 'px';
  particle.style.animationDuration = animationDuration + 's';
  particle.style.animationDelay = delay + 's';
  
  particlesContainer.appendChild(particle);
}