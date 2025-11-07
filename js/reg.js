console.log("reg.js loaded");

const form = document.querySelector("#webform");

const humorOutput = document.querySelector("#humor_output");
const hvadGikGaltOutput = document.querySelector("#hvad_gik_galt_output");
const minutterOutput = document.querySelector("#minutter_output");
const textbox1Output = document.querySelector("#textbox1_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();

  // 1. Saml værdierne fra formularen
  const formData = new FormData(form);
  const humor = formData.get("Humoerstatus");
  const hvadGikGalt = formData.getAll("HvadGikGalt").join(" & ");
  const minutter = formData.get("minutter");
  const textbox1 = formData.get("textbox1");

  // 2. Vis værdierne i de rigtige output-felter
  humorOutput.textContent = humor;
  hvadGikGaltOutput.textContent = hvadGikGalt;
  minutterOutput.textContent = minutter;
  textbox1Output.textContent = textbox1;
  //

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
