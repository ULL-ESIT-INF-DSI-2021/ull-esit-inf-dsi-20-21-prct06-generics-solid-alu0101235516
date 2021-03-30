/**
 * Interfaz generica para la conversión
 */

export interface isConvertible<T> {
  amount: number;
  unitTo: T;
  unitFrom: T;

  /**
   * Funcion para la conversion de unidades de velocidad
   */

  conversor(): string;
}
