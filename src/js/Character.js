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
    return this._attack;
  }
}
