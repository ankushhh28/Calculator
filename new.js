let display = document.querySelector("#ans");
let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operator");
let specialBtns = document.querySelectorAll(".specialKeys");

let Input = "";
// let num = "";
// let previousInput;
// let currentOperator;

for (number of numbers) {
  number.addEventListener("click", handleNumbers);
}

for (operator of operators) {
  operator.addEventListener("click", handleOperators);
}

//function to handle number input
function handleNumbers() {
  if (Input.length === 0 || isNaN(Input[Input.length - 1])) {
    if (this.innerText === ".") {
      Input.push("0.");
    } else Input.push(this.innerText);
  } else {
   
    Input[Input.length - 1] += this.innerText;
  }

  console.log(Input);

  updatedisplay(Input[Input.length - 1]);
}

//function for handling operator
function handleOperators() {}

//function for updating display
function updatedisplay(input) {
  display.innerText = input;
}

//Clearing the display
let clear = document.querySelector("#fullClear");
clear.addEventListener("click", () => {
  display.innerText = 0;
  Input = [];
  console.log(Input);
});

// Cancel the number
let cancel = document.querySelector("#Cancel");
cancel.addEventListener("click", cut);
function cut() {
  let last = Input[Input.length - 1];
last.slice(0, -1);
}
