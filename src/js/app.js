import Daemon from './Daemon';
import Magician from './Magician';

const mag = new Magician('mag');
const daemon = new Daemon('daemon');
mag.stoned = 1; // На Мага наслали дурман
mag.cell = 0;
daemon.stoned = 0;
daemon.cell = 2;

// Состояние до атаки
console.log('1 ', mag);
console.log('1 ', daemon);

// Расчет силы атаки Мага на Демона с силой атаки 100
//mag.attack = attack(mag, daemon, 100);

// Состояние после атаки
console.log('2 ', mag);
console.log('2 ', daemon);
