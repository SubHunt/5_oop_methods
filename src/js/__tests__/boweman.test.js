import Boweman from '../boweman';

test('проверка персонажа-лучника', () => {
  const unit1 = new Boweman('лучник');
  const unit2 = {
    name: 'лучник',
    type: 'Boweman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(unit1).toEqual(unit2);
});