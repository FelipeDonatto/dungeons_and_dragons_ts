import { EnergyType } from '../Energy';

export default abstract class Archetype {
  constructor(
    private readonly _name: string,
    private readonly _special = 0,
    private readonly _cost = 0,
  ) {}

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this.special;
  }

  get cost(): number {
    return this.cost;
  }
}
