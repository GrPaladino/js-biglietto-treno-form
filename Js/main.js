// Assegnazioni variabili e costanti
const userkmInput = document.querySelector("#user-km");
const userAgeInput = document.querySelector("#user-selection");
const insBtn = document.querySelector("#ins-btn");
const resultElement = document.querySelector("#result-js");
const inputName = document.querySelector("#name");
const resultName = document.querySelector("#user-name");
// Alla pressione del bottone si dovrà calcolare il prezzo del biglietto tenendo conto dell'etá e dei km da percorrere
insBtn.addEventListener("click", function () {
  const userKm = userkmInput.value;
  console.log(userKm);

  const userAge = userAgeInput.value;
  console.log(userAge);

  const userName = inputName.value;
  console.log(userName);

  //   calcolo prezzo
  const costKm = 0.21;
  const totalCost = userKm * costKm;
  let tripCost = totalCost;

  //   calcolo sconto
  if (userAge == "minorenne") {
    let under18 = (totalCost / 100) * 20;
    tripCost = totalCost - under18;
  } else if (userAge == "over65") {
    let over65 = (totalCost / 100) * 40;
    tripCost = totalCost - over65;
  }

  //   Stampa risultato
  resultName.innerText = userName;

  resultElement.innerText = tripCost.toFixed(2);
  console.log(tripCost);
});
