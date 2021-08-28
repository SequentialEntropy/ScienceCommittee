navbar = document.getElementById("navbar");

const rem = parseFloat(getComputedStyle(document.documentElement).fontSize)

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