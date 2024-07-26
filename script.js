document.addEventListener('scroll', function() {
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 0.1; // Adjust this factor to control the trigger point
    const pItems = document.querySelectorAll('.p-item-wrapper');

    pItems.forEach((item, index) => {
        let prevItemCenter = 0;

        if (index > 0 ) {
            const prevItem = pItems[index - 1];
            prevItemCenter = prevItem.getBoundingClientRect().top + prevItem.offsetHeight / 2 + window.scrollY;
        }
        if (index == pItems.length - 1) {
            return;
        }

        const itemTop = item.getBoundingClientRect().top;
        const itemOffset = itemTop + window.scrollY;
        const scrollPosition = window.scrollY;

        // Check if the scroll position is past the center of the previous item or the first item
        if (scrollPosition + triggerPoint > itemOffset && (index === 0 || scrollPosition > prevItemCenter)) {
            // Calculate the parallax effect
            let parallaxOffset = (scrollPosition + triggerPoint - itemOffset) * 0.9;

            // Apply the parallax effect upwards
            item.style.transform = `translateY(${parallaxOffset}px)`;
        } else {
            // Reset the transform if the scroll position is before the item
            item.style.transform = 'translateY(0)';
        }
    });
});

const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');
  
portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
    console.log(portfolioItem.childNodes[5].classList)
    portfolioItem.childNodes[1].classList.add('img-darken');
    portfolioItem.childNodes[5].classList.add('fade-out');
    });

    portfolioItem.addEventListener('mouseout', () => {
    console.log(portfolioItem.childNodes[5].classList)
    portfolioItem.childNodes[1].classList.remove('img-darken');
    portfolioItem.childNodes[5].classList.remove('fade-out');
    });
});

// when homeBtn is clicked, scroll to the top of the page
document.getElementById('homeBtn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// when home is centered, set the class to active-nav-link
document.addEventListener('scroll', function() {
    const homeSection = document.getElementById('home');
    const homeSectionTop = homeSection.getBoundingClientRect().top + window.scrollY;
    const homeSectionBottom = homeSectionTop + homeSection.offsetHeight;

    const homeBtn = document.getElementById('homeBtn');

    if (window.scrollY >= homeSectionTop && window.scrollY <= homeSectionBottom - 200) {
        homeBtn.classList.add('active-nav-link');
    } else {
        homeBtn.classList.remove('active-nav-link');
    }
});

// when projectsBtn is clicked, scroll to the projects section
document.getElementById('projectsBtn').addEventListener('click', function() {
    const projectsSection = document.getElementById('projects');
    const projectsSectionTop = projectsSection.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: projectsSectionTop - 200,
        behavior: 'smooth'
    });
});

// when projects is centered, set the class to active-nav-link
document.addEventListener('scroll', function() {
    const projectsSection = document.getElementById('projects');
    const projectsSectionTop = projectsSection.getBoundingClientRect().top + window.scrollY;
    const projectsSectionBottom = projectsSectionTop + projectsSection.offsetHeight;

    const projectsBtn = document.getElementById('projectsBtn');

    if (window.scrollY >= projectsSectionTop - 200 && window.scrollY <= projectsSectionBottom - 200) {
        projectsBtn.classList.add('active-nav-link');
    } else {
        projectsBtn.classList.remove('active-nav-link');
    }
});

// when aboutBtn is clicked, scroll to the about section
document.getElementById('aboutBtn').addEventListener('click', function() {
    const aboutSection = document.getElementById('about');
    const aboutSectionTop = aboutSection.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: aboutSectionTop - 200,
        behavior: 'smooth'
    });
});

// when about is centered, set the class to active-nav-link
document.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('about');
    const aboutSectionTop = aboutSection.getBoundingClientRect().top + window.scrollY;
    const aboutSectionBottom = aboutSectionTop + aboutSection.offsetHeight;

    const aboutBtn = document.getElementById('aboutBtn');

    if (window.scrollY >= aboutSectionTop - 200 && window.scrollY < aboutSectionBottom) {
        aboutBtn.classList.add('active-nav-link');
    } else {
        aboutBtn.classList.remove('active-nav-link');
    }
});