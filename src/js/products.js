const readMoreBtn = document.querySelector('.products__btn');
const text = document.querySelector('.products__item__text');

readMoreBtn.addEventListener('click', () => {
  text.classList.toggle('show-more');
});