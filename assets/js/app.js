$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    // Fixed Header 
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll() {

        if  (scrollOffset >= introH) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
            $("#nav a").removeClass("active");
            header.removeClass("active");
        }
    }

    // Smooth Scroll

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop : blockOffset
        }, 500);
        $("#nav").removeClass("active");
        $("#nav_toggle").removeClass("active");
    });

    // Nav Toggle

    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $("#header").toggleClass("active");
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    // Collapse

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this);
        $this.toggleClass("active");
    });
});