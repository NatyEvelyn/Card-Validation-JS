import validator from "./validator.js";

let name = prompt("Bem vinda(o) a melhor loja de jogos! Por favor confirme seu nome:");
document.getElementById("username").innerHTML = name;

const validateButton = document.getElementById("btn-validate");
const cardNum = document.getElementById("cardNumber");

const regex = /[^0-9]./g;
validateButton.addEventListener("click", cardValidation);
cardNum.addEventListener("keyup", cloneCardNumber);

cardNum.addEventListener("input", function () {
  cardNum.value = cardNum.value.replace(regex, "");
});

function cloneCardNumber(e) {
  e.preventDefault();
  const value = document.getElementById("cardNumber").value;
  const mask = validator.maskify(value);

  document.getElementById("cardClone").value = mask;
}

function cardValidation(e) {
  e.preventDefault();
  const digValue = cardNum.value;
  const finValidation = validator.isValid(digValue);

  if (digValue === "0000000000000000" || digValue === "") {
    return (document.getElementById("result").innerHTML =
      "Por favor, digite o número do cartão!");
  }
  if (finValidation === true) {
    return (document.getElementById("result").innerHTML =
      "Cartão validado com sucesso! Download em andamento.");
  }
  if (finValidation === false) {
    return (document.getElementById("result").innerHTML =
      "Cartão inválido. Digite novamente!");
  }
}

console.log(validator);
