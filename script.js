let firstNumber = 1;
let secondNumber = 1;
let operator = '+';

function operate(firstNumber, operator, secondNumber){
  if(operator === '+'){
    add(firstNumber, secondNumber);
  }else if(operator === '-'){
    subtract(firstNumber, secondNumber);
  }else if(operator === '*'){
    multiply(firstNumber, secondNumber);
  }else if(operator === '/'){
    divide(firstNumber, secondNumber);
  }
  
}

function add (x, y){
  let answer = x + y;
  console.log(answer)
}

function subtract (x, y){
  let answer = x - y;
  console.log(answer)
}

function multiply (x, y){
  let answer = x * y;
  console.log(answer)
}

function divide (x, y){
  let answer = x / y;
  console.log(answer)
}

operate(1, '*', 2)