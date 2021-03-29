import {Fighter} from './fighter';

type chakraType = 'rayo' | 'viento' | 'fuego' | 'agua' | 'tierra' | 'madera';
type ocularTec = 'sharingan' | 'byakugan' | 'rinnegan' | 'tenseigan';

export class Naruto extends Fighter {
  private universePH: string = "Naruto";

  constructor(name: string, weight: number, height: number, phrase: string, stats: [number, number, number, number],
              private chakra: chakraType,
              private ocular?: ocularTec) {
    super(name, weight, height, phrase, stats);
  }

  public getChakra() {
    return this.chakra;
  }
  public setChakra(chakra: chakraType) {
    this.chakra = chakra;
  }

  public getOcular() {
    return this.ocular;
  }
  public setOcular(ocular: ocularTec) {
    this.ocular = ocular;
  }

  public getUniverse(): string {
    return this.universePH;
  }
}
