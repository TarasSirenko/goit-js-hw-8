//  Задача 1 "красная кнопка"
// 1) просит не нажимать
// 2) начинает двигаться (нужно попасть)
// 3) становиться прозрачной в рандомном месте нужно найти (через курсор поинтер)
// 4) становиться много кнопок (нужно найти ту самую)
// 5) появляеться инпут куда нужно ввести число пи
// 6) Финалю Убегает в рандомное место на экране. Невозможно попасть

const redButtonRef = document.querySelector('.red-button');
const mesageTextRef = document.querySelector('.mesage-text');

let counterClick = 0;

const randomPositionElement = `translate(${
  Math.random() * (500 + 500) - 500
}%, ${Math.random() * (500 + 500) - 500}%)`;

const startGameClick = event => {
  counterClick += 1;
  mesageTextRef.textContent = 'Не нажимать!!';
  event.target.classList.add('red-button--active');
  event.currentTarget.addEventListener('mouseup', event => {
    event.currentTarget.classList.remove('red-button--active');
  });
  console.log(counterClick);
  controlClickFn(counterClick);
};

const movesGameClick = event => {
  mesageTextRef.textContent = 'Теперь лови меня!';
  event.target.classList.add('moves');
  event.target.addEventListener('mousedown', event => {
    event.target.classList.remove('moves');
    mesageTextRef.textContent =
      'Ну красавчик, поймал. Но теперь точно не нажимай!';
  });
};
const findRedButtonGam = event => {
  mesageTextRef.textContent = 'Задолбал! Попробуй теперь меня найти!';
  event.target.classList.add('find');
  event.target.style.transform = randomPositionElement;
  event.target.addEventListener('mousedown', event => {
    event.target.classList.remove('find');
    event.target.style.transform = `translate(-50%,-50%)`;
    mesageTextRef.textContent =
      'Нашел! Невероятно просто, но ты особо не радуйся, у меня есть еще пару заданий.';
  });
};

const cloneRedButtonGam = event => {
  mesageTextRef.textContent = 'Попробуй теперь понять, кто из них Я';
  event.target.style.transform = randomPositionElement;
  for (let i = 0; i < 10; i++) {
    const clone = event.target.cloneNode(true);
    clone.style.transform = `translate(${Math.random() * (500 + 500) - 500}%, ${
      Math.random() * (500 + 500) - 500
    }%)`;
    clone.classList.add('clone');
    clone.addEventListener('click', event => {
      event.target.textContent = 'Мимо';
    });
    document.body.append(clone);
  }
  event.target.addEventListener('mousedown', event => {
    event.target.style.transform = `translate(-50%,-50%)`;
    document.body.innerHTML = '';
    mesageTextRef.textContent =
      'Жми. Задам тебе один вопрос, ответишь правильно, покажу тебе фокус!';
    document.body.append(event.target, mesageTextRef);
  });
};

const questionButtonGam = event => {
  console.log('dbfsrbvfwbfi');
  const inputRef = document.createElement('input');
  inputRef.setAttribute('placeholder', 'Введите число пи');
  inputRef.classList.add('user-input');
  console.log(inputRef);
  document.body.append(inputRef);
  event.target.classList.add('inactive-button');
  mesageTextRef.classList.add('inactive-button');
  inputRef.addEventListener('input', event => {
    console.log(event.target.value);
    if (event.target.value === '3.14') {
      mesageTextRef.textContent =
        'Молодец. Последнее задание будет слишком сложное ддля тебя. Попробуй клацнуть на меня) Поверь, это будет последний раз!!';
      event.target.remove();
      redButtonRef.classList.remove('inactive-button');
      mesageTextRef.classList.remove('inactive-button');
      redButtonRef.removeEventListener('mousedown', questionButtonGam);
    }
  });
};

const randomMovingEnd = event => {
  mesageTextRef.textContent = 'Ну че, поймать не можешь?)';
  event.target.style.transform = `translate(${
    Math.random() * (500 + 500) - 500
  }%, ${Math.random() * (500 + 500) - 500}%)`;
};
redButtonRef.addEventListener('mousedown', startGameClick);

const controlClickFn = counterClick => {
  switch (counterClick) {
    case 1:
      redButtonRef.addEventListener('mousedown', movesGameClick);
      break;
    case 3:
      redButtonRef.removeEventListener('mousedown', movesGameClick);
      redButtonRef.addEventListener('mousedown', findRedButtonGam);
      break;
    case 5:
      redButtonRef.removeEventListener('mousedown', findRedButtonGam);
      redButtonRef.addEventListener('mousedown', cloneRedButtonGam);
      break;
    case 7:
      redButtonRef.removeEventListener('mousedown', cloneRedButtonGam);
      redButtonRef.addEventListener('mousedown', questionButtonGam);
      break;
    case 8:
      redButtonRef.addEventListener('mouseover', randomMovingEnd);
      break;
  }
};
