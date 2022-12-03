import Hero from './Character';

export default class Daemon extends Hero {
  constructor(name) {
    super(name);
    this.role = 'DAEMON';
  }
}
