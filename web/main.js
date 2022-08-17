window.addEventListener("scroll", textFadeIn);
window.addEventListener("scroll", highlightText);
window.addEventListener("scroll", eyebrowDots);
window.addEventListener("load", highlightHero);

// enable side timeline
sideTimeline();

// check the scroll position on page load:
textFadeIn(); 
highlightText(); 
eyebrowDots();

function sideTimeline() {
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