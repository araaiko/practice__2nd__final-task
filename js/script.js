// ドロワーメニュー① （コンテンツごとスライド）
jQuery('.drawer-btn').on('click', function () {
    if (jQuery(this).hasClass('active')) {
        jQuery(this).removeClass('active');
        jQuery('.header__brand').removeClass('open');
        jQuery('main').removeClass('open');
        jQuery('nav').removeClass('open');
        jQuery('.overlay').removeClass('open');
        jQuery('.open-btn').show();
        jQuery('.close-btn').hide();
    } else {
        jQuery(this).addClass('active');
        jQuery('.header__brand').addClass('open');
        jQuery('main').addClass('open');
        jQuery('nav').addClass('open');
        jQuery('.overlay').addClass('open');
        jQuery('.open-btn').hide();
        jQuery('.close-btn').show();
    }
    return false;
});

// ドロワーメニュー② （オーバーレイを押してもメニューが閉じるようにする）
jQuery('.overlay').on('click', function () {
    if (jQuery(this).hasClass('open')) {
        jQuery(this).removeClass('open');
        jQuery('.drawer-btn').removeClass('active');
        jQuery('.header__brand').removeClass('open');
        jQuery('main').removeClass('open');
        jQuery('nav').removeClass('open');
        jQuery('.open-btn').show();
        jQuery('.close-btn').hide();
    }
    return false;
});

// ドロワーメニュー③ （メニューリンクを押すとドロワーが閉じる）
jQuery('a[href^="#"]').on('click', function () {
    jQuery('.overlay').removeClass('open');
    jQuery('.drawer-btn').removeClass('active');
    jQuery('.header__brand').removeClass('open');
    jQuery('main').removeClass('open');
    jQuery('nav').removeClass('open');
    jQuery('.open-btn').show();
    jQuery('.close-btn').hide();
    return false;
});

// Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto', // CSSでスライド（.swiper-slide）の幅を調整しているので、ここは'auto'でOK
    spaceBetween: 40, // 任意のmarginを指定
    breakpoints: {
        767: {
            spaceBetween: 20, // 767px以下の時を書く
        }
    },
    loop: true, // trueにすれば、スライドの最初と最後が繋がるだけでなく、ページネーションの数もスライドの数と一致する
    freeModeSticky: true, // スライドに合わせてスクロールがストップしてくれる
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
});

// Q&A accordion
jQuery('.faqs__item').click(function () {
    jQuery(this).find('.accordion__head').toggleClass('is-open');
    jQuery(this).find('.accordion__body').slideToggle();
    return false;
});

// Q&A accordion（スマホとタブレット時の背景固定について）
// var parallaxBkImg = function () {
//     $(window).on('load resize', function () {
//         $(window).on('load scroll', function () {
//             var $winTop = $(window).scrollTop();
//             var $target = $('.faqs');
//             var $winWidth = $(window).width();
//             if ($winWidth < 1023) {
//                 $target.each(function (index) {
//                     var $position = $winTop - $target.eq(index).offset().top;
//                     if ($winTop > $target.eq(index).offset().top - 800) {
//                         $target.eq(index).css({
//                             'background-position-y': $position * .4
//                         });
//                     }
//                 });
//             }
//         });
//     });
// }();

// スクロール検知 （トップへ戻るボタン）
jQuery(window).on("scroll", function () {
    // トップから100px以上スクロールしたら
    if (100 < jQuery(this).scrollTop()) {
        // トップへ戻るボタンをふわっと表示する
        jQuery('.totop').fadeIn();
    } else {
        // 100pxを下回ったらトップへ戻るボタンをふわっと非表示にする
        jQuery('.totop').fadeOut();
    }
    return false;
});

// smooth scroll
// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function () {
    // .headerクラスがついた要素の高さを取得
    let header = jQuery(".header").innerHeight();
    let speed = 600;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    // トップからの距離からヘッダー分の高さを引く
    let position = jQuery(target).offset().top - header;
    // その分だけ移動すればヘッダーと被りません
    jQuery("html, body").animate(
        {
            scrollTop: position
        },
        speed
    );
    return false;
});

// ある要素までスクロールするとナビバーに下線が引かれる（カレント）
jQuery(function () {
    var set = 110;//ウインドウ上部からどれぐらいの位置で変化させるか
    var boxTop = new Array;
    var current = -1;
    //各要素の位置
    //position-nowは場所を取得したい対象の要素に付ける。sectionタグのクラスにつけると良いかも。
    jQuery('.position-now').each(function (i) {
        boxTop[i] = jQuery(this).offset().top;
    });
    //最初の要素にclass="positiion-now"をつける
    changeBox(0);
    //スクロールした時の処理
    jQuery(window).scroll(function () {
        scrollPosition = jQuery(window).scrollTop();
        for (var i = boxTop.length - 1; i >= 0; i--) {
            if (jQuery(window).scrollTop() > boxTop[i] - set) {
                changeBox(i);
                break;
            }
        };
    });
    //ナビの処理
    function changeBox(secNum) {
        if (secNum != current) {
            current = secNum;
            secNum2 = secNum + 1;//以下にクラス付与したい要素名と付与したいクラス名
            jQuery('.header__nav li a').removeClass('current');

            //位置によって個別に処理をしたい場合
            if (current == 0) {
                jQuery('.header__nav li a').removeClass('current');
                // 現在地がsection1の場合の処理
            } else if (current == 1) {
                jQuery('#js-news').addClass('current'); // #js-news は .header__nav li a につけたid属性のこと
                // 現在地がsection2の場合の処理
            } else if (current == 2) {
                jQuery('#js-service').addClass('current');
                // 現在地がsection3の場合の処理
            } else if (current == 3) {
                jQuery('#js-results').addClass('current');
                // 現在地がsection4の場合の処理
            } else if (current == 4) {
                jQuery('#js-price').addClass('current');
                // 現在地がsection5の場合の処理
            } else if (current == 5) {
                jQuery('#js-comments').addClass('current');
                // 現在地がsection6の場合の処理
            } else if (current == 6) {
                jQuery('#js-faqs').addClass('current');
                // 現在地がsection7の場合の処理 (ヘッダーメニューにはないが、セクションとしては存在しているため、このセクションが現在地の時はヘッダーの下線を消すという記述をしています)
            } else if (current == 7) {
                jQuery('.header__nav li a').removeClass('current');
                // 現在地がsection8の場合の処理
            } else if (current == 8) {
                jQuery('#js-contact').addClass('current');
            }
        };
    };
    return false;
});


// Contact
// Googleフォーム送信処理
let form = jQuery('#js-form')

form.submit(function (e) {
    jQuery.ajax({
        url: form.attr('action'),
        data: form.serialize(),
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function () {
                //送信に成功したときの処理
                form.slideUp()
                jQuery('#js-success').slideDown()

            },
            200: function () {
                //送信に失敗したときの処理 
                form.slideUp()
                jQuery('#js-error').slideDown()
            }
        }
    });
    return false;
});

// 入力欄が埋まったら、送信ボタンの色が反転＆有効になる
let submit = jQuery('#js-submit')

jQuery('#js-form input, #js-form textarea').on('change', function () {
    if (
        jQuery('#js-form input[name="entry.1672009915"]').val() !== "" && // inputタグのvalue(値=.val())が空ではない（!== ""）時で、かつ（&&）
        jQuery('#js-form input[name="entry.1317382001"]').val() !== ""  // inputタグのvalue(値=.val())が空ではない（!== ""）時で、かつ（&&）
        // jQuery('#js-form input[type="email"]').val() !== "" &&
        // jQuery('#js-form input[name="entry.1097290105"]:checked').val() !== "" && // 法人個人のラジオボタン
        // jQuery('#js-form textarea').val() !== "" &&
        // jQuery('#js-form input[name="entry.978374073"]').prop('checked') === true // プライバシーポリシーのチェックボタン
    ) {
        // 全て入力された時
        submit.prop('disabled', false) // ボタン有効に　＊input[type="submit"]タグ内に「disabled」を記述しておくこと！
        submit.addClass('-active')
    } else {
        // 入力されていない時
        submit.prop('disabled', true) // ボタン無効に
        submit.removeClass('-active')
    };
    return false;
});