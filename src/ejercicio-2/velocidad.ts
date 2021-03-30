import {isConvertible} from './isConvertible';

export type speedUnits = "millas" | "kilometros";

export class Velocidad implements isConvertible<speedUnits> {
  /**
   * Constructor de la clase
   */
  constructor(public amount: number, public unitTo: speedUnits, public unitFrom: speedUnits) {
  }
  /**
   * Funcion para la conversion de unidades de velocidad
   * @param amount Valor de la unidad
   * @param unitTo Unidad a la que deseo convertir
   * @param unitFrom Unidad de la que deseo convertir
   * @returns Un string con el resultado de la conversion
   */

  conversor(): string {
    let output: string = "";

    if (this.unitTo === "millas") {
      output = (`[${this.amount.toString()}] kilometros/hora es igual a [${this.amount * 0.621371}] millas/hora`);
      return output;
    } else {
      output = (`[${this.amount.toString()}] millas/hora es igual a [${this.amount * 1.60934}] kilometros/hora`);
      return output;
    }
  }
}

const velocidad: Velocidad = new Velocidad(100, "millas", "kilometros");
console.log(velocidad.conversor());
