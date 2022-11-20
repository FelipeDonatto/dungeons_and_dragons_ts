import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _counter = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 74;
    Orc._counter += 1;
  }

  static createdRacesInstances(): number {
    return this._counter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;
