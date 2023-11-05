// 配列に各要素を格納して発火
$(function(){
  var targets = ["p-mainTitle","p-mainScroll",".p-information", ".p-service__title",".p-service__contents",".p-introduce",".p-project"];
    var flags = [true, true, true, true, true, true, true];
    //[true(.p-information), true(.p-service)];
    //発火させたい要素を増やすならその分のtrueも増やす

  $(window).on('load scroll', function() {
    //スクロール量を取得
    var scroll = $(window).scrollTop();
    //ウィンドウの高さを取得
    var height = $(window).height();
    // -96はpadding分
    var minusPadding = scroll + height - 96;

    targets.forEach(function(target, index) {
      // foreachで各要素ごとに
      // 引数内にあるindexは
      //1,$(this)は各クラス(.p-information、.p-serviceなど)
      //2,.offset()で1,のクラスの位置を取得する
      //3,.top     で2,要素の一番上を指定
      var targetPosition = $(this).offset().top;
      //ターゲット(特定の場所)までスクロールすると
      if (minusPadding > targetPosition && flags[index]) {
        // console.log("ふわっと出現");

				//activeクラスを付与してフェードインする
				$(this).addClass('active');
        // 1回出現したら止める
        flags[index] = false;
      }
    });
  });
});
