import {Fighter} from './fighter';

type chakraType = 'mago' | 'brujo' | 'guerrero' | 'cazador de demonios' | 'cazador' | 'sacerdote' | 'druida';
type tipapoyo = 'alianza' | 'horda';

export class Blizzard extends Fighter {
  constructor(name: string, weight: number, height: number, stats: [number, number, number, number],
              private raza: chakraType,
              private apoyo: tipapoyo) {
    super(name, weight, height, stats);
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
}
