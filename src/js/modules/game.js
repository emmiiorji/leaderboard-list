import { getScores, createGame, storageKey } from './manage-game.js';
import { caesarsCipherDecrypt } from './utility.js';

class Game {
  async init() {
    try {
      this.game = JSON.parse(localStorage.getItem(storageKey));
      // Replace above RHS with { id: '肢肂聿肂職聯聻肐聿肇聥肚聠肂聾肣肟聶聸聧' }
      // to use an already created game as against creating a new game for the local machine

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