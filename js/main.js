$(document).ready(function () {
    $('body').on("hover", ".car_gallery li img", function () {
        if ($(this).attr('class')==undefined || !$(this).attr('class').match(/active/)) {
            $(this).css({transform: 'scale(1.14)'}).addClass('active');
            $(this).css("z-index","999").css("transition", "1s");
        }else{
            $(this).css({transform: 'scale(1,1)'}).removeClass('active');
            $(this).css("z-index","1");
        }
    });
});


$('.all_routes').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.show_popup').click(function() { // Вызываем функцию по нажатию на кнопку
    var popup = $('#' + $(this).attr("rel")); // Связываем rel и popup_id
    $(popup).show(); // Открываем окно
    $('.overlay_popup').show(); // Открываем блок заднего фона
})
$('.overlay_popup').click(function() { // Обрабатываем клик по заднему фону
    $('.overlay_popup, .popup').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
})



  $('.menu-icon').click(function () {
      $('nav').slideToggle(500);
      $('ul.menu').css({
         'display': 'block'
      });
      if ($('.menu-icon').html() == '<i class="fas fa-bars"></i>') {
         $(this).html('<i class="fas fa-times"></i>');
      } else {
         $(this).html('<i class="fas fa-bars"></i>');
      }
   });