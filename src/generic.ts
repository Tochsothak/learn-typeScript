//generic function

function identity<T>(arg: T): T {
  return arg;
}
console.log(identity<number>(42)); // output 42
console.log(identity<String>("Hello world")); //Output : Hello

//Generic Classes
class Box<T> {
  contents: T;
  constructor(contents: T) {
    this.contents = contents;
  }

  getContents(): T {
    return this.contents;
  }
}

let numberBox = new Box<number>(124);
console.log(numberBox.getContents); // Output:123

let stringBox = new Box<string>("TypeScript");
console.log(stringBox.getContents()); // Output : TypeScript

//Generic Interfaces
interface Container<T> {
  value: T;
  getValue(): T;
}

class StringContainer implements Container<string> {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}

let container: Container<number> = {
  value: 42,
  getValue: function () {
    return this.value;
  },
};
console.log(container.getValue()); //Output

//Generic constraints
//Constraint: T must have the property length

function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}

console.log(getLength("Hello")); //Output: 5
console.log(getLength([1, 2, 3])); //Output: 3

//Using multiple Generic Types
function combine<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

let result = combine<string, number>("Age", 25);
console.log(result); // Output : ['Age', 25]

//Default Type Parameters
class GenericClass<T = string> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}

let defaultGeneric = new GenericClass();
console.log(defaultGeneric.value);

//generic Utility Type
interface Todo {
  title: string;
  description: string;
}
let todo: Partial<Todo> = {
  title: "Buy groceries", //
};

//KeyOf and Lookup Types
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let person2 = { name: "Alice", age: 25 };

//Generic Type Aliases
type Result<T> = {
  success: boolean;
  data: T;
};

let result1: Result<string> = {
  success: true,
  data: "Operation complete success",
};
