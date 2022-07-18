let icon = document.querySelector('.fa-solid');

let header = document.querySelector('header');

let menu = document.querySelector('.menu');


icon.addEventListener('click',()=>{
    icon.classList.replace('fa-bars','fa-x');
    header.classList.add("activeheader");
    menu.classList.add("activemen");
})
