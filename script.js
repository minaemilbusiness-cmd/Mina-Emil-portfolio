
// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");

    const icon = menuToggle.querySelector("i");

    if (nav.classList.contains("open")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
});


// CLOSE MENU AFTER CLICK

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");

        const icon = menuToggle.querySelector("i");
        icon.classList.replace("fa-xmark", "fa-bars");
    });
});


// AUTOMATIC CHANGING TEXT

const changingText = document.getElementById("changingText");

const words = [
    "Technology.",
    "Engineering.",
    "Creativity.",
    "Innovation.",
    "Knowledge.",
    "Exploration.",
    "Problem Solving."
];

let wordIndex = 0;

function changeWord() {
    changingText.style.animation = "none";

    // Restart animation
    void changingText.offsetWidth;

    wordIndex = (wordIndex + 1) % words.length;

    changingText.textContent = words[wordIndex];
    changingText.style.animation = "textReveal .5s ease";
}

setInterval(changeWord, 2400);


// CURRENT YEAR

document.getElementById("year").textContent = new Date().getFullYear();


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".section-heading, .about-grid, .projects-heading, .project-card, .experience-heading, .experience-card, .contact-content, .contact-socials"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});


// ACTIVE NAVIGATION

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav a");

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === "#" + entry.target.id
                );
            });
        }
    });
}, {
    rootMargin: "-35% 0px -55% 0px"
});

sections.forEach(section => {
    sectionObserver.observe(section);
});


// REMOVE LOADER AFTER PAGE LOAD

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.display = "none";
    }, 1700);
});
