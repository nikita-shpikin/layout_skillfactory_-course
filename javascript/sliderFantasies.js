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
  {
    one: "./images/fantasies/loft/one.jpg",
    two: "./images/fantasies/loft/two.jpg",
    three: "./images/fantasies/loft/three.jpg",
    four: "./images/fantasies/loft/four.jpg",
  },
  {
    one: "./images/fantasies/minimalism/one.jpg",
    two: "./images/fantasies/minimalism/two.jpg",
    three: "./images/fantasies/minimalism/three.jpg",
    four: "./images/fantasies/minimalism/four.jpg",
  },
  {
    one: "./images/fantasies/provence/one.jpg",
    two: "./images/fantasies/provence/two.jpg",
    three: "./images/fantasies/provence/three.jpg",
    four: "./images/fantasies/provence/four.jpg",
  },
  {
    one: "./images/fantasies/romanticism/one.jpg",
    two: "./images/fantasies/romanticism/two.jpg",
    three: "./images/fantasies/romanticism/three.jpg",
    four: "./images/fantasies/romanticism/four.jpg",
  },
  {
    one: "./images/fantasies/scandinavian/one.jpg",
    two: "./images/fantasies/scandinavian/two.jpg",
    three: "./images/fantasies/scandinavian/three.jpg",
    four: "./images/fantasies/scandinavian/four.jpg",
  },
  {
    one: "./images/fantasies/mediterranean/one.jpg",
    two: "./images/fantasies/mediterranean/two.jpg",
    three: "./images/fantasies/mediterranean/three.jpg",
    four: "./images/fantasies/mediterranean/four.jpg",
  },
  {
    one: "./images/fantasies/highTech/one.jpg",
    two: "./images/fantasies/highTech/two.jpg",
    three: "./images/fantasies/highTech/three.jpg",
    four: "./images/fantasies/highTech/four.jpg",
  },
  {
    one: "./images/fantasies/eclecticism/one.jpg",
    two: "./images/fantasies/eclecticism/two.jpg",
    three: "./images/fantasies/eclecticism/three.jpg",
    four: "./images/fantasies/eclecticism/four.jpg",
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