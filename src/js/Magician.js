import Hero from './Hero';

export default class Magician extends Hero {
  constructor(name) {
    super(name);
    this.role = 'MAG';
  }
}
