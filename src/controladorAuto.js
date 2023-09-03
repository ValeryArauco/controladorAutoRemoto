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
    const partes = comandos.split('/');

    const limites = partes[0].split(',');

    const limiteX = parseInt(limites[0]);
    const limiteY = parseInt(limites[1]);
  
    
    const posicionInicial = partes[1].split(',');
  
    const x = parseInt(posicionInicial[0]);
    const y = parseInt(posicionInicial[1]);
  
    if (x < 0 || x > limiteX || y < 0 || y > limiteY) {
      return "La posición inicial está fuera de los límites permitidos.";
    }
  
    return "";
  }

  validarFormatoLimites(comandos) {
  
    const partes = comandos.split('/');
    const limites = partes[0];

    const formatoValido = /^\d+,\d+$/;
    
    if (!formatoValido.test(limites)) {
      return "El formato de los límites es incorrecto. Debe ser 'X,Y' donde X e Y son números enteros."; 
    }

    return ""; 
  }

  

}

export default ControladorAuto;
