"use strict";


let playlist = [];
playlist[0] = new Audio("audio/gooddie.mp3");
playlist[1] = new Audio("audio/christmas.mp3");
playlist[2] = new Audio("audio/santa.mp3");
playlist[3] = new Audio("audio/last.mp3");

let playBtn = document.getElementById("play-btn");

let songs = playlist.length;
let idx = 0;

// 재생버튼 누르면 일시정지버튼
let pause = 1;
document.querySelector("#play").addEventListener("click", playMusic);
function playMusic() {
  if (pause == "1") {
    document.getElementById("play").src = "css/img/pause.png";
    playlist[idx].play();
    playlist[idx].addEventListener("ended", function () {
      nextSong();
    });
    pause = 0;
  } else if (pause == "0") {
    document.getElementById("play").src = "css/img/play.png";
    playlist[idx].pause();
    pause = 1;
  }
}

// 정지버튼
document.querySelector("#stop-btn").addEventListener("click", stopMusic);
function stopMusic() {
  playlist[idx].pause();
  playlist[idx].currentTime = 0;
  document.getElementById("play").src = "css/img/play.png";
  pause = 1;
}

// 이전곡, 다음곡
document.querySelector("#previous").addEventListener("click", prevSong);
function prevSong() {
  playlist[idx].pause();
  playlist[idx].currentTime = 0;
  --idx;
  if (idx < 0) {
    idx = songs - 1;
  }
  playlist[idx].play();
}

document.querySelector("#next").addEventListener("click", nextSong);
function nextSong() {
  playlist[idx].pause();
  playlist[idx].currentTime = 0;
  ++idx;
  if (idx >= songs) {
    idx = 0;
  }
  playlist[idx].play();
}

// 볼륨조절
playlist[idx].volume = 0.5;
document.querySelector("#volume-up").addEventListener("click", volUp);
function volUp() {
  if (playlist[idx].volume > 0.9) {
    alert("볼륨이 최대입니다!");
    playlist[idx].volume = 1.0;
  } else {
    playlist[idx].volume += 0.1;
    mute = 0;
    document.getElementById("vol").src = "css/img/vol2.png";
  }
}

document.querySelector("#volume-down").addEventListener("click", volDown);
function volDown() {
  if (playlist[idx].volume < 0.1) {
    playlist[idx].volume = 0;
    document.getElementById("vol").src = "css/img/mute2.png";
    mute = 1;
  } else {
    playlist[idx].volume -= 0.1;
  }
}

// 음소거버튼
let mute = 1;
document.querySelector("#volume").addEventListener("click", muteAll);
function muteAll() {
  if (mute == "1") {
    document.getElementById("vol").src = "css/img/mute2.png";
    playlist[idx].volume = 0;
    mute = 0;
  } else if (mute == "0") {
    document.getElementById("vol").src = "css/img/vol2.png";
    playlist[idx].volume = 0.5;
    mute = 1;
  }
}

document.querySelector(".coffin__btn").addEventListener("click", function() {
  if (jja == 1) {
    pause = 1;
    playMusic();
  } else if (jja == 0) {
    pause = 0;
    playMusic();
  }
});

let jja = 1;
function jjajan() {
  if (jja == "1") {
    document.querySelector('.music').style.display = "flex";
    jja = 0;
  } else if (jja == "0") {
    document.querySelector('.music').style.display = "none";
    jja = 1;
  }
}
document.querySelector(".coffin__btn").addEventListener("click", jjajan);


document.querySelector("#play-list").addEventListener("click", function() {
  document.querySelector("#popup").style.display="block";
  document.querySelector("#close-btn").addEventListener("click", function() {
    document.querySelector("#popup").style.display="none";
  })
});

document.querySelector('#song1').addEventListener("dblclick", function() {
  stopMusic();
  idx = 0;
  playMusic();
});
document.querySelector('#song1').addEventListener("click", function() {
  document.querySelector('#song1').style.backgroundColor="#AFEEEE";
  document.querySelector('#song2').style.backgroundColor="transparent";
  document.querySelector('#song3').style.backgroundColor="transparent";
  document.querySelector('#song4').style.backgroundColor="transparent";
});


document.querySelector('#song2').addEventListener("dblclick", function() {
  stopMusic();
  idx = 1;
  playMusic();
})
document.querySelector('#song2').addEventListener("click", function() {
  document.querySelector('#song2').style.backgroundColor="#AFEEEE";
  document.querySelector('#song1').style.backgroundColor="transparent";
  document.querySelector('#song3').style.backgroundColor="transparent";
  document.querySelector('#song4').style.backgroundColor="transparent";
});


document.querySelector('#song3').addEventListener("dblclick", function() {
  stopMusic();
  idx = 2;
  playMusic();
})
document.querySelector('#song3').addEventListener("click", function() {
  document.querySelector('#song3').style.backgroundColor="#AFEEEE";
  document.querySelector('#song1').style.backgroundColor="transparent";
  document.querySelector('#song2').style.backgroundColor="transparent";
  document.querySelector('#song4').style.backgroundColor="transparent";
});


document.querySelector('#song4').addEventListener("dblclick", function() {
  stopMusic();
  idx = 3;
  playMusic();
})
document.querySelector('#song4').addEventListener("click", function() {
  document.querySelector('#song4').style.backgroundColor="#AFEEEE";
  document.querySelector('#song1').style.backgroundColor="transparent";
  document.querySelector('#song2').style.backgroundColor="transparent";
  document.querySelector('#song3').style.backgroundColor="transparent";
});