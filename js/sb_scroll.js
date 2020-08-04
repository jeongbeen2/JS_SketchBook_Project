$(document).on("scroll", naviBar);
function naviBar() {
  let h = $(window).scrollTop();
  if (h >= $(".js-listener-second").position().top) {
    $(".header").addClass("js-scroll-header");
    $(".ico-md-1").addClass("js-scroll-ico-md-1");
    $(".ico-md-2").addClass("js-scroll-ico-md-2");
    $(".ico-gooc").addClass("js-scroll-ico-gooc");
    $(".hide-clock").addClass("change");
    $(".titleName").addClass("js-scroll-titleName");
    $(".menu__btn").addClass("js-scroll-menu__btn");
    $(".menu").addClass("js-scroll-menu");
    $(".xbox").addClass("js-scroll-xbox");
    $(".music").addClass("js-scroll-music");
  } else {
    $(".header").removeClass("js-scroll-header");
    $(".ico-md-1").removeClass("js-scroll-ico-md-1");
    $(".ico-md-2").removeClass("js-scroll-ico-md-2");
    $(".ico-gooc").removeClass("js-scroll-ico-gooc");
    $(".hide-clock").removeClass("change");
    $(".titleName").removeClass("js-scroll-titleName");
    $(".menu__btn").removeClass("js-scroll-menu__btn");
    $(".menu").removeClass("js-scroll-menu");
    $(".xbox").removeClass("js-scroll-xbox");
    $(".music").removeClass("js-scroll-music");
  }
}
naviBar();
