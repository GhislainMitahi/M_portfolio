let button = document.querySelector('.button');
let navToggle = document.querySelector('.nav');
button.addEventListener('click',()=>{
    button.classList.toggle('active');
    navToggle.classList.toggle("active");
})
