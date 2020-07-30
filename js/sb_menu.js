"use strict";

document.querySelector(".members").addEventListener("click", function () {
  document.querySelector(".member__box").classList.toggle("active");
});

/* WIP!!!!!!!! */
function btnCross() {
  document.querySelector("#mtop").classList.toggle("changes-top");
  document.querySelector("#mbot").classList.toggle("changes-bot");
  document.querySelector(".xbox").classList.toggle("xbox-click");
  document.querySelector(".menu").classList.toggle("js-menu");
  document.querySelector(".hide-clock").classList.toggle("js-hide-clock");
}
