// Particles Background Effect (OPTIONAL)
// Uncomment the function call at the bottom of script.js to enable

class ParticleSystem {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.particleCount = 50;
        this.connectionDistance = 150;
        this.mouse = { x: null, y: null, radius: 100 };
        
        this.init();
    }

    init() {
        // Create canvas
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'particles-canvas';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.pointerEvents = 'none';
        
        document.body.prepend(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        
        // Set canvas size
        this.resize();
        
        // Create particles
        this.createParticles();
        
        // Event listeners
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        
        // Start animation
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1
            });
        }
    }

    handleMouseMove(e) {
        this.mouse.x = e.x;
        this.mouse.y = e.y;
    }

    update() {
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Bounce off walls
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.vx *= -1;
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.vy *= -1;
            }

            // Mouse interaction
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.mouse.radius) {
                const force = (this.mouse.radius - distance) / this.mouse.radius;
                const angle = Math.atan2(dy, dx);
                particle.vx -= Math.cos(angle) * force * 0.1;
                particle.vy -= Math.sin(angle) * force * 0.1;
            }

            // Apply friction
            particle.vx *= 0.99;
            particle.vy *= 0.99;

            // Limit speed
            const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
            if (speed > 2) {
                particle.vx = (particle.vx / speed) * 2;
                particle.vy = (particle.vy / speed) * 2;
            }
        });
    }

    draw() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Get theme color
        const isDarkMode = document.body.classList.contains('dark-mode');
        const particleColor = isDarkMode ? 'rgba(100, 149, 237, 0.6)' : 'rgba(0, 86, 179, 0.6)';
        const lineColor = isDarkMode ? 'rgba(100, 149, 237, 0.15)' : 'rgba(0, 86, 179, 0.15)';

        // Draw connections
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.connectionDistance) {
                    const opacity = 1 - (distance / this.connectionDistance);
                    this.ctx.strokeStyle = lineColor.replace('0.15', (0.15 * opacity).toString());
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }

        // Draw particles
        this.particles.forEach(particle => {
            this.ctx.fillStyle = particleColor;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize particles
function initParticles() {
    // Only on desktop for better performance
    if (window.innerWidth > 768) {
        new ParticleSystem();
    }
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initParticles };
}
