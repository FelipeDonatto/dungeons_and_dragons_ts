import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

export default class Character implements Fighter {
  private _maxLifePoints: number = this._race.maxLifePoints / 2;
  private _lifePoints: number = this._maxLifePoints;
  private _strength: number = Math.round(Math.random() * (10 - 1) + 1);
  private _defense: number = Math.round(Math.random() * (10 - 1) + 1);
  private _dexterity: number = Math.round(Math.random() * (10 - 1) + 1);
  private _energy: Energy = {
    type_: this._archetype.energyType,
    amount: Math.round(Math.random() * (10 - 1) + 1),
  };

  constructor(
    name: string,
    private _archetype: Archetype = new Mage(name),
    private _race: Race = new Elf(
      name,
      Math.round(Math.random() * (10 - 1) + 1),
    ),
  ) {}

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get defense(): number {
    return this._defense;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (damage <= 0) {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    this._maxLifePoints += Math.round(Math.random() * (10 - 1) + 1);
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._strength += Math.round(Math.random() * (10 - 1) + 1);
    this._dexterity += Math.round(Math.random() * (10 - 1) + 1);
    this._defense += Math.round(Math.random() * (10 - 1) + 1);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }
}
