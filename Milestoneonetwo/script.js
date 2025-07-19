// ===== PROFESSIONAL PORTFOLIO JAVASCRIPT =====

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// ===== NAVIGATION FUNCTIONALITY =====
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const menuToggle = document.querySelector('.menu-toggle');
const navLinksContainer = document.querySelector('.nav-links');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    
    navLinksContainer.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    
    // Animate hamburger icon
    const spans = menuToggle.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (!isExpanded) {
            if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) span.style.opacity = '0';
            if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            span.style.transform = 'none';
            span.style.opacity = '1';
        }
    });
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
        document.body.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        
        // Reset hamburger icon
        const spans = menuToggle.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = 'none';
            span.style.opacity = '1';
        });
    });
});

// ===== SKILL BARS ANIMATION =====
const skillBars = document.querySelectorAll('.skill-bar');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        const skillLevel = bar.querySelector('.skill-level');
        
        if (skillLevel) {
            skillLevel.style.width = `${level}%`;
        }
    });
};

// Intersection Observer for skill bars
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe skills section
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}

// ===== CONTACT FORM FUNCTIONALITY =====
const contactForm = document.querySelector('.contact-form');
const submitButton = contactForm?.querySelector('button[type="submit"]');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Show loading state
        if (submitButton) {
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;
        }
        
        try {
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                contactForm.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showNotification('Failed to send message. Please try again or contact me directly.', 'error');
        } finally {
            // Reset button state
            if (submitButton) {
                submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                submitButton.disabled = false;
            }
        }
    });
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" aria-label="Close notification">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add notification animations to CSS
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        flex: 1;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 4px;
        transition: background-color 0.2s;
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`;
document.head.appendChild(notificationStyles);

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== FLOATING HIRE BUTTON FUNCTIONALITY =====
const floatingHireBtn = document.querySelector('.floating-hire-btn');
if (floatingHireBtn) {
    floatingHireBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Open WhatsApp with pre-filled message
        const message = encodeURIComponent(
            "Hello Ghulam Sarwar Khan,\n\nI'm interested in your services as a Senior Executive Secretary & AI Developer.\n\nPlease provide me with more information about your availability and services.\n\nBest regards,"
        );
        const whatsappUrl = `https://wa.me/923232777272?text=${message}`;
        window.open(whatsappUrl, '_blank');
    });
}

// ===== PARALLAX EFFECT FOR BACKGROUND SHAPES =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        shape.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// ===== PARTICLE HOVER EFFECTS =====
document.addEventListener('DOMContentLoaded', () => {
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach(shape => {
        shape.addEventListener('mouseenter', () => {
            shape.style.transform = 'scale(1.1)';
            shape.style.opacity = '0.2';
        });
        
        shape.addEventListener('mouseleave', () => {
            shape.style.transform = 'scale(1)';
            shape.style.opacity = '0.1';
        });
    });
});

// ===== ACCESSIBILITY ENHANCEMENTS =====

// Keyboard navigation for mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinksContainer.classList.contains('active')) {
        navLinksContainer.classList.remove('active');
        document.body.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        
        // Reset hamburger icon
        const spans = menuToggle.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = 'none';
            span.style.opacity = '1';
        });
    }
});

// Focus management for mobile menu
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        setTimeout(() => {
            const firstLink = navLinksContainer.querySelector('a');
            if (firstLink && navLinksContainer.classList.contains('active')) {
                firstLink.focus();
            }
        }, 100);
    });
}

// ===== PERFORMANCE OPTIMIZATIONS =====

// Debounced scroll handler
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

// Optimized scroll handlers
const debouncedScrollHandler = debounce(() => {
    // Navbar scroll effect
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
    
    // Active link highlighting
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// ===== ANALYTICS EVENT TRACKING =====
function trackEvent(eventName, eventData = {}) {
    // Placeholder for analytics tracking
    console.log('Analytics Event:', eventName, eventData);
    
    // Example: Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Example: Custom analytics
    if (typeof window.trackEvent === 'function') {
        window.trackEvent(eventName, eventData);
    }
}

// Track important user interactions
document.addEventListener('DOMContentLoaded', () => {
    // Track form submissions
    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            trackEvent('contact_form_submit', {
                form_name: 'contact_form'
            });
        });
    }
    
    // Track project clicks
    document.querySelectorAll('.project-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            const projectName = e.target.closest('.project-card, .featured-project')?.querySelector('h3')?.textContent || 'Unknown Project';
            trackEvent('project_click', {
                project_name: projectName,
                link_type: e.target.textContent.includes('Demo') ? 'demo' : 'github'
            });
        });
    });
    
    // Track CV download
    const cvDownloadLink = document.querySelector('a[href*="Resume GSK.pdf"]');
    if (cvDownloadLink) {
        cvDownloadLink.addEventListener('click', () => {
            trackEvent('cv_download', {
                file_name: 'Resume GSK.pdf'
            });
        });
    }
    
    // Track AI Agent clicks
    const aiAgentLink = document.querySelector('a[href*="ai-agent-appgit"]');
    if (aiAgentLink) {
        aiAgentLink.addEventListener('click', () => {
            trackEvent('ai_agent_click', {
                link_location: aiAgentLink.closest('section')?.id || 'unknown'
            });
        });
    }
});

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    trackEvent('javascript_error', {
        message: e.message,
        filename: e.filename,
        lineno: e.lineno
    });
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled Promise Rejection:', e.reason);
    trackEvent('unhandled_promise_rejection', {
        reason: e.reason?.toString() || 'Unknown'
    });
});

// ===== UTILITY FUNCTIONS =====

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add loading state to buttons
function addLoadingState(button, loadingText = 'Loading...') {
    const originalText = button.innerHTML;
    button.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${loadingText}`;
    button.disabled = true;
    return () => {
        button.innerHTML = originalText;
        button.disabled = false;
    };
}

// Format phone number for display
function formatPhoneNumber(phoneNumber) {
    return phoneNumber.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, '+$1 $2 $3 $4');
}

// Initialize phone number formatting
document.addEventListener('DOMContentLoaded', () => {
    const phoneElements = document.querySelectorAll('a[href*="tel:"]');
    phoneElements.forEach(element => {
        const phoneNumber = element.getAttribute('href').replace('tel:', '');
        element.textContent = formatPhoneNumber(phoneNumber);
    });
});

// ===== PERFORMANCE MONITORING =====
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData) {
                trackEvent('page_load_performance', {
                    load_time: Math.round(perfData.loadEventEnd - perfData.loadEventStart),
                    dom_content_loaded: Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart),
                    first_paint: Math.round(performance.getEntriesByName('first-paint')[0]?.startTime || 0)
                });
            }
        }, 1000);
    });
}

console.log('🎯 Professional Portfolio JavaScript Loaded Successfully!');
console.log('📧 Contact form integrated with Formspree');
console.log('📱 Mobile-responsive design with smooth animations');
console.log('♿ Accessibility features enabled');
console.log('📊 Analytics tracking ready');
