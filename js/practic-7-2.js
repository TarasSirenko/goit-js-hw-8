// Задача 2  -------------------------------------------------------------------------------------
// напиши калькулятор

const refs = {
  buttons: document.querySelector('.buttons'),
  output: document.querySelector('.output'),
};
const actionOperator = ['*', '/', '+', '-'];
let curentOutput = [];
let curentValue = 0;
let operator = '';
let result = 0;

const inputOperator = event => {
  //  введення числового значення
  if (event.target.classList.contains('number')) {
    if (actionOperator.includes(refs.output.textContent)) {
      refs.output.textContent = '';
    }
    refs.output.textContent += event.target.textContent;
  }
  //  С - видаляе все--------------------------------------------------------------
  if (event.target.textContent === 'C') {
    curentOutput = [];
    curentValue = 0;
    operator = '';
    result = 0;
    refs.output.textContent = '';
  }
  // < - видаляе один символ --------------------------------------------------------------
  if (event.target.textContent === '<' && refs.output.textContent !== '') {
    refs.output.textContent = refs.output.textContent.slice(
      0,
      refs.output.textContent.length - 1,
    );
  }
  // математичні оператори--------------------------------------------------------------
  if (
    event.target.textContent === '=' &&
    curentOutput.length >= 2 &&
    refs.output.textContent !== '' &&
    !actionOperator.includes(refs.output.textContent)
  ) {
    curentValue = parseFloat(refs.output.textContent);
    curentOutput.push(curentValue);
    result = curentOutput[0];
    for (let i = 0; i < curentOutput.length; i++) {
      if (curentOutput[i] === '+') result += curentOutput[i + 1];
      if (curentOutput[i] === '-') result -= curentOutput[i + 1];
      if (curentOutput[i] === '/') result = result / curentOutput[i + 1];
      if (curentOutput[i] === '*') result = result * curentOutput[i + 1];
    }
    refs.output.textContent = result;
  }
  // плаваюча точка--------------------------------------------------------------
  if (
    event.target.textContent === '.' &&
    !refs.output.textContent.includes('.') &&
    refs.output.textContent !== '' &&
    !actionOperator.includes(refs.output.textContent)
  ) {
    refs.output.textContent += event.target.textContent;
  }
  // вивести результат --------------------------------------------------------------
  if (parseFloat(refs.output.textContent)) {
    if (actionOperator.includes(event.target.textContent)) {
      curentValue = parseFloat(refs.output.textContent);
      operator = event.target.textContent;
      curentOutput.push(curentValue);
      curentOutput.push(operator);
      refs.output.textContent = event.target.textContent;
      operator = '';
    }
  }
};
refs.buttons.addEventListener('click', inputOperator);
