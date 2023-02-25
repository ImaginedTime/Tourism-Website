$(document).ready(function () {
    $(".nav-links a, .home-container .btn, .back-to-top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 500);
    });

    $(".hamburger").click(function () {
        $(".nav-links").slideToggle();
    });
});



setInterval(check, 50);

function check(){

const mediaQuery = window.matchMedia( '( max-width: 768px )' )

// Note the `matches` property
if ( mediaQuery.matches ) {
  console.log('Media Query Matched!')
}


}