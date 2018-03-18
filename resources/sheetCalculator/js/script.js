/*

Style   : MobApp Script JS
Version : 1.0
Author  : Surjith S M
URI	 : https://surjithctly.in/

Copyright © All rights Reserved 

*/

$(function() {
	"use strict";

	/*-----------------------------------
	 * FIXED  MENU - HEADER
	 *-----------------------------------*/
	function menuscroll() {
		var $navmenu = $('.nav-menu');
		if ($(window).scrollTop() > 50) {
			$navmenu.addClass('is-scrolling');
		} else {
			$navmenu.removeClass("is-scrolling");
		}
	}
	menuscroll();
	$(window).on('scroll', function() {
		menuscroll();
	});
	/*-----------------------------------
	 * NAVBAR CLOSE ON CLICK
	 *-----------------------------------*/

	$('.navbar-nav > li:not(.dropdown) > a').on('click', function() {
		$('.navbar-collapse').collapse('hide');
	});
	/* 
	 * NAVBAR TOGGLE BG
	 *-----------------*/
	var siteNav = $('#navbar');
	siteNav.on('show.bs.collapse', function(e) {
		$(this).parents('.nav-menu').addClass('menu-is-open');
	})
	siteNav.on('hide.bs.collapse', function(e) {
		$(this).parents('.nav-menu').removeClass('menu-is-open');
	})

	/*-----------------------------------
	 * ONE PAGE SCROLLING
	 *-----------------------------------*/
	// Select all links with hashes
	$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="tab"]').on('click', function(event) {
		// On-page links
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function() {
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) { // Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
				});
			}
		}
	});
	/*-----------------------------------
	 * OWL CAROUSEL
	 *-----------------------------------*/
	function carousel() {
		var $testimonialsDiv = $('.testimonials');
		if ($testimonialsDiv.length && $.fn.owlCarousel) {
			$testimonialsDiv.owlCarousel({
				items: 1,
				nav: true,
				dots: false,
				navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>']
			});
		}

		var $galleryDiv = $('.img-gallery');
		if ($galleryDiv.length && $.fn.owlCarousel) {
			$galleryDiv.owlCarousel({
				nav: false,
				center: true,
				loop: true,
				autoplay: true,
				dots: true,
				navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>'],
				responsive: {
					0: {
						items: 1
					},
					768: {
						items: 3
					}
				}
			});
		}
	}
	
	
	/**
	 * 다국어
	 */
	var  translationEn = {
			'Home': 'Home',
			'Features': 'Features',
			'Simple Design': 'Simple Design',
			'Detail': 'Detail',
			'User Feedback': 'User Feedback',
			'Screenshot': 'Screenshot',
			'Download': 'Download',
			'New Interpretation of Mobile Calculator': 'New Interpretation of Mobile Calculator',
			'The Sheet Calculator': 'The Sheet Calculator',
			'APP_DETAIL': 'The ability to divide and name calculation actions into sheets for short management of complex calculation processes.',
			'MAIN_SCREENSHOT': '<img src="images/localize/en/iphonex.png" alt="phone" class="img-fluid">',
			'Smart Calculator': 'Smart Calculator',
			'SMART_CALCULATOR_DETAIL': 'Excel UI has been integrated for mobile calculator environment.',
			'Field Management': 'Field Management',
			'FIELD_MANAGEMENT_DETAIL': 'You can easily replace values and operators at any time during the calculation process, and you can name the values after them.',
			'A magical ignore operator': 'A Magical [Ignore] Operator',
			'IGNORE_OPERATION_DETAIL': '[Ignore] Operator can temporarily exclude certain fields from the results.',
			'Sheet Management': 'Sheet Management',
			'SHEET_MANAGEMENT_DETAIL': 'If you add sheets, you can calculate a particular value separately.',
			'Manage Recent Documents': 'Manage Recent Documents',
			'RECENT_DOCUMENT_DETAIL': 'You can also name past calculations to simplify management.',
			'A Simple Design': 'A Simple Design',
			'A_SIMPLE_DESIGN_DETAIL1': 'A typical calculator app does not match with a smart app as it has reproduced the UI of the physical calculator.',
			'A_SIMPLE_DESIGN_DETAIL2': 'We completely eliminated the physical calculator when designing the sheet calculator.',
			'DESIGN_SCREENSHOT': '<img src="images/localize/en/perspective.png" alt="perspective phone" class="img-fluid">',
			'Do more with our app': 'Do more with our app',
			'Field Management2': 'Field Management',
			'Ignore Operator': '[Ignore] Operator',
			'Labeling': 'Labeling',
			'Sheet Management2': 'Sheet Management',
			'FIELD_MANAGEMENT_DETAIL2_1': 'You can modify the values, and change the operators at any time.',
			'FIELD_MANAGEMENT_DETAIL2_2': 'If you enter an incorrect value during the calculation, or accidentally tap an operator, you can modify it at any time and change it.',
			'FIELD_MANAGEMENT_DETAIL2_3': 'In addition, the calculation details can be checked with a clear eye to see if the results are incorrect.',
			'IGNORE_OPERATION_DETAIL2_1': 'You can easily compare when a certain value is available and when it is not.',
			'IGNORE_OPERATION_DETAIL2_2': 'The [Ignore] operator is an unique feature of The Sheet Calculator.',
			'IGNORE_OPERATION_DETAIL2_3': 'Don\'t bother recounting from the beginning when you want to temporarily exclude a particular value.',
			'IGNORE_OPERATION_DETAIL2_4': 'A magical [Ignore] operator will make you smarter.',
			'LABELING_DETAIL1_1': 'This is a function that is not present in analog calculators.',
			'LABELING_DETAIL1_2': 'Often, when you enter a number of computational elements, you forget what they mean.',
			'LABELING_DETAIL1_3': 'You can also recycle the formula after a few weeks by writing down the names of the important elements.',
			'SHEET_MANAGEMENT_DETAIL1_1': 'You can compare sheets of similar calculation process at a glance.',
			'SHEET_MANAGEMENT_DETAIL1_2': 'If you have a similar calculation process, try adding sheets to it.',
			'SHEET_MANAGEMENT_DETAIL1_3': 'You can find it very convenient to compare two or more calculation processes at once.',
			'SHEET_MANAGEMENT_DETAIL1_4': 'Even the total sheet is capable of calculating all of the seats again.',
			'USER_FEEDBACK_DETAIL1': 'The user gave us the following feedback :',
			'USER_FEEDBACK_DETAIL2_1': 'The [Ignore] operator is a magical feature.',
			'USER_FEEDBACK_DETAIL2_2': 'If you ask me what the features of a sheet calculator are, I\'ll say that it is a [Ignore] operator.',
			'A student of statistics': 'A student of statistics',
			'USER_FEEDBACK_DETAIL3_1': 'It\'s great to be able to correct the incorrectly entered values.',
			'USER_FEEDBACK_DETAIL3_2': 'I don\'t think we should open the Excel for simple calculation.',
			'An office worker': 'An office worker',
			'USER_FEEDBACK_DETAIL4_1': 'It\'s a really cool idea to put a name in the calculation element, just like giving a name to a variable value.',
			'USER_FEEDBACK_DETAIL4_2': 'Now is the time when we can document the calculations.',
			'Computer programmer': 'Computer programmer',
			'USER_FEEDBACK_DETAIL5_1': 'Managing recent documents was a really necessary function.',
			'USER_FEEDBACK_DETAIL5_2': 'It\'s a new concept to even give a document a name.',
			'Sales Staff': 'Sales Staff',
			'USER_FEEDBACK_DETAIL6': 'Please upload the App Store review. We will reflect your review here.',
			'Gallery': 'Gallery',
			'App screen shot': 'App screen shot',
			'SCREENSHOT': '<img src="images/localize/en/screenshot1.png" alt="screenshot1"><img src="images/localize/en/screenshot2.png" alt="screenshot2"><img src="images/localize/en/screenshot3.png" alt="screenshot3"><img src="images/localize/en/screenshot4.png" alt="screenshot4">',
			'Free download': 'Free download',
			'DOWNLOAD_DETAIL1': 'The Sheet Calculators are now available to download free from AppStore.',
			'DOWNLOAD_DETAIL2': 'Soon we\'ll release the Android version.',
			'APPSTORE_BADGE': '<img src="images/localize/en/appstore.png" alt="icon">',
			'GOOGLEPLAY_BADGE': '<img src="images/localize/en/googleplay.png" alt="icon">',
			'DOWNLOAD_DETAIL3': '* Works on iOS 9.0+',
			'FEEDBACK_ME': 'If the translation is incorrect, please give me a feedback.'
		}
		,translationKo = {
			'Home': '홈',
			'Features': '주요기능',
			'Simple Design': '심플한 디자인',
			'Detail': '상세기능',
			'User Feedback': '사용자반응',
			'Screenshot': '스크린샷',
			'Download': '다운로드',
			'New Interpretation of Mobile Calculator': '모바일 계산기의 새로운 해석',
			'The Sheet Calculator': '시트계산기',
			'APP_DETAIL': '계산행위를 시트단위로 나누고, 이름을 지정할수 있어서 복잡한 계산과정을 간결하게 관리할 수 있습니다.',
			'MAIN_SCREENSHOT': '<img src="images/localize/kr/iphonex.png" alt="phone" class="img-fluid">',
			'Smart Calculator': '스마트 계산기',
			'SMART_CALCULATOR_DETAIL': '엑셀UI를 모바일 계산기 환경에 맞게 접목하였습니다.',
			'Field Management': '필드로 관리하기',
			'FIELD_MANAGEMENT_DETAIL': '계산과정에서 값과 연산자를 언제든지 쉽게 바꿀수 있고, 값에는 그에 맞는 이름을 지정 할수 있습니다.',
			'A magical ignore operator': '마법같은 [무시하기] 연산자',
			'IGNORE_OPERATION_DETAIL': '[무시하기] 연산자는 결과값에서 특정한 필드를 잠시 제외시킬수 있습니다.',
			'Sheet Management': '시트로 관리',
			'SHEET_MANAGEMENT_DETAIL': '시트를 추가하면 특정한 값을 별도로 계산할수 있습니다.',
			'Manage Recent Documents': '최근문서 관리',
			'RECENT_DOCUMENT_DETAIL': '과거 계산내역에도 이름을 지정하여 관리를 쉽게 할수 있습니다.',
			'A Simple Design': '심플한 디자인',
			'A_SIMPLE_DESIGN_DETAIL1': '일반적인 계산기앱은 실물 계산기의 UI를 그대로 재현했기 때문에 스마트 앱과 어울리지 않습니다.',
			'A_SIMPLE_DESIGN_DETAIL2': '우리는 시트계산기를 설계할때 실물계산기를 완전히 배제했습니다.',
			'DESIGN_SCREENSHOT': '<img src="images/localize/kr/perspective.png" alt="perspective phone" class="img-fluid">',
			'Do more with our app': '어떤 기능이 있나요?',
			'Field Management2': '필드관리',
			'Ignore Operator': '[무시하기] 연산자',
			'Labeling': '이름넣기',
			'Sheet Management2': '시트관리',
			'FIELD_MANAGEMENT_DETAIL2_1': '언제든지 수정가능하고, 연산자를 바꿀 수 있습니다.',
			'FIELD_MANAGEMENT_DETAIL2_2': '계산과정에서 잘못된 값을 입력하거나, 연산자를 실수로 잘못 눌러도 당신은 언제든지 그것을 수정할 수 있고, 변경할 수 있습니다.',
			'FIELD_MANAGEMENT_DETAIL2_3': '또한 계산내역을 일목요연하게 확인할 수 있어서 결과값에 실수는 없었는지 검사할 수 있습니다.',
			'IGNORE_OPERATION_DETAIL2_1': '특정한 값이 있을때와 없을때를 간단히 비교할수 있습니다.',
			'IGNORE_OPERATION_DETAIL2_2': '[무시하기] 연산자는 시트계산기만의 독창적인 기능입니다.',
			'IGNORE_OPERATION_DETAIL2_3': '특정한 값을 잠깐 제외하고 싶을때 처음부터 다시 계산하는 수고를 하지 마세요.',
			'IGNORE_OPERATION_DETAIL2_4': '마법같은 [무시하기] 연산자는 당신을 더욱 스마트하게 만들어 줄것입니다.',
			'LABELING_DETAIL1_1': '아날로그 계산기에 없는 기능',
			'LABELING_DETAIL1_2': '많은 계산 요소를 입력하다 보면 각 요소가 무엇을 뜻하는지 잊어버릴때가 많습니다.',
			'LABELING_DETAIL1_3': '중요한 요소에는 이름을 지정해서 몇 주가 지난뒤에도 계산식을 재활용 할 수 있습니다.',
			'SHEET_MANAGEMENT_DETAIL1_1': '비슷한 계산과정의 다수의 시트를 한눈에 비교해 보세요.',
			'SHEET_MANAGEMENT_DETAIL1_2': '비슷한 주제의 계산과정이 있다면 시트를 추가해서 계산해보세요.',
			'SHEET_MANAGEMENT_DETAIL1_3': '두개이상의 계산과정을 한눈에 비교하는것이 매우 편리하다는것을 느낄수 있습니다.',
			'SHEET_MANAGEMENT_DETAIL1_4': '심지어 토탈시트는 모든 시트의 계산결과를 다시 한번 연산할 수 있습니다.',
			'USER_FEEDBACK_DETAIL1': '사용자는 우리에게 아래와 같은 피드백을 줬습니다.',
			'USER_FEEDBACK_DETAIL2_1': '[무시하기] 연산자는 정말 마법같은 기능입니다.',
			'USER_FEEDBACK_DETAIL2_2': '시트계산기의 특징을 뽑으라면 저는 무시하기 연산자를 뽑겠습니다.',
			'A student of statistics': '통계학과 학생',
			'USER_FEEDBACK_DETAIL3_1': '잘못 입력된 값을 수정할수 있어서 너무 좋아요.',
			'USER_FEEDBACK_DETAIL3_2': '이제 간단한 계산을 위해서 엑셀을 열지 않아도 될거 같아요.',
			'An office worker': '사무원',
			'USER_FEEDBACK_DETAIL4_1': '변수값에 이름을 부여하듯이 계산요소에 이름을 넣는것은 정말 멋진 아이디어 입니다.',
			'USER_FEEDBACK_DETAIL4_2': '이제 계산과정도 문서화 할수 있는 시대가 온것 같습니다.',
			'Computer programmer': '프로그래머',
			'USER_FEEDBACK_DETAIL5_1': '최근문서 관리가 정말 필요한 기능이었습니다.',
			'USER_FEEDBACK_DETAIL5_2': '심지어 문서에 이름을 부여할수 있다니, 이것은 신개념입니다.',
			'Sales Staff': '영업사원',
			'USER_FEEDBACK_DETAIL6': '앱스토어 리뷰를 올려주세요. 당신의 리뷰를 이곳에 반영하겠습니다.',
			'Gallery': '갤러리',
			'App screen shot': '앱 스크린샷',
			'SCREENSHOT': '<img src="images/localize/kr/screenshot1.png" alt="screenshot1"><img src="images/localize/kr/screenshot2.png" alt="screenshot2"><img src="images/localize/kr/screenshot3.png" alt="screenshot3"><img src="images/localize/kr/screenshot4.png" alt="screenshot4">',
			'Free download': '무료 다운로드',
			'DOWNLOAD_DETAIL1': '시트계산기는 현재 AppStore에서 무료로 다운로드 가능합니다.',
			'DOWNLOAD_DETAIL2': '곧 우리는 안드로이드 버전을 출시하겠습니다.',
			'APPSTORE_BADGE': '<img src="images/localize/kr/appstore.png" alt="icon">',
			'GOOGLEPLAY_BADGE': '<img src="images/localize/kr/googleplay.png" alt="icon">',
			'DOWNLOAD_DETAIL3': '* iOS 9.0+ 이상에서 다운로드 가능',
			'FEEDBACK_ME': '번역에 오류가 있으면 피드백 주세요.'
		}
		,translationJp = {
			'Home': 'ホーム',
			'Features': '主要機能',
			'Simple Design': 'シンプルなデザイン',
			'Detail': '詳細機能',
			'User Feedback': '使用者の反応',
			'Screenshot': 'スクリーンショット',
			'Download': 'ダウンロード',
			'New Interpretation of Mobile Calculator': 'モバイル計算機の新たな解釈',
			'The Sheet Calculator': 'シート計算機',
			'APP_DETAIL': '計算行為をシート単位で分けて、名前を指定することができて複雑な計算過程を簡潔に管理することができます。',
			'MAIN_SCREENSHOT': '<img src="images/localize/ch/iphonex.png" alt="phone" class="img-fluid">',
			'Smart Calculator': 'スマート計算機',
			'SMART_CALCULATOR_DETAIL': 'エクセルUIをモバイル計算機環境に合わせて結合させました。',
			'Field Management': 'フィールドで管理すること',
			'FIELD_MANAGEMENT_DETAIL': '計算過程で値と演算子をいつでも簡単に変えることができ、値には彼にふさわしい名前を指定することができます。',
			'A magical ignore operator': '魔法のような[無視]演算子',
			'IGNORE_OPERATION_DETAIL': '[無視]演算子は結果値で特定のフィールドをしばらく除外させることができます。',
			'Sheet Management': 'シートで管理',
			'SHEET_MANAGEMENT_DETAIL': 'シートを追加すると、特定の値を別途に計算することができます。',
			'Manage Recent Documents': '最近の文書管理',
			'RECENT_DOCUMENT_DETAIL': '過去計算の内訳にも名前を指定し管理を容易に行うことができます。',
			'A Simple Design': 'シンプルなデザイン',
			'A_SIMPLE_DESIGN_DETAIL1': '一般的な計算機アプリは、実体計算機のUIをそのまま再現したためにスマートアプリと似合わないです。',
			'A_SIMPLE_DESIGN_DETAIL2': '私たちはシート計算機を設計する際、実物計算機を完全に排除しました。',
			'DESIGN_SCREENSHOT': '<img src="images/localize/jp/perspective.png" alt="perspective phone" class="img-fluid">',
			'Do more with our app': 'どのような機能がありますか。',
			'Field Management2': 'フィールド管理',
			'Ignore Operator': '[無視]演算子',
			'Labeling': '名前入れること',
			'Sheet Management2': 'シート管理',
			'FIELD_MANAGEMENT_DETAIL2_1': 'いつでも修正可能、演算子を変えることができます。',
			'FIELD_MANAGEMENT_DETAIL2_2': '計算過程で誤った値を入力したり、演算子を誤って間違って押してもあなたはいつでもそれを修正することができて、変更することができます。',
			'FIELD_MANAGEMENT_DETAIL2_3': 'また計算の内訳を一目瞭然に確認ができて結果値にミスはなかったのか検査することができます。',
			'IGNORE_OPERATION_DETAIL2_1': '特定の値がいる時とない時に簡単に比較することができます。',
			'IGNORE_OPERATION_DETAIL2_2': '[無視]演算子はシート計算機だけの独創的な機能です。',
			'IGNORE_OPERATION_DETAIL2_3': '特定の値をちょっと除外したい時、初めから再び計算する手間をしないでください。',
			'IGNORE_OPERATION_DETAIL2_4': '魔法のような[無視]演算子はあなたをもっとスマートに作ってくれるはずです。',
			'LABELING_DETAIL1_1': 'アナログ計算機にはない機能',
			'LABELING_DETAIL1_2': '多くの計算要素を入力すると、各要素が何を意味するのか忘れてしまう場合が多いです。',
			'LABELING_DETAIL1_3': '重要な要素には名前を指定して数週間が過ぎた後も、計算式をリサイクルすることができます。',
			'SHEET_MANAGEMENT_DETAIL1_1': '同じような計算過程の多数のシートを一目で比較してみてください。',
			'SHEET_MANAGEMENT_DETAIL1_2': '類似テーマの計算過程があるなら、シートを追加して計算してみてください。',
			'SHEET_MANAGEMENT_DETAIL1_3': '二つ以上の計算過程をひと目で比較することが非常に便利だということを感じることができます。',
			'SHEET_MANAGEMENT_DETAIL1_4': 'さらに、トータルシートは全てのシートの計算結果をもう一度演算することができます。',
			'USER_FEEDBACK_DETAIL1': '使用者は私たちに下記のようなフィードバックをくれました。',
			'USER_FEEDBACK_DETAIL2_1': '[無視]演算子は本当に魔法のような機能です。',
			'USER_FEEDBACK_DETAIL2_2': 'シート計算機の特徴を選ぶとしたら、私は無視する演算子を採用します。',
			'A student of statistics': '統計学科の学生',
			'USER_FEEDBACK_DETAIL3_1': '誤入力された値を修正することができてとてもいいです。',
			'USER_FEEDBACK_DETAIL3_2': 'もう簡単な計算のためにアクセルを開けなくても立つと思います。',
			'An office worker': '事務員',
			'USER_FEEDBACK_DETAIL4_1': '変数値に名前を付与するように計算要素に名前を入れたことは本当に素晴らしいアイデアです。',
			'USER_FEEDBACK_DETAIL4_2': 'もう計算過程も、文書化できる時代が来たようです。',
			'Computer programmer': 'プログラマー',
			'USER_FEEDBACK_DETAIL5_1': '最近の文書管理が本当に必要な機能でした。',
			'USER_FEEDBACK_DETAIL5_2': 'さらに、文書に名前を付与することができるなんて、これは新しい概念です。',
			'Sales Staff': '営業社員',
			'USER_FEEDBACK_DETAIL6': 'アプリストアレビューを上げてください。 あなたのレビューをここに反映します。',
			'Gallery': 'ギャラリー',
			'App screen shot': 'アプリ、スクリーンショット',
			'SCREENSHOT': '<img src="images/localize/jp/screenshot1.png" alt="screenshot1"><img src="images/localize/jp/screenshot2.png" alt="screenshot2"><img src="images/localize/jp/screenshot3.png" alt="screenshot3"><img src="images/localize/jp/screenshot4.png" alt="screenshot4">',
			'Free download': '無料ダウンロード',
			'DOWNLOAD_DETAIL1': 'シート計算機は現在、AppStoreで無料でダウンロード可能です。',
			'DOWNLOAD_DETAIL2': 'まもなく私たちはアンドロイドバージョンを発売します。',
			'APPSTORE_BADGE': '<img src="images/localize/jp/appstore.png" alt="icon">',
			'GOOGLEPLAY_BADGE': '<img src="images/localize/jp/googleplay.png" alt="icon">',
			'DOWNLOAD_DETAIL3': '* iOS 9.0+以上でダウンロード可能',
			'FEEDBACK_ME': '翻訳に間違いがあれば、フィードバックください。'
		}
		,translationCn = {
			'Home': '槽子',
			'Features': '主要功能',
			'Simple Design': '简单的设计',
			'Detail': '详细功能',
			'User Feedback': '用户的反应',
			'Screenshot': '截图',
			'Download': '下载',
			'New Interpretation of Mobile Calculator': '移动计算器的新解释',
			'The Sheet Calculator': '图表计算器',
			'APP_DETAIL': '可将计算行为分为单份以表为单位,可简单管理复杂的计算过程。',
			'MAIN_SCREENSHOT': '<img src="images/localize/jp/iphonex.png" alt="phone" class="img-fluid">',
			'Smart Calculator': '智能计算机',
			'SMART_CALCULATOR_DETAIL': '将ExcelUI转换为移动计算机环境。',
			'Field Management': '球场管理',
			'FIELD_MANAGEMENT_DETAIL': '在计算过程中,可随时更换值和运算符,且可指定符合其值的名称。',
			'A magical ignore operator': '魔法般的“无视”运算符',
			'IGNORE_OPERATION_DETAIL': '“无视”运算符可以在结果值中暂时排除特定字段。',
			'Sheet Management': '管理表',
			'SHEET_MANAGEMENT_DETAIL': '如果添加了工作表，可以另外计算特定的值。',
			'Manage Recent Documents': '最近的文件管理',
			'RECENT_DOCUMENT_DETAIL': '在过去计算的内部翻译中也可以指定名称并容易进行管理。',
			'A Simple Design': '简单的设计',
			'A_SIMPLE_DESIGN_DETAIL1': '一般的计算机应用程序，实体计算机的UI原样再现了为了智能应用程序不相称。',
			'A_SIMPLE_DESIGN_DETAIL2': '我们在设计座椅计算器时，完全排除了实物计算器。',
			'DESIGN_SCREENSHOT': '<img src="images/localize/ch/perspective.png" alt="perspective phone" class="img-fluid">',
			'Do more with our app': '有什么功能？',
			'Field Management2': '字段管理',
			'Ignore Operator': '[无视]运算符',
			'Labeling': '命名',
			'Sheet Management2': '工作表管理',
			'FIELD_MANAGEMENT_DETAIL2_1': '随时可以修改，可以改变运算符。',
			'FIELD_MANAGEMENT_DETAIL2_2': '在计算过程中输入错误的值，或者错误地按错了运算符，你随时可以修改它，可以改变。',
			'FIELD_MANAGEMENT_DETAIL2_3': '另外，可以一目了然地确认计算的明细，可以检查结果值是否有错误。',
			'IGNORE_OPERATION_DETAIL2_1': '如果有特定值的时候，可以比较简单的比较。',
			'IGNORE_OPERATION_DETAIL2_2': '“无视”运算符是只有座椅计算器的独创功能。',
			'IGNORE_OPERATION_DETAIL2_3': '请不要把特定的值除掉时，请不要从一开始就重新计算。',
			'IGNORE_OPERATION_DETAIL2_4': '像魔法一样的运算符应该会给你更加智能的。',
			'LABELING_DETAIL1_1': '模拟计算器中没有的功能',
			'LABELING_DETAIL1_2': '输入很多计算要素的话，很多情况会忘记各要素是什么意思。',
			'LABELING_DETAIL1_3': '在重要的要素中指定名字后过了几周，也可以利用计算式。',
			'SHEET_MANAGEMENT_DETAIL1_1': '请看一眼比较相同的计算过程的多个座椅。',
			'SHEET_MANAGEMENT_DETAIL1_2': '如果有类似主题的计算过程，请追加工作表来计算。',
			'SHEET_MANAGEMENT_DETAIL1_3': '可以感受到两个以上的计算过程是非常方便的。',
			'SHEET_MANAGEMENT_DETAIL1_4': '另外，总座椅可以重新计算所有的工作表的计算结果。',
			'USER_FEEDBACK_DETAIL1': '使用者给了我们如下的反馈。',
			'USER_FEEDBACK_DETAIL2_1': '[无视]运算符真的是魔法的功能。',
			'USER_FEEDBACK_DETAIL2_2': '如果选择了表计算机的特征，我会采用无视的运算符。',
			'A student of statistics': '统计学的学生',
			'USER_FEEDBACK_DETAIL3_1': '可以修改错误输入的值，很好。',
			'USER_FEEDBACK_DETAIL3_2': '为了再简单的计算，不打开油门也会站起来的。',
			'An office worker': '事务员',
			'USER_FEEDBACK_DETAIL4_1': '为了给变量值赋予名字，把名字放在计算要素上是非常好的想法。',
			'USER_FEEDBACK_DETAIL4_2': '已经来了计算过程的时代了。',
			'Computer programmer': '程序员',
			'USER_FEEDBACK_DETAIL5_1': '最近的文件管理是非常必要的功能。',
			'USER_FEEDBACK_DETAIL5_2': '而且，可以在文件上赋予名字，这是新的概念。',
			'Sales Staff': '营业职员',
			'USER_FEEDBACK_DETAIL6': '请提高应用程序商店的评论。在这里反映你的评论。',
			'Gallery': '画廊',
			'App screen shot': '应用程序，屏幕',
			'SCREENSHOT': '<img src="images/localize/ch/screenshot1.png" alt="screenshot1"><img src="images/localize/ch/screenshot2.png" alt="screenshot2"><img src="images/localize/ch/screenshot3.png" alt="screenshot3"><img src="images/localize/ch/screenshot4.png" alt="screenshot4">',
			'Free download': '免费下载',
			'DOWNLOAD_DETAIL1': '表计算是现在，App Store免费下载。',
			'DOWNLOAD_DETAIL2': '不久我们会发售安卓版本。',
			'APPSTORE_BADGE': '<img src="images/localize/ch/appstore.png" alt="icon">',
			'GOOGLEPLAY_BADGE': '<img src="images/localize/ch/googleplay.png" alt="icon">',
			'DOWNLOAD_DETAIL3': '* iOS 9.0 +以上下载',
			'FEEDBACK_ME': '如果翻译有错误的话，请反馈。'
		}
		,i18nOption = {
			lng: navigator.language || navigator.userLanguage,
			debug: true,
			pageDefaultLanguage: 'en-US',
			//resGetPath: 'js/locales/translation.json'
			resources: {
				'en-US': {'translation': translationEn},
				'en': {'translation': translationEn},
				'ko-KR': {'translation': translationKo},
				'ko': {'translation': translationKo},
				'ja-JP': {'translation': translationJp},
				'ja': {'translation': translationJp},
				'zh-CN': {'translation': translationCn},
				'zh': {'translation': translationCn}
			}
		}

	i18next.init(i18nOption, initTranslate);

	function initTranslate() {
		// alert(navigator.language || navigator.userLanguage)
		$('[data-i18n]').each(function(index, element) {
			var  $element = $(element)
				,translationKey = $element.attr('data-i18n')
				,translationDescription = i18next.t(translationKey)

			if (translationKey != translationDescription) {
				$element.html(translationDescription)
			}
			$element.css('visibility', 'visible');
		})
		carousel();
	}
	$('#btnGooglePlay').on('click', function() {
		alert(i18next.t('DOWNLOAD_DETAIL2'))
	})
	
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'UA-45735211-6');
}); /* End Fn */