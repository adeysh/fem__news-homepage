const body = document.querySelector("body");
const btnOpen = document.getElementById("nav-button-open");
const btnClose = document.getElementById("nav-button-close");
const navContent = document.querySelector(".nav__content");
const navOverlay = document.querySelector(".nav__overlay");
const media = window.matchMedia('( width < 69.375em )');

function openMobileMenu() {
    console.log("btn open");
    btnOpen.setAttribute("aria-expanded", "true");
    body.classList.add("no-scroll");
}

function closeMobileMenu() {
    console.log("btn close");
    btnOpen.setAttribute("aria-expanded", "false");
    body.classList.remove("no-scroll");
}

function setupNav(e) {
    if (e.matches) {
        console.log("is mobile");
        setTimeout(() => {
            navContent.style.display = "block";
            navOverlay.style.display = "block";
        }, 500);
    } else {
        console.log("is desktop");
        navContent.style.display = "";
    }
}
setupNav(media);

btnOpen.addEventListener("click", openMobileMenu);

btnClose.addEventListener("click", closeMobileMenu);