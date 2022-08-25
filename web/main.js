window.addEventListener("scroll", textFadeIn);
window.addEventListener("scroll", socialVisibility);
window.addEventListener("scroll", highlightText);
window.addEventListener("scroll", eyebrowDots);
window.addEventListener("load", highlightHero);


// enable side timeline
sideTimeline();

// check the scroll position on page load:
textFadeIn(); 
highlightText(); 
eyebrowDots();
socialVisibility();

function socialVisibility() {
    const widescreenSocialContainer = document.querySelector('.social-container.widescreen');
    const timeline = document.querySelector('.timeline');
    const photoCredits = document.querySelector('.photo-credits-text');

    const windowHeight = window.innerHeight;
    const buffer = 100; // px

    const timelineTop = timeline.getBoundingClientRect().top;
    const photoCreditsTop = photoCredits.getBoundingClientRect().top;
    
    function hideSocial() {
        widescreenSocialContainer.classList.remove("visible");
        widescreenSocialContainer.classList.add("hidden");
    }

    function showSocial() {
        widescreenSocialContainer.classList.remove("hidden");
        widescreenSocialContainer.classList.add("visible");
    }

    // hide social container above timeline
    if (timelineTop > windowHeight) {
        hideSocial();
    }

    // show social container at timeline
    if (timelineTop < windowHeight - buffer) {
        showSocial();
    } 

    // hide social container at photo credits
    if (photoCreditsTop < windowHeight - buffer) {
        hideSocial();
    }
}

function setSocialContainerHeight() {
    // get page height
    const body = document.body;
    const html = document.documentElement;
    const pageHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

    // set .social-container height to .94% of page height
    const socialContainer = document.querySelector('.social-container');
    socialContainer.style.height = (pageHeight * .94) + 'px';
}

function sideTimeline() {
    // get page height
    const body = document.body;
    const html = document.documentElement;
    const pageHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

    // set .sidebar-timeline height to .94% of page height
    const timeline = document.querySelector('.sidebar-timeline');
    timeline.style.height = (pageHeight * .94) + 'px';

    const blocks = document.querySelectorAll('[data-year]');
    const sideTimelineYears = document.querySelectorAll('nav li');
    const yearsArray = Array.from(sideTimelineYears);

    function deactivateYears() {
        yearsArray.forEach(yearElement => {
            yearElement.classList.remove('active');
        })
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const year = entry.target.dataset.year;
                const sideTimelineYear = yearsArray.find(yearElement => yearElement.className.includes(year));

                if (sideTimelineYear) {
                    deactivateYears();
                    sideTimelineYear.classList.add('active');
                }
            }
        })
    },
        {
            threshold: .25,
        })

    blocks.forEach(block => {
        observer.observe(block);
    })
}

function textFadeIn() {
    const reveals = document.querySelectorAll(".reveal");
    const elementVisible = 150;

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }

        if (elementTop > windowHeight) {
            reveals[i].classList.remove("active");
        }
    }

}

function highlightHero() {
    const heroHighlights = document.querySelectorAll(".hero-highlight");
    for (let i = 0; i < heroHighlights.length; i++) {
        heroHighlights[i].classList.add("highlight-now");
    }
}

function highlightText() {
    const highlights = document.querySelectorAll(".highlight");
    const elementVisible = 150;

    for (let i = 0; i < highlights.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = highlights[i].getBoundingClientRect().top;

        if (elementTop < windowHeight - elementVisible) {
            highlights[i].classList.add("highlight-now");
        } 
        
        if (elementTop > windowHeight) {
            highlights[i].classList.remove("highlight-now");
        }
    }
}

function eyebrowDots() {
    const dots = document.querySelectorAll(".eyebrow-dot");
    const elementVisible = 150;

    for (let i = 0; i < dots.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = dots[i].getBoundingClientRect().top;

        if (elementTop < windowHeight - elementVisible) {
            let dot = dots[i];
            dot.classList.add("connect");
        } 
    }
}