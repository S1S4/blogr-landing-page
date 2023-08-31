const navbarIcon = document.querySelector('.navbar-icon');
const navProduct = document.querySelector('.desktop-options--product');
const navCompany = document.querySelector('.desktop-options--company');
const navConnect = document.querySelector('.desktop-options--connect');
const navSubProduct = document.querySelector('.desktop-product');
const navSubCompany = document.querySelector('.desktop-company');
const navSubConnect = document.querySelector('.desktop-connect');
const mobileMenu = document.querySelector('.navbar--mobile-menu');

navbarIcon.addEventListener('click', toggleMobileMenu);
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
}