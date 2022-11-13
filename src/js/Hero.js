export default class Hero {
  constructor(name) {
    this.name = name;
    this.role = '';
    this.cell = 0;
    this.health = 100;
    this.stoned = 0;
    this.attack = 100;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }
}
