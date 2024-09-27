"use strict";
const user = {
    id: 1,
    name: "Sothak",
    isSingle: true,
};
const jobs = ["IT", "Cashier", "Teacher"];
const userAges = [20, 80, 45];
const myArray = ["Thak", 20, true];
jobs[0] = "IT Manager";
jobs.push("Web dev");
myArray[0] = false;
myArray;
let a = "Hello";
a = 20;
a = true;
a = {
    id: 1,
};
const myArrays = [10, "A", true];
myArrays.push();
function adding(value) {
    return value + value;
}
console.log(adding(20));
console.log(adding("20"));
const data = ["Apple", 100];
data.push();
let allNumber;
allNumber = [10, 10, 10];
let student;
student = [1, "Sothak"];
function calc(a, b) {
    return (a = b);
}
calc(20, 10);
const greeting = (name) => {
    console.log(`Nice to see you${name}`);
};
greeting("Sothak");
function totalSalary(salary) {
    const total = salary.reduce((p, c) => {
        return p + c;
    });
    return total;
}
const salary = [10, 30, 30];
totalSalary([10, 20, 50]);
console.log(totalSalary(salary));
function func() {
    return [10, "Hi", false];
}
