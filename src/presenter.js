import ControladorAuto from "./controladorAuto.js";

const commands = document.querySelector("#comandos");
const form = document.querySelector("#controlador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const comandos = commands.value;
  
  const controladorAuto = new ControladorAuto();
  div.innerHTML = "<p>" + "Posicion Inicial: " + controladorAuto.obtenerPosicionInicial(comandos) + "</p>"
  + "<p>" + "Comandos: " + controladorAuto.obtenerComandos(comandos) + "</p>"
  + "<p>" + "Mensaje: " + controladorAuto.validarPosicionInicial(comandos) + "</p>";
});
