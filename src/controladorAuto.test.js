import ControladorAuto from "./controladorAuto.js";

const constroladorAuto = new ControladorAuto();

describe("Permitir que el usuario ingrese la posición inicial del auto y mostrarla", () => {
  it("Deberia devolver la posición inicial ingresada por el usuario", () => {
    
    const comando = "5,5/1,2N/IAIAIAIAA";
    const posicionInicial = constroladorAuto.obtenerPosicionInicial(comando);
    expect(posicionInicial).toEqual("1,2N");
  });

  it("Deberia devolver cualquier posición inicial ingresada por el usuario", () => {
    
    const comando = "5,5/2,2N/IAIAIAIAA";
    const posicionInicial = constroladorAuto.obtenerPosicionInicial(comando);
    expect(posicionInicial).toEqual("2,2N");
  });
});

describe("Validar que la posicion inicial siga el formato de la cadena -> mostrar un mensaje al usuario", () => {
  it("Deberia devolver un mensaje de error si el formato de la posicion inicial es incorrecto", () => {
    
    const comando = "5,5/1,2XYZ/IAIAIAIAA";
    const resultado = constroladorAuto.validarPosicionInicial(comando);
    const mensaje = "El formato de la posición inicial es incorrecto. Debe ser 'X,YD' donde X y Y son números y D es una dirección (N, E, O, S).";
    expect(resultado).toEqual(mensaje);
  });

  it("Deberia devolver un mensaje de aceptacion si el formato de la posicion inicial es correcto", () => {
    
    const comando = "5,5/1,2N/IAIAIAIAA";
    const resultado = constroladorAuto.validarPosicionInicial(comando);
    const mensaje = "Formato válido."
    expect(resultado).toEqual(mensaje);
  });
  
});