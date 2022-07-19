const button = document.querySelector('.button');
const navToggle = document.querySelector('.nav');
const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');
const headContent = document.querySelector('.head-content');

link1.addEventListener('click', () => {
  button.classList.remove('active');
  navToggle.classList.remove('active');
  headContent.classList.toggle('active');
});

link2.addEventListener('click', () => {
  button.classList.remove('active');
  navToggle.classList.remove('active');
  headContent.classList.toggle('active');
});

link3.addEventListener('click', () => {
  button.classList.remove('active');
  navToggle.classList.remove('active');
  headContent.classList.toggle('active');
});

button.addEventListener('click', () => {
  button.classList.toggle('active');
  navToggle.classList.toggle('active');
  headContent.classList.toggle('active');
});
