import {Fighter} from './fighter';

type chakraType = 'mago' | 'brujo' | 'cazador' | 'druida';
type tipapoyo = 'alianza' | 'horda';

export class Blizzard extends Fighter {
  private universePH: string = "Blizzard";

  /**
   * Constructor de la clase
   * @param name nombre del fighter
   * @param weight peso del fighter
   * @param height altura del fighter
   * @param phrase frase célebre del fighter
   * @param stats estadísticas del fighter
   * @param raza raza del fighter
   * @param apoyo a que bando apoya el fighter
   */

  constructor(name: string, weight: number, height: number, phrase: string, stats: [number, number, number, number],
              private raza: chakraType,
              private apoyo: tipapoyo) {
    super(name, weight, height, phrase, stats);
  }

  /**
   * Funcion para acceder a la raza
   * @returns raza del fighter
   */
  public getRaza() {
    return this.raza;
  }
  /**
   * Funcion para instanciar una raza a un fighter
   * @param raza tipo de raza que quieres instanciar
   */
  public setRaza(raza: chakraType) {
    this.raza = raza;
  }

  /**
   * Funcion para acceder a l bando que apoya
   * @returns bando que apoya el fighter
   */
  public getApoyo() {
    return this.apoyo;
  }
  /**
   * Funcion para instanciar el bando a un fighter
   * @param apoyo bando que quiere apoyar
   */
  public setApoyo(apoyo: tipapoyo) {
    this.apoyo = apoyo;
  }

  /**
   * Funcion para obtener el universo del que pertenece el fighter
   * @returns el universo del fighter
   */
  public getUniverse(): string {
    return this.universePH;
  }
}
