"use strict";

/* MEMBER BOX EFFECT */
let mem = 1;
document.querySelector(".members").addEventListener("click", memberImage);
function memberImage() {
  document.querySelector(".member__box").classList.toggle("active");
  document.querySelector(".member__box__box").classList.toggle("showing");
}

document.querySelector(".what").addEventListener("click", function () {
document.querySelector(".ico-gooc__column").classList.toggle("move");
});

let paint = 1;
function paintDrowing(){
  if (paint == "1"){
    document.querySelector(".canvas__box").style.display = "flex";
    paint = 0;
  } else if (paint == "0"){
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
  document.querySelector(".member__box__box").classList.remove("showing");
  document.querySelector(".canvas__box").classList.remove("showing");
  cross = 1;
}
