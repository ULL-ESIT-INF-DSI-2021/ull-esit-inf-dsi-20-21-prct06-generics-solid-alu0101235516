import 'mocha';
import {expect} from 'chai';
import {Velocidad, speedUnits} from '../src/ejercicio-2/velocidad';
import {Masa, massUnits} from '../src/ejercicio-2/masa';
import {Longitud, lengthUnits} from '../src/ejercicio-2/longitud';
import {Tiempo, timeUnits} from '../src/ejercicio-2/tiempo';
import {Temperatura, temperatureUnits} from '../src/ejercicio-2/temperatura';
import {Fuerza, forceUnits} from '../src/ejercicio-2/fuerza';
import {Volumen, volumeUnits} from '../src/ejercicio-2/volumen';

describe(`EJ 2 - CONVERSOR DE UNIDADES`, () => {
  const velocidad: Velocidad = new Velocidad(100, "millas", "kilometros");
  const masa: Masa = new Masa(100, "libras", "gramos");
  const longitud: Longitud = new Longitud(100, "yardas", "metros");
  const tiempo: Tiempo = new Tiempo(67, "minuto", "hora");
  const temperatura: Temperatura = new Temperatura(67, "fahrenheit", "kelvin");
  const fuerza: Fuerza = new Fuerza(100, "kilopondio", "newton");
  const volumen: Volumen = new Volumen(20, "galon", "litro");

  describe(`Correcto funcionamiento de la conversión de medidas`, () => {
    it('Conversión de una medida de velocidad (KM/H a M/H)', () => {
      expect(velocidad.conversor()).to.be.equal('[100] kilometros/hora es igual a [62.137100000000004] millas/hora');
    });
    it('Conversión de una medida de masa (GRAMOS a LIBRAS)', () => {
      expect(masa.conversor()).to.be.equal('[100] gramos es igual a [0.220462] libras');
    });
    it('Conversión de una medida de longitud (METROS a YARDAS)', () => {
      expect(longitud.conversor()).to.be.equal('[100] metros es igual a [109.36099999999999] yardas');
    });
    it('Conversión de una medida de tiempo (HORAS a MINUTOS)', () => {
      expect(tiempo.conversor()).to.be.equal('[67 horas es igual a 4020] minutos');
    });
    it('Conversión de una medida de temperatura (KELVIN a FAHRENHEIT)', () => {
      expect(temperatura.conversor()).to.be.equal('[67] kelvin es igual a [-339.07] fahrenheit');
    });
    it('Conversión de una medida de fuerza (NEWTON a KILOPONDIO)', () => {
      expect(fuerza.conversor()).to.be.equal('[100] newton es igual a [10.197199999999999] kilopondio');
    });
    it('Conversión de una medida de volumen (LITRO a GALON)', () => {
      expect(volumen.conversor()).to.be.equal('[20] litros es igual a [4.39938] galones');
    });
  });
});
