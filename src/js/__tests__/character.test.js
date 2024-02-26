import Character from '../character';
import Boweman from '../boweman';

test('проверка по длине имени', () => {
  const unit1 = () => new Character('1', 'Boweman');
  expect(unit1).toThrow("the character's name must contain letters from 2 to 10 characters");
});

test('проверка по выбору класса', () => {
  const unit1 = () => new Character('unit', 'luchnik');
  expect(unit1).toThrow('Please select one of the available classes: Boweman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('проверка основного персонажа', () => {
  const unit = new Character('лучник', 'Boweman');
  const unit1 = {
    name: 'лучник',
    type: 'Boweman',
    health: 100,
    level: 1,
  };
  expect(unit).toEqual(unit1);
});

test('проверка повышение уровня персонажем', () => {
  const unit1 = {
    name: 'робингуд',
    type: 'Boweman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  const unit = new Boweman('робингуд', 'Boweman');
  unit.levelUp();
  expect(unit).toEqual(unit1);
});

test('проверка повышение уровня мертвого персонажа', () => {
  const unit = new Boweman('робингуд', 'Boweman');
  unit.health = 0;
  expect(() => unit.levelUp()).toThrow('it is impossible to level up a dead character');
});

test('проверка получения урона персонажем', () => {
  const unit1 = {
    name: 'стрелок',
    type: 'Boweman',
    health: 92.5,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const unit = new Boweman('стрелок', 'Boweman');
  unit.damage(10);
  expect(unit).toEqual(unit1);
});

test('проверка получения урона мертвым персонажем', () => {
  const unit = new Boweman('робингуд', 'Boweman');
  unit.health = 0;
  expect(() => unit.damage(10)).toThrow('the character is dead');
});

test('смерть персонажа после получения урона', () => {
  const unit = new Boweman('стрелок', 'Boweman');
  unit.health = 5;
  expect(() => unit.damage(10)).toThrow('the character is dead');
});