$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

    if ($(this).scrollTop() > $nav.height()) {
      $('.top').fadeIn(500);
    } else {
      $('.top').fadeOut(500);
    }
  })
});

$(".top").click(function () {
  $(window).scrollTop(0);
});

$('.moblie-menu-img').click(function () {
  if ($(this).hasClass('is-open')) {
    $(this).removeClass('is-open');
  }
  else {
    $(this).addClass('is-open')
  }

  if ($('.mobile-menu').hasClass('is-open')) {
    $('.mobile-menu').removeClass('is-open');
  }
  else {
    $('.mobile-menu').addClass('is-open')
  }

})
