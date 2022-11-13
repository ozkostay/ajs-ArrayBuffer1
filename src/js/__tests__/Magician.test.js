import Magician from '../Magician';

test('Magician ', () => {
  const ivan = new Magician('Ivan');
  ivan.stoned = 1;
  expect(ivan.name).toBe('Ivan');
  expect(ivan.role).toBe('MAG');
  expect(ivan.stoned).toBe(1);
});
