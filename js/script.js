// ドロワーメニュー （コンテンツごとスライド）
$('.drawer-btn').on('click', function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.header__sp').removeClass('open');
        $('main').removeClass('open');
        $('nav').removeClass('open');
        $('.overlay').removeClass('open');
        $('.open-btn').show();
        $('.close-btn').hide();
    } else {
        $(this).addClass('active');
        $('.header__sp').addClass('open');
        $('main').addClass('open');
        $('nav').addClass('open');
        $('.overlay').addClass('open');
        $('.open-btn').hide();
        $('.close-btn').show();
    }
});
$('.overlay').on('click', function () {
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $('.drawer-btn').removeClass('active');
        $('.header__sp').removeClass('open');
        $('main').removeClass('open');
        $('nav').removeClass('open');
    }
});

// ドロワーメニュー （メニューを押すとドロワーが閉じる）
$('a[href^="#"]').on('click', function () {
    $('.overlay').removeClass('open');
    $('.drawer-btn').removeClass('active');
    $('.header__sp').removeClass('open');
    $('main').removeClass('open');
    $('nav').removeClass('open');
    $('.open-btn').show();
    $('.close-btn').hide();

})

// Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto', // CSSでスライド（.swiper-slide）の幅を調整しているので、ここは'auto'でOK
    spaceBetween: 20, // 任意のmarginを指定
    breakpoints: {
        768: {
            spaceBetween: 40,
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
jQuery('.accordion__head').click(function () {
    jQuery(this).next().slideToggle();
    jQuery(this).toggleClass('is-open');
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