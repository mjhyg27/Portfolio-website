


let carousels = document.querySelectorAll('.carousel');


carousels.forEach( carousel => {

    let slides = carousel.querySelectorAll('li');
    let list = carousel.querySelector('ul')
    let slideWidth = 1000; // auto-read width
    let position = 0;
    let dotIndex;
    let dotButtons = carousel.querySelectorAll('.dot-selector');
    
    carousel.querySelector('.prev').onclick = function() {
        position += slideWidth;
        position = Math.min(position, 0);
        dotIndex = Math.abs(position / slideWidth);
        list.style.transform = `translateX(${position}px)`;

        let dots = event.target.parentElement.querySelectorAll('.dot-selector')
        dots.forEach((dot) => dot.classList.remove('dot-clicked'));
        dots[dotIndex].classList.add('dot-clicked');
    };
    
    carousel.querySelector('.next').onclick = function() {
        position -= slideWidth;
        position = Math.max(position, -slideWidth * (slides.length - 1));
        dotIndex = Math.abs(position / slideWidth);
        list.style.transform = `translateX(${position}px)`;
        let dots = event.target.parentElement.querySelectorAll('.dot-selector')
        dots.forEach((dot) => dot.classList.remove('dot-clicked'));
        dots[dotIndex].classList.add('dot-clicked');
    };

    dotButtons.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            let clickedDots = dot.parentElement.querySelectorAll('.dot-clicked')
            clickedDots.forEach((clicked) => clicked.classList.remove('dot-clicked'));
            list.style.transform = `translateX(-${slideWidth * index}px)`;
            dot.classList.add('dot-clicked');
        });
    });
});


let optionsExperience = {
    root: null,
    rootMargin: '0px',
    scrollMargin: '0px',
    threshold: [0.3, 0.7, 1]
}

let experienceObserver = new IntersectionObserver(experienceAnimation, optionsExperience);

function experienceAnimation(entries, observer)  {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('animatedJob');
        } else {
            entry.target.classList.remove('animatedJob');
        };
    });

};

let jobCollection = document.querySelectorAll('.job');

jobCollection.forEach(job => {
    experienceObserver.observe(job);
    
});

let optionsProjects = {
    root: null,
    rootMargin: '0px',
    scrollMargin: '0px',
    threshold: [0.3, 0.7, 1]
}

let projectsObserver = new IntersectionObserver(projectsAnimation, optionsProjects);

function projectsAnimation(entries, observer)  {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;  
        } else {
            entry.target.style.opacity = 0;   
        };
    });

};

// let projectsCollection = document.querySelectorAll('.job');
let projectsCollection = document.getElementById('projects').children;

for (let project of projectsCollection) {
    projectsObserver.observe(project);
}
    

