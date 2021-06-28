$(function(){
  new WOW().init();
});

$(function(){
  $("#showcase-content").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
  });
});

$(function(){
  $("#portfolio").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery:{
    enabled:true
  }
  });
});
$(function(){
  $("#team-list").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
  });
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function navToggle() {
  document.getElementById("mobileNav").classList.toggle("showMobile");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.toggle-icon')) {
    var dropdowns = document.getElementsByClassName("mobile_nav");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showMobile')) {
        openDropdown.classList.remove('showMobile');
      }
    }
  }
}

 

