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
