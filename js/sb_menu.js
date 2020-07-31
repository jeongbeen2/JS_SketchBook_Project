"use strict";

/* MEMBER BOX EFFECT */
let mem = 1;
document.querySelector(".members").addEventListener("click", memberImage);
function memberImage() {
  if (mem % 2 == "0") {
    document.querySelector(".member__box").classList.add("active");
    document.querySelector(".member__box__box").classList.add("showing");
  } else if (mem % 2 == "1") {
    document.querySelector(".member__box").classList.remove("active");
    document.querySelector(".member__box__box").classList.remove("showing");
  }
  mem++;
}
document.querySelector(".xbox").addEventListener("click", memberImage);

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
