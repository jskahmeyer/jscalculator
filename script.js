var btnOne = document.getElementById("btn-one");
var btnTwo = document.getElementById("btn-two");
var btnThree = document.getElementById("btn-three");
var btnFour = document.getElementById("btn-four");
var btnFive = document.getElementById("btn-five");
var btnSix = document.getElementById("btn-six");
var btnSeven = document.getElementById("btn-seven");
var btnEight = document.getElementById("btn-eight");
var btnNine = document.getElementById("btn-nine");
var btnZero = document.getElementById("btn-zero");

var btnDecimal = document.getElementById("btn-decimal");
var btnClear = document.getElementById("btn-clear");
var btnBackspace = document.getElementById("btn-backspace");
var btnEquals = document.getElementById("btn-equals");
var btnAddition = document.getElementById("btn-addition");
var btnSubtraction = document.getElementById("btn-subtraction");
var btnMultiplication = document.getElementById("btn-multiplication");
var btnDivision = document.getElementById("btn-division");
var displayScreen = document.getElementById("display");

var calcNumberButtons = document.getElementsByClassName("calc-btn-num");
var calcOperatorButtons = document.getElementsByClassName("calc-btn-operator");

var displayValue = "0";
var firstValue;
var calculationArray = [];

var updateDisplay = clickObj => {
  var btnText = clickObj.target.innerText;

  if (displayValue === "0") displayValue = "";

  displayValue += btnText;
  displayScreen.innerHTML = displayValue;
};

var performCalculation = clickObj => {
  var operator = clickObj.target.innerText;

  switch (operator) {
    case "+":
      firstValue = displayValue;
      displayValue = "";
      displayScreen.innerText = displayValue;
      calculationArray.push(firstValue);
      calculationArray.push("+");
      break;
    case "-":
      firstValue = displayValue;
      displayValue = "";
      displayScreen.innerText = displayValue;
      calculationArray.push(firstValue);
      calculationArray.push("-");
      break;
    case "X":
      firstValue = displayValue;
      displayValue = "";
      displayScreen.innerText = displayValue;
      calculationArray.push(firstValue);
      calculationArray.push("*");
      break;
    case "/":
      firstValue = displayValue;
      displayValue = "";
      displayScreen.innerText = displayValue;
      calculationArray.push(firstValue);
      calculationArray.push("/");
      break;
    case "=":
      calculationArray.push(displayValue);
      var evaluation = eval(calculationArray.join(" "));
      displayValue = evaluation + " ";
      displayScreen.innerText = displayValue;
      calculationArray = [];
      displayValue = "";
      break;
    default:
      break;
  }
};

for (let i = 0; i < calcNumberButtons.length; i++) {
  calcNumberButtons[i].addEventListener("click", updateDisplay, false);
}

for (let i = 0; i < calcOperatorButtons.length; i++) {
  calcOperatorButtons[i].addEventListener("click", performCalculation, false);
}

btnBackspace.onclick = () => {
  let lengthOfDisplayValue = displayValue.length;
  displayValue = displayValue.slice(0, lengthOfDisplayValue - 1);

  if (displayValue === "") displayValue = "0";

  displayScreen.innerHTML = displayValue;
};

btnClear.onclick = () => {
  displayValue = "0";
  firstValue = undefined;
  calculationArray = [];
  displayScreen.innerHTML = displayValue;
};

btnDecimal.onclick = () => {
  if (displayValue === "") displayValue += "0";
  if (!displayValue.includes(".")) displayValue += ".";
  displayValue.innerText = displayValue;
};
