document.addEventListener("DOMContentLoaded", () => {

});
const navMenu = document.getElementById("navMenu");
function headerAction() {
    const navbarToggler = document.getElementById("navbarToggler");
    navbarPrepare();
    navbarToggler.addEventListener("click", () => {

    });
}

function navbarPrepare() {
    const headerLogo = document.querySelector('.header__logo');
    const headerContacts = document.querySelector('.header__contacts');

    if (navMenu && headerLogo && headerContacts) {
        navMenu.insertBefore(headerLogo.cloneNode(true), navMenu.firstChild);
        navMenu.appendChild(headerContacts.cloneNode(true));
    }
}