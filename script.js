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

const projet1 = {
  imageSrc: './assets/popop-desk.png',
  title: 'Keeping track of <br> hundreds of components',
  technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
  id: 'firstProject',
  popopDescription: {
    imageSrc: './assets/popop-desk.png',
    title: 'Keeping track of hundreds of components',
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    demoLink: 'https://ghislainmitahi.github.io/M_portfolio.github.io/',
    source: 'https://github.com/GhislainMitahi/M_portfolio',
  },
};
const projet2 = {
  imageSrc: './assets/popop-desk.png',
  title: 'Keeping track of <br> hundreds of components',
  technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
  id: 'secondProject',
  popopDescription: {
    imageSrc: './assets/popop-desk.png',
    title: 'Keeping track of hundreds of components',
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    demoLink: 'https://ghislainmitahi.github.io/M_portfolio.github.io/',
    source: 'https://github.com/GhislainMitahi/M_portfolio',
  },
};
const projet3 = {
  imageSrc: './assets/popop-desk.png',
  title: 'Keeping track of <br> hundreds of components',
  technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
  id: 'thirdProject',
  popopDescription: {
    imageSrc: './assets/popop-desk.png',
    title: 'Keeping track of hundreds of components',
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    demoLink: 'https://ghislainmitahi.github.io/M_portfolio.github.io/',
    source: 'https://github.com/GhislainMitahi/M_portfolio',
  },
};
const projet4 = {
  imageSrc: './assets/popop-desk.png',
  title: 'Keeping track of <br> hundreds of components',
  technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
  id: 'fourthProject',
  popopDescription: {
    imageSrc: './assets/popop-desk.png',
    title: 'Keeping track of hundreds of components',
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    demoLink: 'https://ghislainmitahi.github.io/M_portfolio.github.io/',
    source: 'https://github.com/GhislainMitahi/M_portfolio',
  },
};
const projet5 = {
  imageSrc: './assets/popop-desk.png',
  title: 'Keeping track of <br> hundreds of components',
  technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
  id: 'fifthProject',
  popopDescription: {
    imageSrc: './assets/popop-desk.png',
    title: 'Keeping track of hundreds of components',
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    demoLink: 'https://ghislainmitahi.github.io/M_portfolio.github.io/',
    source: 'https://github.com/GhislainMitahi/M_portfolio',
  },
};
const projet6 = {
  imageSrc: './assets/popop-desk.png',
  title: 'Keeping track of <br> hundreds of components',
  technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
  id: 'sixthProject',
  popopDescription: {
    imageSrc: './assets/popop-desk.png',
    title: 'Keeping track of hundreds of components',
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    demoLink: 'https://ghislainmitahi.github.io/M_portfolio.github.io/',
    source: 'https://github.com/GhislainMitahi/M_portfolio',
  },
};
const works = [projet1, projet2, projet3, projet4, projet5, projet6];

for (let i = 0; i < works.length; i += 1) {
  let tech = '';
  for (let j = 0; j < works[i].technologies.length; j += 1) tech += `<li> ${works[i].technologies[j]} </li>`;

  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `<div class="works-heading"><img src="${works[i].imageSrc}"></div>
                      <div class="works-footer">
                      <h2 class="Project-title">${works[i].title}</h2>
                      <ul class="list-inline">
                          ${tech}
                      </ul>
                      <input id="${works[i].id}" type="submit" value="See Project" class="btn" />
                      </div>
                      `;
  const content = document.querySelector('.columns');
  content.appendChild(card);
}

const Body = document.body;

function popop(e) {
  const clickButton = e.target.getAttribute('id');

  let currentWork = [];

  works.forEach((work) => {
    if (clickButton === work.id) currentWork = work;
  });

  const popop = document.createElement('div');
  let tecks = '';
  for (let j = 0; j < currentWork.popopDescription.technologies.length; j += 1) tecks += `<li class = 'popop-li'>${currentWork.popopDescription.technologies[j]}</li>`;

  popop.classList.add('popop');
  popop.setAttribute('id', 'popop');
  popop.innerHTML = `
  <div class="popop-container">
  <div class="project-img">
    <i class="fa-solid fa-xmark closeTab"></i>
    <img src="${currentWork.popopDescription.imageSrc}" class="popop-image">
  </div>
  
  <div class="header-buttons">
    <h2 class="popop-title">
    ${currentWork.popopDescription.title}
    </h2>
    <div class="popop-buttons-desk">
      <button type="button" class="see-live see-lives">
        <h6>See Live</h6>
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </button>
      <button type="button" class="see-live see-source">
        <h6>See Source</h6>
        <i class="fa fa-github"></i></button>
    </div>
  </div>
  
  <div class="popop-technologies">
    <ul class="popop-ul">
  
      ${tecks}
  
    </ul>
  </div>
  <p class="popop-description">
   ${currentWork.popopDescription.description}
  </p>
  <div class="popop-buttons">
    <button type="button" class="see-live see-lives">
      <h6>See Live</h6>
      <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </button>
    <button type="button" class="see-live see-source">
      <h6>See Source</h6>
      <i class="fa-brands fa-github"></i></button>
  </div>
  </div>
  `;
  const newbody = document.createElement('body');
  newbody.appendChild(popop);
  document.body = newbody;

  document.querySelector('.closeTab').addEventListener('click', () => {
    document.body = Body;
    window.location.href = 'index.html#My-works';
  });

  document.querySelectorAll('.see-lives').forEach((e) => {
    e.addEventListener('click', () => {
      window.open(currentWork.popopDescription.demoLink);
    });
  });

  document.querySelectorAll('.see-source').forEach((e) => {
    e.addEventListener('click', () => {
      window.open(currentWork.popopDescription.source);
    });
  });
}

const clickClick = document.querySelectorAll('.btn');
clickClick.forEach((e) => {
  e.addEventListener('click', popop);
});

const form = document.getElementsByTagName('form')[0];

const email = document.getElementById('email');
const emailError = document.querySelector('#error');
const reg = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

email.addEventListener('input', () => {
  if (reg.test(email.value)) {
    emailError.innerHTML = '';
    email.classList.remove('invalid');
  }
});

form.addEventListener('submit', (event) => {
  if (!reg.test(email.value.trim())) {
    email.classList.add('invalid');
    emailError.innerHTML = 'Error: "Email should be in lowercase"';
    event.preventDefault();
  }
});

function toStore() {
  const storeForm = {
    name: '',
    email: '',
    text: '',
  };

  storeForm.name = document.getElementById('name').value;
  storeForm.email = document.getElementById('email').value;
  storeForm.text = document.getElementById('text').value;

  localStorage.setItem('storeForm', JSON.stringify(storeForm));
}
document.getElementById('name').addEventListener('input', toStore);
document.getElementById('email').addEventListener('input', toStore);
document.getElementById('text').addEventListener('input', toStore);

function toFill() {
  const restoredSession = JSON.parse(localStorage.getItem('storeForm'));
  if (Object.keys(restoredSession).length > 0) {
    document.getElementById('name').value = restoredSession.name;
    document.getElementById('email').value = restoredSession.email;
    document.getElementById('text').value = restoredSession.text;
  }
}

window.onload = toFill();