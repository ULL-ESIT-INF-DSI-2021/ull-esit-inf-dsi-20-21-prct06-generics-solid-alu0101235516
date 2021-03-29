import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {Naruto} from '../src/ejercicio-1/naruto';
import {Blizzard} from '../src/ejercicio-1/blizzard';
import {Fighter} from '../src/ejercicio-1/fighter';
import {Combat} from '../src/ejercicio-1/combat';


describe(`EJ 1 - EL COMBATE DEFINITIVO`, () => {
  const Starmie: Pokemon = new Pokemon("Starmie", 80, 1.1, [75, 85, 115, 100], "agua");
  const Electrode: Pokemon = new Pokemon("Electrode", 66.6, 1.2, [50, 70, 150, 100], "electrico");

  const Hashirama: Naruto = new Naruto("Hashirama", 74, 1.80, [115, 95, 80, 100], "madera");
  const Madara: Naruto = new Naruto("Madara", 71, 1.80, [120, 80, 95, 100], "fuego", "sharingan");

  const Malfurion: Blizzard = new Blizzard("Malfurion", 94, 1.95, [97, 80, 111, 100], "druida", "alianza");
  const Guldan: Blizzard = new Blizzard("Guldan", 89, 1.75, [135, 60, 101, 100], "brujo", "horda");

  describe(`Clase padre (Fighter) instancias`, () => {
    it('Se puede instanciar un pokemon', () => {
      expect(Starmie).not.to.be.equal(null);
    });
    it('Se puede instanciar un pokemon', () => {
      expect(Electrode).not.to.be.equal(null);
    });
    it('Se puede instanciar un personaje de naruto', () => {
      expect(Hashirama).not.to.be.equal(null);
    });
    it('Se puede instanciar un personaje de naruto', () => {
      expect(Madara).not.to.be.equal(null);
    });
    it('Se puede instanciar un personaje de naruto', () => {
      expect(Malfurion).not.to.be.equal(null);
    });
    it('Se puede instanciar un personaje de naruto', () => {
      expect(Guldan).not.to.be.equal(null);
    });
  });

  describe(`Clase pokemon (Acceso)`, () => {
    it('Nombre Pokemon', () => {
      expect(Starmie.getName()).to.be.equal("Starmie");
    });
    it('Peso Pokemon', () => {
      expect(Starmie.getWeight()).to.be.equal(80);
    });
    it('Altura Pokemon', () => {
      expect(Starmie.getHeight()).to.be.equal(1.1);
    });
    it('Tipo Pokemon', () => {
      expect(Starmie.getPokType()).to.be.equal("agua");
    });
    it('Ataque Pokemon', () => {
      expect(Starmie.getAT()).to.be.equal(75);
    });
    it('Defensa Pokemon', () => {
      expect(Starmie.getDF()).to.be.equal(85);
    });
    it('Velocidad Pokemon', () => {
      expect(Starmie.getSP()).to.be.equal(115);
    });
    it('Vida Pokemon', () => {
      expect(Starmie.getHP()).to.be.equal(100);
    });
  });

  describe(`Clase naruto (Acceso)`, () => {
    it('Elemento Chakra', () => {
      expect(Hashirama.getChakra()).to.be.equal("madera");
    });
    it('Poder ocular', () => {
      expect(Madara.getOcular()).to.be.equal("sharingan");
    });
  });

  describe(`Clase blizzard (Acceso)`, () => {
    it('Raza del luchador', () => {
      expect(Malfurion.getRaza()).to.be.equal("druida");
    });
    it('Apoyo a un bando', () => {
      expect(Malfurion.getApoyo()).to.be.equal("alianza");
    });
  });

  describe(`Combate principal`, () => {
    const combatePrincipal = new Combat(Hashirama, Malfurion);
    it('Combatiente 1', () => {
      expect(combatePrincipal.getFighter1().getUniverse()).to.be.equal("Naruto");
    });
    it('Combatiente 2', () => {
      expect(combatePrincipal.getFighter2().getUniverse()).to.be.equal("Blizzard");
    });
    it('Combate principal', () => {
      expect(combatePrincipal.getCombate()).to.be.equal(`El combate es entre Hashirama y Malfurion`);
    });
  });
});
