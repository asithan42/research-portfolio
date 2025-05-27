// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animate elements when they come into view
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.feature-card, .research-card, .phase-card, .tech-card, .member-card, .supervisor-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Run once on page load

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // Show success message
            alert(`Thank you, ${name}! Your message has been received. We'll contact you at ${email} soon.`);
            
            // Reset the form
            this.reset();
        });
    }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navList = document.querySelector('nav ul');
    
    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            navList.classList.toggle('show');
        });
    }
});

