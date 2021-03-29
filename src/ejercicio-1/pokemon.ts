import {BasicStats, Fighter} from './fighter';

export class Pokemon extends Fighter {
  constructor(name: string, weight: number, height: number, stats: BasicStats, private PokType: string) {
    super(name, weight, height, stats);
  }

  public getPokType() {
    return this.PokType;
  }
  public setPokType(PokType: string) {
    this.PokType = PokType;
  }
}
