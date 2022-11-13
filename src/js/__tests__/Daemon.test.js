import Daemon from '../Daemon';

test('Daemon ', () => {
  const vasya = new Daemon('Vasya');
  expect(vasya.name).toBe('Vasya');
  expect(vasya.role).toBe('DAEMON');
});

