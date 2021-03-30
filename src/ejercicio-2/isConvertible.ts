/**
 * Interfaz generica para la conversión
 */
export interface isConvertible<T> {
  unit: number;
  unitTo: T;
  /**
   * Conversión de las unidades
   * @param unit Unidad a convertir
   * @param unitTo Parametro para ver a que unidad se convierte
   */
  conversor(unit: number, unitTo: T): string;
}
