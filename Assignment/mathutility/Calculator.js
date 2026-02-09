const readline = require("readline");
const { factorial, isPrime, multiplyMatrices } = require("./MathUtility");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Math Utility CLI");
console.log("1. Factorial");
console.log("2. Prime Check");
console.log("3. Matrix Multiplication");

rl.question("Choose an option (1/2/3): ", (choice) => {
  if (choice === "1") {
    rl.question("Enter a number: ", (num) => {
      try {
        const result = factorial(parseInt(num));
        console.log(`Factorial of ${num} = ${result}`);
      } catch (err) {
        console.error(err.message);
      }
      rl.close();
    });
  } 
  else if (choice === "2") {
    rl.question("Enter a number: ", (num) => {
      const n = parseInt(num);
      console.log(`${n} is ${isPrime(n) ? "a Prime" : "not a Prime"} number`);
      rl.close();
    });
  } 
  else if (choice === "3") {
    rl.question("Matrix A (JSON): ", (a) => {
      rl.question("Matrix B (JSON): ", (b) => {
        try {
          const matA = JSON.parse(a);
          const matB = JSON.parse(b);
          const result = multiplyMatrices(matA, matB);
          console.log("Result:", result);
        } catch {
          console.log("Invalid input");
        }
        rl.close();
      });
    });
  } 
  else {
    console.log("Invalid choice");
    rl.close();
  }
});
