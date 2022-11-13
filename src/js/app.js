import Daemon from './Daemon';
import Magician from './Magician';

const ivan = new Magician('Ivan');
const vasya = new Daemon('Vasya');
ivan.stoned = 1; // На Ивана наслали дурман
ivan.cell = 0;
vasya.stoned = 0;
vasya.cell = 2;

function attack(attacker, defender, power) {
  const countCell = Math.abs(attacker.cell - defender.cell);
  attacker.attack -= power; // Запас атак у нападающего уменьшается на power
  let damage = power - (countCell - 1) * (power / 10); // Уменьшение силы атаки из-за растояния
  damage -= attacker.stoned * Math.log2(countCell) * 5; // Уменьшение силы атаки из-за дурмана
  defender.health -= damage; // Уменьшам здоровье у атакуемого на силу атаки
}

// Состояние до атаки
console.log('1 ', ivan);
console.log('1 ', vasya);

attack(ivan, vasya, 100); // Иван атакует Васю с силой атаки 100

// Состояние после атаки
console.log('2 ', ivan);
console.log('2 ', vasya);
