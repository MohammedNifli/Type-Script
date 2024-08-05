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


//Reaonly properties

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


