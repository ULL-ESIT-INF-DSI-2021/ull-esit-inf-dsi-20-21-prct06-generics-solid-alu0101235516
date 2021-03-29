import {Fighter} from './fighter';

type chakraType = 'mago' | 'brujo' | 'cazador' | 'druida';
type tipapoyo = 'alianza' | 'horda';

export class Blizzard extends Fighter {
  private universePH: string = "Blizzard";

  constructor(name: string, weight: number, height: number, phrase: string, stats: [number, number, number, number],
              private raza: chakraType,
              private apoyo: tipapoyo) {
    super(name, weight, height, phrase, stats);
  }

  public getRaza() {
    return this.raza;
  }
  public setRaza(raza: chakraType) {
    this.raza = raza;
  }

  public getApoyo() {
    return this.apoyo;
  }
  public setApoyo(apoyo: tipapoyo) {
    this.apoyo = apoyo;
  }

  public getUniverse(): string {
    return this.universePH;
  }
}
