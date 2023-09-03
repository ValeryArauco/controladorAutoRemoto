class ControladorAuto{

  
  obtenerPosicionInicial(comandos){
    const partes = comandos.split('/');
    return partes[1];
  }

  validarPosicionInicial(comandos){
    return "El formato de la posición inicial es incorrecto. Debe ser 'X,YD' donde X y Y son números y D es una dirección (N, E, O, S).";
  }
}

export default ControladorAuto;
