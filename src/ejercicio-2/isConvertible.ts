/**
 * Interfaz generica para la conversión
 */

export interface isConvertible<T> {
  amount: number;
  unitTo: T;

  conversor(): string;
}
