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