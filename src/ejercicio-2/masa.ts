import {isConvertible} from './isConvertible';

export type massUnits = "gramos" | "libras";

export class Masa implements isConvertible<massUnits> {
  /**
   * Constructor de la clase
   */
  constructor(public amount: number, public unitTo: massUnits, public unitFrom: massUnits) {
  }
  /**
   * Funcion para la conversion de unidades de masa
   * @param amount Valor de la unidad
   * @param unitTo Unidad a la que deseo convertir
   * @returns Un string con el resultado de la conversion
   */

  conversor(): string {
    let output: string = "";

    if (this.unitTo === "libras") {
      output = (`[${this.amount.toString()}] gramos es igual a [${this.amount * 0.00220462}] libras`);
      return output;
    } else {
      output = (`${this.amount.toString()} libras es igual a ${this.amount * 453.592} gramos`);
      return output;
    }
  }
}

const masa: Masa = new Masa(100, "libras", "gramos");
console.log(masa.conversor());
