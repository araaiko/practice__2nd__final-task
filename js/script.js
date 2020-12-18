// ドロワーメニュー コンテンツごとスライド
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

//メニューを押すとドロワーが閉じる
$('a[href^="#"]').on('click', function () {
    $('.overlay').removeClass('open');
    $('.drawer-btn').removeClass('active');
    $('.header__sp').removeClass('open');
    $('main').removeClass('open');
    $('nav').removeClass('open');
    $('.open-btn').show();
    $('.close-btn').hide();

})