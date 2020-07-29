const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
const move = document.querySelector(".tree_btn");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;
  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});

document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".layer").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerWidth - e.pageY * speed) / 100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

document.querySelector('.tree_btn').addEventListener('click', function() {
  document.querySelector('.triangle').classList.toggle('active')
  document.querySelector('.box').classList.toggle('active')
});


let audioFile = new Audio('audio/christmas.mp3')
document.querySelector('#play-btn').addEventListener('click', function() {
  var playBtn = document.getElementById('play-btn');
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
});