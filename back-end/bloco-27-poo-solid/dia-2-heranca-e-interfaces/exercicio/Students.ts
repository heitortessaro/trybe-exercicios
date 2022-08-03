class Student {
  private _enrollment: string;

  private _name: string;
  
  private _examsGrades: number[] = Array();
  
  private _worksGrades: number[] = Array();
  

  constructor(enrollment: string, name:string, examsGrades: number[], worksGrades: number[]){
    this._enrollment = enrollment;
    this._name= name;
    this.examsGrades = examsGrades;
    this.worksGrades = worksGrades;
  }

  public get enrollment(): string {
    return this._enrollment;
  }
  public set enrollment(value: string) {
    this._enrollment = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }
  public set examsGrades(value: number[]) {
    if(value.length !== 4) throw new Error('Four grades are required for exams.')
    this._examsGrades = value;
  }

  public get worksGrades(): number[] {
    return this._worksGrades;
  }
  public set worksGrades(value: number[]) {
    if(value.length !== 2) throw new Error('Two grades are required for works')
    this._worksGrades = value;
  }

  public sumGrades(): number{
    return [...this.examsGrades, ...this.worksGrades]
    .reduce((previousGrade, grade) => {
      grade+= previousGrade;
      return grade;
    }, 0);
  }

  public AverageGrades(): number{
    const sumGrades = this.sumGrades();
    return Math.round(sumGrades/([...this.examsGrades, ...this.worksGrades].length));
  }
}

const student1 = new Student('123456','Heitor',[4,9,3,7], [9, 10]);
const student2 = new Student('654321','Jose',[8,9,8,6], [10, 5]);
console.log(student1);
console.log(`Soma das notas: ${student1.sumGrades()}`);
console.log(`Média: ${student1.AverageGrades()}`);
console.log(student2);
console.log(`Soma das notas: ${student2.sumGrades()}`);
console.log(`Média: ${student2.AverageGrades()}`);