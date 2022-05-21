export class User {
  name: string;
  age?: number;

  constructor(name: string, age: number | undefined) {
    this.name = name;
    this.age = age;
  }
}
