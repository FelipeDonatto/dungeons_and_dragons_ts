import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private readonly _energyType: EnergyType = 'stamina';
  private static _counter = 0;

  constructor(name: string, special?: number, cost?: number) {
    super(name, special || 0, cost || 0);
    Warrior._counter += 1;
  }

  static createdArchetypeInstances(): number {
    return this._counter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;
