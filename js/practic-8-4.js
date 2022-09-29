// зроби іграшку про динозавра що стрибае через кактуси
const refs = {
  dinosaur: document.querySelector('.dinosaur'),
  cactus: document.querySelector('.cactus'),
  lifeCounter: document.querySelector('.life-counter'),
  timeCounter: document.querySelector('.time-counter'),
  mesage: document.querySelector('.mesage'),
};

const dinoJump = event => {
  if (!(event.code === 'Space')) return;
  refs.dinosaur.classList.add('moves-dinosaur');
  document.removeEventListener('keydown', dinoJump);
  setTimeout(() => {
    refs.dinosaur.classList.remove('moves-dinosaur');
    document.addEventListener('keydown', dinoJump);
  }, 1000);
};

document.addEventListener('keydown', dinoJump);

let sec = 0;
let min = 0;
const timerOn = () => {
  if (sec === 59) {
    min += 1;
    sec = 0;
  }
  refs.timeCounter.textContent = `${min}:${(sec += 1)}`;
};

setInterval(() => {
  timerOn();
}, 1000);

const chengeCounterLife = () => {
  if (parseInt(refs.lifeCounter.textContent) > 1) {
    alert('You lost one life');
    refs.lifeCounter.textContent = `0${
      parseInt(refs.lifeCounter.textContent) - 1
    }`;
  } else {
    alert(`Gameover! You lasted ${min} minutes ${sec} seconds`);
    refs.lifeCounter.textContent = '04';
    sec = 0;
    min = 0;
  }
};
setInterval(() => {
  const positionDinoTop = window
    .getComputedStyle(refs.dinosaur)
    .getPropertyValue('top');
  const positionCactusLeft = window
    .getComputedStyle(refs.cactus)
    .getPropertyValue('left');
  if (
    parseInt(positionCactusLeft) < 285 &&
    parseInt(positionCactusLeft) > 200
  ) {
    if (!(parseInt(positionDinoTop) < 300)) {
      chengeCounterLife();
    }
  }
}, 10);
