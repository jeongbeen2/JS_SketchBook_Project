let audioFile = new Audio('audio/christmas.mp3')

let playBtn = document.getElementById('play-btn');

// 재생버튼 누르면 일시정지버튼
let pause = 1;
document.querySelector('#play').addEventListener('click', function() {
  if (pause % 2 == '1') {
    document.getElementById('play').src="css/img/pause.png";
    audioFile.play();
  } else if (pause % 2 == '0') {
    document.getElementById('play').src="css/img/play.png";
    audioFile.pause();
  }
  pause++;
})

// 정지버튼
document.querySelector('#stop-btn').addEventListener('click', function() {
  audioFile.pause();
  audioFile.currentTime = 0;
  document.getElementById('play').src="css/img/play.png";
  pause++;
});


// 볼륨조절
audioFile.volume = 0.5;
document.querySelector('#volume-up').addEventListener('click', function() {
  if (audioFile.volume > 0.9) {
    alert("볼륨이 최대입니다!")
  } else {
    audioFile.volume += 0.1;
  }
});

document.querySelector('#volume-down').addEventListener('click', function() {
  if (audioFile.volume < 0.1) {
    audioFile.volume = 0;
    document.getElementById("vol").src="css/img/mute2.png";
    mute++;
  } else {
    audioFile.volume -= 0.1;
  }
});

// 음소거버튼
let mute = 1;
document.querySelector('#volume').addEventListener('click', function() {
  if (mute % 2 == '1') {
    document.getElementById("vol").src="css/img/mute2.png";
    audioFile.volume = 0;
  } else if (mute % 2 == '0') {
    document.getElementById("vol").src="css/img/vol2.png";
    audioFile.volume = 0.5;
  }
  mute++;
})

