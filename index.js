const navbarHamburger = document.querySelector('.icon-hamburger');
const navbarClose = document.querySelector('.icon-close');
const navProduct = document.querySelector('.desktop-options--product');
const navCompany = document.querySelector('.desktop-options--company');
const navConnect = document.querySelector('.desktop-options--connect');
const navSubProduct = document.querySelector('.subOption-product');
const navSubCompany = document.querySelector('.subOption-company');
const navSubConnect = document.querySelector('.subOption-connect');
const mobileMenu = document.querySelector('.navbar--mobile-menu');

navbarHamburger.addEventListener('click', toggleMobileMenu);
navbarClose.addEventListener('click', closeMobileMenu);
navProduct.addEventListener('click', toggleProduct);
navCompany.addEventListener('click', toggleCompany);
navConnect.addEventListener('click', toggleConnect);

function toggleProduct() {
    navSubProduct.classList.toggle('inactive');
    navSubCompany.classList.add('inactive');
    navSubConnect.classList.add('inactive');
}
function toggleCompany() {
    navSubCompany.classList.toggle('inactive');
    navSubProduct.classList.add('inactive');
    navSubConnect.classList.add('inactive');
}
function toggleConnect() {
    navSubConnect.classList.toggle('inactive');
    navSubProduct.classList.add('inactive');
    navSubCompany.classList.add('inactive');
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

// window.addEventListener("click", function(event) {
//     if (event.target == mobileMenu) {
//         mobileMenu.style.display = "none";
//         mobileMenu.classList.add('inactive');
//     }
// });