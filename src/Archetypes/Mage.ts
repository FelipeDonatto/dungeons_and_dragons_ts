import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private readonly _energyType: EnergyType = 'mana';
  private static _counter = 0;

  constructor(name: string, special?: number, cost?: number) {
    super(name, special || 0, cost || 0);
    Mage._counter += 1;
  }

  static createdArchetypeInstances(): number {
    return this._counter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;
