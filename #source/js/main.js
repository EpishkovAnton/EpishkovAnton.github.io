//@prepros-append jq-start.js
//@prepros-append forms.js
//@prepros-append script.js
//@prepros-append jq-end.js
//@prepros-append sliders.js





$('.goto').click(function () {
    var el = $(this).attr('href').replace('#', '');
    var offset = 0;
    $('body,html').animate({
        scrollTop: $('.' + el).offset().top + offset
    }, 600, function () {});

    if ($('.header__burger').hasClass('active')) {
        $('.header__burger,.header__menu').removeClass('active');
        $('body').removeClass('lock');
    }
    return false;
});