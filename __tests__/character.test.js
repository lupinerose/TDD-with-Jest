import { Character } from './../src/character';

describe('Character class', () => {
  test('should create a new character object', () => {
    // magic = 10
    // mischeviousness = 9
    // strength = 6
    // acrobatics = 4
    // health = 20
    const witch = new Character(10, 9, 6, 4, 20);

    expect(witch).toMatchObject({magic: 10, mischeviousness: 9, strength: 6, acrobatics: 4, health: 20});
  });

  test('should increase health by eating food and sleeping', () => {
    const witch = new Character(10, 9, 6, 4, 20);
    // the .heal() method increases health prop by 5 points
    witch.heal();
    expect(witch.health).toEqual(25);
  });

  test('should determine if a character can deliver damage to an opponent', () => {
    // if character is stronger than another, that character can deliver damage
    const witch = new Character(10, 9, 6, 4, 20);
    const wizard = new Character(10, 9, 8, 4, 20);
    // objectInstance.calculateDamage(objectInstance)
    // return true or false
    expect(wizard.calculateDamage(witch)).toBe(2);
    expect(witch.calculateDamage(wizard)).toBe(false);
  }); 
});