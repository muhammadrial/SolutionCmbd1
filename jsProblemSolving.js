/**
 * Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)
 * Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take a single variable and check using if else condition)
 * Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition)
 * Solve the problem with Javascript  to check whether a number is even or odd.
 * Solve the problem with Javascript  to check whether a character is in the alphabet or not.
 * Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)
 * Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)
 * Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”.
 * Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.
 * Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)
 *
 */

//1.Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)

const number1 = 45;
const number2 = 80;

let maxNumber = Math.max(number1, number2);

console.log("The Max Number is ", maxNumber);

//Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take a single variable and check using if else condition)

let singleNumber = 0;

if (singleNumber > 0) {
  console.log("This is a Positive Number");
} else if (singleNumber < 0) {
  console.log("This is a negative Number");
} else {
  console.log("This Number is Zero");
}

// 3. Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition)

//solution

let dsNumber = 60;

if (dsNumber % 10 === 0) {
  console.log("This Number is divisible");
} else {
  console.log("This Number is not disvisible");
}

//4. Solve the problem with Javascript  to check whether a number is even or odd.

//solution

let jsNum = 9;

if (jsNum % 2 === 0) {
  console.log("This is an Even Number");
} else {
  console.log("this is an Odd Number");
}

//5 * Solve the problem with Javascript  to check whether a character is in the alphabet or not.

//solution

let jsChar = "7";

if ((jsChar >= "a" && jsChar <= "z") || (jsChar >= "A" && jsChar <= "Z")) {
  console.log("This is in the Alphabet");
} else {
  console.log("This is not in the Alphabet");
}

//6 * Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)

//solution

let temp = 10;

if (temp >= 30) {
  console.log("Temparetue is Hot");
} else if (temp <= 25) {
  console.log("This is cold");
} else {
  console.log("This is Normal");
}

//7 * Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)

//solution

let num1 = 50;
let num2 = 70;
let num3 = 40;

// let maxNum = Math.max(num1, num2, num3);

// console.log(maxNum);

console.log("Max Number is", Math.max(num1, num2, num3));

//8 * Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”.

//solution

let checkNum = 60;

let result = checkNum % 2 === 0 ? "Even Number" : "Odd Number";

console.log(result);

//9 * Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.

//solution

let numOne = 50;
let numTwo = 25;

if (numOne > 30 && numTwo > 30) {
  console.log("Both are Greater than 30");
} else if (numOne > 30) {
  console.log("numOne is Greated than 30");
} else if (numTwo > 30) {
  console.log("numTow is Greater than 30");
} else {
  console.log("No one are Greater Than 30");
}

//10 * Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)

let age = 15;

if (age >= 13 && age <= 19) {
  console.log("Teenager");
} else {
  console.log("Not a teenager");
}
