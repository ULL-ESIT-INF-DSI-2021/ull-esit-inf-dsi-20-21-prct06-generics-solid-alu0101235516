import {Fighter} from './fighter';

type poktype = 'hierba' | 'electrico' | 'fuego' | 'agua';

export class Pokemon extends Fighter {
  private universePH: string = "Pokemon";

  /**
   * Constructor de la clase
   * @param name nombre del fighter
   * @param weight peso del fighter
   * @param height altura del fighter
   * @param phrase frase célebre del fighter
   * @param stats estadísticas del fighter
   * @param PokType tipo de pokemon que es
   */

  constructor(name: string, weight: number, height: number, phrase: string, stats: [number, number, number, number],
              private PokType: poktype) {
    super(name, weight, height, phrase, stats);
  }

  /**
   * Funcion para obtener el tipo de pokemon
   * @returns el tipo de pokemon que es
   */
  public getPokType() {
    return this.PokType;
  }
  /**
   * Instanciar un nuevo tipo a un pokemon
   * @param PokType el tipo que quieres instanciar
   */
  public setPokType(PokType: poktype) {
    this.PokType = PokType;
  }

  /**
   * Funcion para obtener el universo del que pertenece el fighter
   * @returns el universo del fighter
   */
  public getUniverse(): string {
    return this.universePH;
  }
}
