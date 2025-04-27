/**
 * Baked by Ninu - Main JavaScript
 * Handles animations, interactions, and other dynamic elements
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbarScroll();
    initSmoothScroll();
    initScrollAnimation();
    initCookieConsent();
    initCarousel();
});

/**
 * Changes navbar background on scroll
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 1)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });
}

/**
 * Implements smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}

/**
 * Adds fade-in animations when elements come into view
 */
function initScrollAnimation() {
    // Add fade-in class to elements we want to animate
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.querySelectorAll('.section-header, .product-card, .about-content, .about-image, .contact-form, .newsletter-signup').forEach(element => {
            element.classList.add('fade-in');
        });
    });
    
    // Check which elements are in viewport and animate them
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }
    
    // Run once on load
    checkFade();
    
    // Run on scroll
    window.addEventListener('scroll', checkFade);
}

/**
 * Handles cookie consent banner
 */
function initCookieConsent() {
    const cookieConsent = document.querySelector('.cookie-consent');
    const acceptButton = document.querySelector('.accept-cookies');
    
    // Check if user has already accepted cookies
    if (localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'none';
    }
    
    // Handle accept button click
    if (acceptButton) {
        acceptButton.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieConsent.style.display = 'none';
        });
    }
}

/**
 * Configures the testimonial carousel
 */
function initCarousel() {
    const testimonialCarousel = document.getElementById('testimonialCarousel');
    if (testimonialCarousel) {
        const carousel = new bootstrap.Carousel(testimonialCarousel, {
            interval: 5000,
            pause: 'hover'
        });
    }
}

/**
 * Form submission handlers (for future implementation)
 */
document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Form submission logic would go here
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Newsletter subscription logic would go here
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
});
