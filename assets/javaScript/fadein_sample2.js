// 柴田さん添削

// １つずつ要素の位置を取得
$(function(){
  var bbb01 = true;
  var bbb02 = true;
	$(window).on('load scroll',function (){
			//ターゲットの位置を取得
			var target01 = $(".p-information").offset().top;
			var target02 = $(".p-service").offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			var aaa = scroll+height-96;
      // -96はpadding分

      if (aaa > target01 && bbb01){
        console.log("ふわっと出現");
        //何回もリピートで発火させるのではなくふわっとさせるのを1回で終わらせるため
        bbb01 = false;
			}

      if (aaa > target02 &&
         bbb02){
        console.log("ふわっと出現");
        //何回もリピートで発火させるのではなくふわっとさせるのを1回で終わらせるため
        bbb02 = false;
			}
	});
});

// 配列に各要素を格納して発火
$(function(){
  var targets = [".p-information", ".p-service"];
    var flags = [true, true];
    //[true(.p-information), true(.p-service)];
    //発火させたい要素を増やすならその分のtrueも増やす

  $(window).on('load scroll', function() {
    var scroll = $(window).scrollTop();
    var height = $(window).height();
    var aaa = scroll + height - 96;
    // -96はpadding分

    targets.forEach(function(target, index) {
      // foreachで各要素ごとに
      // 引数内にあるindexは
      var targetPosition = $(target).offset().top;
      if (aaa > targetPosition && flags[index]) {
        console.log("ふわっと出現");
        flags[index] = false;
      }
    });
  });
});
