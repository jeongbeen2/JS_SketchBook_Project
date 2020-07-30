let playlist = [];
playlist[0] = new Audio("audio/gooddie.mp3");

let playBtn = document.getElementById("play-btn");

let songs = playlist.length;
let idx = 0;

// 재생버튼 누르면 일시정지버튼
let pause = 1;
document.querySelector("#play").addEventListener("click", playMusic);
function playMusic() {
  if (pause % 2 == "1") {
    document.getElementById("play").src = "css/img/pause.png";
    playlist[idx].play();
    playlist[idx].addEventListener("ended", function () {
      nextSong();
    });
  } else if (pause % 2 == "0") {
    document.getElementById("play").src = "css/img/play.png";
    playlist[idx].pause();
  }
  pause++;
}

// 정지버튼
document.querySelector("#stop-btn").addEventListener("click", stopMusic);
function stopMusic() {
  playlist[idx].pause();
  playlist[idx].currentTime = 0;
  document.getElementById("play").src = "css/img/play.png";
  pause++;
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
    document.getElementById("vol").src = "css/img/vol2.png";
  }
}

document.querySelector("#volume-down").addEventListener("click", volDown);
function volDown() {
  if (playlist[idx].volume < 0.1) {
    playlist[idx].volume = 0;
    document.getElementById("vol").src = "css/img/mute2.png";
    mute++;
  } else {
    playlist[idx].volume -= 0.1;
  }
}

// 음소거버튼
let mute = 1;
document.querySelector("#volume").addEventListener("click", muteAll);
function muteAll() {
  if (mute % 2 == "1") {
    document.getElementById("vol").src = "css/img/mute2.png";
    playlist[idx].volume = 0;
  } else if (mute % 2 == "0") {
    document.getElementById("vol").src = "css/img/vol2.png";
    playlist[idx].volume = 0.5;
  }
  mute++;
}

document.querySelector(".coffin__btn").addEventListener("click", playMusic);
let jja = 1;
function jjajan() {
  if (jja % 2 == "1") {
    document.querySelector('.music').style.display = "flex";
  } else if (jja % 2 == "0") {
    document.querySelector('.music').style.display = "none";
  }
  jja++;
}
document.querySelector(".coffin__btn").addEventListener("click", jjajan);