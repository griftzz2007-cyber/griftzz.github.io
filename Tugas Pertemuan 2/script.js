// Konfigurasi umum
const config = {
    scrollThreshold: 300,
    animationDuration: 600,
    typingSpeed: 100,
    deletingSpeed: 50
};

// Inisialisasi saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initScrollAnimations();
    initSkillBars();
    initScrollProgress();
    initBackToTop();
    initMobileMenu();
    initLazyLoading();
    initDarkMode();
    initTypingEffect();
    initProjectFilters();
    initTooltips();
});

// Smooth scroll untuk navigasi
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || !href) return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active navigation
                updateActiveNav(href);
            }
        });
    });
}

// Update active navigation state
function updateActiveNav(activeHref) {
    document.querySelectorAll('#navbar a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === activeHref) {
            link.classList.add('active');
        }
    });
}

// Intersection Observer untuk animasi scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Trigger counter animation untuk angka
                if (entry.target.hasAttribute('data-count')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe semua section dan elemen penting
    const elementsToAnimate = document.querySelectorAll(
        'section, .info-box, .project-item, .announcement-item, .skill-list li'
    );
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-element');
        observer.observe(el);
    });
}

// Animasi counter untuk angka
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Progress bars untuk skills
function initSkillBars() {
    const skillItems = document.querySelectorAll('.skill-list li');
    
    skillItems.forEach((item, index) => {
        // Buat wrapper untuk progress bar
        const textContent = item.textContent;
        const percentage = 70 + Math.random() * 25; // Random 70-95%
        
        item.innerHTML = `
            <div class="skill-content">
                <span class="skill-name">${textContent}</span>
                <span class="skill-percentage">${Math.round(percentage)}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" data-progress="${percentage}"></div>
            </div>
        `;

        // Animasi progress bar saat visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target.querySelector('.skill-progress');
                    const progress = progressBar.getAttribute('data-progress');
                    
                    setTimeout(() => {
                        progressBar.style.width = progress + '%';
                    }, index * 100);
                    
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(item);
    });
}

// Scroll progress indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Back to top button
function initBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '↑';
    backToTop.setAttribute('aria-label', 'Kembali ke atas');
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > config.scrollThreshold) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Mobile menu hamburger
function initMobileMenu() {
    const navbar = document.getElementById('navbar');
    const header = document.getElementById('header');
    
    // Buat hamburger button
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.setAttribute('aria-label', 'Toggle menu');
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    const wrapper = header.querySelector('#wrapper');
    wrapper.appendChild(hamburger);

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('mobile-active');
        hamburger.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu saat klik link
    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('mobile-active');
            hamburger.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Close menu saat klik di luar
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && !hamburger.contains(e.target)) {
            navbar.classList.remove('mobile-active');
            hamburger.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
}

// Lazy loading untuk gambar
function initLazyLoading() {
    const images = document.querySelectorAll('img[src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            img.classList.add('lazy');
            imageObserver.observe(img);
        });
    }
}

function initDarkMode() {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.setAttribute('aria-label', 'Toggle dark mode');
    darkModeToggle.innerHTML = '⏾';
    document.body.appendChild(darkModeToggle);

    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        
        darkModeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            darkModeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    });
}

function initTypingEffect() {
    const logo = document.getElementById('logo');
    if (!logo) return;

    const originalText = logo.textContent;
    const texts = [
        originalText,
        'Web Developer ',
        'Network Engineer ',
        'IoT Enthusiast '
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';

    function type() {
        const fullText = texts[textIndex];

        if (isDeleting) {
            currentText = fullText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            currentText = fullText.substring(0, charIndex + 1);
            charIndex++;
        }

        logo.textContent = currentText;

        let typeSpeed = isDeleting ? config.deletingSpeed : config.typingSpeed;

        if (!isDeleting && charIndex === fullText.length) {
            typeSpeed = 2000; // Pause saat selesai
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    setTimeout(type, 1000);
}

function initProjectFilters() {
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });
}

function initTooltips() {
    const elementsWithTitle = document.querySelectorAll('[title]');
    
    elementsWithTitle.forEach(el => {
        const title = el.getAttribute('title');
        if (!title) return;

        el.removeAttribute('title');
        el.setAttribute('data-tooltip', title);

        el.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'custom-tooltip';
            tooltip.textContent = e.target.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);

            const rect = e.target.getBoundingClientRect();
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
            tooltip.style.left = (rect.left + (rect.width - tooltip.offsetWidth) / 2) + 'px';

            setTimeout(() => tooltip.classList.add('visible'), 10);
        });

        el.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.custom-tooltip');
            if (tooltip) {
                tooltip.classList.remove('visible');
                setTimeout(() => tooltip.remove(), 300);
            }
        });
    });
}

// Handle sticky header on scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Auto-hide header saat scroll ke bawah
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

// Parallax effect untuk profile image
window.addEventListener('scroll', () => {
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        profileImage.style.transform = `translateY(${rate}px)`;
    }
});

// Easter egg: Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 2s linear infinite';
    setTimeout(() => {
        document.body.style.animation = '';
        alert(' You found the easter egg! Great job! ');
    }, 3000);
}

// Performance monitoring
if ('PerformanceObserver' in window) {
    const perfObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
            if (entry.duration > 100) {
                console.warn(`Slow operation detected: ${entry.name} took ${entry.duration}ms`);
            }
        }
    });
    
    perfObserver.observe({ entryTypes: ['measure'] });
}
