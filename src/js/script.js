const body = document.querySelector("body");
const main = document.querySelector("main");
const btnOpen = document.getElementById("nav-button-open");
const btnClose = document.getElementById("nav-button-close");
const navContent = document.querySelector(".nav__content");
const navOverlay = document.querySelector(".nav__overlay");
const media = window.matchMedia('( width < 69.375em )');

function openMobileMenu() {
    btnOpen.setAttribute("aria-expanded", "true");
    body.classList.add("no-scroll");
    navContent.removeAttribute("inert");
    main.setAttribute("inert", "");
    btnClose.focus();
}

function closeMobileMenu() {
    btnOpen.setAttribute("aria-expanded", "false");
    body.classList.remove("no-scroll");
    navContent.setAttribute("inert", "");
    main.removeAttribute("inert");
    btnOpen.focus();
}

function setupNav(e) {
    if (e.matches) {
        navContent.setAttribute("inert", "");
        setTimeout(() => {
            navContent.style.display = "block";
            navOverlay.style.display = "block";
        }, 500);
    } else {
        navContent.removeAttribute("inert");
        navContent.style.display = "";
        main.removeAttribute("inert");
    }
}
setupNav(media);
media.addEventListener("change", setupNav);

btnOpen.addEventListener("click", openMobileMenu);

btnClose.addEventListener("click", closeMobileMenu);
