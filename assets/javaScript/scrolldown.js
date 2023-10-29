const btn = document.getElementById("p-mainScroll__btn");

//各要素(下記のp-information)のターゲットの位置を取得
var target = $(".p-information").offset().top;
//スクロール量を取得
// var scroll = $(window).scrollTop();
//ウィンドウの高さを取得
// var height = $(window).height();

// console.log(target)

btn.addEventListener("click", () => {
  window.scroll({
    // top: 570,
    top: target,
    behavior: "smooth"
  });
});
