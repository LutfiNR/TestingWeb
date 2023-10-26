const fiteHeadline = document.getElementById("fite-headline");
const faHeadline = document.getElementById("fa-headline");
const aboutUsContent = document.getElementById("aboutus-content");
const decorAboutUsTop = document.getElementById("decor-aboutus-top");
const decorAboutUsLeft = document.getElementById("decor-aboutus-left");
const historyContent = document.getElementById("history-content");
const imgPlayer = document.querySelectorAll("#img-top-player>*");
const menu = document.getElementById("menu");

function openMenu() {
    menu.classList.add("flex","h-screen");
    menu.classList.remove("hidden","h-0");
}
function closeMenu() {
    menu.classList.remove("flex","h-screen");
    menu.classList.add("hidden","h-0");
}

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight) {
        return true;
    }
}

window.addEventListener('scroll', () => {
    let { scrollY } = window;

    fiteHeadline.style.transform = 'translateX(' + 0.9 * scrollY + 'px)';
    faHeadline.style.transform = 'translateX(' + -0.9 * scrollY + 'px)';

    if (isInViewport(aboutUsContent)) {
        decorAboutUsTop.classList.add("animate__animated", "animate__slideInDown");
        decorAboutUsLeft.classList.add("animate__animated", "animate__slideInLeft");
        aboutUsContent.classList.add("animate__animated", "animate__bounceInLeft");
    }
    if (isInViewport(historyContent)) {
        historyContent.children[0].classList.add("animate__animated", "animate__slideInLeft")
        setTimeout(() => {
            historyContent.children[3].classList.add("animate__animated", "animate__slideInLeft")
        }, 200);
        setTimeout(() => {
            historyContent.children[6].classList.add("animate__animated", "animate__slideInLeft")
        }, 400);
    }
});

function showImg(nameId) {
    for (let i = 0; i < imgPlayer.length; i++) {
        if (nameId == imgPlayer[i].id) {
            imgPlayer[i].classList.add("animate__animated");
            imgPlayer[i].classList.add("animate__slideInUp");
            imgPlayer[i].classList.remove("hidden");

        }
    }
}
function hideImg(nameId) {
    for (let i = 0; i < imgPlayer.length; i++) {
        if (nameId == imgPlayer[i].id) {
            imgPlayer[i].classList.add("animate__animated");
            imgPlayer[i].classList.add("hidden");
        }
    }
}

