"use strict";


/* MEMBER BOX EFFECT */
document.querySelector(".members").addEventListener("click", function () {
  document.querySelector(".member__box").classList.toggle("active");
  document.querySelector(".member__box__box1").classList.toggle("showing1");
  document.querySelector(".member__box__box2").classList.toggle("showing2");
  document.querySelector(".member__box__box3").classList.toggle("showing3");

});


/* WHAT BOX EFFECT */ /* WIPWIPWIPWIPWIPWIPWIPWIPWIPWIPWIP */
document.querySelector(".what").addEventListener("click", function(){
  document.querySelector(".ico-gooc__column").classList.toggle("move");
});

/* WIP!!!!!!!! */
function btnCross() {
  document.querySelector("#mtop").classList.toggle("changes-top");
  document.querySelector("#mbot").classList.toggle("changes-bot");
  document.querySelector(".xbox").classList.toggle("xbox-click");
  document.querySelector(".menu").classList.toggle("js-menu");
  document.querySelector(".hide-clock").classList.toggle("js-hide-clock");
  document.querySelector(".ico-md-1").classList.toggle("js-ico-md");
  document.querySelector(".ico-md-2").classList.toggle("js-ico-md");
  document.querySelector(".titleName").classList.toggle("js-titleName");
}

