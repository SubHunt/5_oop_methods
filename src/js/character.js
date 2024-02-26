export default class Character {
  static types = [
    'Boweman',
    'Swordsman',
    'Magician',
    'Daemon',
    'Undead',
    'Zombie',
  ];

  constructor(name, type) {

    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error("the character's name must contain letters from 2 to 10 characters");
    }

    if (Character.types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Please select one of the available classes: Boweman, Swordsman, Magician, Daemon, Undead, Zombie');
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.health = 100;
      this.level += 1;
      this.attack = Math.round(this.attack * 1.2);
      this.defence = Math.round(this.defence * 1.2);
    } else {
      throw new Error('it is impossible to level up a dead character');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
      if (this.health <= 0) {
        throw new Error('the character is dead');
      }
    } else {
      throw new Error('the character is dead');
    }
  }
}