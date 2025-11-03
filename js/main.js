document.querySelector("#Kop").addEventListener("click", updateInfoboxKop);

function updateInfoboxKop() {
  console.log("updateInfoboxKop");
  document.querySelector("#efficiency").textContent = "Her er info om koppen";
  document.querySelector("#requirement").textContent = "Her er mere info om koppen";
}

document.querySelector("#Info").addEventListener("click", updateInfoboxInfo);

document.querySelector("#Ur").addEventListener("click", updateInfoboxUr);

function updateInfoboxUr() {
  console.log("updateInfoboxUr");
  document.querySelector("#efficiency").textContent = "Her er info om uret";
  document.querySelector("#requirement").textContent = "Her er mere info om uret";
}

document.querySelector("#Info").addEventListener("click", updateInfoboxInfo);
