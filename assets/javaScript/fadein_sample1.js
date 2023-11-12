参考URL
https://recooord.org/fadein-window-scroll/

// HTML
// <ul>
//   <li class="animation"><img src="https://unsplash.it/300/200" alt=""></li>
//   <li class="animation"><img src="https://unsplash.it/300/200" alt=""></li>
//   <li class="animation"><img src="https://unsplash.it/300/200" alt=""></li>
//   <li class="animation"><img src="https://unsplash.it/300/200" alt=""></li>
//   <li class="animation"><img src="https://unsplash.it/300/200" alt=""></li>
//   <li class="animation"><img src="https://unsplash.it/300/200" alt=""></li>
// </ul>

// 

/*アニメーション要素のスタイル*/
// .animation{
// 	opacity: 0;
// 	visibility: hidden;
// 	transition: 1s;
// 	transform: translateY(30px);

	//今回の処理はしたから上にふわっとさせる
  //translateY(30px);にしている理由は、下記の.activeが付与された時点で正しい位置に来るようにしないと、正しい位置からさらに上にふわっとなるようになってしまうから
// }

/*アニメーション要素までスクロールした時のスタイル*/
// .active{
// 	opacity: 1;
// 	visibility: visible;
// 	transform: translateY(0);
// }


$(function(){
	$(window).on('load scroll',function (){
		$('.animation').each(function(){
      //eachは各要素に＝今回はanimationクラスを指定

			//各要素(下記のthis)のターゲットの位置を取得
			var target = $(this).offset().top;
      //1,$(this)  は各クラス(.p-information、.p-serviceなど)
      //2,.offset()で1,のクラスの位置を取得する
      //3,.top     で2,要素の一番上を指定

			//スクロール量を取得
			var scroll = $(window).scrollTop();
      //$(window)    でサイト全体を指定
      //.scrollTop();でスクロール量を取得

			//ウィンドウの高さを取得
			var height = $(window).height();
      //$(window) でサイト全体を指定
      //.height();でウィンドウの高さを取得

			//ターゲット(特定の場所)までスクロールすると
			if (scroll > target - height){

				//activeクラスを付与してフェードインする
				$(this).addClass('active');
			}
		});
	});
});