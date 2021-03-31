import {Fighter} from './fighter';

type chakraType = 'rayo' | 'viento' | 'fuego' | 'agua' | 'tierra' | 'madera';
type ocularTec = 'sharingan' | 'byakugan' | 'rinnegan' | 'tenseigan';

export class Naruto extends Fighter {
  private universePH: string = "Naruto";

  /**
   * Constructor de la clase
   * @param name nombre del fighter
   * @param weight peso del fighter
   * @param height altura del fighter
   * @param phrase frase célebre del fighter
   * @param stats estadísticas del fighter
   * @param chakra tipo de chakra del fighter
   * @param ocular poder ocular (o no) del fighter
   */

  constructor(name: string, weight: number, height: number, phrase: string, stats: [number, number, number, number],
              private chakra: chakraType,
              private ocular?: ocularTec) {
    super(name, weight, height, phrase, stats);
  }

  /**
   * Funcion para acceder al chakra del fighter
   * @returns el tipo de chakra
   */
  public getChakra() {
    return this.chakra;
  }
  /**
   * Funcion para instanciar un chakra nuevo a un fighter
   * @param chakra el tipo de chakra a instanciar
   */
  public setChakra(chakra: chakraType) {
    this.chakra = chakra;
  }

  /**
   * Funcion para acceder al poder ocular del fighter
   * @returns el tipo de poder ocular
   */
  public getOcular() {
    return this.ocular;
  }
  /**
   * Funcion para instanciar un poder ocular nuevo a un fighter
   * @param chakra el tipo de poder ocular a instanciar
   */
  public setOcular(ocular: ocularTec) {
    this.ocular = ocular;
  }

  /**
   * Funcion para obtener el universo del que pertenece el fighter
   * @returns el universo del fighter
   */
  public getUniverse(): string {
    return this.universePH;
  }
}
