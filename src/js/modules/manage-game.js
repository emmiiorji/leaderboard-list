import { caesarsCipherEncrypt } from './utility.js';

const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const gamesEndPoint = 'games';
const scoresEndPoint = (id) => `${id}/scores`;
const storageKey = 'game';

// This function would be useful for letting each device
// to create a new game in clients local storage
const createGame = async (name = 'Leaderboard Games') => {
  const url = `${baseURL}/${gamesEndPoint}/`;
  let data = false;
  try {
    const result = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!result.ok) {
      throw new Error('Could not create game');
    }
    data = await result.json();
  } catch (error) {
    return false;
  }

  const gameId = data.result.split(': ')[1].split(' ')[0];
  localStorage.setItem(storageKey, JSON.stringify({
    id: caesarsCipherEncrypt(gameId),
  }));

  return gameId;
};

export {
  createGame, createScore, getScores, storageKey,
};
