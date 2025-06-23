
const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar__menu');


if (mobileMenu && navbarMenu) {
    
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('is-active');
        navbarMenu.classList.toggle('active');
    });
} else {
    console.error('Elementen niet gevonden: mobileMenu of navbarMenu');
}