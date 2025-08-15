// Initialize Bootstrap carousels with custom settings
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all carousels
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 5000,
            wrap: true,
            keyboard: true
        });
    });

    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add animation on scroll for package cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe package cards for animation
    const packageCards = document.querySelectorAll('.package-card');
    packageCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Add click functionality to package cards
    packageCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add your package selection logic here
            console.log('Package selected:', this.querySelector('.card-header').textContent);
        });
    });

    // Add click functionality to carousel images
    const carouselImages = document.querySelectorAll('.carousel-image-clickable');
    carouselImages.forEach(img => {
        img.addEventListener('click', function() {
            const modal = new bootstrap.Modal(document.getElementById('imageModal'));
            const modalImage = document.getElementById('modalImage');
            
            modalImage.src = this.src;
            modalImage.alt = this.alt;
            
            modal.show();
        });
    });

    // Smooth reveal animation for testimonials
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
        }, 100 + (index * 200));
    });
});

// Add loading animation for images
function preloadImages() {
    const imageUrls = [
        '/assets/images/index/dave_condenser.png',
        '/assets/images/index/maple_air_handler.png',
        '/assets/images/index/maple_air_handler2.png'
    ];

    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Call preload function when page loads
window.addEventListener('load', preloadImages);
