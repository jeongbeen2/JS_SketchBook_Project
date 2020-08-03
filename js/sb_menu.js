"use strict";

/* MEMBER BOX EFFECT */
let mem = 1;
function memberBox() {
  if (mem == "1") {
    document.querySelector(".member__box").style.display = "flex";
    document.querySelector(".member__box").classList.add("showing__up");
    mem = 0;
  } else if (mem == "0") {
    document.querySelector(".member__box").style.display = "none";
    mem = 1;
  }
}
document.querySelector(".members").addEventListener("click", memberBox);

document.querySelector(".what").addEventListener("click", function () {
  document.querySelector(".ico-gooc__column").classList.toggle("move");
});

let paint = 1;
function paintDrowing() {
  if (paint == "1") {
    document.querySelector(".canvas__box").style.display = "flex";
    document.querySelector(".canvas__box").classList.add("showing__up");
    paint = 0;
  } else if (paint == "0") {
    document.querySelector(".canvas__box").style.display = "none";
    paint = 1;
  }
}
document.querySelector(".painting").addEventListener("click", paintDrowing);
/* WIP!!!!!!!! */
let cross = 1;
function btnCross() {
  document.querySelector("#mtop").classList.add("changes-top");
  document.querySelector("#mbot").classList.add("changes-bot");
  document.querySelector(".xbox").classList.add("xbox-click");
  document.querySelector(".menu").classList.add("js-menu");
  document.querySelector(".hide-clock").classList.add("js-hide-clock");
  document.querySelector(".ico-md-1").classList.add("js-ico-md");
  document.querySelector(".ico-md-2").classList.add("js-ico-md");
  document.querySelector(".titleName").classList.add("js-titleName");
  cross = 2;
}
document.querySelector(".xbox").addEventListener("click", function () {
  if (cross == 1) {
    btnCross();
  } else if (cross == 2) {
    reset();
  }
});

function reset() {
  document.querySelector("#mtop").classList.remove("changes-top");
  document.querySelector("#mbot").classList.remove("changes-bot");
  document.querySelector(".xbox").classList.remove("xbox-click");
  document.querySelector(".menu").classList.remove("js-menu");
  document.querySelector(".hide-clock").classList.remove("js-hide-clock");
  document.querySelector(".ico-md-1").classList.remove("js-ico-md");
  document.querySelector(".ico-md-2").classList.remove("js-ico-md");
  document.querySelector(".titleName").classList.remove("js-titleName");
  document.querySelector(".member__box").classList.remove("active");
  document.querySelector(".member__box").style.display = "none";
  document.querySelector(".canvas__box").style.display = "none";
  cross = 1;
}

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
    $(".js-menu").addClass("js-scroll-menu");
    $(".xbox").addClass("js-scroll-xbox");
  } else {
    $(".header").removeClass("js-scroll-header");
    $(".ico-md-1").removeClass("js-scroll-ico-md-1");
    $(".ico-md-2").removeClass("js-scroll-ico-md-2");
    $(".ico-gooc").removeClass("js-scroll-ico-gooc");
    $(".hide-clock").removeClass("change");
    $(".titleName").removeClass("js-scroll-titleName");
    $(".menu__btn").removeClass("js-scroll-menu__btn");
    $(".js-menu").removeClass("js-scroll-menu");
    $(".xbox").removeClass("js-scroll-xbox");
  }
}
