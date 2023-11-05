// ３本線→×
const hamburgerMenu = document.querySelector('.p-nav__hamburger');
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
});

// nav表示・非表示
$(".p-nav__hamburger").click(function(){
    $(this).toggleClass("open");
    $(".nav-menu").fadeToggle(200);
    // $(".p-headerTop").fadeToggle(200);
})