export class Supplier {
  id?: number;
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  setId(id: number) {
    this.id = id;
    return this;
  }
}
