"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(8);
function sumNumbers(num1, num2) {
    return num1 + num2;
}
sumNumbers(12, 4);
function getUpper(value) {
    return value.toUpperCase();
}
getUpper("hello");
function signUpUser(name, email, password, isPaid) {
    if (name === void 0) { name = "unknown" + Math.random(); }
    if (email === void 0) { email = "unknown" + Math.random(); }
    if (password === void 0) { password = 34657890; }
    if (isPaid === void 0) { isPaid = false; }
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log("".concat(name, " ").concat(email, " ").concat(isPaid));
};
signUpUser("Well", "wellinsson@me.com", 123456, true);
loginUser("Wel", "well@me.com");
