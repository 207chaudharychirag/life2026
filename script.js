document.addEventListener('DOMContentLoaded', () => {
    const journeyIntro = document.getElementById('journeyIntro');
    const journeyBtn = document.getElementById('journeyBtn');
    const carWindow = document.getElementById('carWindow');
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    document.body.style.overflow = 'hidden';
    nav.style.opacity = '0';
    nav.style.pointerEvents = 'none';

    journeyBtn.addEventListener('click', () => {
        carWindow.classList.add('active');

        setTimeout(() => {
            carWindow.classList.add('rolling');
        }, 400);

        setTimeout(() => {
            journeyIntro.classList.add('hidden');
            document.body.style.overflow = '';
            nav.style.opacity = '1';
            nav.style.pointerEvents = '';
            nav.style.transition = 'opacity 0.5s ease';
        }, 1600);

        setTimeout(() => {
            journeyIntro.style.display = 'none';
        }, 2500);
    });

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
