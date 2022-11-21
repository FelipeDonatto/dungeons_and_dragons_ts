import Energy from '../Energy';

export interface FighterStats {
  lifePoints: number;
  strength: number;
  defense?: number;
  energy?: Energy;
}

interface Fighter extends FighterStats {
  attack?(enemy: FighterStats): void;
  special?(enemy: FighterStats): void;
  levelUp?(): void;
  receiveDamage(attackPoints: number): number;
}

export default Fighter;
