import ControladorAuto from "./controladorAuto.js";

const constroladorAuto = new ControladorAuto();

describe("Permitir que el usuario ingrese la posición inicial del auto y mostrarla", () => {
  it("Deberia devolver la posición inicial ingresada por el usuario", () => {
    
    const comandos = "5,5/1,2N/IAIAIAIAA";
    const posicionInicial = constroladorAuto.obtenerPosicionInicial(comandos);
    expect(posicionInicial).toEqual("1,2N");
  });

  it("Deberia devolver cualquier posición inicial ingresada por el usuario", () => {
    
    const comandos = "5,5/2,2N/IAIAIAIAA";
    const posicionInicial = constroladorAuto.obtenerPosicionInicial(comandos);
    expect(posicionInicial).toEqual("2,2N");
  });
});

describe("Validar que la posicion inicial siga el formato de la cadena -> mostrar un mensaje al usuario", () => {
  it("Deberia devolver un mensaje de error si el formato de la posicion inicial es incorrecto", () => {
    
    const comandos = "5,5/1,2XYZ/IAIAIAIAA";
    const resultado = constroladorAuto.validarPosicionInicial(comandos);
    const mensaje = "El formato de la posición inicial es incorrecto. Debe ser 'X,YD' donde X y Y son números y D es una dirección (N, E, O, S).";
    expect(resultado).toEqual(mensaje);
  });

  it("Deberia devolver un mensaje de aceptacion si el formato de la posicion inicial es correcto", () => {
    
    const comandos = "5,5/1,2N/IAIAIAIAA";
    const resultado = constroladorAuto.validarPosicionInicial(comandos);
    const mensaje = "Formato válido."
    expect(resultado).toEqual(mensaje);
  });
  
});

describe("Permitir que el usuario ingrese los comandos a ejecutar y  los muestre", () => {
  it("Deberia devolver los comandos ingresados por el usuario", () => {
    
    const comandosIngresados = "5,5/1,2N/IAIAIAIAA";
    const comandosObtenidos = constroladorAuto.obtenerComandos(comandosIngresados);
    expect(comandosObtenidos).toEqual("IAIAIAIAA");
  });

  it("Deberia devolver los comandos ingresados por el usuario", () => {
    
    const comandosIngresados = "5,5/1,2N/IADDAIAA";
    const comandosObtenidos = constroladorAuto.obtenerComandos(comandosIngresados);
    expect(comandosObtenidos).toEqual("IADDAIAA");
  });

});

describe("Validar que la posicion inicial se encuentre dentro de los limites", () => {

  it("Debería devolver un mensaje de error si la posición inicial está fuera de los límites fijos 10*10", () => {
    const comandos = "5,5/10,12N/IADDAIAA";
    const resultado = controladorAuto.validarPosicionInicialDentroLimites(comandos);
    const mensaje = "La posición inicial está fuera de los límites permitidos.";
    expect(resultado).toEqual(mensaje);
  });

  
});