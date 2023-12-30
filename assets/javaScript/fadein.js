
$(function(){
  $('.p-mainScroll').addClass('active');
  var targets = [".p-mainTitle",".p-information", ".p-service__title",".p-service__titleExplane",".p-service__contents",".p-introduce",".p-project"];
    var flags = [true, true, true, true, true, true, true];

  $(window).on('load scroll', function() {
    var scroll = $(window).scrollTop();
    var height = $(window).height();
    var minusPadding = scroll + height - 96;

    targets.forEach(function(target, index) {
      var targetPosition = $(target).offset().top;
      if (minusPadding > targetPosition && flags[index]) {

				$(target).addClass('active');
        flags[index] = false;
      }
    });
  });
});
