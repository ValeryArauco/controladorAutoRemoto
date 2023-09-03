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


  obtenerComandos(comandos){
    const partes = comandos.split('/');
    return partes[2];
  }

  validarPosicionInicialDentroLimites(comandos){
    const limiteX = 10;
    const limiteY = 10;
  
    const partes = comandos.split('/');
    const posicionInicial = partes[1].split(',');
  
    const x = parseInt(posicionInicial[0]);
    const y = parseInt(posicionInicial[1]);
  
    if (x < 0 || x > limiteX || y < 0 || y > limiteY) {
      return "La posición inicial está fuera de los límites permitidos.";
    }
  
    return "";
  }

}

export default ControladorAuto;
