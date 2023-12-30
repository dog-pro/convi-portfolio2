const btn = document.getElementById("p-mainScroll__btn");

var target = $(".p-information").offset().top;

btn.addEventListener("click", () => {
  window.scroll({
    top: target,
    behavior: "smooth"
  });
});
