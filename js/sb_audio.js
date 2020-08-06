"use strict";


let playlist = [];
playlist[0] = new Audio("audio/automobile.mp3");
playlist[1] = new Audio("audio/gooddie.mp3");
playlist[2] = new Audio("audio/christmas.mp3");
playlist[3] = new Audio("audio/santa.mp3");
playlist[4] = new Audio("audio/last.mp3");

let playBtn = document.getElementById("play-btn");

let songs = playlist.length;
let idx = 0;

let nowPlay1 = document.getElementById("now-playing1")
let nowPlay2 = document.getElementById("now-playing2")
if (idx == 0) {
  nowPlay1.innerText="DJ RR - Bike Dance (Remix)";
  nowPlay2.innerText="DJ RR - Bike Dance (Remix)";
} else if (idx == 1) {
  nowPlay1.innerText="Stephan F - Astronomia 2K19 (Radio Mix)";
  nowPlay2.innerText="Stephan F - Astronomia 2K19 (Radio Mix)";
} else if (idx == 2) {
  nowPlay1.innerText="Mariah Carey - All I Want For Christmas Is You";
  nowPlay2.innerText="Mariah Carey - All I Want For Christmas Is You";
} else if (idx == 3) {
  nowPlay1.innerText="Ariana Grande - Santa Tell Me";
  nowPlay2.innerText="Ariana Grande - Santa Tell Me";
} else if (idx == 4) {
  nowPlay1.innerText="Wham - Last Christmas";
  nowPlay2.innerText="Wham - Last Christmas";
}

// 재생버튼 누르면 일시정지버튼
let pause = 1;
document.querySelector("#play").addEventListener("click", playMusic);
function playMusic() {
  if (pause == "1") {
    document.getElementById("play").src = "css/img/pause.png";
    playlist[idx].play();
    playlist[idx].volume = slider.value / 100;
    playlist[idx].addEventListener("ended", function () {
      nextSong();
    });
    pause = 0;
  } else if (pause == "0") {
    document.getElementById("play").src = "css/img/play.png";
    playlist[idx].pause();
    pause = 1;
  }
  if (playlist[idx].muted == true) {
    document.getElementById("vol").src = "css/img/mute2.png";
    slider.value = playlist[idx].volume;
  } else if (playlist[idx].muted == false) {
    document.getElementById("vol").src = "css/img/vol2.png";
    slider.value = playlist[idx].volume * 100;
  }
}

// 정지버튼
document.querySelector("#stop-btn").addEventListener("click", stopMusic);
function stopMusic() {
  playlist[idx].pause();
  playlist[idx].currentTime = 0;
  document.getElementById("play").src = "css/img/play.png";
  pause = 1;
  if (playlist[idx].muted == true) {
    document.getElementById("vol").src = "css/img/mute2.png";
    slider.value = playlist[idx].volume;
  } else if (playlist[idx].muted == false) {
    document.getElementById("vol").src = "css/img/vol2.png";
    slider.value = playlist[idx].volume * 100;
  }
}

// 이전곡
let ktx = 0;
function volumeInherit() {  
  if (playlist[ktx].muted == false) {
    playlist[idx].muted = false;
    playlist[idx].volume = playlist[ktx].volume;
    slider.value = playlist[idx].volume * 100;
  } else if (playlist[ktx].muted == true) {    
    playlist[idx].volume = playlist[ktx].volume;
    playlist[idx].muted = true;
    slider.value = playlist[idx].volume;
  }
}
document.querySelector("#previous").addEventListener("click", prevSong);
function prevSong() {
  playlist[idx].pause();
  playlist[idx].currentTime = 0;
  document.getElementById("play").src = "css/img/pause.png";
  pause = 0;
  --idx;
  if (idx < 0) {
    idx = songs - 1;
  }
  if (idx >= songs - 1) {
    ktx = 0;
  } else {
    ktx = idx + 1;
  }
  playlist[idx].play();
  volumeInherit();
  if (idx == 0) {
    nowPlay1.innerText="DJ RR - Bike Dance (Remix)";
    nowPlay2.innerText="DJ RR - Bike Dance (Remix)";
  } else if (idx == 1) {
    nowPlay1.innerText="Stephan F - Astronomia 2K19 (Radio Mix)";
    nowPlay2.innerText="Stephan F - Astronomia 2K19 (Radio Mix)";
  } else if (idx == 2) {
    nowPlay1.innerText="Mariah Carey - All I Want For Christmas Is You";
    nowPlay2.innerText="Mariah Carey - All I Want For Christmas Is You";
  } else if (idx == 3) {
    nowPlay1.innerText="Ariana Grande - Santa Tell Me";
    nowPlay2.innerText="Ariana Grande - Santa Tell Me";
  } else if (idx == 4) {
    nowPlay1.innerText="Wham - Last Christmas";
    nowPlay2.innerText="Wham - Last Christmas";
  }
}

// 다음곡
document.querySelector("#next").addEventListener("click", nextSong);
function nextSong() {
  playlist[idx].pause();
  playlist[idx].currentTime = 0;
  document.getElementById("play").src = "css/img/pause.png";
  pause = 0;
  ++idx;
  if (idx >= songs) {
    idx = 0;
  } 
  if (idx < 1) {
    ktx = songs - 1;
  } else {
    ktx = idx - 1;
  }
  playlist[idx].play();
  volumeInherit();
  if (idx == 0) {
    nowPlay1.innerText="DJ RR - Bike Dance (Remix)";
    nowPlay2.innerText="DJ RR - Bike Dance (Remix)";
  } else if (idx == 1) {
    nowPlay1.innerText="Stephan F - Astronomia 2K19 (Radio Mix)";
    nowPlay2.innerText="Stephan F - Astronomia 2K19 (Radio Mix)";
  } else if (idx == 2) {
    nowPlay1.innerText="Mariah Carey - All I Want For Christmas Is You";
    nowPlay2.innerText="Mariah Carey - All I Want For Christmas Is You";
  } else if (idx == 3) {
    nowPlay1.innerText="Ariana Grande - Santa Tell Me";
    nowPlay2.innerText="Ariana Grande - Santa Tell Me";
  } else if (idx == 4) {
    nowPlay1.innerText="Wham - Last Christmas";
    nowPlay2.innerText="Wham - Last Christmas";
  }
  
}

// 볼륨조절

let slider = document.getElementById("myRange");
slider.oninput = slideVol;
function slideVol() {
  playlist[idx].volume = this.value / 100;
  if (playlist[idx].volume <= 0.01) {
    document.getElementById("vol").src = "css/img/mute2.png";
  } else {
    document.getElementById("vol").src = "css/img/vol2.png";
  }
}


// 음소거버튼
let mute = 1;
document.querySelector("#volume").addEventListener("click", muteAll);
function muteAll() {
  if (mute == "1") {
    document.getElementById("vol").src = "css/img/mute2.png";
    playlist[idx].muted = true;
    slider.value = playlist[idx].volume;
    mute = 0;
  } else if (mute == "0") {
    document.getElementById("vol").src = "css/img/vol2.png";
    mute = 1;
    playlist[idx].muted = false;
    slider.value = playlist[idx].volume * 100;
  }
}


// Click Me 누르면 play 한번 더누르면 pause
document.querySelector(".coffin").addEventListener("click", music);
function music() {
  if (jja == 1) {
    pause = 1;
    playMusic();   
  } else if (jja == 0) {
    pause = 0;
    playMusic();
  }
}


// Click Me 누르면 뮤직플레이어 나타남 한번 더 누르면 사라짐
let jja = 1;
function jjajan() {
  if (jja == "1") {
    document.querySelector('.music').style.display = "inline-flex";
    jja = 0;
  } else if (jja == "0") {
    document.querySelector('.music').style.display = "none";
    jja = 1;
  }
}
document.querySelector(".coffin").addEventListener("click", jjajan);


// 플레이 리스트 누르면 popup으로 목록 나옴
document.querySelector("#play-list").addEventListener("click", function() {
  document.querySelector("#popup").style.display="block";
  document.querySelector("#close-btn").addEventListener("click", function() {
    document.querySelector("#popup").style.display="none";
  })
});


// 더블클릭 누르면 노래 바뀜 그냥 클릭 한번은 선택한 노래 배경색 바뀜
document.querySelector('#song1').addEventListener("dblclick", function() {
  stopMusic();
  playlist[ktx].volume = playlist[idx].volume;
  ktx = idx;
  idx = 0;
  playMusic();
  if (playlist[ktx].muted == true) {
    document.getElementById("vol").src = "css/img/mute2.png";
    playlist[idx].volume = playlist[ktx].volume;
    playlist[idx].muted = true;
    slider.value = playlist[idx].volume;
  } else if (playlist[idx].muted == false) {
    document.getElementById("vol").src = "css/img/vol2.png";
    playlist[idx].volume = playlist[ktx].volume;
    slider.value = playlist[idx].volume * 100;
  }
  nowPlay1.innerText="DJ RR - Bike Dance (Remix)";
  nowPlay2.innerText="DJ RR - Bike Dance (Remix)";
});
document.querySelector('#song1').addEventListener("click", function() {
  document.querySelector('#song1').style.backgroundColor="#AFEEEE";
  document.querySelector('#song2').style.backgroundColor="transparent";
  document.querySelector('#song3').style.backgroundColor="transparent";
  document.querySelector('#song4').style.backgroundColor="transparent";
  document.querySelector('#song5').style.backgroundColor="transparent";
});

document.querySelector('#song2').addEventListener("dblclick", function() {
  stopMusic();
  playlist[ktx].volume = playlist[idx].volume;
  ktx = idx;
  idx = 1;
  playMusic();
  if (playlist[ktx].muted == true) {
    document.getElementById("vol").src = "css/img/mute2.png";
    playlist[idx].volume = playlist[ktx].volume;
    playlist[idx].muted = true;
    slider.value = playlist[idx].volume;
  } else if (playlist[idx].muted == false) {
    document.getElementById("vol").src = "css/img/vol2.png";
    playlist[idx].volume = playlist[ktx].volume;
    slider.value = playlist[idx].volume * 100;
  }
  nowPlay1.innerText="Stephan F - Astronomia 2K19 (Radio Mix)";
  nowPlay2.innerText="Stephan F - Astronomia 2K19 (Radio Mix)";
});
document.querySelector('#song2').addEventListener("click", function() {
  document.querySelector('#song2').style.backgroundColor="#AFEEEE";
  document.querySelector('#song1').style.backgroundColor="transparent";
  document.querySelector('#song3').style.backgroundColor="transparent";
  document.querySelector('#song4').style.backgroundColor="transparent";
  document.querySelector('#song5').style.backgroundColor="transparent";
});


document.querySelector('#song3').addEventListener("dblclick", function() {
  stopMusic();
  playlist[ktx].volume = playlist[idx].volume;
  ktx = idx;
  idx = 2;
  playMusic();
  if (playlist[ktx].muted == true) {
    document.getElementById("vol").src = "css/img/mute2.png";
    playlist[idx].volume = playlist[ktx].volume;
    playlist[idx].muted = true;
    slider.value = playlist[idx].volume;
  } else if (playlist[idx].muted == false) {
    document.getElementById("vol").src = "css/img/vol2.png";
    playlist[idx].volume = playlist[ktx].volume;
    slider.value = playlist[idx].volume * 100;
    playlist[idx].volume = slider.value / 100;
  }
  nowPlay1.innerText="Mariah Carey - All I Want For Christmas Is You";
  nowPlay2.innerText="Mariah Carey - All I Want For Christmas Is You";
})
document.querySelector('#song3').addEventListener("click", function() {
  document.querySelector('#song3').style.backgroundColor="#AFEEEE";
  document.querySelector('#song1').style.backgroundColor="transparent";
  document.querySelector('#song2').style.backgroundColor="transparent";
  document.querySelector('#song4').style.backgroundColor="transparent";
  document.querySelector('#song5').style.backgroundColor="transparent";
});


document.querySelector('#song4').addEventListener("dblclick", function() {
  stopMusic();
  playlist[ktx].volume = playlist[idx].volume;
  ktx = idx;
  idx = 3;
  playMusic();
  if (playlist[ktx].muted == true) {
    document.getElementById("vol").src = "css/img/mute2.png";
    playlist[idx].volume = playlist[ktx].volume;
    playlist[idx].muted = true;
    slider.value = playlist[idx].volume;
  } else if (playlist[idx].muted == false) {
    document.getElementById("vol").src = "css/img/vol2.png";
    playlist[idx].volume = playlist[ktx].volume;
    slider.value = playlist[idx].volume * 100;
    playlist[idx].volume = slider.value / 100;
  }
  nowPlay1.innerText="Ariana Grande - Santa Tell Me";
  nowPlay2.innerText="Ariana Grande - Santa Tell Me";
})
document.querySelector('#song4').addEventListener("click", function() {
  document.querySelector('#song4').style.backgroundColor="#AFEEEE";
  document.querySelector('#song1').style.backgroundColor="transparent";
  document.querySelector('#song2').style.backgroundColor="transparent";
  document.querySelector('#song3').style.backgroundColor="transparent";
  document.querySelector('#song5').style.backgroundColor="transparent";
});


document.querySelector('#song5').addEventListener("dblclick", function() {
  stopMusic();
  playlist[ktx].volume = playlist[idx].volume;
  ktx = idx;
  idx = 4;
  playMusic();
  if (playlist[ktx].muted == true) {
    document.getElementById("vol").src = "css/img/mute2.png";
    playlist[idx].volume = playlist[ktx].volume;
    playlist[idx].muted = true;
    slider.value = playlist[idx].volume;
  } else if (playlist[idx].muted == false) {
    document.getElementById("vol").src = "css/img/vol2.png";
    playlist[idx].volume = playlist[ktx].volume;
    slider.value = playlist[idx].volume * 100;
    playlist[idx].volume = slider.value / 100;
  }
  nowPlay1.innerText="Wham - Last Christmas";
  nowPlay2.innerText="Wham - Last Christmas";
});
document.querySelector('#song5').addEventListener("click", function() {
  document.querySelector('#song5').style.backgroundColor="#AFEEEE";
  document.querySelector('#song1').style.backgroundColor="transparent";
  document.querySelector('#song2').style.backgroundColor="transparent";
  document.querySelector('#song3').style.backgroundColor="transparent";
  document.querySelector('#song4').style.backgroundColor="transparent";
});