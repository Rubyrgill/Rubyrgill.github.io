//Animating name/homepage

$(function () {
    setTimeout(function () {
        $(".fly-in-text").removeClass("hidden");
    }, 500);
});

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $("body").addClass("changeColor")
            $()
        }
        if ($(this).scrollTop() < 50) {
            $("body").removeClass("changeColor")
        }
    });
});