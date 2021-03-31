import {isConvertible} from './isConvertible';

export type volumeUnits = "litro" | "galon";

export class Volumen implements isConvertible<volumeUnits> {
  /**
   * Constructor de la clase
   */
  constructor(public amount: number, public unitTo: volumeUnits, public unitFrom: volumeUnits) {
  }
  /**
   * Funcion para la conversion de unidades de volumen
   * @returns Un string con el resultado de la conversion
   */

  conversor(): string {
    let output: string = "";

    if (this.unitTo === "galon") {
      output = (`[${this.amount.toString()}] litros es igual a [${this.amount * 0.219969}] galones`);
      return output;
    } else {
      output = (`[${this.amount.toString()}] galones es igual a [${this.amount * 4.54609}] litros`);
      return output;
    }
  }
}

const volumen: Volumen = new Volumen(20, "galon", "litro");
console.log(volumen.conversor());
