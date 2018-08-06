//Animating name/homepage

$(function () {
    setTimeout(function () {
        $(".fly-in-text").removeClass("hidden");
    }, 500);
});

//Web Dev content addes class hinge on click
$("#web-dev").on("click", function (e) {
    $("#web-dev").addClass(" animated hinge")
});

//On scroll, back changes to white; 

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

//On click, will scroll down
$("#web-dev").click(function () {
    $('html,body').animate({
        scrollTop: $(".about-content").offset().top
    },
        'slow');
});

//On click, will scroll down
$("#about-me-button").click(function () {
    $('html,body').animate({
        scrollTop: $(".about-content").offset().top
    },
        'slow');
});

