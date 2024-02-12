const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight= document.querySelector('#eight');
const nine = document.querySelector('#nine');
const clear = document.querySelector('#clear');
const display = document.getElementById('display');
const plus = document.querySelector('#plus');
const equals = document.querySelector('#equals');
const minus = document.querySelector('#minus');
const times = document.querySelector('#times');
const divide = document.querySelector('#divide');
const dot = document.querySelector('#dot');

const numbers = {
  firstNumber: 0,
  secondNumber: 0
}
const operator = {
  operator: '', 
};

clear.addEventListener("click", function(){
  numbers.firstNumber = 0;
  numbers.secondNumber = 0;
  display.innerHTML = 0;
})
one.addEventListener("click", function(){
  const displayTotal = 1;
  if (display.textContent.length > 12){
  } else if(numbers.secondNumber != 0){
      numbers.firstNumber = Number(display.textContent);
      numbers.secondNumber = 0;
      display.textContent = 1;
  }else if (display.textContent === '0'){
      display.innerHTML = displayTotal;
  } else {
      display.textContent = `${display.textContent}${displayTotal}`;
}})
two.addEventListener("click", function(){
  const displayTotal = 2;
  if (display.textContent.length > 12){
  } else if(numbers.secondNumber != 0){
      numbers.firstNumber = Number(display.textContent);
      numbers.secondNumber = 0;
      display.textContent = 2;
  } else if (display.textContent === '0'){
      display.innerHTML = displayTotal;
  } else {
      display.textContent = `${display.textContent}${displayTotal}`;
}})
three.addEventListener("click", function(){
  const displayTotal = 3;
  if (display.textContent.length > 12){
  } else if(numbers.secondNumber != 0){
      numbers.firstNumber = Number(display.textContent);
      numbers.secondNumber = 0;
      display.textContent = 3;
  } else if (display.textContent === '0'){
      display.innerHTML = displayTotal;
  } else {
      display.textContent = `${display.textContent}${displayTotal}`;
}})
four.addEventListener("click", function(){
  const displayTotal = 4;
  if (display.textContent.length > 12){
  } else if(numbers.secondNumber != 0){
      numbers.firstNumber = Number(display.textContent);
      numbers.secondNumber = 0;
      display.textContent = 4;
  } else if (display.textContent === '0'){
      display.innerHTML = displayTotal;
  } else {
      display.textContent = `${display.textContent}${displayTotal}`;
}})
five.addEventListener("click", function(){
  const displayTotal = 5;
  if (display.textContent.length > 12){
  } else if(numbers.secondNumber != 0){
      numbers.firstNumber = Number(display.textContent);
      numbers.secondNumber = 0;
      display.textContent = 5;
  }else if (display.textContent === '0'){
      display.innerHTML = displayTotal;
  } else {
      display.textContent = `${display.textContent}${displayTotal}`;
}})
six.addEventListener("click", function(){
  const displayTotal = 6;
  if (display.textContent.length > 12){
  } else if(numbers.secondNumber != 0){
      numbers.firstNumber = Number(display.textContent);
      numbers.secondNumber = 0;
      display.textContent = 6;
  } else if (display.textContent === '0'){
      display.innerHTML = displayTotal;
  } else {
      display.textContent = `${display.textContent}${displayTotal}`;
}})
seven.addEventListener("click", function(){
  const displayTotal = 7;
  if (display.textContent.length > 12){
  } else if(numbers.secondNumber != 0){
      numbers.firstNumber = Number(display.textContent);
      numbers.secondNumber = 0;
      display.textContent = 7;
  } else if (display.textContent === '0'){
      display.innerHTML = displayTotal;
  } else {
      display.textContent = `${display.textContent}${displayTotal}`;
}})
eight.addEventListener("click", function(){
  const displayTotal = 8;
  if (display.textContent.length > 12){
  } else if(numbers.secondNumber != 0){
      numbers.firstNumber = Number(display.textContent);
      numbers.secondNumber = 0;
      display.textContent = 8;
  } else if (display.textContent === '0'){
      display.innerHTML = displayTotal;
  } else {
      display.textContent = `${display.textContent}${displayTotal}`;
}})
nine.addEventListener("click", function(){
  const displayTotal = 9;
  if (display.textContent.length > 12){
  } else if(numbers.secondNumber != 0){
      numbers.firstNumber = Number(display.textContent);
      numbers.secondNumber = 0;
      display.textContent = 9;
  } else if (display.textContent === '0'){
      display.innerHTML = displayTotal;
  } else {
      display.textContent = `${display.textContent}${displayTotal}`;
}})
zero.addEventListener("click", function(){
  const displayTotal = 0;
  if (display.textContent.length > 12){
  } else if(numbers.secondNumber != 0){
      numbers.firstNumber = Number(display.textContent);
      numbers.secondNumber = 0;
      display.textContent = 0;
  } else if (display.textContent === '0'){
      display.innerHTML = displayTotal;
  } else {
      display.textContent = `${display.textContent}${displayTotal}`;
}})
dot.addEventListener("click", function(){
  const displayTotal = '.';
  if (display.textContent.includes(".")){
  }else if (numbers.secondNumber != 0){
      numbers.firstNumber = Number(display.textContent);
      numbers.secondNumber = 0;
      display.textContent = '0.';
  } else if (display.textContent === '0'){
      display.innerHTML = `0${displayTotal}`;
  } else {
      display.textContent = `${display.textContent}${displayTotal}`;
}})

plus.addEventListener("click", function(){
  if (numbers.secondNumber != 0){
  } else if(numbers.firstNumber != 0){
      equalsOne();
  } else {
      numbers.firstNumber = Number(display.textContent);
      display.textContent = 0;}
    operator.operator = 'plus';
})
minus.addEventListener("click", function(){
  if (numbers.secondNumber != 0){
  } else if(numbers.firstNumber != 0){
      equalsOne()
  } else {
      numbers.firstNumber = Number(display.textContent);
      display.textContent = 0;}
  operator.operator = 'minus';
})
times.addEventListener("click", function(){
  if (numbers.secondNumber != 0){
} else if(numbers.firstNumber != 0){
    equalsOne()
} else {
    numbers.firstNumber = Number(display.textContent);
    display.textContent = 0;}
  operator.operator = 'times'
  })
divide.addEventListener("click", function(){  
  if (numbers.secondNumber != 0){
} else if(numbers.firstNumber != 0){
    equalsOne()
} else {
    numbers.firstNumber = Number(display.textContent);
    display.textContent = 0;}
  operator.operator = 'divide';
  })
equals.addEventListener("click", function(){
  if (numbers.secondNumber != 0){
      equalsTwo()
  } else {
      equalsOne()
}})

function equalsOne(){
  numbers.secondNumber = Number(display.textContent)
  numberOne = numbers.firstNumber;
  numberTwo = numbers.secondNumber;
  operatorOne = operator.operator
  operate(numberOne, operatorOne, numberTwo)
}
function equalsTwo(){
  numbers.firstNumber = Number(display.textContent)
  numberOne = numbers.firstNumber;
  numberTwo = numbers.secondNumber;
  operatorOne = operator.operator
  operate(numberOne, operatorOne, numberTwo)
}

function operate(firstNumber, operator, secondNumber){
  if(operator === 'plus'){
    add (firstNumber, secondNumber);
  }else if(operator === 'minus'){
    subtract(firstNumber, secondNumber);
  }else if(operator === 'times'){
    multiply(firstNumber, secondNumber);
  }else if(operator === 'divide'){
    division(firstNumber, secondNumber);
  }}

function add (x, y){
  let answer = x + y;
  display.textContent = `${answer}`;
} 
function subtract (x, y){
  let answer = x - y;
  display.textContent = `${answer}`;
} 
function multiply (x, y){
  let answer = x * y;
  display.textContent = `${answer}`;
} 
function division (x, y){
  let answer = x / y;
  display.textContent = `${answer}`;
}
