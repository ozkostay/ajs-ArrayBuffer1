import Hero from './Character';

export default class Magician extends Hero {
  constructor(name) {
    super(name);
    this.role = 'MAG';
  }
}
