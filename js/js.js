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

//:TODO
// toggleButton.addEventListener('click', function() {
//     if(navMenu.className.match("navbar-toggle"))
//         navMenu.className = "navbar-toggle-active"
//     else
//         navMenu.className = "navbar-toggle"
// });

window.addEventListener("scroll", function() {
    if(solidMenu.style.background === "rgba(28, 35, 49, 0.2)")
        solidMenu.style.background = rgba(28, 35, 49, 1)
    else
        solidMenu.style.background = rgba(28, 35, 49, 0.2);
});