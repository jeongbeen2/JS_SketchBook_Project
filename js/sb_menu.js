"use strict";

/* What's BOX EFFECT */

let wht = true;
function whatBox() {
  if (wht === true) {
    document.querySelector(".ico-md-1").classList.add("spin");
    document.querySelector(".ico-md-2").classList.add("swing");
    wht = false;
  } else if (wht === false) {
    document.querySelector(".ico-md-1").classList.remove("spin");
    document.querySelector(".ico-md-2").classList.remove("swing");
    document.querySelector(".ico-gooc").style.display = "flex";
    document.querySelector(".ico-gooc").classList.add("showing__up");
    wht = true;
  }
}
document.querySelector(".what").addEventListener("click", whatBox);

/* MEMBER BOX EFFECT */
let mem = 1;
let member__box = $(".member__box");
let profile = $(".profile");

document.querySelector(".members").addEventListener("click", function() {
  if (mem == 0 || career == false || paint == 0 || jja == 0) {
    if (career == false || paint == 0 || jja == 0) {
      contentsReset();
    }
    if (mem == 1) {
      setTimeout(memberBox, 1000);
    } else {
      memberBox();
    }
  } else if (mem == 1) {
    memberBox();
  }
});
function memberBox() {
  if (mem == "1") {
    member__box.fadeIn(1000);
    member__box.css("display", "flex");
    profile.animate(
      { marginLeft: "150px" },
      { duration: 1000, queue: false }
    );
    profile.animate(
      { marginRight: "150px" },
      { duration: 1000, queue: false }
    );
    mem = 0;
  } else if (mem == "0") {
    profile.animate(
      { marginLeft: "0px" },
      { duration: 1000, queue: false }
    );
    profile.animate(
      { marginRight: "0px" },
      { duration: 1000, queue: false }
    );
    member__box.fadeOut(1000);
    mem = 1;
  }
}
// Career box
let career = true;
let career__box = $(".career__box");

function careerBox() {
  if (career == true) {
    career__box.fadeIn(1000);
    career__box.css("display", "flex");
    career = false;
  } else {
    resetCr();
    career__box.fadeOut(1000);
    career = true;
  }
}
document.querySelector(".career").addEventListener("click", function () {
  if (mem == 0 || career == false || paint == 0 || jja == 0) {
    if (mem == 0 || paint == 0 || jja == 0) {
      contentsReset();
    }
    if (career == true) {
      setTimeout(careerBox, 1000);
    } else {
      careerBox();
    }
  } else if (career == true) {
    careerBox();
  }
});

function resetCr() {
  document.querySelector(".cr__img1").style.display = "none";
  document.querySelector(".cr__img2").style.display = "none";
  document.querySelector(".cr__img3").style.display = "none";
  document.querySelector(".cr__img4").style.display = "none";
}

// JQuery 입성! 이걸외않써!
let cr_1 = true;
let cr_2 = true;
let cr_3 = true;
let cr_4 = true;
let cr__img1 = $(".cr__img1");
let cr__img2 = $(".cr__img2");
let cr__img3 = $(".cr__img3");
let cr__img4 = $(".cr__img4");

function cr1() {
  cr_2 = true;
  cr_3 = true;
  cr_4 = true;
  if (cr_1 == true) {
    resetCr();
    cr__img1.fadeIn(1000);
    cr_1 = false;
  } else {
    cr__img1.fadeOut(1000);
    cr_1 = true;
  }
}
// $(".cr1").on("click", cr1);
document.querySelector(".cr1").addEventListener("click", cr1);

function cr2() {
  cr_1 = true;
  cr_3 = true;
  cr_4 = true;
  if (cr_2 == true) {
    resetCr();
    cr__img2.fadeIn(1000);
    cr_2 = false;
  } else {
    cr__img2.fadeOut(1000);
    cr_2 = true;
  }
}
// $(".cr2").on("click", cr2);
document.querySelector(".cr2").addEventListener("click", cr2);

function cr3() {
  cr_2 = true;
  cr_1 = true;
  cr_4 = true;
  if (cr_3 == true) {
    resetCr();
    cr__img3.fadeIn(1000);
    cr_3 = false;
  } else {
    cr__img3.fadeOut(1000);
    cr_3 = true;
  }
}
// $(".cr3").on("click", cr3);
document.querySelector(".cr3").addEventListener("click", cr3);

function cr4() {
  cr_2 = true;
  cr_3 = true;
  cr_1 = true;
  if (cr_4 == true) {
    resetCr();
    cr__img4.fadeIn(1000);
    cr_4 = false;
  } else {
    cr__img4.fadeOut(1000);
    cr_4 = true;
  }
}
// $(".cr4").on("click", cr4);
document.querySelector(".cr4").addEventListener("click", cr4);

/* PAINTING EFFECT */
let paint = 1;
let canvas__box = $(".canvas__box");

function paintDrowing() {
  if (paint == "1") {
    canvas__box.fadeIn(1000);
    canvas__box.css("display", "flex");
    paint = 0;
  } else if (paint == "0") {
    canvas__box.fadeOut(1000);
    paint = 1;
  }
}
document.querySelector(".painting").addEventListener("click", function() {
  if (mem == 0 || career == false || paint == 0 || jja == 0) {
    if (career == false || mem == 0 || jja == 0) {
      contentsReset();
    }
    if (paint == 1) {
      setTimeout(paintDrowing, 1000);
    } else {
      paintDrowing();
    }
  } else if (paint == 1) {
    paintDrowing();
  }
});


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
  contentsReset();
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

function contentsReset() {
  if (mem == 0) {
    memberBox();
  }
  if (career == false) {
    careerBox();
  }
  if (paint == 0) {
    paintDrowing();
  }
  if (jja == 0) {
    music();
    jjajan();
  }
}
