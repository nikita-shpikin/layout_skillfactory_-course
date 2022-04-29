const projects = [
  {
    city: "Rostov-on-Don LCD admiral",
    "apartment area": "81 m2",
    "repair time": "3.5 months",
    image: "./images/projects/one.jpg"
  },
  {
    city: "Sochi Thieves",
    "apartment area": "105 m2",
    "repair time": "4 months",
    image: "./images/projects/two.jpg"
  },
  {
    city: "Rostov-on-Don Patriotic",
    "apartment area": "93 m2",
    "repair time": "3 months",
    image: "./images/projects/there.jpg"
  }
];

let city = []; let area = []; let time = []; let image = [];

for (i = 0; i < projects.length; i++) {
  city[i] = projects[i].city;
  area[i] = projects[i]["apartment area"];
  time[i] = projects[i]["repair time"];
  image[i] = projects[i].image;
}

const imageBlock = document.querySelector('.projects-picture');
const text = document.querySelectorAll('.projects-info__text');
const menu = document.querySelectorAll('.projects-menu__item');
const page = document.querySelectorAll('.projects-arrows__circle');

function styleMenu(index) {
  menu.forEach(function (item) {
    item.classList.remove('projects-menu__item_active');
  });
  menu[index].classList.add('projects-menu__item_active');
}

function stylePage(index) {
  page.forEach(function (item) {
    item.classList.remove('projects-arrows__circle_active');
  });
  page[index].classList.add('projects-arrows__circle_active');
}

const createProject = (index) => {
  text[0].innerText = city[index];
  text[1].innerText = area[index];
  text[2].innerText = time[index];
  imageBlock.style.backgroundImage = `url(${image[index]})`;

  styleMenu(index);
  stylePage(index);
}

document.addEventListener("DOMContentLoaded", function () {
  createProject(step);
});

const buttons = document.querySelectorAll('.projects-arrows__arrow');

let step = 0;

buttons[0].addEventListener('click', () => {
  if (step === 0) {
    step = projects.length - 1;
  } else step--;

  createProject(step);
});

buttons[1].addEventListener('click', () => {
  if (step === projects.length - 1) {
    step = 0;
  } else step++;

  createProject(step);
})

menu.forEach(function (item, index) {
  menu[index].addEventListener('click', () => {
    menu[index] == createProject(index);
    switch (index) {
      case 0:
        step = 0;
        console.log(0);
        break;
      case 1:
        step = 1;
        console.log(1);
        break;
      case 2:
        step = 2;
        console.log(2);
        break;
    }
  })
});

page.forEach(function (item, index) {
  page[index].addEventListener('click', () => {
    page[index] == createProject(index);
    switch (index) {
      case 0:
        step = 0;
        break;
      case 1:
        step = 1;
        break;
      case 2:
        step = 2;
        break;
    }
  })
})


const buttonsGold = document.querySelectorAll('.projects-arrows_gold__item');

buttonsGold[0].addEventListener('click', () => {
  if (step === 0) {
    step = projects.length - 1;
  } else step--;

  createProject(step);
});

buttonsGold[1].addEventListener("click", () => {
  if (step === 0) {
    step = projects.length - 1;
  } else step--;

  createProject(step);
})

setInterval(() => {
  createProject(Math.floor(Math.random() * projects.length));
}, 4000);