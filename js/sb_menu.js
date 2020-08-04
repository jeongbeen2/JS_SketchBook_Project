"use strict";

/* What's BOX EFFECT */

let wht = 1;
function whatBox() {
  if (wht == "1") {
    // document.querySelector(".what-gooc").style.display = "flex";
    document.querySelector(".ico-md-1").classList.add("spin");
    document.querySelector(".ico-md-2").classList.add("swing");
    // document.querySelector(".ico-gooc").style.display = "none";
    // document.querySelector(".ico-gooc").classList.add("showing__up");
    wht = 0;
  } else if (wht == "0") {
    // document.querySelector(".what-gooc").style.display = "none";
    document.querySelector(".ico-md-1").classList.remove("spin");
    document.querySelector(".ico-md-2").classList.remove("swing");
    document.querySelector(".ico-gooc").style.display = "flex";
    document.querySelector(".ico-gooc").classList.add("showing__up");
    wht = 1;
  }
}
document.querySelector(".what").addEventListener("click", whatBox);

/* MEMBER BOX EFFECT */
let mem = 1;

document.querySelector(".members").addEventListener("click", memberBox2);
function memberBox2() {
  if (mem == "1") {
    $(".member__box").fadeIn(1000);
    $(".member__box").css("display", "flex");
    $(".profile").animate({marginLeft: "150px"}, {duration: 1000, queue:false});
    $(".profile").animate({marginRight: "150px"}, {duration: 1000, queue: false});
    mem = 0;
  } else if (mem == "0") {
    $(".profile").animate({marginLeft: "0px"}, {duration: 1000, queue: false});
    $(".profile").animate({marginRight: "0px"}, {duration: 1000, queue: false});
    $(".member__box").fadeOut(1000);
    mem = 1;
  }
}

/* PAINTING EFFECT */
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
  document.querySelector(".contents").classList.remove("js-contents");
  cross = 1;
}

function menuReset() {
  document.querySelector(".what__Box").style.display = "none";
  document.querySelector(".member__box").style.display = "none";
  document.querySelector(".carrer__Box").style.display = "none";
  document.querySelector(".canvas__box").style.display = "none";
}

function openContents() {
  var element = document.querySelector(".contents");
  element.classList.add("js-contents");
}

