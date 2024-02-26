import Character from './character';

export default class Boweman extends Character {
  constructor(name, type = 'Boweman') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
