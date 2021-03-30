import {isConvertible} from './isConvertible';

export type forceUnits = "newton" | "kilopondio";

export class Fuerza implements isConvertible<forceUnits> {
  /**
   * Constructor de la clase
   */
  constructor(public amount: number, public unitTo: forceUnits, public unitFrom: forceUnits) {
  }
  /**
   * Funcion para la conversion de unidades de fuerza
   * @param amount Valor de la unidad
   * @param unitTo Unidad a la que deseo convertir
   * @param unitFrom Unidad de la que deseo convertir
   * @returns Un string con el resultado de la conversion
   */

  conversor(): string {
    let output: string = "";

    if (this.unitTo === "kilopondio") {
      output = (`[${this.amount.toString()}] newton es igual a [${this.amount * 0.101972}] kilopondio`);
      return output;
    } else {
      output = (`[${this.amount.toString()}] kilopondio es igual a [${this.amount * 9.80665}] newton`);
      return output;
    }
  }
}

const fuerza: Fuerza = new Fuerza(100, "kilopondio", "newton");
console.log(fuerza.conversor());
