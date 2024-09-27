//Objects
const user: { id: number; name: string; isSingle: boolean } = {
  id: 1,
  name: "Sothak",
  isSingle: true,
};

//Array
const jobs: string[] = ["IT", "Cashier", "Teacher"];

const userAges: number[] = [20, 80, 45];

const myArray = ["Thak", 20, true];

jobs[0] = "IT Manager";
jobs.push("Web dev");

myArray[0] = false;
myArray;

//Type any
let a: any = "Hello";

a = 20;
a = true;
a = {
  id: 1,
};

const myArrays = [10, "A", true];

myArrays.push();

function adding(value: any): any {
  return value + value;
}
console.log(adding(20));
console.log(adding("20"));

//tuple
const data: [string, number] = ["Apple", 100];

data.push();
let allNumber: [number, number, number];
allNumber = [10, 10, 10];

let student: [id: number, name: string];

student = [1, "Sothak"];

//Function
function calc(a: number, b: number): number {
  return (a = b);
}

calc(20, 10);

const greeting = (name: string): void => {
  console.log(`Nice to see you${name}`);
};
greeting("Sothak");

function totalSalary(salary: number[]) {
  const total = salary.reduce((p, c) => {
    return p + c;
  });
  return total;
}
const salary: number[] = [10, 30, 30];
totalSalary([10, 20, 50]);
console.log(totalSalary(salary));

function func(): [number, string, boolean] {
  return [10, "Hi", false];
}
