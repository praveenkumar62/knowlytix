$(document).ready(function() {
    $('#careers-apply').click(function() {
        $(this).fadeOut();
        $('#careers-show').fadeIn();
    })

    $('.services-content').mouseover(function() {
        $(this).find('.services-icon').hide();
        $(this).find('.services-icon-white').show();
    });
    $('.services-content').mouseout(function() {
        $(this).find('.services-icon-white').hide();
        $(this).find('.services-icon').show();
    });


    window.onscroll = function() {scrollNavFunction()};
    $('#nav-logo2').hide();
    function scrollNavFunction() {
        if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
            if($('#nav').hasClass('navbar-dark')) {
                $('#nav').removeClass('navbar-dark');
                $('#nav').addClass('navbar-light');
                $('#nav-logo1').hide();
                $('#nav-logo2').show();
            } 
        } else {
            if($('#nav').hasClass('navbar-light')) {
                $('#nav').removeClass('navbar-light');
                $('#nav').addClass('navbar-dark');
                $('#nav-logo2').hide();
                $('#nav-logo1').show();
            } 
        }
    }

});
