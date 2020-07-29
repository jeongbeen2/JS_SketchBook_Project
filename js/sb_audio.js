let audioFile = new Audio("audio/christmas.mp3");
document.querySelector("#play-btn").addEventListener("click", function () {
  var playBtn = document.getElementById("play-btn");
  if (playBtn.classList.contains("pause")) {
    audioFile.pause();
    document.querySelector("#play-btn").classList.remove("pause");
  } else {
    audioFile.play();
    document.querySelector("#play-btn").classList.add("pause");
  }
});

document.querySelector("#stop-btn").addEventListener("click", function () {
  audioFile.pause();
  audioFile.currentTime = 0;
  var playBtn = document.getElementById("play-btn");
  if (playBtn.classList.contains("pause")) {
    audioFile.pause();
    audioFile.currentTime = 0;
    document.querySelector("#play-btn").classList.remove("pause");
  }
});
