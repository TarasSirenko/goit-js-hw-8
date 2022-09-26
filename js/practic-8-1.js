// Напиши скрипт который будет делать активным только один элемент коллекции
// const refs = {
//   wraperTag: document.querySelector('.wraper-tag'),
//   itemTag: document.querySelector('.tag-item'),
//   buttonTag: document.querySelector('.tag-button'),
// };

// refs.wraperTag.addEventListener('click', onTagButtonClick);

// function onTagButtonClick(event) {
//   if (event.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   let curentActivTag = event.currentTarget.querySelector('.tag-button--active');
//   curentActivTag?.classList.remove('tag-button--active');
//   event.target.classList.add('tag-button--active');
//   console.log(curentActivTag?.dataset.value);
// }

// А теперь сделай чтобы можно было выбрать много
// const tagArr = [];

// function onTagButtonClick(event) {
//   if (event.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   event.target.classList.toggle('tag-button--active');
//   if (tagArr.includes(event.target.dataset.value)) {
//     tagArr.splice(tagArr.indexOf(event.target.dataset.value), 1);
//   } else {
//     tagArr.push(event.target.dataset.value);
//   }

//   console.log(tagArr);
// }
