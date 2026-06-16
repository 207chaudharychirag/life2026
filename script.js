document.addEventListener('DOMContentLoaded', () => {
    const journeyIntro = document.getElementById('journeyIntro');
    const journeyBtn = document.getElementById('journeyBtn');
    const carWindow = document.getElementById('carWindow');
    const fog = document.getElementById('fog');
    const wiperLeft = document.getElementById('wiperLeft');
    const wiperRight = document.getElementById('wiperRight');
    const speedNeedle = document.getElementById('speedNeedle');
    const speedValue = document.getElementById('speedValue');
    const starsContainer = document.getElementById('starsContainer');
    const rainContainer = document.getElementById('rainContainer');
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    document.body.style.overflow = 'hidden';
    nav.style.opacity = '0';
    nav.style.pointerEvents = 'none';

    // Generate stars
    for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        star.className = 'star' + (Math.random() > 0.7 ? ' moving' : '');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 60 + '%';
        star.style.animationDelay = Math.random() * 4 + 's';
        star.style.animationDuration = (2 + Math.random() * 3) + 's';
        const size = 1 + Math.random() * 2;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        starsContainer.appendChild(star);
    }

    // Generate rain
    function createRain() {
        for (let i = 0; i < 40; i++) {
            const drop = document.createElement('div');
            drop.className = 'raindrop';
            drop.style.left = Math.random() * 100 + '%';
            drop.style.height = (10 + Math.random() * 20) + 'px';
            drop.style.animationDuration = (0.4 + Math.random() * 0.4) + 's';
            drop.style.animationDelay = Math.random() * 2 + 's';
            drop.style.opacity = 0.2 + Math.random() * 0.4;
            rainContainer.appendChild(drop);
        }
    }
    createRain();

    // Wiper animation loop
    let wiperInterval = setInterval(() => {
        wiperLeft.classList.add('wiping');
        wiperRight.classList.add('wiping');
        setTimeout(() => {
            wiperLeft.classList.remove('wiping');
            wiperRight.classList.remove('wiping');
        }, 800);
    }, 3000);

    // Speed idle animation
    let currentSpeed = 0;
    let targetSpeed = 40;
    function updateSpeed() {
        const jitter = Math.sin(Date.now() / 800) * 5;
        currentSpeed += (targetSpeed + jitter - currentSpeed) * 0.05;
        speedValue.textContent = Math.round(currentSpeed);
        const angle = -90 + (currentSpeed / 200) * 180;
        speedNeedle.style.transform = `rotate(${angle}deg)`;
        requestAnimationFrame(updateSpeed);
    }
    updateSpeed();

    // Journey button click — the full transition
    journeyBtn.addEventListener('click', () => {
        journeyBtn.style.pointerEvents = 'none';

        // 1. Speed up — needle jumps
        targetSpeed = 160;

        // 2. Fast wiper sweep
        wiperLeft.classList.add('wiping');
        wiperRight.classList.add('wiping');
        clearInterval(wiperInterval);

        // 3. Rain stops
        setTimeout(() => {
            rainContainer.style.transition = 'opacity 0.5s ease';
            rainContainer.style.opacity = '0';
        }, 300);

        // 4. Fog clears
        setTimeout(() => {
            fog.classList.add('clearing');
        }, 400);

        // 5. Content fades out
        setTimeout(() => {
            document.getElementById('journeyContent').style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            document.getElementById('journeyContent').style.opacity = '0';
            document.getElementById('journeyContent').style.transform = 'scale(0.95)';
        }, 500);

        // 6. Window frame appears
        setTimeout(() => {
            carWindow.classList.add('active');
        }, 800);

        // 7. Window rolls up (glass slides up)
        setTimeout(() => {
            carWindow.classList.add('rolling');
        }, 1200);

        // 8. Intro fades, portfolio revealed
        setTimeout(() => {
            journeyIntro.classList.add('hidden');
            document.body.style.overflow = '';
            nav.style.transition = 'opacity 0.6s ease';
            nav.style.opacity = '1';
            nav.style.pointerEvents = '';
        }, 2200);

        // 9. Cleanup
        setTimeout(() => {
            journeyIntro.style.display = 'none';
        }, 3200);
    });

    // === MAIN SITE FUNCTIONALITY ===

    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    navToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Cursor
    const cursorDot = document.getElementById('cursorDot');
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        document.addEventListener('mousemove', (e) => {
            cursorDot.style.left = e.clientX - 4 + 'px';
            cursorDot.style.top = e.clientY - 4 + 'px';
        });

        document.querySelectorAll('a, button, .project-card, .exp-item, .cert-card, .skill-category').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorDot.style.transform = 'scale(3)';
                cursorDot.style.opacity = '0.5';
            });
            el.addEventListener('mouseleave', () => {
                cursorDot.style.transform = 'scale(1)';
                cursorDot.style.opacity = '1';
            });
        });
    }

    // Scroll reveals
    const reveals = document.querySelectorAll(
        '.timeline-item, .exp-item, .project-card, .skill-category, ' +
        '.cert-card, .about-grid, .section-title, .section-label, ' +
        '.contact-content, .section-subtitle, .interests-section, ' +
        '.photo-accent-card, .about-cta'
    );

    reveals.forEach((el, i) => {
        el.classList.add('reveal');
        el.style.transitionDelay = (i % 4) * 0.1 + 's';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));

    // Stat counters
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsCounted = false;

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsCounted) {
                statsCounted = true;
                statNumbers.forEach(num => {
                    const target = parseInt(num.dataset.count);
                    let current = 0;
                    const step = Math.ceil(target / 20);
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        num.textContent = current;
                    }, 60);
                });
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.hero-stats').forEach(el => statsObserver.observe(el));

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // Active nav tracking
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section, .hero');

    const updateActiveNav = () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
});
