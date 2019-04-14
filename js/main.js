var $window = $(window);
$(document).ready(function(){


  $('.hamburger').on('click', function(e) {

    e.preventDefault();

    $('.menu').toggleClass('slide-down');
  });

  function controlla() {
  var windowsize = $window.width();
  if (windowsize <= 675) {

        $(".foto").hide();
        $(".nome-e-foto").hide();
        $(".foto-resp").hide();
        $(".nome-resp").show();
        $(".foto-resp").show();

      }else{
        $(".foto").show();
        $(".nome-e-foto").show();
        $(".nome-resp").hide();
        $(".foto-resp").hide();
      }
  }
  controlla();
  $(window).resize(controlla);

});
