$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.loader');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});
