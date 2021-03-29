import {Fighter} from './fighter';

/**
 * Clase fight book contiene todos los luchadores.
 */
export class FightBook {
  /**
   * Constructor de la clase
   * @param GestorFighter Conjunto de luchadores
   */
  constructor(private GestorFighter: Fighter[]) {}

  /**
   * Funcion para acceder a la variable privada GestorFighter
   * @returns los luchadores que tenemos guardados
   */

  public getFighters() {
    return this.GestorFighter;
  }

  /**
   * Funcion para añadir un luchadores a la base de datos
   * @param luchadores nuevo luchadores que quieres añadir
   */

  public añadirFighter(fighter: Fighter) {
    this.GestorFighter.push(fighter);
  }

  /**
   * Funcion para mostrar por pantalla en forma de tabla la fight book
   */

  public mostrarFighterBook() {
    console.table(this.GestorFighter, ["name", "weight", "height", "PokType", "chakra", "ocular", "raza", "apoyo"]);
  }
}
