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
      return "<p>El formato de la posición inicial es incorrecto. Debe ser 'X,YD' donde X y Y son números y D es una dirección (N, E, O, S).</p>";
    }
    return "";
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
      return "<p>La posición inicial está fuera de los límites permitidos.</p>";
    }
  
    return "";
  }

  validarFormatoLimites(comandos) {
  
    const partes = comandos.split('/');
    const limites = partes[0];

    const formatoValido = /^\d+,\d+$/;
    
    if (!formatoValido.test(limites)) {
      return "<p>El formato de los límites es incorrecto. Debe ser 'X,Y' donde X e Y son números enteros.</p>"; 
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
  avanzar(posicionActual, limiteX, limiteY){
    const direccionActual = posicionActual[posicionActual.length - 1];
    const x = this.obtenerX(posicionActual);
    const y = this.obtenerY(posicionActual);

    let nuevoX = x;
    let nuevoY = y;

    switch (direccionActual) {
      case 'N':
        nuevoY = y + 1;
        break;
      case 'S':
        nuevoY = y - 1;
        break;
      case 'E':
        nuevoX = x + 1;
        break;
      case 'O':
        nuevoX = x - 1;
        break;
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
        return this.avanzar(posicionInicial, this.obtenerLimiteX(comandos), this.obtenerLimiteY(comandos));
      default:
        return posicionInicial;
    }
  }

  ejecutarVariosComandos(comandos){
    let posicionActual = this.obtenerPosicionInicial(comandos);
    const comandosAEjecutar = this.obtenerComandos(comandos);
    
    const limiteX = this.obtenerLimiteX(comandos); 
    const limiteY = this.obtenerLimiteY(comandos);

    for (let i = 0; i < comandosAEjecutar.length; i++) {
      const comando = limiteX + "," + limiteY + "/" + posicionActual + "/" + comandosAEjecutar[i];
      posicionActual = this.ejecutarComandos(comando);
    }
    return posicionActual;
  }
  
  ejecutarControlador(comandos){
    let posicionInicial = "";
    let comandosAEjecutar = "";
    let posicionFinal = "";
    let mensajes = "";

    if (this.validarPosicionInicial(comandos) == "" && this.validarFormatoLimites(comandos) == "" && this.validarPosicionInicialDentroLimites(comandos) == ""){
      posicionInicial = this.obtenerPosicionInicial(comandos);
      comandosAEjecutar = this.obtenerComandos(comandos);
      posicionFinal = this.ejecutarVariosComandos(comandos);
   } 
   else
   {
      mensajes = "<p>Mensajes:</p>" + 
      this.validarPosicionInicial(comandos) +
      this.validarFormatoLimites(comandos) +
      this.validarPosicionInicialDentroLimites(comandos);
   }
   return "<p>Posicion Inicial: " + posicionInicial + "</p>"+
    "<p>Comandos: " + comandosAEjecutar + "</p>"+
    "<p>Posicion Final: " + posicionFinal + "</p>"+
    mensajes;
  }
}


export default ControladorAuto;
