const elSiteHeaderCartLink = document.querySelector('.js-site-cart-link');
const elSiteHeaderCartModal = document.querySelector('.js-site-header-cart-modal');

if(elSiteHeaderCartLink){
    elSiteHeaderCartLink.addEventListener('click', (evt) => {
        evt.preventDefault();

        elSiteHeaderCartModal.classList.toggle('site-header__cart-modal--open')
    })
}