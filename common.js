document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Menu Toggle
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (burgerMenu && navMenu) {
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('open');
            navMenu.classList.toggle('open');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerMenu.classList.remove('open');
                navMenu.classList.remove('open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !burgerMenu.contains(e.target)) {
                burgerMenu.classList.remove('open');
                navMenu.classList.remove('open');
            }
        });
    }

    // 2. Header Scroll Effect
    const header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 3. Set Active Navigation Item
    const currentPath = window.location.pathname;
    const filename = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    
    const navLinks = document.querySelectorAll('.nav-link');
    let matched = false;

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Check if the current filename equals or matches the href
        if (href === filename || (filename === '' && href === 'index.html')) {
            link.classList.add('active');
            matched = true;
        } else {
            link.classList.remove('active');
        }
    });

    // Fallback if no exact match (e.g. sub-path/development server roots)
    if (!matched && navLinks.length > 0) {
        if (filename.includes('candidate') || filename.includes('profile')) {
            const candLink = Array.from(navLinks).find(l => l.getAttribute('href').includes('candidate'));
            if (candLink) candLink.classList.add('active');
        } else if (filename.includes('pledge')) {
            const pledgeLink = Array.from(navLinks).find(l => l.getAttribute('href').includes('pledges'));
            if (pledgeLink) pledgeLink.classList.add('active');
        } else if (filename.includes('innovation') || filename.includes('reform')) {
            const innovLink = Array.from(navLinks).find(l => l.getAttribute('href').includes('innovation'));
            if (innovLink) innovLink.classList.add('active');
        } else if (filename.includes('branch')) {
            const branchLink = Array.from(navLinks).find(l => l.getAttribute('href').includes('branches'));
            if (branchLink) branchLink.classList.add('active');
        } else if (filename.includes('leaflet')) {
            const leafletLink = Array.from(navLinks).find(l => l.getAttribute('href').includes('leaflet'));
            if (leafletLink) leafletLink.classList.add('active');
        } else {
            navLinks[0].classList.add('active');
        }
    }
});
