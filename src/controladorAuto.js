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

  obtenerLimiteX(comandos){
    const partes = comandos.split('/');
    const limites = partes[0].split(',');
    
    return parseInt(limites[0]);
  }

  obtenerLimiteY(comandos){
    const partes = comandos.split('/');
    const limites = partes[0].split(',');
    
    return parseInt(limites[1]);
  }

  obtenerX(posicion){
    const coordenadas = posicion.match(/\d+/g); 
    return parseInt(coordenadas[0]);
  }

  obtenerY(posicion){
    const coordenadas = posicion.match(/\d+/g); 
    return parseInt(coordenadas[1]);
  }
  validarPosicionInicialDentroLimites(comandos){
    const limiteX = this.obtenerLimiteX(comandos);
    const limiteY = this.obtenerLimiteY(comandos);

    const posicionInicial = this.obtenerPosicionInicial(comandos);

    const x = this.obtenerX(posicionInicial);
    const y = this.obtenerY(posicionInicial);
  
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

  girarIzquierda(posicionActual){
    const direccionActual = posicionActual[posicionActual.length - 1].toUpperCase();
    const nuevaPosicion = posicionActual.slice(0, -1);

    switch (direccionActual) {
      case 'N':
        return nuevaPosicion + "O";
      case 'E':
        return nuevaPosicion + "N";
      case 'O':
        return nuevaPosicion + "S";
      case 'S':
        return nuevaPosicion + "E";
  
    }
  }

  girarDerecha(posicionActual){
    const direccionActual = posicionActual[posicionActual.length - 1].toUpperCase();
    const nuevaPosicion = posicionActual.slice(0, -1);

    switch (direccionActual) {
      case 'N':
        return nuevaPosicion + "E";
      case 'E':
        return nuevaPosicion + "S";
      case 'O':
        return nuevaPosicion + "N";
      case 'S':
        return nuevaPosicion + "O";
  
    }
  }
  avanzar(posicionActual){
    const direccionActual = posicionActual[posicionActual.length - 1];
    const nuevaPosicion = posicionActual.slice(0, -1);
    const x = parseInt(nuevaPosicion.split(',')[0]);
    const y = parseInt(nuevaPosicion.split(',')[1]);

    let nuevoX = x;
    let nuevoY = y;
    const limiteX = 5;
    const limiteY = 5;

    switch (direccionActual) {
      case 'N':
        nuevoY = y + 1;
        break;
      case 'S':
        return `${x},${y - 1}${direccionActual}`;
      case 'E':
        return `${x + 1},${y}${direccionActual}`;
      case 'O':
        return `${x - 1},${y}${direccionActual}`;
    }

    if (nuevoX >= 0 && nuevoX <= limiteX && nuevoY >= 0 && nuevoY <= limiteY) {
      return `${nuevoX},${nuevoY}${direccionActual}`;
    } else {
      return posicionActual;
    }
  }




  ejecutarComandos(comandos){
    const posicionInicial = this.obtenerPosicionInicial(comandos);
    const comandoAEjecutar = comandos[comandos.length-1];
    switch (comandoAEjecutar) {
      case 'I':
        return this.girarIzquierda(posicionInicial);
      case 'D':
        return this.girarDerecha(posicionInicial);
      case 'A':
        return this.avanzar(posicionInicial);
    }
  }

  
}



export default ControladorAuto;
