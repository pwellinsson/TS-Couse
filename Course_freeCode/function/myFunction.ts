function addTwo(num: number) {
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

export {};
