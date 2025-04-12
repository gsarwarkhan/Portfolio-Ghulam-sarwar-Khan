var toggleButton = document.getElementById('toggleButton');
var skillsSection = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});

// Enhanced Carousel functionality
class Carousel {
    constructor(element) {
        this.carousel = element;
        this.inner = element.querySelector('.carousel-inner');
        this.items = Array.from(element.querySelectorAll('.carousel-item'));
        this.dots = Array.from(element.querySelectorAll('.carousel-dot'));
        this.prevBtn = element.querySelector('.carousel-prev');
        this.nextBtn = element.querySelector('.carousel-next');
        
        this.currentIndex = 0;
        this.isTransitioning = false;
        this.touchStartX = 0;
        this.touchEndX = 0;
        
        this.init();
    }
    
    init() {
        // Set initial active state
        this.items[0].classList.add('active');
        this.dots[0].classList.add('active');
        
        // Add event listeners
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Touch events
        this.carousel.addEventListener('touchstart', (e) => {
            this.touchStartX = e.touches[0].clientX;
        });
        
        this.carousel.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].clientX;
            this.handleSwipe();
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.carousel.matches(':hover')) {
                if (e.key === 'ArrowLeft') this.prev();
                if (e.key === 'ArrowRight') this.next();
            }
        });
    }
    
    handleSwipe() {
        const swipeThreshold = 50;
        const diff = this.touchEndX - this.touchStartX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.prev();
            } else {
                this.next();
            }
        }
    }
    
    goToSlide(index) {
        if (this.isTransitioning || index === this.currentIndex) return;
        
        this.isTransitioning = true;
        
        // Remove active classes
        this.items[this.currentIndex].classList.remove('active');
        this.dots[this.currentIndex].classList.remove('active');
        
        // Add active classes to new items
        this.items[index].classList.add('active');
        this.dots[index].classList.add('active');
        
        // Update current index
        this.currentIndex = index;
        
        // Reset transition flag after animation
        setTimeout(() => {
            this.isTransitioning = false;
        }, 500);
    }
    
    next() {
        const nextIndex = (this.currentIndex + 1) % this.items.length;
        this.goToSlide(nextIndex);
    }
    
    prev() {
        const prevIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.goToSlide(prevIndex);
    }
}

// Initialize all carousels
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => new Carousel(carousel));
    
    // Initialize other animations
    initializeAnimations();
});

// Function to initialize other animations
function initializeAnimations() {
    // Animate skill bars
    const skillLevels = document.querySelectorAll('.skill-level');
    const animateSkills = () => {
        skillLevels.forEach(skill => {
            const skillTop = skill.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (skillTop < screenPosition) {
                skill.style.width = skill.parentElement.getAttribute('data-level') || '0%';
            }
        });
    };
    
    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    const animateTimeline = () => {
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (itemTop < screenPosition) {
                item.classList.add('animate');
            }
        });
    };
    
    // Scroll animations
    window.addEventListener('scroll', () => {
        animateSkills();
        animateTimeline();
    });
    
    // Initialize animations on load
    animateSkills();
    animateTimeline();
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Particle effect for hero section
const createParticle = () => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    document.querySelector('.hero').appendChild(particle);
    
    const size = Math.random() * 5 + 2;
    const left = Math.random() * 100;
    const duration = Math.random() * 3 + 2;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${left}%`;
    particle.style.animation = `float ${duration}s linear infinite`;
    
    setTimeout(() => particle.remove(), duration * 1000);
};

// Create particles periodically
setInterval(createParticle, 200);

// Text animation for section titles
const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
};

const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.5
});

document.querySelectorAll('.section-title').forEach(title => {
    observer.observe(title);
});

// Timeline Animation
document.addEventListener('DOMContentLoaded', () => {
    const timelineBlocks = document.querySelectorAll('.timeline-block');
    
    const animateTimeline = () => {
        timelineBlocks.forEach(block => {
            const blockTop = block.getBoundingClientRect().top;
            const blockBottom = block.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            if (blockTop < windowHeight * 0.85 && blockBottom > 0) {
                block.classList.add('animate');
                // Ensure content is visible
                const content = block.querySelector('.timeline-content');
                if (content) {
                    content.style.opacity = '1';
                    content.style.visibility = 'visible';
                }
            }
        });
    };
    
    // Initial check for visible timeline blocks
    animateTimeline();
    
    // Animate timeline blocks on scroll
    window.addEventListener('scroll', () => {
        requestAnimationFrame(animateTimeline);
    });
    
    // Add hover effect for timeline dots
    timelineBlocks.forEach(block => {
        const dot = block.querySelector('.timeline-dot');
        const content = block.querySelector('.timeline-content');
        
        if (content && dot) {
            // Ensure content is visible initially
            content.style.opacity = '1';
            content.style.visibility = 'visible';
            
            // Animate dot when hovering over content
            content.addEventListener('mouseenter', () => {
                dot.style.transform = 'translateX(-50%) scale(1.3)';
                dot.style.background = 'var(--accent-color)';
            });
            
            content.addEventListener('mouseleave', () => {
                dot.style.transform = 'translateX(-50%) scale(1)';
                dot.style.background = 'var(--secondary-color)';
            });
        }
    });
});

// Tech Background Animation
class TechBackground {
    constructor() {
        this.background = document.querySelector('.tech-background');
        if (!this.background) {
            this.background = document.createElement('div');
            this.background.className = 'tech-background';
            document.body.insertBefore(this.background, document.body.firstChild);
        }

        // Add tech grid
        this.grid = document.createElement('div');
        this.grid.className = 'tech-grid';
        this.background.appendChild(this.grid);

        // Initialize elements
        this.codeBlocks = [];
        this.floatingElements = [];
        this.connectingLines = [];
        
        this.init();
    }

    init() {
        // Create initial elements
        this.createCodeBlocks();
        this.createFloatingElements();
        this.createConnections();

        // Start animation loop
        this.animate();

        // Create new elements periodically
        setInterval(() => this.createCodeBlock(), 3000);
        setInterval(() => this.createFloatingElement(), 4000);
    }

    createCodeBlock() {
        const codeSnippets = [
            'function init() {',
            'const data = [];',
            'return Promise.all(',
            'async/await',
            'export default {',
            'npm install',
            'git commit -m "',
            '<div class="',
            '.querySelector(',
            'useState(() => {',
        ];

        const block = document.createElement('div');
        block.className = 'code-block';
        block.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        
        // Random position
        block.style.left = Math.random() * 100 + '%';
        block.style.top = Math.random() * 100 + '%';
        
        this.background.appendChild(block);
        this.codeBlocks.push({
            element: block,
            speed: Math.random() * 0.5 + 0.2,
            opacity: 0.3
        });

        // Remove after animation
        setTimeout(() => {
            block.remove();
            this.codeBlocks = this.codeBlocks.filter(b => b.element !== block);
        }, 10000);
    }

    createFloatingElement() {
        const element = document.createElement('div');
        element.className = 'floating-element';
        
        // Random size and position
        const size = Math.random() * 30 + 10;
        element.style.width = size + 'px';
        element.style.height = size + 'px';
        element.style.left = Math.random() * 100 + '%';
        element.style.top = Math.random() * 100 + '%';
        
        // Animation
        element.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite`;
        
        this.background.appendChild(element);
        this.floatingElements.push({
            element: element,
            x: parseFloat(element.style.left),
            y: parseFloat(element.style.top),
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5
        });

        // Remove after some time
        setTimeout(() => {
            element.remove();
            this.floatingElements = this.floatingElements.filter(e => e.element !== element);
        }, 15000);
    }

    createConnections() {
        // Clear old connections
        this.connectingLines.forEach(line => line.element.remove());
        this.connectingLines = [];

        // Create new connections between floating elements
        this.floatingElements.forEach((el1, i) => {
            this.floatingElements.slice(i + 1).forEach(el2 => {
                const distance = Math.hypot(el2.x - el1.x, el2.y - el1.y);
                if (distance < 30) {
                    const line = document.createElement('div');
                    line.className = 'connecting-line';
                    
                    // Position and rotate line
                    const angle = Math.atan2(el2.y - el1.y, el2.x - el1.x);
                    line.style.width = distance + '%';
                    line.style.height = '1px';
                    line.style.left = el1.x + '%';
                    line.style.top = el1.y + '%';
                    line.style.transform = `rotate(${angle}rad)`;
                    
                    this.background.appendChild(line);
                    this.connectingLines.push({ element: line });
                }
            });
        });
    }

    animate() {
        // Update floating elements
        this.floatingElements.forEach(el => {
            el.x += el.speedX;
            el.y += el.speedY;
            
            // Bounce off edges
            if (el.x <= 0 || el.x >= 100) el.speedX *= -1;
            if (el.y <= 0 || el.y >= 100) el.speedY *= -1;
            
            el.element.style.left = el.x + '%';
            el.element.style.top = el.y + '%';
        });

        // Update connections
        if (this.floatingElements.length > 1) {
            this.createConnections();
        }

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize tech background
document.addEventListener('DOMContentLoaded', () => {
    new TechBackground();
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Close menu when clicking a link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
