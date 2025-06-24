// Global variables
let currentTheme = localStorage.getItem('theme') || 'light';
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;

// Firefly cursor variables
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let fireflies = [];
const maxFireflies = 100;
let lastFireflyTime = 0;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeTheme();
  initializePreloader();
  initializeFireflyCursor();
  initializeNavigation();
  initializeScrollEffects();
  initializeTypingAnimation();
  initializeParticles();
  initializeSkillFilters();
  initializeFormHandling();
  initializeProjectModals();
  initializeBackToTop();
  populateContent();
});

// Populate content from data
function populateContent() {
  // Populate hero section
  document.getElementById('hero-first-name').textContent = personalData.personal.name.first;
  document.getElementById('hero-last-name').textContent = personalData.personal.name.last;
  document.getElementById('hero-description').textContent = personalData.personal.description;
  

  populateEducation();
  

  populateSkills();
  

  populateProjects();
  

  populateCertifications();
  

  populateContactInfo();
}

// Populate education timeline
function populateEducation() {
  const timeline = document.getElementById('education-timeline');
  timeline.innerHTML = '';
  
  personalData.education.forEach((edu, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.setAttribute('data-year', edu.year);
    
    timelineItem.innerHTML = `
      <div class="timeline-content glass-card">
        <div class="timeline-marker"></div>
        <h3>${edu.degree}</h3>
        ${edu.specialization ? `<h4>${edu.specialization}</h4>` : ''}
        <p class="institution">${edu.institution}</p>
        <p class="location">${edu.location}</p>
        <span class="timeline-year">${edu.period}</span>
      </div>
    `;
    
    timeline.appendChild(timelineItem);
  });
}

// Populate skills
function populateSkills() {
  const skillsGrid = document.getElementById('skills-grid');
  skillsGrid.innerHTML = '';
  
  Object.keys(personalData.skills).forEach(category => {
    personalData.skills[category].forEach(skill => {
      const skillItem = document.createElement('div');
      skillItem.className = 'skill-item glass-card';
      skillItem.setAttribute('data-category', category);
      
      const iconHtml = skill.icon.startsWith('fa') 
        ? `<i class="${skill.icon}" style="color: ${skill.color}"></i>`
        : skill.icon;
      
      skillItem.innerHTML = `
        <div class="skill-icon">${iconHtml}</div>
        <h3>${skill.name}</h3>
      `;
      
      skillsGrid.appendChild(skillItem);
    });
  });
}

// Populate projects
function populateProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  projectsGrid.innerHTML = '';
  
  personalData.projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card clay-card';
    projectCard.setAttribute('data-project', project.id);
    
    projectCard.innerHTML = `
      <div class="project-image">
        <div class="project-icon">${project.icon}</div>
      </div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.shortDescription}</p>
        <div class="project-tech">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
    `;
    
    projectsGrid.appendChild(projectCard);
  });
}

// Populate certifications
function populateCertifications() {
  const certificationsGrid = document.getElementById('certifications-grid');
  certificationsGrid.innerHTML = '';
  
  personalData.certifications.forEach(cert => {
    const certCard = document.createElement('div');
    certCard.className = 'cert-card clay-card';
    
    certCard.innerHTML = `
      <div class="cert-header">
        <div class="cert-icon">${cert.icon}</div>
        <div class="cert-info">
          <h3>${cert.title}</h3>
          <div class="cert-subtitle">${cert.subtitle}</div>
        </div>
      </div>
      <p class="cert-description">${cert.description}</p>
      <div class="cert-footer">
        <span class="cert-year">${cert.year}</span>
        <span class="cert-organization">${cert.organization}</span>
      </div>
    `;
    
    certificationsGrid.appendChild(certCard);
  });
}

function populateContactInfo() {
  const contactInfo = document.getElementById('contact-info');
  contactInfo.innerHTML = '';
  
  const contactItems = [
    { 
      icon: '<i class="fas fa-phone" style="color: #10B981;"></i>', 
      title: 'Phone', 
      value: personalData.personal.contact.phone,
      link: `tel:${personalData.personal.contact.phone}`
    },
    { 
      icon: '<i class="fas fa-envelope" style="color: #F59E0B;"></i>', 
      title: 'Email', 
      value: personalData.personal.contact.email,
      link: `mailto:${personalData.personal.contact.email}`
    },
    { 
      icon: '<i class="fab fa-github" style="color: #6B7280;"></i>', 
      title: 'GitHub', 
      value: personalData.personal.contact.github,
      link: `https://${personalData.personal.contact.github}`
    },
    { 
      icon: '<i class="fab fa-linkedin" style="color: #0077B5;"></i>', 
      title: 'LinkedIn', 
      value: personalData.personal.contact.linkedin,
      link: `https://${personalData.personal.contact.linkedin}`
    }
  ];
  
  contactItems.forEach(item => {
    const contactItem = document.createElement('div');
    contactItem.className = 'contact-item glass-card';
    
    contactItem.innerHTML = `
      <div class="contact-icon">${item.icon}</div>
      <h3>${item.title}</h3>
      <a href="${item.link}" class="contact-link" target="_blank" rel="noopener noreferrer">${item.value}</a>
    `;
    
    contactInfo.appendChild(contactItem);
  });
}

// Theme
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

// Firefly Cursor
function initializeFireflyCursor() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const cursor = document.getElementById('cursor');
  
  // Track mouse movement
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Create firefly trail with throttling for smoothness
    const now = Date.now();
    if (now - lastFireflyTime > 80) { // Throttle to every 80ms for smoother trail
      createFirefly(mouseX, mouseY);
      lastFireflyTime = now;
    }
  });
  
  // Animate cursor
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
  
  // Hover effects for interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item, .filter-btn, .contact-item, .cert-card, .modal-close, .hamburger, .theme-toggle, .back-to-top');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
    });
    
    element.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
    
    element.addEventListener('mousedown', () => {
      cursor.classList.add('click');
      // Create explosion of fireflies on click
      for (let i = 0; i < 6; i++) {
        setTimeout(() => {
          createFirefly(
            mouseX + (Math.random() - 0.5) * 60,
            mouseY + (Math.random() - 0.5) * 60,
            true // Special explosion firefly
          );
        }, i * 30);
      }
    });
    
    element.addEventListener('mouseup', () => {
      cursor.classList.remove('click');
    });
  });
}

function createFirefly(x, y, isExplosion = false) {
  // delete old fireflies
  if (fireflies.length >= maxFireflies) {
    const oldFirefly = fireflies.shift();
    if (oldFirefly && oldFirefly.parentNode) {
      oldFirefly.parentNode.removeChild(oldFirefly);
    }
  }
  
  const firefly = document.createElement('div');
  firefly.className = isExplosion ? 'firefly explosion' : 'firefly';
  
  // Smooth random offset for natural movement
  const offsetX = (Math.random() - 0.5) * (isExplosion ? 40 : 20);
  const offsetY = (Math.random() - 0.5) * (isExplosion ? 40 : 20);
  
  firefly.style.left = (x + offsetX) + 'px';
  firefly.style.top = (y + offsetY) + 'px';
  
  // Add random size variation for more natural look
  const size = isExplosion ? 4 + Math.random() * 4 : 3 + Math.random() * 3;
  firefly.style.width = size + 'px';
  firefly.style.height = size + 'px';
  
  document.body.appendChild(firefly);
  fireflies.push(firefly);
  
  // Remove firefly after animation
  const lifetime = isExplosion ? 2000 : 1800;
  setTimeout(() => {
    if (firefly.parentNode) {
      firefly.parentNode.removeChild(firefly);
      const index = fireflies.indexOf(firefly);
      if (index > -1) {
        fireflies.splice(index, 1);
      }
    }
  }, lifetime);
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
  setTimeout(() => {
    const animateElements = document.querySelectorAll(
      '.timeline-item, .project-card, .cert-card, .contact-item, .contact-form'
    );
    
    animateElements.forEach(element => {
      observer.observe(element);
    });
  }, 100);
}

// Typing Animation
function initializeTypingAnimation() {
  const typingElement = document.getElementById('typing-text');
  
  function type() {
    const currentText = personalData.typingTexts[typingIndex];
    
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
      typingIndex = (typingIndex + 1) % personalData.typingTexts.length;
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
//Skills section
function initializeSkillFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillItems = document.querySelectorAll('.skill-item');

  skillItems.forEach(item => {
    item.style.display = 'block';
    item.classList.add('visible');
  });
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      

      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      

      skillItems.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {

          item.style.display = 'block';
          item.classList.remove('hidden');
          item.classList.add('visible');
        } else {

          item.classList.remove('visible');
          item.classList.add('hidden');
          setTimeout(() => {
            if (item.classList.contains('hidden')) {
              item.style.display = 'none';
            }
          }, 300);
        }
      });
    });
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
    
  
    submitButton.classList.add('loading');
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      });
      
      if (response.ok) {
        showFormMessage('Thank you! Your message has been sent successfully.', 'success');
        contactForm.reset();
      } else {
        throw new Error('Network response was not ok');
      }
      
    } catch (error) {
      showFormMessage('Sorry, there was an error sending your message. Please try again.', 'error');
    } finally {
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
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.querySelector('.modal-close');
  

  document.addEventListener('click', (e) => {
    const projectCard = e.target.closest('.project-card');
    if (projectCard) {
      const projectId = projectCard.getAttribute('data-project');
      const project = personalData.projects.find(p => p.id === projectId);
      
      if (project) {
        showProjectModal(project);
      }
    }
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

// Performance optimization
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    console.log('Portfolio loaded successfully!');
  });
}