// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("open");

        const icon = menuToggle.querySelector("i");
        const isOpen = nav.classList.contains("open");

        if (icon) {
            icon.classList.toggle("fa-bars", !isOpen);
            icon.classList.toggle("fa-xmark", isOpen);
        }

        menuToggle.setAttribute("aria-expanded", String(isOpen));

    });

}


// CLOSE MENU AFTER CLICK

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (!nav || !menuToggle) return;

        nav.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        if (icon) {
            icon.classList.replace("fa-xmark", "fa-bars");
        }

        menuToggle.setAttribute("aria-expanded", "false");

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

    if (!changingText) return;

    changingText.style.animation = "none";

    void changingText.offsetWidth;

    wordIndex = (wordIndex + 1) % words.length;

    changingText.textContent = words[wordIndex];

    changingText.style.animation = "textReveal .5s ease";

}

if (changingText) {
    setInterval(changeWord, 2400);
}


// CURRENT YEAR

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".section-heading, .about-grid, .projects-heading, .project-card, .experience-heading, .experience-card, .contact-content, .contact-socials"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {

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

} else {

    revealElements.forEach(element => {
        element.classList.add("visible");
    });

}


// ACTIVE NAVIGATION

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav a");

if ("IntersectionObserver" in window) {

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

}


// REMOVE LOADER AFTER PAGE LOAD

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.display = "none";

        }, 1700);

    }

});
