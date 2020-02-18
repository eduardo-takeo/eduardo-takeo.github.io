// Collapse top menu
let navMenu = document.getElementById("js-menu");
let toggleButton = document.getElementById("js-navbar-toggle");
let solidMenu = document.getElementById("js-solid-menu")

toggleButton.addEventListener('click', function() {
    if(navMenu.style.display === "none")
        navMenu.style.display = "inline-block"
    else
        navMenu.style.display = "none"     
});

//Change top menu opacity on scroll
$(function() {
    let navbar = $('.navbar');
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();

        if(scroll >= 1) {
            navbar.removeClass('navbar').addClass('navbar-solid')
        }
        else {
            navbar.removeClass('navbar-solid').addClass('navbar')
        }
    });
});

//Redirect to github
function toGithub() {
    window.open(
        'https://github.com/eduardo-takeo',
        '_blank'
    )
};