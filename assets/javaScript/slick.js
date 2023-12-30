$(function(){
  function sliderSetting(){

      var width = $(window).width();

      if(width <= 750){
          $('.p-information__list').not('.slick-initialized').slick({
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1
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
