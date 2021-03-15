$(document).ready(function(){
    $(".slider-wrapper .carousel .carousel-inner .carousel-item").css({
        'height': ($(window).height()) + 'px'
    });

    $('.movies-wrap .shuffle-items .m-item .page_two').parent().parent().hide();
    $('.movies-wrap .shuffle-items .m-item .page_three').parent().parent().hide();
    $('.movies-wrap .shuffle-items .m-item .page_four').parent().parent().hide();
    $('.shuffle-list ul li').on('click' , function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class') === '.page_one'){
            $('.shuffle-items .m-item').hide();
            $($(this).data('class')).parent().parent().show();
        }else{
            $('.shuffle-items .m-item').hide();
            $($(this).data('class')).parent().parent().show();

        }
    });
});