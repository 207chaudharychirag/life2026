document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');

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

    const reveals = document.querySelectorAll(
        '.timeline-item, .exp-card, .project-card, .skill-category, ' +
        '.cert-card, .about-grid, .section-title, .section-label, ' +
        '.contact-content, .section-subtitle'
    );

    reveals.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => observer.observe(el));

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

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 100;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = 'var(--blue)';
            }
        });
    });
});
