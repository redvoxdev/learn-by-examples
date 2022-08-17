const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const audio = document.querySelector('audio');
const timeBox = document.querySelector(".time");
const btnStart = document.querySelector(".button-start");
let lastHole;
let timeUp = false;
let score = 0;
let count = 100;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    console.log('Ah nah thats the same one bud');
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

function withZero(num) {
  const zeroOrEpmty = parseInt(num, 10) < 10 ? "0" : "";
  return `${zeroOrEpmty}${num}`;
}

function showCount() {
  timeBox.innerHTML = `${withZero(count = count - 1)}`;
}

function endGame(interval) {
  timeUp = true;
  clearInterval(interval);
  timeBox.innerHTML = '00';
  count = 100;
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  const interval = setInterval(showCount, 100);
  setTimeout(() => endGame(interval), 10000)
}

function bonk(e) {
  if(!e.isTrusted) return; 
  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
  audio.currentTime = 0;
  audio.play();
}

btnStart.addEventListener('click', startGame)

moles.forEach(mole => mole.addEventListener('click', bonk));