//Animating name/homepage

// $(function () {
//     setTimeout(function () {
//         $(".fly-in-text").removeClass("hidden");
//     }, 500);
// });

// //Web Dev content addes class hinge on click
// $("#web-dev").on("click", function (e) {
//     $("#web-dev").addClass(" animated hinge")
// });

//On scroll, back changes to white; 

// $(function () {
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 50) {
//             $("body").addClass("changeColor")
//             $()
//         }
//         if ($(this).scrollTop() < 50) {
//             $("body").removeClass("changeColor")
//         }
//     });
// });

//On click, will scroll down
$("#web-dev").click(function () {
    $('html,body').animate({
        scrollTop: $(".about-content").offset().top
    },
        'slow');
});

//On click, will scroll down
$("#app-btn").click(function () {
    $('html,body').animate({
        scrollTop: $(".projects").offset().top
    },
        'slow');
});

//On click, will scroll down
$("#ani-btn").click(function () {
    $('html,body').animate({
        scrollTop: $(".projects-2").offset().top
    },
        'slow');
});


$("#proj-dev").click(function () {
    $('html,body').animate({
        scrollTop: $(".projects").offset().top
    },
        'slow');
});

$("#contact-dev").click(function () {
    $('html,body').animate({
        scrollTop: $(".contact").offset().top
    },
        'slow');
});


$("#desig-dev").click(function () {
    $('html,body').animate({
        scrollTop: $(".projects-2").offset().top
    },
        'slow');
});


//IN PROGRESS 


// // Get the modal
// var modal = document.getElementById('myModal');

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function () {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

