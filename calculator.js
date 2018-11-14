'use strict';
let prompt = require('prompt');

//start the prompt
prompt.start();

//collect two numbers (num1 and num2) and an operation
//then call the function `calculator` with the results
// passes parameters into calculator
prompt.get(['num1','num2','operation'], calculator)
let formula = function formula (num1, num2, operation, result) {
  switch (operation) {
    case 'add':
     operation = "+";
      break;
    case 'substraction':
      operation = "-";
      break;
    case 'multiply':
      operation = "*";
      break;
    case 'divide':
      operation = "/"
      break;
    case 'module':
      operation = "%";
      break;
    default:
  }
  console.log(`${num1} ${operation} ${num2} = ${result}`)
}

function calculator(error, result) {
  let operation = result.operation
  let num1 = parseInt(result.num1)
  let num2 = parseInt(result.num2)

  if (/^\([0-9]+\)/.test(num1)) {
    num1.replace(/[{()}]/g, '');
    console.log(num1)
  }

  if ((isNaN(num1)) || (isNaN(num2))) {
    console.log("you did not entered a number")
  } else if (operation == "+" || operation == "add") {
    result = num1 + num2
    formula(num1, num2, operation, result)
  } else if (operation == "-" || operation == "substract") {
    result = num1 - num2
    formula(num1, num2, operation, result)
  } else if (operation == "*" || operation == "multiply") {
    result = num1 * num2
    formula(num1, num2, operation, result)
  } else if (operation == "/" || operation == "divide") {
    result = num1 / num2
    formula(num1, num2, operation, result)
  } else if (operation == "%" || operation == "module") {
    result = num1 % num2
    formula(num1, num2, operation, result)
  }
}
