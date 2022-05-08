import { createProject, step, intervalCreateProject } from './sliderProjects.js';
import { styleIListFantasies, getImagesFantasies, getImagesForSmall, indexFantasies, indexFantasiesForSmall, intervalFantasiesSmall, intervalFantasies } from './sliderFantasies.js';

document.addEventListener('DOMContentLoaded', function () {
  createProject(step);

  getImagesFantasies(indexFantasies);
  styleIListFantasies(indexFantasies);
  getImagesForSmall(indexFantasiesForSmall);

  setInterval(() => {

    intervalCreateProject();
    intervalFantasiesSmall();
    intervalFantasies();

  }, 6000);
})