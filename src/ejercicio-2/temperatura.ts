import {isConvertible} from './isConvertible';

/**
 * Tipos de unidades de temperatura.
 */

export type temperatureUnits = "celsius" | "kelvin" | "fahrenheit";

export class Temperatura implements isConvertible<temperatureUnits> {
  /**
   * Constructor de la clase
   */
  constructor(public amount: number, public unitTo: temperatureUnits, public unitFrom: temperatureUnits) {
  }
  /**
   * Funcion para la conversion de unidades de temperatura
   * @param amount Valor de la unidad
   * @param unitTo Unidad a la que deseo convertir
   * @param unitFrom Unidad de la que deseo convertir
   * @returns Un string con el resultado de la conversion
   */

  conversor(): string {
    let output: string = "";

    if (this.unitTo === "kelvin" && this.unitFrom === "celsius") {
      output = (`[${this.amount.toString()}] celsius es igual a [${this.amount + 273.15}] kelvin`);
      return output;
    } else if (this.unitTo === "fahrenheit" && this.unitFrom === "celsius") {
      output = (`[${this.amount.toString()}] celsius es igual a [${(this.amount * 9/5)+ 32}] fahrenheit`);
      return output;
    } else if (this.unitTo === "celsius" && this.unitFrom === "kelvin") {
      output = (`[${this.amount.toString()}] kelvin es igual a [${this.amount - 273.15}] celsius`);
      return output;
    } else if (this.unitTo === "fahrenheit" && this.unitFrom === "kelvin") {
      output = (`[${this.amount.toString()}] kelvin es igual a [${((this.amount - 273.15) * 9/5) + 32}] fahrenheit`);
      return output;
    } else if (this.unitTo === "celsius" && this.unitFrom === "fahrenheit") {
      output = (`[${this.amount.toString()}] fahrenheit es igual a [${(this.amount - 32) * 5/9}] celsius`);
      return output;
    } else {
      output = (`[${this.amount.toString()}] fahrenheit es igual a [${((this.amount - 32) * 5/9) + 273.15}] kelvin`);
      return output;
    }
  }
}

const temperatura: Temperatura = new Temperatura(67, "fahrenheit", "kelvin");
console.log(temperatura.conversor());
