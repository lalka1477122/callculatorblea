let display = document.getElementById("display");
// дисплей для вывбода текста
display.textContent = ``;

let a = ""; // первое число
let b = ""; // второе число
znsk = ""; // знак операции
let funish = false; // флаг окончания вычисления

const Nnumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const znak1 = ["+", "-", "*", "/"];
function getnumber(x) {
  // обработка нажатия кнопок
  if (b === "" && Nnumber.includes(x) && znsk == "") {
    a += x;
    console.log("первое число", a);
    display.textContent = a;
  }
  // обработка знака операции
  if (znak1.includes(x)) {
    znsk = x;
    display.textContent = znsk;
    console.log("операция", znsk);
  }

  if (a !== "" && znsk !== "" && Nnumber.includes(x)) {
    display.textContent = "";
    b += x;
    display.textContent = b;
    console.log("второе число", b);
  }

  if (x == "fas") {
    switch (znsk) {
      case "+":
        display.textContent = parseFloat(a) + parseFloat(b);
        break;
      case "-":
        display.textContent = parseFloat(a) - parseFloat(b);
        break;
      case "*":
        display.textContent = parseFloat(a) * parseFloat(b);
        break;
      case "/":
        display.textContent = parseFloat(a) / parseFloat(b);
        break;

      default:
        break;
    }
  }
  if (x == "ce") {
    display.textContent = "";
    a = "";
    b = "";
    znsk = "";
  }
}
