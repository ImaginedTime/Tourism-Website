$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".nav-links").slideToggle();
    });
});

setInterval(check, 50);
function check(){
    const mediaQuery = window.matchMedia('( max-width: 768px )')
    // Note the `matches` property
    if ( mediaQuery.matches ) {
    console.log('Media Query Matched!')
    }
}