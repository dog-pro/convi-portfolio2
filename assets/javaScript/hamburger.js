const hamburgerMenu = document.querySelector('.p-nav__hamburger');
// const hamburgerBody = document.querySelector('.p-nav__hamburger');
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    // hamburgerBody.classList.toggle('active');
});