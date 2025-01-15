let input = "";
let isDecimalPresent = false;
let buttons = document.querySelectorAll("button");
let screen = document.querySelector("#screen");

for (let button of buttons) {
  button.addEventListener("click", (event) => {
    switch (event.target.innerText) {
      default:
        //? Decimal point check
        if (event.target.innerText === ".") {
          isDecimalPresent = true;
        } else if (event.target.innerText === NaN) {
          isDecimalPresent = false;
        }
        input += event.target.innerText;
        screen.innerText = input;
        break;

      case "=":
        if (input[input.length - 1] === "%") {
          input = input.slice(0, -1) + "/100";
        }
        input = eval(input);
        screen.innerText = input;
        break;

      case "del":
        input = input.slice(0, -1);
        screen.innerText = input;
        break;

      case "AC":
        input = "";
        screen.innerText = input;
        break;
    }
  });
}

