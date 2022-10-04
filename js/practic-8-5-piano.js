const noteDo = new Audio('./sounds/nota-do.mp3');
const noteRe = new Audio('./sounds/re.mp3');
const noteMi = new Audio('./sounds/mi.mp3');
const noteFa = new Audio('./sounds/nota-fa.mp3');
const noteSol = new Audio('./sounds/sol.mp3');
const noteIja = new Audio('./sounds/lja.mp3');
const noteSi = new Audio('./sounds/si.mp3');
// console.log(notaSi);

const pianoContainerRef = document.querySelector('.piano');
const pianoBtnRef = [...document.querySelectorAll('.not')];
pianoContainerRef.addEventListener('click', onButtonPianoClick);

function onButtonPianoClick(event) {
  if (event.target.textContent === 'do') noteDo.play();
  if (event.target.textContent === 're') noteRe.play();
  if (event.target.textContent === 'mi') noteMi.play();
  if (event.target.textContent === 'fa') noteFa.play();
  if (event.target.textContent === 'sol') noteSol.play();
  if (event.target.textContent === 'ija') noteIja.play();
  if (event.target.textContent === 'si') noteSi.play();
}

window.addEventListener('keydown', event => {
  if (event.code === 'Digit1')
    pianoBtnRef.find(btn => btn.textContent === 'do').click();
  if (event.code === 'Digit2')
    pianoBtnRef.find(btn => btn.textContent === 're').click();
  if (event.code === 'Digit3')
    pianoBtnRef.find(btn => btn.textContent === 'mi').click();
  if (event.code === 'Digit4')
    pianoBtnRef.find(btn => btn.textContent === 'fa').click();
  if (event.code === 'Digit5')
    pianoBtnRef.find(btn => btn.textContent === 'sol').click();
  if (event.code === 'Digit6')
    pianoBtnRef.find(btn => btn.textContent === 'ija').click();
  1;
  if (event.code === 'Digit7')
    pianoBtnRef.find(btn => btn.textContent === 'si').click();
});
