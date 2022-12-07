export default class Hero {
  constructor(name) {
    this.name = name;
    this.role = '';
    this.cell = 0;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    // function attack(attacker, defender, power) {
    //   const countCell = Math.abs(attacker.cell - defender.cell);
    //   let damage = power - (countCell - 1) * (power / 10); // Уменьшение силы атаки из-за растояния
    //   damage -= attacker.stoned * Math.log2(countCell) * 5; // Уменьшение силы атаки из-за дурмана
    //   return damage;
    // }
    return this._attack;
  }
}
