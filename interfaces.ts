interface Person {
    name: string;
    age: number;
    greet(): void;
}

const person: Person = {
    name: "John",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); // Outputs: Hello, my name is John



// optional
interface Person1 {
    name: string;
    age?: number; // age is optional
}

const personal: Person1 = {
    name: "John"
};

console.log(personal.name); // Outputs: John
console.log(personal.age); // Outputs: undefined


//Readonly properties

interface Person2 {
    readonly name: string;
    age: number;
}

const personal1: Person2 = {
    name: "John",
    age: 30
};

console.log(personal1.name); // Outputs: John
personal1.age = 31; // Allowed
// person.name = "Doe"; // Error: Cannot assign to 'name' because it is a read-only property



//Extending two interfaces


interface Employee extends Person {
    employeeId: number;
}

const employee: Employee = {
    name: "John",
    age: 30,
    employeeId: 12345,
    greet() {
        console.log(`Hello, my name is ${this.name} and my employee ID is ${this.employeeId}`);
    }
};

employee.greet(); // Outputs: Hello, my name is John and my employee ID is 12345



//Interface Implementing in class

interface Person {
    name: string;
    age: number;
    greet(): void;
}

class Employee implements Person {
    name: string;
    age: number;
    employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. My employee ID is ${this.employeeId}`);
    }
}

const employee1 = new Employee("John", 30, 12345);
employee.greet(); // Outputs: Hello, my name is John and I am 30 years old. My employee ID is 12345
