const hamburgerMenu = document.querySelector('.p-nav__hamburger');
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
});

$(".p-nav__hamburger").click(function(){
    $(this).toggleClass("open");
    $(".nav-menu").fadeToggle(200);
    $('.wrapper').toggleClass('close');
}
)