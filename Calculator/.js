let currentNumber = "";
let previousNumber = "";
let operation = "";

function appendNumber(number) {
  currentNumber += number;
  document.getElementById("result").value = currentNumber;
}

function appendOperation(op) {
  operation = op;
  previousNumber = currentNumber;
  currentNumber = "";
}

function clearScreen() {
  currentNumber = "";
  previousNumber = "";
  operation = "";
  document.getElementById("result").value = "";
}

function calculate() {
  let result = 0;
  switch (operation) {
    case "+":
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
    default:
      break;
  }
  currentNumber = result.toString();
  document.getElementById("result").value = currentNumber;
}
