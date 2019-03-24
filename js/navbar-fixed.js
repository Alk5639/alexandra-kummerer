/*
* Fixed Navbar Scrolling
* Github: https://github.com/ts-de/bootstrap4-fixed-navbar
*/

// init nav object from dom
var nav = $('nav');
// get heigth of the nav
var navHeight = nav.outerHeight();

// click-trigger
$('a[href*="#"]:not([href="#"]):not(.nav-pills a)').click(function(event) {
  scrollToSection(this);
  event.preventDefault();
});

// get target position and scrolls to it
function scrollToSection(self) {
  // get the target href
  var href = $(self).attr('href');

  // get the target position
  var targetPos = $(href).offset().top - navHeight + 1;

  // scroll to target
  $('html, body').animate({
    scrollTop: targetPos
  }, 400);
}

$(document).ready(function(){       
  var scroll_start = 0;
  var startchange = $('#navTrigger');
  var offset = startchange.offset();
   if (startchange.length){
    $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar").removeClass("navbar-dark"); 
          $(".navbar").addClass("new-nav navbar-light"); 
        } else {
          $('.navbar').removeClass("new-nav navbar-light");
          $(".navbar").addClass("navbar-dark");           
        }
    });
   }
});
