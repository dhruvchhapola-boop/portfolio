/*==========================================
            PRELOADER
==========================================*/

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";
        }, 700);
    }
});


/*==========================================
            STICKY HEADER
==========================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }

});


/*==========================================
            MOBILE MENU
==========================================*/

const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector(".menu-toggle");

if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

}

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});


/*==========================================
        ACTIVE NAVIGATION
==========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*==========================================
        SCROLL TO TOP
==========================================*/

const scrollTopBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});


/*==========================================
            CUSTOM CURSOR
==========================================*/

const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

if (cursor && dot) {

    document.addEventListener("mousemove", e => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

        dot.style.left = e.clientX + "px";
        dot.style.top = e.clientY + "px";

    });

    document.querySelectorAll("a, button").forEach(item => {

        item.addEventListener("mouseenter", () => {

            cursor.style.transform =
                "translate(-50%,-50%) scale(1.6)";

        });

        item.addEventListener("mouseleave", () => {

            cursor.style.transform =
                "translate(-50%,-50%) scale(1)";

        });

    });

}


/*==========================================
        SCROLL REVEAL ANIMATION
==========================================*/

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .contact-card, .timeline-item, .experience-card"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(60px)";
    element.style.transition = ".8s ease";

    observer.observe(element);

});


/*==========================================
        SMOOTH ANCHOR SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


/*==========================================
        CURRENT YEAR (OPTIONAL)
==========================================*/

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


console.log("Portfolio Loaded Successfully 🚀");