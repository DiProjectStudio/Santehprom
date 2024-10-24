document.addEventListener("DOMContentLoaded", () => {
    headerAction();
});

const navMenu = document.querySelector('.header__nav');
const navbarClose = document.getElementById('navbarClose');
const navbarJSWrapper = document.createElement('div');
navbarJSWrapper.setAttribute('id', 'navbarJSWrapper');
navbarJSWrapper.classList.add('navbar-js');

function headerAction() {
    const navbarToggler = document.getElementById("navbarToggler");
    navbarPrepare();
    navbarToggler.addEventListener("click", () => {
        navbarJSWrapper.classList.add('opened');
    });

    navbarClose.addEventListener('click', () => {
        navbarJSWrapper.classList.remove('opened');
    });

}

function navbarPrepare() {
    const headerLogo = document.querySelector('.header__logo');
    const headerContacts = document.querySelector('.header__contacts');


    if (navMenu && headerLogo && headerContacts) {
        document.getElementById('header').appendChild(navbarJSWrapper);
        navbarJSWrapper.appendChild(headerLogo.cloneNode(true));
        navbarJSWrapper.appendChild(navMenu.cloneNode(true));
        navbarJSWrapper.appendChild(headerContacts.cloneNode(true));
        navbarJSWrapper.appendChild(navbarClose);
    }
}