const imagesFantasies = [
  [
    "./images/fantasies/american/one.jpg",
    "./images/fantasies/american/two.jpg",
    "./images/fantasies/american/three.jpg",
    "./images/fantasies/american/four.jpg",
  ],
  [
    "./images/fantasies/empire/one.jpg",
    "./images/fantasies/empire/two.jpg",
    "./images/fantasies/empire/three.jpg",
    "./images/fantasies/empire/four.jpg",
  ],
  [
    "./images/fantasies/сlassical/one.jpg",
    "./images/fantasies/сlassical/two.jpg",
    "./images/fantasies/сlassical/three.jpg",
    "./images/fantasies/сlassical/four.jpg",
  ],
  [
    "./images/fantasies/loft/one.jpg",
    "./images/fantasies/loft/two.jpg",
    "./images/fantasies/loft/three.jpg",
    "./images/fantasies/loft/four.jpg",
  ],
  [
    "./images/fantasies/minimalism/one.jpg",
    "./images/fantasies/minimalism/two.jpg",
    "./images/fantasies/minimalism/three.jpg",
    "./images/fantasies/minimalism/four.jpg",
  ],
  [
    "./images/fantasies/provence/one.jpg",
    "./images/fantasies/provence/two.jpg",
    "./images/fantasies/provence/three.jpg",
    "./images/fantasies/provence/four.jpg",
  ],
  [
    "./images/fantasies/romanticism/one.jpg",
    "./images/fantasies/romanticism/two.jpg",
    "./images/fantasies/romanticism/three.jpg",
    "./images/fantasies/romanticism/four.jpg",
  ],
  [
    "./images/fantasies/scandinavian/one.jpg",
    "./images/fantasies/scandinavian/two.jpg",
    "./images/fantasies/scandinavian/three.jpg",
    "./images/fantasies/scandinavian/four.jpg",
  ],
  [
    "./images/fantasies/mediterranean/one.jpg",
    "./images/fantasies/mediterranean/two.jpg",
    "./images/fantasies/mediterranean/three.jpg",
    "./images/fantasies/mediterranean/four.jpg",
  ],
  [
    "./images/fantasies/highTech/one.jpg",
    "./images/fantasies/highTech/two.jpg",
    "./images/fantasies/highTech/three.jpg",
    "./images/fantasies/highTech/four.jpg",
  ],
  [
    "./images/fantasies/eclecticism/one.jpg",
    "./images/fantasies/eclecticism/two.jpg",
    "./images/fantasies/eclecticism/three.jpg",
    "./images/fantasies/eclecticism/four.jpg",
  ],
];

const listsFantasies = document.querySelectorAll('.fantasies-content__item');
const imagesBlock = document.querySelectorAll('.fantasies-images__item');

function styleIListFantasies(index) {
  listsFantasies.forEach(function (item) {
    item.classList.remove('fantasies-content__item_active');
  });
  listsFantasies[index].classList.add('fantasies-content__item_active');
};

function getImagesFantasies(index) {
  imagesBlock[0].style.backgroundImage = `url(${imagesFantasies[index][0]})`;
  imagesBlock[1].style.backgroundImage = `url(${imagesFantasies[index][1]})`;
  imagesBlock[2].style.backgroundImage = `url(${imagesFantasies[index][2]})`;
  imagesBlock[3].style.backgroundImage = `url(${imagesFantasies[index][3]})`;
};

for (let i = 0; i < listsFantasies.length; i++) {
  listsFantasies[i].addEventListener('click', () => {
    styleIListFantasies(i);
    getImagesFantasies(i);
  })
};

document.addEventListener("DOMContentLoaded", function () {
  getImagesFantasies(indexFantasies);
  styleIListFantasies(indexFantasies);

});

let indexFantasies = 0;



const arrowsFantasies = document.querySelectorAll('.fantasies-arrows');
const fantasiesImagesForSmall = document.querySelector('.fantasies-images_forSmall');

function getImagesForSmall(index) {
  fantasiesImagesForSmall.style.backgroundImage = `url(${'./images/fantasies/imageForSmall.jpg'})`;
}

arrowsFantasies[0].addEventListener('click', () => {
  if (index === 0) {
    index = projects.length - 1;
  } else index--;

  console.log('left')
  createImagesFantasies(index);
});

arrowsFantasies[1].addEventListener('click', () => {
  if (index === projects.length - 1) {
    index = 0;
  } else index++;

  console.log('right')
  createImagesFantasies(index);
})


document.addEventListener('DOMContentLoaded', function () {
  getImagesForSmall(0);
})