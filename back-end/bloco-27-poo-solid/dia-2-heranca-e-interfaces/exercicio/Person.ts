// `Class`: Person
// `Attributes`:
//     - name: nome da pessoa
//     - birthDate: data de nascimento da pessoa
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e a data de nascimento
// `Validations`:
//     - O nome deve ter no mínimo 3 caracteres
//     - A data de nascimento não pode ser uma data no futuro
//     - A pessoa não pode possuir mais de 120 anos

export default class Person {

  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this.validateName(value);
    // if (value.length < 3) {
    //   throw new Error('O nome deve conter no mínimo 3 caracteres.');
    // }
    this._name = value;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }
  public set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  private validateBirthDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
    if (Person.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
  }

  private validateName(value: string): void {
    // console.log('teste')
    if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }
}