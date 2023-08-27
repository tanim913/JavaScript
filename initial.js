// This is the initial.js file
// This program prints the first 500 Fibonacci numbers

// Initialize the first two numbers
let a = 0;
let b = 1;

// Print the first number
console.log(a);

// Loop 500 times
for (let i = 1; i <= 500; i++) {
  // Calculate the next Fibonacci number
  let c = a + b;

  // Print the current number
  console.log(c);

  // Update the previous two numbers
  a = b;
  b = c;
}
