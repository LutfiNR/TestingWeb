const fiteHeadline = document.getElementById("fite-headline");
const faHeadline = document.getElementById("fa-headline");
const aboutUsContent = document.getElementById("aboutus-content");
const decorAboutUs = document.getElementById("decor-aboutus");

window.addEventListener('scroll', () => {
    let { scrollY } = window;

    fiteHeadline.style.transform = 'translateX(' + 0.9 * scrollY + 'px)';
    faHeadline.style.transform = 'translateX(' + -0.9 * scrollY + 'px)';
    aboutUsContent.classList.add("animate__animated", "animate__bounceInLeft");
    decorAboutUs.classList.add("animate__animated", "animate__slideInDown");

});



let imgPlayer = document.querySelectorAll("#img-top-player>*");

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

