const readMoreBtn = document.querySelector('.text-coffee');
const text = document.querySelector('.btn-coffee');

readMoreBtn.addEventListener('click', () => {
  text.classList.toggle('show-more');
});