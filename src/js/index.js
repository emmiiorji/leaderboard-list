import '../css/style.css';

import game from './modules/game.js';
import { createScore, getScores } from './modules/manage-game.js';

const messageDisplay = document.querySelector('.show-score > .message');
const scoreTableBody = document.querySelector('.score-table tbody');
const scoreTable = document.querySelector('.score-table');
const addScoreForm = document.getElementById('add-score');
const userField = addScoreForm.querySelector('#name');
const scoreField = addScoreForm.querySelector('#score');
const refreshBu = document.getElementById('refresh');

const createScoresMarkup = (scores) => {
  let markup = '';
  scores.forEach((score) => {
    markup += `<tr>
    <td>${score.user}</td>
    <td>${score.score}</td>
    </tr>`;
  });
  return markup;
};

const renderScores = (scores) => {
  const markup = createScoresMarkup(scores);
  if (markup === '') {
    messageDisplay.classList.remove('hide');
    scoreTable.classList.add('hide');
  } else {
    messageDisplay.classList.add('hide');
    scoreTable.classList.remove('hide');
  }

  scoreTableBody.innerHTML = markup;
};

const clearForm = () => {
  userField.value = '';
  scoreField.value = '';
};

const handleCreateScore = async (e) => {
  e.preventDefault();
  const user = userField.value.trim();
  const score = scoreField.value;
  const scoreObject = { user, score };

  let result = null;
  result = user ? await createScore(game.game.id, scoreObject) : result;
  const errorDisplay = addScoreForm.querySelector('.message.error');
  if (result === false) {
    errorDisplay.classList.remove('hide');
    setTimeout(() => {
      errorDisplay.classList.add('hide');
    }, 5000);
  } else if (result === true) {
    game.game.scores.push(scoreObject);

    const tr = document.createElement('tr');
    const tdUser = document.createElement('td');
    const tdScore = document.createElement('td');
    tdUser.appendChild(document.createTextNode(user));
    tdScore.appendChild(document.createTextNode(score));
    tr.appendChild(tdUser);
    tr.appendChild(tdScore);
    scoreTableBody.appendChild(tr);
  }

  clearForm();
};

const handleRefresh = async () => {
  const result = await getScores(game.game.id);
  game.game.scores = result;

  renderScores(result);
};

(async () => {
  await game.init();

  renderScores(game.game.scores);

  addScoreForm.addEventListener('submit', handleCreateScore);
  refreshBu.addEventListener('click', handleRefresh);
})();
