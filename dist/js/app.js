const navbar = document.getElementById("navbar");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.getElementsByClassName("navbutton");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
        for (i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.add("open");
        }
    } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
        for (i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove("open");
        }
    }
})

const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

// Debouncer

var latestKnownScrollY = 0,
    ticking = false;

function onScroll() {
    latestKnownScrollY = window.scrollY;
    requestTick();
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(update);
    }
    ticking = true;
}

// Update

function update() {
    ticking = false;

    let currentScrollY = latestKnownScrollY;

    if (currentScrollY > (window.innerHeight - 5 * rem)) {
        navbar.style.minHeight = "5rem";
    } else {
        navbar.style.minHeight = "10rem";
    }
}

window.addEventListener("scroll", onScroll, false);