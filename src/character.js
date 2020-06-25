// character stats
// the abilities or actions 
// is the character dead or alive?
// character can attack another character?

export class Character {
  constructor(magic, mischeviousness, strength, acrobatics, health) {
    this.magic = magic, 
    this.mischeviousness = mischeviousness,
    this.strength = strength,
    this.acrobatics = acrobatics,
    this.health = health
  }

  heal() {
    this.health += 5;
  }

  calculateDamage(characterObject) {
    if (this.strength > characterObject.strength) {
      return this.strength - characterObject.strength;
    } else {
      return false;
    }
  }

  isDead() {
    if (this.health <= 0) {
      return true;
    } else {
      return false;
    }
  }

  findBag() {
    this.bag = [];
  }

  addItemtoBag(item) {
    this.bag.push(item);
  }
}
