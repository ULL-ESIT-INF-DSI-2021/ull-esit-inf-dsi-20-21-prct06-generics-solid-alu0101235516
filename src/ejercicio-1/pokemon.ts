import {Fighter} from './fighter';

type poktype = 'hierba' | 'electrico' | 'fuego' | 'agua';

export class Pokemon extends Fighter {
  constructor(name: string, weight: number, height: number, stats: [number, number, number, number],
              private PokType: poktype) {
    super(name, weight, height, stats);
  }

  public getPokType() {
    return this.PokType;
  }
  public setPokType(PokType: poktype) {
    this.PokType = PokType;
  }
}
