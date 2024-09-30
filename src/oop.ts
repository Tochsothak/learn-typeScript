class Person {
  //Fields
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  //Method
  greet(): void {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`
    );
  }
}

//create an instance of the class
let person1 = new Person("jonh", 30);
person1.greet();

//Inheritance
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  move(distance: number): void {
    console.log(`${this.name} moved ${distance} meters`);
  }
}

class Dog extends Animal {
  //Additional method for the subclass
  bark(): void {
    console.log("Woof Woof");
  }
}

let dog = new Dog("Budy");
dog.bark();
dog.move(10);

//interface in OOP
interface IShape {
  color: string;
  calculateArea(): number;
}
class Circle implements IShape {
  color: string;
  radius: number;

  constructor(color: string, radius: number) {
    this.color = color;
    this.radius = radius;
  }
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

let circle = new Circle("red", 5);
console.log(circle.calculateArea());

// Access Modifier (public private protected)
class BankAccount {
  public owner: string;
  private balance: number;
  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
  }
  public deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposit ${amount}. New Balance is ${this.balance} `);
  }
  private calculateInterest(): number {
    return this.balance * 0.05;
  }
}

let account = new BankAccount("Allice", 1000);
account.deposit(500);

//Getters and Setters

class Employee {
  private _salary: number;
  constructor(salary: number) {
    this._salary = salary;
  }

  //Getter
  get salary(): number {
    return this._salary;
  }

  //Setter
  set salary(amount: number) {
    if (amount > 0) {
      this._salary = amount;
    } else {
      console.log("salary must be positive!");
    }
  }
}
let employee = new Employee(5000);
console.log(employee.salary);
employee.salary = 6000;
console.log(employee.salary);

//Abstract class
abstract class Vehicle {
  abstract startEngine(): void; //Abstract method

  drive(): void {
    console.log("Driving...");
  }
}
class Car extends Vehicle {
  startEngine(): void {
    console.log("Start car engine...");
  }
}
let myCar = new Car();
myCar.startEngine();

//Static Properties and Methods
class MathUtils {
  static PI: number = 3.1416;
  static calculateCircumference(radius: number): number {
    return 2 * MathUtils.PI * radius;
  }
}
console.log(MathUtils.PI);

console.log(MathUtils.calculateCircumference(10));

//Polymorphism

class Shape {
  calculateArea(): void {
    console.log("Calculate area...");
  }
}

class Rectangle extends Shape {
  calculateArea(): void {
    console.log("Area of rectangle.");
  }
}

class Square extends Shape {
  calculateArea(): void {
    console.log("Area of Square");
  }
}

let shapes: Shape[] = [new Rectangle(), new Square()];
shapes.forEach((shape) => shape.calculateArea);
