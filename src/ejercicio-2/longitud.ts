import {isConvertible} from './isConvertible';

export type lengthUnits = "metros" | "yardas";

export class Longitud implements isConvertible<lengthUnits> {
  /**
   * Constructor de la clase
   */
  constructor(public amount: number, public unitTo: lengthUnits, public unitFrom: lengthUnits) {
  }
  /**
   * Funcion para la conversion de unidades de longitud
   * @param amount Valor de la unidad
   * @param unitTo Unidad a la que deseo convertir
   * @returns Un string con el resultado de la conversion
   */

  conversor(): string {
    let output: string = "";

    if (this.unitTo === "yardas") {
      output = (`[${this.amount.toString()}] metros es igual a [${this.amount * 1.09361}] yardas`);
      return output;
    } else {
      output = (`${this.amount.toString()} yardas es igual a ${this.amount * 0.9144} metros`);
      return output;
    }
  }
}

const longitud: Longitud = new Longitud(100, "yardas", "metros");
console.log(longitud.conversor());
