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

//Cover text animation
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #fff }";
    document.body.appendChild(css);
  };