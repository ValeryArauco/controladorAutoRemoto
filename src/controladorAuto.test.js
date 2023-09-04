import ControladorAuto from "./controladorAuto.js";

const controladorAuto = new ControladorAuto();

describe("Permitir que el usuario ingrese la posición inicial del auto y mostrarla", () => {
  it("Deberia devolver la posición inicial ingresada por el usuario", () => {
    
    const comandos = "5,5/1,2N/IAIAIAIAA";
    const posicionInicial = controladorAuto.obtenerPosicionInicial(comandos);
    expect(posicionInicial).toEqual("1,2N");
  });

  it("Deberia devolver cualquier posición inicial ingresada por el usuario", () => {
    
    const comandos = "5,5/2,2N/IAIAIAIAA";
    const posicionInicial = controladorAuto.obtenerPosicionInicial(comandos);
    expect(posicionInicial).toEqual("2,2N");
  });
});

describe("Validar que la posicion inicial siga el formato de la cadena -> mostrar un mensaje al usuario", () => {
  it("Deberia devolver un mensaje de error si el formato de la posicion inicial es incorrecto", () => {
    
    const comandos = "5,5/1,2XYZ/IAIAIAIAA";
    const resultado = controladorAuto.validarPosicionInicial(comandos);
    const mensaje = "<p>El formato de la posición inicial es incorrecto. Debe ser 'X,YD' donde X y Y son números y D es una dirección (N, E, O, S).</p>";
    expect(resultado).toEqual(mensaje);
  });

  it("Deberia devolver un mensaje de aceptacion si el formato de la posicion inicial es correcto", () => {
    
    const comandos = "5,5/1,2N/IAIAIAIAA";
    const resultado = controladorAuto.validarPosicionInicial(comandos);
    const mensaje = ""
    expect(resultado).toEqual(mensaje);
  });
  
});

describe("Permitir que el usuario ingrese los comandos a ejecutar y  los muestre", () => {
  it("Deberia devolver los comandos ingresados por el usuario", () => {
    
    const comandosIngresados = "5,5/1,2N/IAIAIAIAA";
    const comandosObtenidos = controladorAuto.obtenerComandos(comandosIngresados);
    expect(comandosObtenidos).toEqual("IAIAIAIAA");
  });

  it("Deberia devolver los comandos ingresados por el usuario", () => {
    
    const comandosIngresados = "5,5/1,2N/IADDAIAA";
    const comandosObtenidos = controladorAuto.obtenerComandos(comandosIngresados);
    expect(comandosObtenidos).toEqual("IADDAIAA");
  });

});

describe("Validar que la posicion inicial se encuentre dentro de los limites", () => {

  it("Debería devolver un mensaje de error si la posición inicial está fuera de los límites fijos 10*10", () => {
    const comandos = "10,10/10,12N/IADDAIAA";
    const resultado = controladorAuto.validarPosicionInicialDentroLimites(comandos);
    const mensaje = "<p>La posición inicial está fuera de los límites permitidos.</p>";
    expect(resultado).toEqual(mensaje);
  });

  it("No debería devolver un mensaje de error si la posición inicial está dentro de los límites fijos 10*10", () => {
    const comandos = "10,10/1,2N/IADDAIAA";
    const resultado = controladorAuto.validarPosicionInicialDentroLimites(comandos);
    const mensaje = "";
    expect(resultado).toEqual(mensaje);
  });

  it("Debería devolver un mensaje de error si la posición inicial está fuera de los límites ingresados por el usuario", () => {
    const comandos = "5,5/6,6N/IADDAIAA";
    const resultado = controladorAuto.validarPosicionInicialDentroLimites(comandos);
    const mensaje = "<p>La posición inicial está fuera de los límites permitidos.</p>";
    expect(resultado).toEqual(mensaje);
  });

  it("No debería devolver un mensaje de error si la posición inicial está dentro de los límites ingresados por el usuario", () => {
    const comandos = "5,5/1,2N/IADDAIAA";
    const resultado = controladorAuto.validarPosicionInicialDentroLimites(comandos);
    const mensaje = "";
    expect(resultado).toEqual(mensaje);
  });
  
  
});

describe("Validar que el formato de los limites ingresados -> mostrar un mensaje al usuario", () => {
  
  it("Debería devolver un mensaje de error si el formato de los límites es incorrecto", () => {
    const comandos = "5x5/1,2N/IAIAIAIAA"; 
    const resultado = controladorAuto.validarFormatoLimites(comandos);
    const mensaje = "<p>El formato de los límites es incorrecto. Debe ser 'X,Y' donde X e Y son números enteros.</p>";
    expect(resultado).toEqual(mensaje);
  });

  it("No debería devolver un mensaje de error si el formato de los límites es correcto", () => {
    const comandos = "5,5/1,2N/IAIAIAIAA"; 
    const resultado = controladorAuto.validarFormatoLimites(comandos);
    const mensaje = ""; 
    expect(resultado).toEqual(mensaje);
  });
});

describe("Ejecutar el comando 'I' (cambiar dirección) y mostrar la posición final", () => {
  it("Debería cambiar la dirección de 'N' a 'O'", () => {
    const comandos = "5,5/1,2N/I";
    const nuevaPosicion = controladorAuto.ejecutarComandos(comandos);
    expect(nuevaPosicion).toEqual('1,2O');
  });

  it("Debería cambiar la dirección de 'E' a 'N'", () => {
    const comandos = "5,5/1,2E/I";
    const nuevaPosicion = controladorAuto.ejecutarComandos(comandos);
    expect(nuevaPosicion).toEqual('1,2N');
  });

  it("Debería cambiar la dirección de 'O' a 'S'", () => {
    const comandos = "5,5/1,2O/I";
    const nuevaPosicion = controladorAuto.ejecutarComandos(comandos);
    expect(nuevaPosicion).toEqual('1,2S');
  });

  it("Debería cambiar la dirección de 'S' a 'E'", () => {
    const comandos = "5,5/1,2S/I";
    const nuevaPosicion = controladorAuto.ejecutarComandos(comandos);
    expect(nuevaPosicion).toEqual('1,2E');
  });

});

describe("Ejecutar el comando 'D' (cambiar dirección) y mostrar la posición final", () => {
  it("Debería cambiar la dirección de 'N' a 'E'", () => {
    const comandos = "5,5/1,2N/D";
    const nuevaPosicion = controladorAuto.ejecutarComandos(comandos);
    expect(nuevaPosicion).toEqual('1,2E');
  });

  it("Debería cambiar la dirección de 'E' a 'S'", () => {
    const comandos = "5,5/1,2E/D";
    const nuevaPosicion = controladorAuto.ejecutarComandos(comandos);
    expect(nuevaPosicion).toEqual('1,2S');
  });

  it("Debería cambiar la dirección de 'O' a 'N'", () => {
    const comandos = "5,5/1,2O/D";
    const nuevaPosicion = controladorAuto.ejecutarComandos(comandos);
    expect(nuevaPosicion).toEqual('1,2N');
  });

  it("Debería cambiar la dirección de 'S' a 'O'", () => {
    const comandos = "5,5/1,2S/D";
    const nuevaPosicion = controladorAuto.ejecutarComandos(comandos);
    expect(nuevaPosicion).toEqual('1,2O');
  });
});

describe("Ejecutar el comando 'A' (Avanzar) y mostrar la posición final", () => {
  it("Debería avanzar una posición hacia el Norte y mostrar la nueva posición" , () => {
    const comandos = "5,5/1,2N/A";
    const nuevaPosicion = controladorAuto.ejecutarComandos(comandos);
    expect(nuevaPosicion).toEqual('1,3N');
  });

  it("Debería avanzar una posición hacia el Sud y mostrar la nueva posición" , () => {
    const comandos = "5,5/1,2S/A";
    const nuevaPosicion = controladorAuto.ejecutarComandos(comandos);
    expect(nuevaPosicion).toEqual('1,1S');
  });

  it("Debería avanzar una posición hacia el Este y mostrar la nueva posición", () => {
    const comandos = "5,5/1,2E/A";
    const nuevaPosicion = controladorAuto.ejecutarComandos(comandos);
    expect(nuevaPosicion).toEqual("2,2E");
  });

  it("Debería avanzar una posición hacia el Oeste y mostrar la nueva posición", () => {
    const comandos = "5,5/1,2O/A";
    const nuevaPosicion = controladorAuto.ejecutarComandos(comandos);
    expect(nuevaPosicion).toEqual("0,2O");
  });

});

describe("Ignorar que el auto se salga de la superficie al ejecutar el comando 'A'", () => {
  it("Debería ignorar avanzar una posición y mostrar la misma posición ingresada cuando la direccion es N", () => {
    const comandos = "5,5/2,5N/A";
    const nuevaPosicion = controladorAuto.ejecutarComandos(comandos);
    expect(nuevaPosicion).toEqual("2,5N");
  });

  it("Debería ignorar avanzar una posición y mostrar la misma posición ingresada cuando la direccion es S", () => {
    const comandos = "5,5/5,0S/A";
    const nuevaPosicion = controladorAuto.ejecutarComandos(comandos);
    expect(nuevaPosicion).toEqual("5,0S");
  });

  it("Debería ignorar avanzar una posición y mostrar la misma posición ingresada cuando la direccion es E", () => {
    const comandos = "5,5/5,5E/A";
    const nuevaPosicion = controladorAuto.ejecutarComandos(comandos);
    expect(nuevaPosicion).toEqual("5,5E");
  });

  it("Debería ignorar avanzar una posición y mostrar la misma posición ingresada cuando la direccion es O", () => {
    const comandos = "5,5/0,5O/A";
    const nuevaPosicion = controladorAuto.ejecutarComandos(comandos);
    expect(nuevaPosicion).toEqual("0,5O");
  });
});


describe("Permitir ejecutar varios comandos y mostrarlos", () => {
  it("Debería mostrar la posicion final tras ejecutar más de un comando", () => {
    const comandos = "5,5/1,2N/IAIAIAIAA";
    const nuevaPosicion = controladorAuto.ejecutarVariosComandos(comandos);
    expect(nuevaPosicion).toEqual("1,3N");
  });

  it("Debería mostrar la posicion final tras ejecutar los comandos e ignorar aquellos que no estan definidos", () => {
    const comandos = "5,5/1,2N/IAIAOLIAIAAJK";
    const nuevaPosicion = controladorAuto.ejecutarVariosComandos(comandos);
    expect(nuevaPosicion).toEqual("1,3N");
  });
  
});
describe("Mostrar posicion inicial, comandos, posicion final y mensajes de error si existen", () => {
  it("Deberia mostrar posicion inicial, comandos, posicion final y ningun mensajes de error", () => {
    const comandos = "5,5/3,3E/AADAADADDA";
    const resultadoObtenido = controladorAuto.ejecutarControlador(comandos);
    const resultadoEsperado =  "<p>Posicion Inicial: 3,3E</p><p>Comandos: AADAADADDA</p><p>Posicion Final: 5,1E</p>"
    expect(resultadoObtenido).toEqual(resultadoEsperado);
  });

  it("Deberia mostrar posicion inicial, comandos, posicion final vacios y mensajes de error de formato", () => {
    const comandos = "55/3,3L/AADAADADDA";
    const resultadoObtenido = controladorAuto.ejecutarControlador(comandos);
    const resultadoEsperado =  "<p>Posicion Inicial: </p><p>Comandos: </p><p>Posicion Final: </p><p>Mensajes:</p><p>El formato de la posición inicial es incorrecto. Debe ser 'X,YD' donde X y Y son números y D es una dirección (N, E, O, S).</p><p>El formato de los límites es incorrecto. Debe ser 'X,Y' donde X e Y son números enteros.</p>";
    expect(resultadoObtenido).toEqual(resultadoEsperado);
  });

  it("Deberia mostrar posicion inicial, comandos, posicion final vacios y mensajes de error de posicion inicial fuera del limite", () => {
    const comandos = "5,5/3,6N/AADAADADDA";
    const resultadoObtenido = controladorAuto.ejecutarControlador(comandos);
    const resultadoEsperado =  "<p>Posicion Inicial: </p><p>Comandos: </p><p>Posicion Final: </p><p>Mensajes:</p><p>La posición inicial está fuera de los límites permitidos.</p>";
    expect(resultadoObtenido).toEqual(resultadoEsperado);
  });
});
