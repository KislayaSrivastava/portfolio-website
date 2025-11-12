// ===================================
// Navigation & Scroll Behavior
// ===================================

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// Close mobile menu when clicking nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for empty hash
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Scroll to Top Button
// ===================================
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            company: document.getElementById('company').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        try {
            // For now, we'll simulate form submission
            // In production, you would integrate with a service like Formspree, EmailJS, or your backend
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // For demonstration: Create a mailto link
            const mailtoLink = `mailto:kislaya.srivastava@gmail.com?subject=${encodeURIComponent(formData.subject + ' - From ' + formData.name)}&body=${encodeURIComponent(
                `Name: ${formData.name}\n` +
                `Email: ${formData.email}\n` +
                `Company: ${formData.company}\n\n` +
                `Message:\n${formData.message}`
            )}`;
            
            // Open mailto link
            window.location.href = mailtoLink;
            
            // Show success message
            formMessage.textContent = 'Your default email client should open. If not, please email directly at kislaya.srivastava@gmail.com';
            formMessage.className = 'form-message success';
            
            // Reset form
            contactForm.reset();
            
        } catch (error) {
            // Show error message
            formMessage.textContent = 'Something went wrong. Please email directly at kislaya.srivastava@gmail.com';
            formMessage.className = 'form-message error';
        } finally {
            // Reset button
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.metric-card, .project-card, .skill-category, .cert-card');
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// ===================================
// Active Navigation Link Highlighting
// ===================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
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

// ===================================
// Skill Progress Bars Animation
// ===================================
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.proficiency-bar');
    
    skillBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 100);
    });
};

// Trigger skill bar animation when skills section is visible
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    skillsObserver.observe(skillsSection);
}

// ===================================
// Dynamic Year in Footer
// ===================================
const updateFooterYear = () => {
    const yearElements = document.querySelectorAll('.footer-bottom p');
    if (yearElements.length > 0) {
        const currentYear = new Date().getFullYear();
        yearElements[0].innerHTML = yearElements[0].innerHTML.replace('2025', currentYear);
    }
};

updateFooterYear();

// ===================================
// Typing Effect for Hero Title (Optional)
// ===================================
const typingEffect = (element, text, speed = 100) => {
    let i = 0;
    element.textContent = '';
    
    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    
    type();
};

// Uncomment to enable typing effect on hero title
// document.addEventListener('DOMContentLoaded', () => {
//     const heroTitle = document.querySelector('.hero-title');
//     if (heroTitle) {
//         const titleText = heroTitle.textContent;
//         typingEffect(heroTitle, titleText, 50);
//     }
// });

// ===================================
// Project Card Hover Effect Enhancement
// ===================================
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================================
// Copy Email to Clipboard
// ===================================
const addCopyEmailFeature = () => {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Get email from href
            const email = link.getAttribute('href').replace('mailto:', '');
            
            // Copy to clipboard if Ctrl/Cmd is pressed
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                
                navigator.clipboard.writeText(email).then(() => {
                    // Show temporary notification
                    const notification = document.createElement('div');
                    notification.textContent = 'Email copied to clipboard!';
                    notification.style.cssText = `
                        position: fixed;
                        bottom: 30px;
                        left: 50%;
                        transform: translateX(-50%);
                        background: #34a853;
                        color: white;
                        padding: 12px 24px;
                        border-radius: 8px;
                        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                        z-index: 10000;
                        animation: fadeInUp 0.3s ease;
                    `;
                    
                    document.body.appendChild(notification);
                    
                    setTimeout(() => {
                        notification.style.opacity = '0';
                        setTimeout(() => notification.remove(), 300);
                    }, 2000);
                });
            }
        });
    });
};

addCopyEmailFeature();

// ===================================
// Loading State
// ===================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===================================
// Console Easter Egg
// ===================================
console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold; color: #1a73e8;');
console.log('%cLooking at the code? I like your style!', 'font-size: 14px; color: #5f6368;');
console.log('%cThis site is built with vanilla HTML, CSS, and JavaScript.', 'font-size: 14px; color: #5f6368;');
console.log('%cInterested in working together? Let\'s connect!', 'font-size: 14px; color: #34a853;');
console.log('%ckislaya.srivastava@gmail.com', 'font-size: 14px; font-weight: bold; color: #1a73e8;');

// ===================================
// Performance Monitoring (Optional)
// ===================================
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('⚡ Performance Metrics:');
            console.log(`DOM Load: ${Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart)}ms`);
            console.log(`Page Load: ${Math.round(perfData.loadEventEnd - perfData.loadEventStart)}ms`);
        }, 0);
    });
}
