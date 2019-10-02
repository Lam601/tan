$(document).ready(function(){
 $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  });


 // lấy vị trí của menu
 pos = $("#menutop").position();

 $(window).scroll(function() {
    var posScroll = $(document).scrollTop();
    if(parseInt(posScroll) > parseInt(pos.top)) {
      $("#menutop").addClass('fixed');
    } else {
      $("#menutop").removeClass('fixed');
    }
 });


});
