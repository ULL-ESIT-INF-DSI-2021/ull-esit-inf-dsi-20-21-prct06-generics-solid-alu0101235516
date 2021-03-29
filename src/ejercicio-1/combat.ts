import {Fighter} from './fighter';
import {Naruto} from './naruto';
import {Pokemon} from './pokemon';

export class Combat {
  constructor(private fighter1: Fighter, private fighter2: Fighter) {
  }

  public getFighter1() {
    return this.fighter1;
  }
  public getFighter2() {
    return this.fighter2;
  }

  public getCombate() {
    return (`El combate es entre ${this.fighter1.getName()} y ${this.fighter2.getName()}`);
  }

  public damageGet(FighterAttack: number) {
    let efectFighter1: number = 0;
    let efectFighter2: number = 0;
    let daño: number = 0;
    let dañoInt: number = 0;

    switch (this.fighter1.getUniverse()) {
      case "Pokemon": {
        if (this.fighter2.getUniverse() == "Blizzard") {
          efectFighter1 = 2;
          efectFighter2 = 0.5;
        } else if (this.fighter2.getUniverse() == "Naruto") {
          efectFighter1 = 0.5;
          efectFighter2 = 2;
        } else {
          if (this.fighter1 instanceof Pokemon && this.fighter2 instanceof Pokemon) {
            switch (this.fighter1.getPokType()) {
              case `fuego`: {
                if (this.fighter2.getPokType() == `hierba`) {
                  efectFighter1 = 2;
                  efectFighter2 = 0.5;
                } else if (this.fighter2.getPokType() == `agua` || this.fighter2.getPokType() == `fuego`) {
                  efectFighter1 = 0.5;
                  efectFighter2 = 2;
                } else {
                  efectFighter1 = 1;
                  efectFighter2 = 1;
                }
              } break;

              case `agua`: {
                if (this.fighter2.getPokType() == `fuego`) {
                  efectFighter1 = 2;
                  efectFighter2 = 0.5;
                } else {
                  efectFighter1 = 0.5;
                  efectFighter2 = 2;
                }
              } break;

              case `hierba`: {
                if (this.fighter2.getPokType() == `agua`) {
                  efectFighter1 = 2;
                  efectFighter2 = 0.5;
                } else if (this.fighter2.getPokType() == `fuego` || this.fighter2.getPokType() == `hierba`) {
                  efectFighter1 = 0.5;
                  efectFighter2 = 2;
                } else {
                  efectFighter1 = 1;
                  efectFighter2 = 1;
                }
              } break;

              case `electrico`: {
                if (this.fighter2.getPokType() == `agua`) {
                  efectFighter1 = 2;
                  efectFighter2 = 0.5;
                } else if (this.fighter2.getPokType() == `electrico`) {
                  efectFighter1 = 0.5;
                  efectFighter2 = 2;
                } else {
                  efectFighter1 = 1;
                  efectFighter2 = 1;
                }
              }
            }
          }
        }
      } break;

      case "Naruto": {
        if (this.fighter2.getUniverse() == "Pokemon") {
          efectFighter1 = 2;
          efectFighter2 = 0.5;
        } else if (this.fighter2.getUniverse() == "Blizzard") {
          efectFighter1 = 0.5;
          efectFighter2 = 2;
        } else {
          if (this.fighter1 instanceof Naruto && this.fighter2 instanceof Naruto) {
            switch (this.fighter1.getChakra()) {
              case `rayo`: {
                if (this.fighter2.getChakra() == `viento` || this.fighter2.getChakra() == `agua`) {
                  efectFighter1 = 2;
                  efectFighter2 = 0.5;
                } else if (this.fighter2.getChakra() == `madera` || this.fighter2.getChakra() == `fuego`) {
                  efectFighter1 = 0.5;
                  efectFighter2 = 2;
                } else {
                  efectFighter1 = 1;
                  efectFighter2 = 1;
                }
              } break;

              case `viento`: {
                if (this.fighter2.getChakra() == `fuego` || this.fighter2.getChakra() == `tierra`) {
                  efectFighter1 = 2;
                  efectFighter2 = 0.5;
                } else if (this.fighter2.getChakra() == `madera` || this.fighter2.getChakra() == `rayo`) {
                  efectFighter1 = 0.5;
                  efectFighter2 = 2;
                } else {
                  efectFighter1 = 1;
                  efectFighter2 = 1;
                }
              } break;

              case `fuego`: {
                if (this.fighter2.getChakra() == `madera` || this.fighter2.getChakra() == `rayo`) {
                  efectFighter1 = 2;
                  efectFighter2 = 0.5;
                } else if (this.fighter2.getChakra() == `viento` || this.fighter2.getChakra() == `agua`) {
                  efectFighter1 = 0.5;
                  efectFighter2 = 2;
                } else {
                  efectFighter1 = 1;
                  efectFighter2 = 1;
                }
              } break;

              case `agua`: {
                if (this.fighter2.getChakra() == `fuego`) {
                  efectFighter1 = 2;
                  efectFighter2 = 0.5;
                } else if (this.fighter2.getChakra() == `rayo` || this.fighter2.getChakra() == `tierra`) {
                  efectFighter1 = 0.5;
                  efectFighter2 = 2;
                } else {
                  efectFighter1 = 1;
                  efectFighter2 = 1;
                }
              }

              case `tierra`: {
                if (this.fighter2.getChakra() == `agua`) {
                  efectFighter1 = 2;
                  efectFighter2 = 0.5;
                } else if (this.fighter2.getChakra() == `viento`) {
                  efectFighter1 = 0.5;
                  efectFighter2 = 2;
                } else {
                  efectFighter1 = 1;
                  efectFighter2 = 1;
                }
              }

              case `madera`: {
                if (this.fighter2.getChakra() == `viento` || this.fighter2.getChakra() == `rayo`) {
                  efectFighter1 = 2;
                  efectFighter2 = 0.5;
                } else if (this.fighter2.getChakra() == `fuego`) {
                  efectFighter1 = 0.5;
                  efectFighter2 = 2;
                } else {
                  efectFighter1 = 1;
                  efectFighter2 = 1;
                }
              }
            }
          }
        }
      } break;

      case "Blizzard": {
        if (this.fighter2.getUniverse() == "Naruto") {
          efectFighter1 = 2;
          efectFighter2 = 0.5;
        } else if (this.fighter2.getUniverse() == "Pokemon") {
          efectFighter1 = 0.5;
          efectFighter2 = 2;
        } else {
          efectFighter1 = 1;
          efectFighter2 = 1;
        }
      } break;
    }

    if (FighterAttack == 0) {
      daño = 50 * (this.fighter1.getAT() / this.fighter2.getDF()) * efectFighter1;
    } else {
      daño = 50 * (this.fighter2.getAT() / this.fighter1.getDF()) * efectFighter2;
    }
    dañoInt = Math.round(daño);
    return dañoInt;
  }

  public start() {
    let FighterAttack: number = 0;
    let i: number = 0;

    while ((this.fighter1.getHP() > 0) && (this.fighter2.getHP() > 0)) {
      console.log(`RONDA ${i}`);
      i++;

      if (FighterAttack == 0) {
        console.log(`Esta atacando: ${this.fighter1.getName()}`);
        this.fighter2.setHP((this.fighter2.getHP()) - this.damageGet(FighterAttack));
        console.log(this.fighter1.getPhrase());
        console.log(`Vida de ${this.fighter2.getName()} restante: ${this.fighter2.getHP()} HP.`);
        console.log();
        FighterAttack++;
      } else {
        console.log(`Esta atacando: ${this.fighter2.getName()}`);
        this.fighter1.setHP((this.fighter1.getHP()) - this.damageGet(FighterAttack));
        console.log(this.fighter2.getPhrase());
        console.log(`Vida de ${this.fighter1.getName()} restante: ${this.fighter1.getHP()} HP.`);
        console.log();
        FighterAttack--;
      }
    }
    console.log();
    if (this.fighter1.getHP() < 0) {
      console.log(`EL VENCEDOR ES ${this.fighter2.getName().toUpperCase()}!!!`);
      return this.fighter2.getName().toUpperCase();
    } else {
      console.log(`EL VENCEDOR ES ${this.fighter1.getName().toUpperCase()}!!!`);
      return this.fighter1.getName().toUpperCase();
    }
  }
}
