//  colorpicker  напиши скрипт который динамически создаст разметку карточек
// с цветами из обекта colors.
// сделай так чтобы при нажатии на цвет, карточке применялись стили активной карты
//  а бекраунд боди становился таким же как цвет карточки
// такжк реализуй возврат к белому фону при неактивных картах
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#e91e63', rgb: '233,30,99' },
//   { hex: '#9c27b0', rgb: '156,39,176' },
//   { hex: '#673ab7', rgb: '103,58,183' },
//   { hex: '#3f51b5', rgb: '63,81,181' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#00bcd4', rgb: '0,188,212' },
//   { hex: '#009688', rgb: '0,150,136' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
//   { hex: '#ff9800', rgb: '255,152,0' },
//   { hex: '#795548', rgb: '121,85,72' },
//   { hex: '#607d8b', rgb: '96,125,139' },
// ];

// const paletteColorRef = document.querySelector('.palette');

// const createColorCardsMarkup = colorOptions => {
//   return colorOptions
//     .map(({ hex, rgb }) => {
//       return `<div class="color-card">
//    <div>
//      <div>
//        <div>
//          <div
//            class="color-swatch"
//            data-hex="${hex}"
//            data-rgb="${rgb}"
//            style="background-color: ${hex}"
//          ></div>
//        </div>
//      </div>
//    </div>
//    <div class="color-meta">
//      <p>HEX:${hex}</p>
//      <p>RGB:${rgb}</p>
//    </div>
//  </div>`;
//     })
//     .join('');
// };
// const colorCardMarcup = createColorCardsMarkup(colors);

// paletteColorRef.insertAdjacentHTML('beforeend', colorCardMarcup);

// paletteColorRef.addEventListener('click', onColorSwatchClick);

// function onColorSwatchClick(event) {
//   if (!event.target.classList.contains('color-swatch')) return;

//   const activeCard = document.querySelector('.color-card.is-active');
//   activeCard?.classList.remove('is-active');

//   const currentCard = event.target.closest('.color-card');
//   if (activeCard === currentCard) {
//     document.body.style.backgroundColor = 'white';
//     return;
//   }
//   currentCard.classList.toggle('is-active');
//   document.body.style.backgroundColor = event.target.dataset.hex;
// }
