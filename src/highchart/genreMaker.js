
export default class GenreMaker {
  constructor() {
    this.doors = 0;
  }
  drive() {
    console.log(`jaja, i have ${this.doors} doors`);
  }
  static factory(type) {
    return new GenreMaker[type]();
  }

}
