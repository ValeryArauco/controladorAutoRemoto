class ControladorAuto{

  
  obtenerPosicionInicial(comandos){
    const partes = comandos.split('/');
    return partes[1];
  }

  validarPosicionInicial(comandos){
    const formatoValido = /^\d+,\d+[NEOSneos]$/;
    const partes = comandos.split('/');
    const posicionInicial = partes[1];
    
    if (!formatoValido.test(posicionInicial)) {
      return "El formato de la posición inicial es incorrecto. Debe ser 'X,YD' donde X y Y son números y D es una dirección (N, E, O, S).";
    }
    return "Formato válido.";
  }
}

export default ControladorAuto;
