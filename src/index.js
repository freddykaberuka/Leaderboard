import Score from './score.js';
import display from './display.js';

import './style.css';

const newScore = new Score();
newScore.fetchScore();
display();
const addNew = document.querySelector('.score-form');
addNew.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = addNew.name.value;
  const score = addNew.score.value;
  newScore.addScore({ user, score });
  addNew.name.value = '';
  addNew.score.value = '';
});

const refreshBtn = document.querySelector('.refresh-but');
refreshBtn.addEventListener('click', newScore.fetchScore);
window.addEventListener('load', newScore.getScore);