Journal.notificationTimer = parseInt('1500', 10);

Journal.quickviewText = 'QuickView';

Journal.BASE_HREF = 'url(' + $('base').attr('href') + ')';

$(document).ready(function () {

Journal.productPage();

Journal.enableProductOptions();

Journal.DISABLE_ADD_TO_CART = false;

Journal.enableSideBlocks();

Journal.searchAutoComplete();


Journal.enableQuickView();
Journal.quickViewStatus = true;

Journal.enableCloudZoom();

Journal.productPageGallery();




$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
            $('.scroll-top').fadeIn(200);
        } else {
            $('.scroll-top').fadeOut(200);
    }
});

$('.scroll-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 700);
});

$('#top-modules > .hide-on-mobile').parent().addClass('hide-on-mobile');
$('#bottom-modules > .hide-on-mobile').parent().addClass('hide-on-mobile');

$('#top-modules .gutter-on').parent().addClass('gutter');
$('#bottom-modules .gutter-on').parent().addClass('gutter');

$(window).resize();

Journal.init();
});

/* Custom JS */
