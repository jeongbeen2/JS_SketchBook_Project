let playlist = [];
playlist[0] = new Audio('audio/christmas.mp3');
playlist[1] = new Audio('audio/santa.mp3');
playlist[2] = new Audio('audio/last.mp3');

let playBtn = document.getElementById('play-btn');


let songs = playlist.length; 
let idx = 0;
if (++idx > songs) { 
  idx = 0; 
} else if (Math.abs(--idx) == songs) { 
  idx = 0; 
}

// 재생버튼 누르면 일시정지버튼
let pause = 1;
document.querySelector('#play').addEventListener('click', function() {
  if (pause % 2 == '1') {
    document.getElementById('play').src="css/img/pause.png";
    playlist[idx].play();
    playlist[idx].addEventListener('ended', function() {
      idx++;
      playlist[idx].play();
    }, false);
  } else if (pause % 2 == '0') {
    document.getElementById('play').src="css/img/play.png";
    playlist[idx].pause();
  }
  pause++;
});


// 정지버튼
document.querySelector('#stop-btn').addEventListener('click', function() {
  playlist[idx].pause();
  playlist[idx].currentTime = 0;
  document.getElementById('play').src="css/img/play.png";
  pause++;
});


// 이전곡, 다음곡
document.querySelector('#previous').addEventListener('click', function() {
  idx--;
  if (++idx > songs) { 
    idx = 0; 
  } else if (Math.abs(--idx) == songs) { 
    idx = 0; 
  }
});
document.querySelector('#next').addEventListener('click', function() {
  idx++;
  if (++idx > songs) { 
    idx = 0; 
  } else if (Math.abs(--idx) == songs) { 
    idx = 0; 
  }
});


// 볼륨조절
playlist[idx].volume = 0.5;
document.querySelector('#volume-up').addEventListener('click', function() {
  if (playlist[idx].volume > 0.9) {
    alert("볼륨이 최대입니다!")
  } else {
    playlist[idx].volume += 0.1;
  }
});

document.querySelector('#volume-down').addEventListener('click', function() {
  if (playlist[idx].volume < 0.1) {
    playlist[idx].volume = 0;
    document.getElementById("vol").src="css/img/mute2.png";
    mute++;
  } else {
    playlist[idx].volume -= 0.1;
  }
});


// 음소거버튼
let mute = 1;
document.querySelector('#volume').addEventListener('click', function() {
  if (mute % 2 == '1') {
    document.getElementById("vol").src="css/img/mute2.png";
    playlist[idx].volume = 0;
  } else if (mute % 2 == '0') {
    document.getElementById("vol").src="css/img/vol2.png";
    playlist[idx].volume = 0.5;
  }
  mute++;
})

