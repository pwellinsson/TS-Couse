function addTwo(num: number): number {
  return num + 2;
}
addTwo(8);

function sumNumbers(num1: number, num2: number) {
  return num1 + num2;
}
sumNumbers(12, 4);

function getUpper(value: string) {
  return value.toUpperCase();
}
getUpper("hello");

function signUpUser(
  name: string = "unknown" + Math.random(),
  email: string = "unknown" + Math.random(),
  password: number = 34657890,
  isPaid: boolean = false
) {}

let loginUser = (
  name: string,
  email: string,
  isPaid: boolean = false
): void => {
  console.log(`${name} ${email} ${isPaid}`);
};

signUpUser("Well", "wellinsson@me.com", 123456, true);
loginUser("Wel", "well@me.com");

// function getValue(value: number): boolean | string {
//   if (value > 100) {
//     return true;
//   }
//   return "200 OK";
// }

const getHero = (s: string): string => {
  return "";
};

const heros = ["spiderman", "deadpool", "ironman", "batman"];
// const heros = [1, 2, 3, 4];

heros.map((hero): string => {
  return hero;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): void {
  console.log(errmsg);
}

export {};
