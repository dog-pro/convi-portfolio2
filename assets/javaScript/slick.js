$(function(){
  function sliderSetting(){

      var width = $(window).width();

      if(width <= 750){
          $('.p-information__list').not('.slick-initialized').slick({
            dots: true,/*下部の何枚目かを表すドット*/
            infinite: true,/*スライドのループ　最後のスライドの次に１枚目に戻すか(最後→１枚目に戻る)*/
            slidesToShow: 3,/*１度に表示するスライド数*/
            slidesToScroll: 1/*１回で何枚分スクロールさせるか*/
          });
      } else {
          $('.p-information__list.slick-initialized').slick('unslick');
      }
  }

  sliderSetting();

  $(window).resize( function() {
      sliderSetting();
  });
});

// SPの時のみ表示　参考サイト
// https://www.genius-web.co.jp/blog/web-programming/how-to-use-slick-js-to-apply-sliders-on-a-smartphone-to-the-rest-of-the-picture-on-a-pc.html