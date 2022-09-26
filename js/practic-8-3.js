const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

const ref = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

const createListItemsMarkup = items => {
  return items
    .map(item => {
      return `<li>${item.label}</li>`;
    })
    .join('');
};

const listItemMarkup = createListItemsMarkup(tech);
ref.list.innerHTML = listItemMarkup;

ref.input.addEventListener('input', _.debounce(onInputFilterChange, 500));

function onInputFilterChange(event) {
  const currentValue = event.target.value.toLowerCase();
  const filtredItems = tech.filter(item =>
    item.label.toLowerCase().includes(currentValue),
  );
  ref.list.innerHTML = createListItemsMarkup(filtredItems);
}
