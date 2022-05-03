const imagesFantasies = [
  {
    one: "./images/fantasies/american/one.jpg",
    two: "./images/fantasies/american/two.jpg",
    three: "./images/fantasies/american/three.jpg",
    four: "./images/fantasies/american/four.jpg",
  },
  {
    one: "./images/fantasies/empire/one.jpg",
    two: "./images/fantasies/empire/two.jpg",
    three: "./images/fantasies/empire/three.jpg",
    four: "./images/fantasies/empire/four.jpg",
  },
  {
    one: "./images/fantasies/сlassical/one.jpg",
    two: "./images/fantasies/сlassical/two.jpg",
    three: "./images/fantasies/сlassical/three.jpg",
    four: "./images/fantasies/сlassical/four.jpg",
  },
];

const items = document.querySelectorAll('.fantasies-content__item');
const imagesBlock = document.querySelectorAll('.fantasies-images__item');

function styleIList(index) {
  items.forEach(function (item) {
    item.classList.remove('fantasies-content__item_active');
  });
  items[index].classList.add('fantasies-content__item_active');
}

for (let i = 0; i < items.length; i++) {

  items[i].addEventListener('click', () => {
    styleIList(i);

    getImagesFantasies(i);
  })
}

const getImagesFantasies = (index) => {
  imagesBlock[0].style.backgroundImage = `url(${imagesFantasies[index].one})`;
  imagesBlock[1].style.backgroundImage = `url(${imagesFantasies[index].two})`;
  imagesBlock[2].style.backgroundImage = `url(${imagesFantasies[index].three})`;
  imagesBlock[3].style.backgroundImage = `url(${imagesFantasies[index].four})`;
}

document.addEventListener("DOMContentLoaded", function () {
  let index = 0;
  getImagesFantasies(index);
  styleIList(index);
})