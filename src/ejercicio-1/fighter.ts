
export abstract class Fighter {
  protected stats = {
    AT: 0,
    DF: 0,
    SP: 0,
    HP: 0,
  }

  constructor(protected name: string,
              protected weight: number,
              protected height: number,
              protected phrase: string,
              stats: [number, number, number, number]) {
    this.stats.AT = stats[0];
    this.stats.DF = stats[1];
    this.stats.SP = stats[2];
    this.stats.HP = stats[3];
  }

  public getName() {
    return this.name;
  }
  public setName(name: string) {
    this.name = name;
  }

  public getWeight() {
    return this.weight;
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

  public getPhrase() {
    return this.phrase;
  }
  public setPhrase(phrase: string) {
    this.phrase = phrase;
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

  public abstract getUniverse(): string;
}
