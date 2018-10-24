$(function () {
//    function onScroll(event) {
//        var wh = $(window).height();
//        var scrollPos = $(document).scrollTop() + (wh * 0.75);
//        $('#navbar a').each(function () {
//            var currLink = $(this);
//            var refElement = $(currLink.attr("href"));
//            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//                $('#navbar a').removeClass("active");
//                currLink.addClass("active");
//            } else {
//                currLink.removeClass("active");
//            }
//        });
//    }
//    $(document).on("scroll", onScroll);


    $('a[href*="#"]:not([href="#"])').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 70
        }, 700);
        return false;

        //        $(document).on("scroll", onScroll);


    });
});
