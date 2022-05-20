import { getScores, createGame } from './manage-game.js';
import { caesarsCipherDecrypt } from './utility.js';

class Game {
  async init() {
    try {
      this.game = { id: '肢肂聿肂職聯聻肐聿肇聥肚聠肂聾肣肟聶聸聧' };
      // Replace above RHS with "JSON.parse(localStorage.getItem(storageKey))"
      // when you're to let each device create a new game in clients local storage;

      this.game.id = caesarsCipherDecrypt(this.game.id);
      this.game.scores = await getScores(this.game.id);
    } catch (error) {
      if (error instanceof TypeError) {
        this.game = { id: await createGame('Leaderboard') };
        if (!this.game.id) {
          // Show Error
          // Sorry, Could not initialize leaderboard
        }
        this.game.scores = await getScores(this.game.id);
      }
    }
  }
}

const game = new Game();

export default game;