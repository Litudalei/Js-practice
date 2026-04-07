const prompt = require("prompt-sync")();

// take input at runtime
let age = Number(prompt("Enter your age: "));
let country = prompt("Enter your country: ");

let text = "You cannot drive!";

if (country === "USA") {
  if (age >= 16) {
    text = "You can drive!";
  }
}

console.log(text);