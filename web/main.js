window.addEventListener("scroll", textFadeIn);
window.addEventListener("scroll", highlightText);

textFadeIn(); // check the scroll position on page load:
highlightText();

sideTimeline();

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
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }

}

function highlightText() {
    const highlights = document.querySelectorAll(".hero-highlight, .highlight");

    for (let i = 0; i < highlights.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = highlights[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            highlights[i].classList.add("highlight-now");
        } 
        
        if (elementTop > windowHeight) {
            highlights[i].classList.remove("highlight-now");
        }
    }
}
