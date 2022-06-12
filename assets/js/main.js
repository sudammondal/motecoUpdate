$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 70) {
            $(".up_icon").addClass("up_iconFixd");
            $("#FixedScrol").addClass("headerFixed");
        } else {
            $("#FixedScrol").removeClass("headerFixed");
            $(".up_icon").removeClass("up_iconFixd");
        }
    });

    // counting ja //
    jQuery(document).ready(function($) {
        $('.counting').counterUp({
            delay: 20,
            time: 3000
        });
    });
  
}); 
 
/* =============WOW JS==========*/
// new WOW().init();
