// basic information about the player (user), their name, and characters belonging to a player

import { Character } from "./character";
// name: brooke
// characters: witch, wizard, warlock

export class Player {
  constructor(name) {
    this.characters = [], // add character objects here
    this.name = name
  }
}
