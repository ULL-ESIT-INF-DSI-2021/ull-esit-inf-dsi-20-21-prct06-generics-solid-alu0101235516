import {isConvertible} from './isConvertible';

/**
 * Tipos de unidades de tiempo.
 */

export type timeUnits = "segundo" | "minuto" | "hora";

export class Tiempo implements isConvertible<timeUnits> {
  /**
   * Constructor de la clase
   */
  constructor(public amount: number, public unitTo: timeUnits, public unitFrom: timeUnits) {
  }
  /**
   * Funcion para la conversion de unidades de tiempo
   * @returns Un string con el resultado de la conversion
   */

  conversor(): string {
    let output: string = "";

    if (this.unitTo === "minuto" && this.unitFrom === "segundo") {
      output = (`[${this.amount.toString()}] segundos es igual a [${this.amount * 0.0166667}] minutos`);
      return output;
    } else if (this.unitTo === "segundo" && this.unitFrom === "minuto") {
      output = (`[${this.amount.toString()} minutos es igual a ${this.amount * 60}] segundos`);
      return output;
    } else if (this.unitTo === "hora" && this.unitFrom === "segundo") {
      output = (`[${this.amount.toString()} segundos es igual a ${this.amount * 0.000277778}] horas`);
      return output;
    } else if (this.unitTo === "hora" && this.unitFrom === "minuto") {
      output = (`[${this.amount.toString()} minutos es igual a ${this.amount * 0.0166667}] horas`);
      return output;
    } else if (this.unitTo === "segundo" && this.unitFrom === "hora") {
      output = (`[${this.amount.toString()} horas es igual a ${this.amount * 3600}] segundos`);
      return output;
    } else {
      output = (`[${this.amount.toString()} horas es igual a ${this.amount * 60}] minutos`);
      return output;
    }
  }
}

const tiempo: Tiempo = new Tiempo(67, "minuto", "hora");
console.log(tiempo.conversor());
