// string
let greeting: string = "Hello World";

// num.toUpperCase(); ERROR. num não é uma string
greeting.toLowerCase();
console.log(greeting);

// number
let userId: number = 10.43456;

// boolean
let hasLogin: boolean = false;

// any
// let hero;
let hero: string;

function getHero() {
    return "thor";
}

hero = getHero();

export {};