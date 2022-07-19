const button = document.querySelector('.button');
const navToggle = document.querySelector('.nav');

button.addEventListener('click', () => {
  button.classList.toggle('active');
  navToggle.classList.toggle('active');
});
