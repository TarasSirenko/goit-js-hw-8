const imgArr = [
  {
    src: 'https://picsum.photos/id/237/420/640',
    alt: '',
    width: '640',
  },
  {
    src: 'https://picsum.photos/id/27/420/640',
    alt: '',
    width: '640',
  },
  {
    src: 'https://picsum.photos/id/277/420/640',
    alt: '',
    width: '640',
  },
  {
    src: 'https://picsum.photos/id/17/420/640',
    alt: '',
    width: '640',
  },
  {
    src: 'https://picsum.photos/id/256/420/640',
    alt: '',
    width: '640',
  },
  {
    src: 'https://picsum.photos/id/14/420/640',
    alt: '',
    width: '640',
  },
  {
    src: 'https://picsum.photos/id/16/420/640',
    alt: '',
    width: '640',
  },
  {
    src: 'https://picsum.photos/id/11/420/640',
    alt: '',
    width: '640',
  },
  {
    src: 'https://picsum.photos/id/10/420/640',
    alt: '',
    width: '640',
  },
  {
    src: 'https://picsum.photos/id/287/420/640',
    alt: '',
    width: '640',
  },
  {
    src: 'https://picsum.photos/id/24/420/640',
    alt: '',
    width: '640',
  },
  {
    src: 'https://picsum.photos/id/23/420/640',
    alt: '',
    width: '640',
  },
];

const imgRef = document.querySelectorAll('img');
const feedContainerRef = document.querySelector('.feed');
console.log(imgRef);
let i = 0;

// imgRef.forEach((img, i) => {
//   img.src = imgArr[i].src;
// });

const options = {
  rootMargin: '500px',
  threshold: '',
  root: feedContainerRef,
};
const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = imgArr[i].src;
      observer.unobserve(entry.target);
      i += 1;
    }
  });
};

const observer = new IntersectionObserver(onEntry, options);

imgRef.forEach(img => {
  observer.observe(img);
});
