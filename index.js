const navbarHamburger = document.querySelector('.icon-hamburger');
const navbarClose = document.querySelector('.icon-close');
const desktopNavProduct = document.querySelector('.desktop-options--product');
const desktopNavCompany = document.querySelector('.desktop-options--company');
const desktopNavConnect = document.querySelector('.desktop-options--connect');
const desktopNavSubProduct = document.querySelector('.desktop-subOption--product');
const desktopNavSubCompany = document.querySelector('.desktop-subOption--company');
const desktopNavSubConnect = document.querySelector('.desktop-subOption--connect');
const mobileNavProduct = document.querySelector('.mobile-options--product');
const mobileNavCompany = document.querySelector('.mobile-options--company');
const mobileNavConnect = document.querySelector('.mobile-options--connect');
const mobileNavSubProduct = document.querySelector('.mobile-subOption--product');
const mobileNavSubCompany = document.querySelector('.mobile-subOption--company');
const mobileNavSubConnect = document.querySelector('.mobile-subOption--connect');
const mobileMenu = document.querySelector('.navbar--mobile-menu');

navbarHamburger.addEventListener('click', toggleMobileMenu);
navbarClose.addEventListener('click', closeMobileMenu);
desktopNavProduct.addEventListener('click', toggleProduct);
desktopNavCompany.addEventListener('click', toggleCompany);
desktopNavConnect.addEventListener('click', toggleConnect);
mobileNavProduct.addEventListener('click', toggleProduct);
mobileNavCompany.addEventListener('click', toggleCompany);
mobileNavConnect.addEventListener('click', toggleConnect);

function toggleProduct() {
    desktopNavSubProduct.classList.toggle('inactive');
    mobileNavSubProduct.classList.toggle('inactive');

    desktopNavSubCompany.classList.add('inactive');
    mobileNavSubCompany.classList.add('inactive');

    desktopNavSubConnect.classList.add('inactive');
    mobileNavSubConnect.classList.add('inactive');
}
function toggleCompany() {
    desktopNavSubCompany.classList.toggle('inactive');
    mobileNavSubCompany.classList.toggle('inactive');

    desktopNavSubProduct.classList.add('inactive');
    mobileNavSubProduct.classList.add('inactive');

    desktopNavSubConnect.classList.add('inactive');
    mobileNavSubConnect.classList.add('inactive');
}
function toggleConnect() {
    desktopNavSubConnect.classList.toggle('inactive');
    mobileNavSubConnect.classList.toggle('inactive');

    desktopNavSubProduct.classList.add('inactive');
    mobileNavSubProduct.classList.add('inactive');

    desktopNavSubCompany.classList.add('inactive');
    mobileNavSubCompany.classList.add('inactive');
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    navbarClose.classList.toggle('inactive');
    navbarHamburger.classList.add('inactive');
}
function closeMobileMenu() {
    navbarHamburger.classList.toggle('inactive');
    navbarClose.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

// let test =  document.getElementById('mobile-menu');

// window.onclick = function(event) {
//     if (event.target == test) {
//         test.style.display = "none";
//     }
// };