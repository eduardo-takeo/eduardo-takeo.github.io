// Collapse top menu
let navMenu = document.getElementById("js-menu");
let toggleButton = document.getElementById("js-navbar-toggle");

toggleButton.addEventListener('click', function() {
    if(navMenu.style.display === "none")
        navMenu.style.display = "inline-block"
    else
        navMenu.style.display = "none"     
});

// toggleButton.addEventListener('click', function() {
//     if(navMenu.className.match("navbar-toggle"))
//         navMenu.className = "navbar-toggle-active"
//     else
//         navMenu.className = "navbar-toggle"
// });        