let audioFile = new Audio('audio/christmas.mp3')

let playBtn = document.getElementById('play-btn');
document.querySelector('#play-btn').addEventListener('click', function() {
  if (playBtn.classList.contains('pause')) {
    audioFile.pause();
    document.querySelector('#play-btn').classList.remove('pause');
  } else {
    audioFile.play();
    document.querySelector('#play-btn').classList.add('pause');
  }
});


document.querySelector('#stop-btn').addEventListener('click', function() {
  audioFile.pause();
  audioFile.currentTime = 0;
  if (playBtn.classList.contains('pause')) {
    audioFile.pause();
    audioFile.currentTime = 0;
    document.querySelector('#play-btn').classList.remove('pause');
  }
});
  
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
    alert("볼륨이 최소입니다!")
  } else {
    audioFile.volume -= 0.1;
  }
});

let count = 1;
document.querySelector('#volume').addEventListener('click', function() {
  if (count % 2 == '1') {
    document.getElementById("vol").src="css/img/mute2.png";
    audioFile.volume = 0;
  } else if (count % 2 == '0') {
    document.getElementById("vol").src="css/img/vol2.png";
    audioFile.volume = 0.5;
  }
  count++;
})