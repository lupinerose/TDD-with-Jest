import { Player } from '../src/player';

describe('Player class', () => {
  test('should create a new Player object', () => {
    // name = "brooke"
    // character = [] empty array to hold characters
    const player1 = new Player("brooke");
    expect(player1).toMatchObject({name: "brooke", characters: []});
  });
});

