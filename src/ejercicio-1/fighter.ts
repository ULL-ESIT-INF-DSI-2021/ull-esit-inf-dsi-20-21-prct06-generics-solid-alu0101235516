
export abstract class Fighter {
  protected stats = {
    AT: 0,
    DF: 0,
    SP: 0,
    HP: 0,
  }

  /**
   * Constructor de la clase
   * @param name nombre del fighter
   * @param weight peso del fighter
   * @param height altura del fighter
   * @param phrase frase célebre del fighter
   * @param stats estadísticas del fighter
   */

  constructor(protected name: string,
              protected weight: number,
              protected height: number,
              protected phrase: string,
              stats: [number, number, number, number]) {
    this.stats.AT = stats[0];
    this.stats.DF = stats[1];
    this.stats.SP = stats[2];
    this.stats.HP = stats[3];
  }

  /**
   * Funcion para obtener el nombre del fighter
   * @returns el nombre del fighter
   */
  public getName() {
    return this.name;
  }
  /**
   * Funcion para instanciar un nuevo nombre
   * @param name nombre nuevo
   */
  public setName(name: string) {
    this.name = name;
  }

  /**
   * Funcion para obtener el peso del fighter
   * @returns el peso del fighter
   */
  public getWeight() {
    return this.weight;
  }
  /**
   * Funcion para instanciar un nuevo peso
   * @param name peso nuevo
   */
  public setWeight(weight: number) {
    this.weight = weight;
  }

  /**
   * Funcion para obtener la altura del fighter
   * @returns la altura del fighter
   */
  public getHeight() {
    return this.height;
  }
  /**
   * Funcion para instanciar una nueva altura
   * @param name altura nueva
   */
  public setHeight(height: number) {
    this.height = height;
  }

  /**
   * Funcion para obtener la frase célebre del fighter
   * @returns frase célebre del fighter
   */
  public getPhrase() {
    return this.phrase;
  }
  /**
   * Funcion para instanciar una nueva frase célebre
   * @param name frase célebre nueva
   */
  public setPhrase(phrase: string) {
    this.phrase = phrase;
  }

  /**
   * Funcion para obtener el ataque del fighter
   * @returns el ataque del fighter
   */
  public getAT() {
    return this.stats.AT;
  }
  /**
   * Funcion para instanciar un nuevo ataque
   * @param name ataque nuevo
   */
  public setAT(AT: number) {
    this.stats.AT = AT;
  }

  /**
   * Funcion para obtener la defensa del fighter
   * @returns la defensa del fighter
   */
  public getDF() {
    return this.stats.DF;
  }
  /**
   * Funcion para instanciar una nueva defensa
   * @param name defensa nueva
   */
  public setDF(DF: number) {
    this.stats.DF = DF;
  }

  /**
   * Funcion para obtener la velocidad del fighter
   * @returns la velocidad del fighter
   */
  public getSP() {
    return this.stats.SP;
  }
  /**
   * Funcion para instanciar una nueva velocidad
   * @param name velocidad nueva
   */
  public setSP(SP: number) {
    this.stats.SP = SP;
  }

  /**
   * Funcion para obtener la vida del fighter
   * @returns la vida del fighter
   */
  public getHP() {
    return this.stats.HP;
  }
  /**
   * Funcion para instanciar una nueva vida
   * @param name vida nueva
   */
  public setHP(HP: number) {
    this.stats.HP = HP;
  }

  /**
   * Funcion para obtener el universo del que pertenece el fighter
   * @returns el universo del fighter
   */
  public abstract getUniverse(): string;
}
