export type BasicStats = {
  AT: number,
  DF: number,
  SP: number,
  HP: number
}

export abstract class Fighter {
  constructor(private name: string,
              private weight: number,
              private height: number,
              private stats: BasicStats) {
  }

  public getName() {
    return this.name;
  }
  public setName(name: string) {
    this.name = name;
  }

  public getWeight() {
    this.weight;
  }
  public setWeight(weight: number) {
    this.weight = weight;
  }

  public getHeight() {
    return this.height;
  }
  public setHeight(height: number) {
    this.height = height;
  }

  public getAT() {
    return this.stats.AT;
  }
  public setAT(AT: number) {
    this.stats.AT = AT;
  }

  public getDF() {
    return this.stats.DF;
  }
  public setDF(DF: number) {
    this.stats.DF = DF;
  }

  public getSP() {
    return this.stats.SP;
  }
  public setSP(SP: number) {
    this.stats.SP = SP;
  }

  public getHP() {
    return this.stats.HP;
  }
  public setHP(HP: number) {
    this.stats.HP = HP;
  }
}
