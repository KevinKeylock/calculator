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
const clear = document.querySelector('#clear')
const display = document.getElementById('display');
const plus = document.querySelector('#plus')
const numbers = {
  firstNumber: 0,
  secondNumber: 0
}
const operator = '';

clear.addEventListener("click", function(){
  display.innerHTML = 0;
})
one.addEventListener("click", function(){
  const displayTotal = 1;
  if (display.textContent === '0'){
    display.innerHTML = displayTotal;
  } else {
    display.textContent = `${display.textContent}${displayTotal}`;
  } numbers.firstNumber = Number(display.textContent);
})
two.addEventListener("click", function(){
  const displayTotal = 2;
  if (display.textContent === '0'){
    display.innerHTML = displayTotal;
  } else {
    display.textContent = `${display.textContent}${displayTotal}`;
  } numbers.firstNumber = Number(display.textContent);
})
three.addEventListener("click", function(){
  const displayTotal = 3;
  if (display.textContent === '0'){
    display.innerHTML = displayTotal;
  } else {
    display.textContent = `${display.textContent}${displayTotal}`;
  } numbers.firstNumber = Number(display.textContent);
})
four.addEventListener("click", function(){
  const displayTotal = 4;
  if (display.textContent === '0'){
    display.innerHTML = displayTotal;
  } else {
    display.textContent = `${display.textContent}${displayTotal}`;
  } numbers.firstNumber = Number(display.textContent);
})
five.addEventListener("click", function(){
  const displayTotal = 5;
  if (display.textContent === '0'){
    display.innerHTML = displayTotal;
  } else {
    display.textContent = `${display.textContent}${displayTotal}`;
  }numbers.firstNumber = Number(display.textContent);
})
six.addEventListener("click", function(){
  const displayTotal = 6;
  if (display.textContent === '0'){
    display.innerHTML = displayTotal;
  } else {
    display.textContent = `${display.textContent}${displayTotal}`;
  } numbers.firstNumber = Number(display.textContent);
})
seven.addEventListener("click", function(){
  const displayTotal = 7;
  if (display.textContent === '0'){
    display.innerHTML = displayTotal;
  } else {
    display.textContent = `${display.textContent}${displayTotal}`;
} numbers.firstNumber = Number(display.textContent);})
eight.addEventListener("click", function(){
  const displayTotal = 8;
  if (display.textContent === '0'){
    display.innerHTML = displayTotal;
  } else {
    display.textContent = `${display.textContent}${displayTotal}`;
  } numbers.firstNumber = Number(display.textContent);
})
nine.addEventListener("click", function(){
  const displayTotal = 9;
  if (display.textContent === '0'){
    display.innerHTML = displayTotal;
  } else {
    display.textContent = `${display.textContent}${displayTotal}`;
  } numbers.firstNumber = Number(display.textContent);
})
zero.addEventListener("click", function(){
  const displayTotal = 0;
  if (display.textContent === '0'){
    display.innerHTML = displayTotal;
  } else {
    display.textContent = `${display.textContent}${displayTotal}`;
  } numbers.firstNumber = Number(display.textContent);
})

console.log(numbers)
/*plus.addEventListener("click", function(){
  const firstNumber = display.textContent;
  console.log (firstNumber);
  return firstNumber
  
})*/

function operate(firstNumber, operator, secondNumber){
  if(operator === '+'){
    add(firstNumber, secondNumber);
  }else if(operator === '-'){
    subtract(firstNumber, secondNumber);
  }else if(operator === '*'){
    multiply(firstNumber, secondNumber);
  }else if(operator === '/'){
    divide(firstNumber, secondNumber);
  }}

function add (x, y){
  let answer = x + y;
  console.log(answer)
} function subtract (x, y){
  let answer = x - y;
  console.log(answer)
} function multiply (x, y){
  let answer = x * y;
  console.log(answer)
} function divide (x, y){
  let answer = x / y;
  console.log(answer)
}
