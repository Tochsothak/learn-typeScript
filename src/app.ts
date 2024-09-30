//Variable Declarations
//number
let age: number = 25;

//String
let firsName: string = "Jonh";

//Boolean
let isActive: boolean = true;

//Array
let number: number[] = [1, 2, 3, 4];

//Tuple (fixed length and type)
let person: [string, number] = ["Alice", 30];

//Function  with type parameter and return type
function add(a: number, b: number) {
  return a + b;
}

//Function return type (nop return value)
function longMessage(message: string): void {
  console.log(message);
}

//Union Types
let id: number | string;
id = 123;
id = "Sothak";

//Type Aliases
type StringOrNumber = string | number | boolean;
let productId: StringOrNumber = 102;
let UserId: StringOrNumber = "user123";
let IsActive: StringOrNumber = true;

//Interface
interface User {
  name: string;
  age: number;
  isActive: boolean;
}

let user:User ={
  name:"Jane",
  age:28,
  isActive:true;
}

interface Book{
  title:string;
  author:string;
  YearPublish:string;
  
}

let b:Book={
  title:"book1",
  author:"thak",
  YearPublish:"4/3/3"
}

//Optional Properties and Default Values
//Optional properties
interface Product{
  id:number;
  name:string;
  description?:string; //Optional property

}
//functioN with default parameter

function greet(name:string = "Guest"):void{
  console.log(`Helloo ,${name}`);
  }

//Type Assertion
let someValue:any = "This is a string";
let strLength:number = (someValue as string).length;

//Enum
enum Direction{
  Up,
  Down,
  Left,
  Right,
}
let move:Direction = Direction.Up;

//Literal Type
let action:"start" | "stop";

action = "start"; //valid
action = "stop"; //valid

