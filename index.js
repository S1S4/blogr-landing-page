const navbarIcon = document.querySelector('.navbar-icon');
const navProduct = document.querySelector('.navbar-options--product');
const navCompany = document.querySelector('.navbar-options--company');
const navConnect = document.querySelector('.navbar-options--connect');
const navSubProduct = document.querySelector('.subOptions-product');
const navSubCompany = document.querySelector('.subOptions-company');
const navSubConnect = document.querySelector('.subOptions-connect');
const mobileMenu = document.querySelector('.navbar--mobile-menu');

navbarIcon.addEventListener('click', toggleMobileMenu);
navProduct.addEventListener('click', toggleProduct);
navCompany.addEventListener('click', toggleCompany);
navConnect.addEventListener('click', toggleConnect);

function toggleProduct() {
    navSubProduct.classList.toggle('inactive');
}
function toggleCompany() {
    navSubCompany.classList.toggle('inactive');
}
function toggleConnect() {
    navSubConnect.classList.toggle('inactive');
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive')
}