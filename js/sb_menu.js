"use strict";


/* MEMBER BOX EFFECT */
let mem = 1;
document.querySelector(".members").addEventListener("click", memberImage);
function memberImage() {
  if (mem % 2 == "0") {
    document.querySelector(".member__box").classList.add("active");
    document.querySelector(".member__box__box1").classList.add("showing1");
    document.querySelector(".member__box__box2").classList.add("showing2");
    document.querySelector(".member__box__box3").classList.add("showing3");
  } else if (mem % 2 == "1") {
    document.querySelector(".member__box").classList.remove("active");
    document.querySelector(".member__box__box1").classList.remove("showing1");
    document.querySelector(".member__box__box2").classList.remove("showing2");
    document.querySelector(".member__box__box3").classList.remove("showing3");
  }
  mem++;
}
document.querySelector(".xbox").addEventListener("click", memberImage);
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

