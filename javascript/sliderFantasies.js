const imagesFantasies = [
  [
    './images/fantasies/american/one.jpg',
    './images/fantasies/american/two.jpg',
    './images/fantasies/american/three.jpg',
    './images/fantasies/american/four.jpg',
  ],
  [
    './images/fantasies/empire/one.jpg',
    './images/fantasies/empire/two.jpg',
    './images/fantasies/empire/three.jpg',
    './images/fantasies/empire/four.jpg',
  ],
  [
    './images/fantasies/сlassical/one.jpg',
    './images/fantasies/сlassical/two.jpg',
    './images/fantasies/сlassical/three.jpg',
    './images/fantasies/сlassical/four.jpg',
  ],
  [
    './images/fantasies/loft/one.jpg',
    './images/fantasies/loft/two.jpg',
    './images/fantasies/loft/three.jpg',
    './images/fantasies/loft/four.jpg',
  ],
  [
    './images/fantasies/minimalism/one.jpg',
    './images/fantasies/minimalism/two.jpg',
    './images/fantasies/minimalism/three.jpg',
    './images/fantasies/minimalism/four.jpg',
  ],
  [
    './images/fantasies/provence/one.jpg',
    './images/fantasies/provence/two.jpg',
    './images/fantasies/provence/three.jpg',
    './images/fantasies/provence/four.jpg',
  ],
  [
    './images/fantasies/romanticism/one.jpg',
    './images/fantasies/romanticism/two.jpg',
    './images/fantasies/romanticism/three.jpg',
    './images/fantasies/romanticism/four.jpg',
  ],
  [
    './images/fantasies/scandinavian/one.jpg',
    './images/fantasies/scandinavian/two.jpg',
    './images/fantasies/scandinavian/three.jpg',
    './images/fantasies/scandinavian/four.jpg',
  ],
  [
    './images/fantasies/mediterranean/one.jpg',
    './images/fantasies/mediterranean/two.jpg',
    './images/fantasies/mediterranean/three.jpg',
    './images/fantasies/mediterranean/four.jpg',
  ],
  [
    './images/fantasies/highTech/one.jpg',
    './images/fantasies/highTech/two.jpg',
    './images/fantasies/highTech/three.jpg',
    './images/fantasies/highTech/four.jpg',
  ],
  [
    './images/fantasies/eclecticism/one.jpg',
    './images/fantasies/eclecticism/two.jpg',
    './images/fantasies/eclecticism/three.jpg',
    './images/fantasies/eclecticism/four.jpg',
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

const imagesFantasiesForSmall = [
  './images/fantasies/image.jpg',
  './images/fantasies/image2.jpg',
  './images/fantasies/image3.jpg',
  './images/fantasies/image4.jpg',
];

const arrowsFantasies = document.querySelectorAll('.fantasies-arrows');
const fantasiesImagesForSmall = document.querySelector('.fantasies-images_forSmall');

function getImagesForSmall(index) {
  fantasiesImagesForSmall.style.backgroundImage = `url(${imagesFantasiesForSmall[index]})`;
}

let indexFantasiesForSmall = 0;

arrowsFantasies[0].addEventListener('click', () => {
  if (indexFantasiesForSmall === 0) {
    indexFantasiesForSmall = imagesFantasiesForSmall.length - 1;
  } else indexFantasiesForSmall--;

  getImagesForSmall(indexFantasiesForSmall);
});

arrowsFantasies[1].addEventListener('click', () => {
  if (indexFantasiesForSmall === imagesFantasiesForSmall.length - 1) {
    indexFantasiesForSmall = 0;
  } else indexFantasiesForSmall++;

  getImagesForSmall(indexFantasiesForSmall);
})

document.addEventListener('DOMContentLoaded', function () {
  let indexFantasies = 0;

  getImagesFantasies(indexFantasies);
  styleIListFantasies(indexFantasies);

  getImagesForSmall(indexFantasiesForSmall);

  setInterval(() => {
    let indexRandomFantasiesSmall = Math.floor(Math.random() * imagesFantasiesForSmall.length);

    if (indexFantasies == indexRandomFantasiesSmall) {
      switch (indexRandomFantasiesSmall) {
        case 0:
          indexRandomFantasiesSmall = 1; indexFantasies = 1; break;
        case 1:
          indexRandomFantasiesSmall = 2; indexFantasies = 2; break;
        default:
          indexRandomFantasiesSmall = 0; indexFantasies = 0; break;
      }
    } else {
      indexFantasies = indexRandomFantasiesSmall;
    }
    getImagesForSmall(indexRandomFantasiesSmall);
  }, 4000);

  setInterval(() => {
    let indexRandomFantasies = Math.floor(Math.random() * imagesFantasies.length);

    if (indexFantasies == indexRandomFantasies) {
      switch (indexRandomFantasies) {
        case 0:
          indexRandomFantasies = 1; indexFantasies = 1; break;
        case 1:
          indexRandomFantasies = 2; indexFantasies = 2; break;
        default:
          indexRandomFantasies = 0; indexFantasies = 0; break;
      }
    } else {
      indexFantasies = indexRandomFantasies;
    }
    getImagesFantasies(indexFantasies);
    styleIListFantasies(indexFantasies);
    console.log(indexFantasies)
  }, 4000);
});