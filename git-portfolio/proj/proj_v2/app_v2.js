const h1 = <h1>Hello world</h1>;

const menu = document.querySelector('#mobile-menu')
const menulinks = document.querySelector('.nav-menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

})