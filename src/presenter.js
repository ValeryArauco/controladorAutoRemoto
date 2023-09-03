import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const first1 = document.querySelector("#first-number");
const second1 = document.querySelector("#second-number");
const form = document.querySelector("#sumar-form");
const form1 = document.querySelector("#multiplicar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

form1.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first1.value);
  const secondNumber = Number.parseInt(second1.value);

  div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});