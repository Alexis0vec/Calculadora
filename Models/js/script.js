  /////////////////////////////
  function factorial(a) {
    if (a == 0) {
      return 1;
    } else {
      return a * factorial(a - 1);
    }
  }
  function exponenciacion(a, b, c) {
    let numerador = a;
    let denominador = b;
  
    if (c == 0) {
      return 1;
    }else{
  
      for (let i = 1; i < c; i++) {
        numerador *= a;
        denominador *= b;
      }
      return numerador / denominador;
    }
  
  }
  function exponenciacionSinFraccion(a,b){
      let resultado = a;
      if(b == 0){
          return 1;
      }
      for(let i = 1; i < b; i++){
          resultado *= a;
      }
      return resultado;
  }
  /////////////////////////////
  function calcular_P0(l, m, k) {
    // l -> lambda  m -> mu  k -> numero de servidores
    let n = k - 1;
    let total = 0;
    let fraccionUno = 0;
    let fraccionDos = 0;
    let sumatoria = 0;
    let denominadorUno = 0;
    let denominadorDos = 0;
  
    for (let i = 0; i <= n; i++) {
      fraccionUno = 1 / factorial(i);
      fraccionDos = exponenciacion(l, m, i);
      sumatoria = fraccionUno * fraccionDos;
      total = total + sumatoria;
    }
  
    denominadorUno = total;
  
    //segunda parte de la formula
  
    fraccionUno = 1 / factorial(k);
    fraccionDos = exponenciacion(l, m, k);
    denominadorDos = (fraccionUno * fraccionDos * (k * m)) / (k * m - l);
  
    return 1 / (denominadorUno + denominadorDos);
  }
  function calcularPk(l, m, k, p) {
    let nume = 0;
    let denominador = 0;
    let fraccionUno = 0;
    let fraccionDos = 0;
  
    let lambda = l;
    let mu = m;
    let numeroServidores = k;
  
    //primera parte de la formula
    fraccionUno = 1 / factorial(numeroServidores);
    fraccionDos = exponenciacion(lambda, mu, numeroServidores);
    fraccionDos = fraccionDos.toFixed(3);
    //segunda parte de la formula
    nume = m * k;
    denominador = k * m - l;
  
    return fraccionUno * fraccionDos * ((nume * p) / denominador);
  }
  //Numero esperado de clientes en el sistema
  function calcularL(l, m, k, p) {

    const numerador = l*m*exponenciacion(l,m,k);
    const denominador = factorial(k-1)*exponenciacionSinFraccion((k*m)-l,2);
    const resultado = p*numerador/denominador + l/m;


    return resultado;
  }
  //Numero esperado de clientes en la cola
  function calcularLq(l,m,k,p){

    const numerador = l*m*exponenciacion(l,m,k);
    const denominador = factorial(k-1)*exponenciacionSinFraccion((k*m)-l,2);
    const resultado = p*numerador/denominador;

    return resultado;
  }
  //Tiempo esperado de un cliente en el sistema
  function calcularW(l,m,k,p){
    const numerador = m*exponenciacion(l,m,k)*p;
    const denominador = factorial(k-1)*exponenciacionSinFraccion((k*m)-l,2);
    const resultado = numerador/denominador + 1/m;
    return resultado;
  }
  //Tiempo esperado de un cliente en la cola
  function calcularWq(l,m,k,p){
    const numerador = m*exponenciacion(l,m,k)*p;
    const denominador = factorial(k-1)*exponenciacionSinFraccion((k*m)-l,2);
    const resultado = numerador/denominador;
    return resultado;
  }

  /////////////////////////////////

  function calculoUno() {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const input3 = document.getElementById("input3").value;
  
      //Valores
    const lambda = Number(input1);
    const mu = Number(input2);
    const k = Number(input3);
  
      //Calcular P0
    const resultado = calcular_P0(lambda, mu, k);
    document.getElementById("P0").innerText = resultado.toFixed(3);
  
      //Calcular Pk
    const resultado2 = calcularPk(lambda, mu, k, resultado);
    document.getElementById("Pk").innerText =  resultado2;
  
      //Calcular PNE
    const resultado3 = 1 - resultado2;
    document.getElementById("PNE").innerText =  resultado3.toFixed(3);
  
      //Calcular L 
  
      const clientesSistema = calcularL(lambda, mu, k, resultado);
      document.getElementById("L").innerText =  clientesSistema.toFixed(3);
  
      //Calcular Lq
      const clientesCola = calcularLq(lambda, mu, k, resultado);
      document.getElementById("Lq").innerText =  clientesCola.toFixed(3);
  
  
      //Calcular Ln
      const clientesColaNoVacia = clientesCola/resultado2;
      document.getElementById("Ln").innerText = clientesColaNoVacia.toFixed(3); 
  
      //Calcular W
      const tiempoSistema = calcularW(lambda, mu, k, resultado);
      document.getElementById("W").innerText = tiempoSistema.toFixed(3);
  
  
      //Calcular Wq
      const tiempoCola = calcularWq(lambda, mu, k, resultado);
      document.getElementById("Wq").innerText =  tiempoCola.toFixed(3);
  
  
      //Calcular Wn
      const tiempoColaNoVacia = tiempoCola/resultado2;
      document.getElementById("Wn").innerText =  tiempoColaNoVacia.toFixed(3);
  }
  //////////////////////////////////////
  function calcularPn(l, m, k, n) {
    let po = calcular_P0(l, m, k);
    po = po.toFixed(3);
    const denominador1 = factorial(n);
    const fraccion1 = po / denominador1;
    const fraccion2 = exponenciacion(l, m, n);
    const resultado = fraccion1 * fraccion2;
  
    return resultado;
  }
  
  //calcular Pn cuando n >= k
  function calcularPn2(l, m, k, n) {
      const po = calcular_P0(l, m, k);
      const factorialK = factorial(k);
  
      const expo = n - k;
      const exponenciacionK = exponenciacionSinFraccion(k, expo);
  
      const fraccion1 = 1/(factorialK*exponenciacionK);
  
      const fraccion2 = exponenciacion(l,m,n);
  
      const resultado = po*fraccion1*fraccion2;
      
      return resultado;
  }

  function calcularResultado2() {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const input3 = document.getElementById("input3").value;
    const input4 = document.getElementById("input4").value;
  
    //Valores
    const lambda = Number(input1);
    const mu = Number(input2);
    const k = Number(input3);
    const n = Number(input4);
    //Calcular Pn
  
    if (n < k) {
      const resultado4 = calcularPn(lambda, mu, k, n);
      document.getElementById("Pn").innerText =  resultado4.toFixed(3);
    } else {
      const resultado4 = calcularPn2(lambda, mu, k, n);
      document.getElementById("Pn").innerText = resultado4.toFixed(3);
    }
  }
  ////////////////////////////////////////

  function calcularResultado3() {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const input3 = document.getElementById("input3").value;
    const input4 = document.getElementById("input4").value;
  
    const input5 = document.getElementById("input5").value;
    const input6 = document.getElementById("input6").value;
    const input7 = document.getElementById("input7").value;
    const input8 = document.getElementById("input8").value;
    const input9 = document.getElementById("input9").value;
  
    //Valores
    const lambda = Number(input1);
    const mu = Number(input2);
    const k = Number(input3);
    const n = Number(input4);
  
    //Costos
    const horas = Number(input5);
    const costoEsperaCola = Number(input6);
    const costoSistema = Number(input7);
    const costoServicio = Number(input8);
    const costoServidor = Number(input9);
  
  
    //Calcular CTTE
    const resultado = calcular_P0(lambda, mu, k);
  
    const tiempoCola = calcularWq(lambda, mu, k, resultado.toFixed(3));
  
    const ctte = lambda * horas * tiempoCola.toFixed(3) * costoEsperaCola.toFixed(3);
    document.getElementById("CTTE").textContent = "CTTE = " + ctte.toFixed(3);
  
    //Calcular CTTS
    
    const tiempoSistema = calcularW(lambda, mu, k, resultado);
    const ctts = lambda * horas * tiempoSistema.toFixed(2) * costoSistema;
    document.getElementById("CTTS").textContent = "CTTS = " + ctts.toFixed(3);
  
    //Calcularr CTTSer
    const tiempo = 1/mu;
    const cttserv = lambda * horas * tiempo.toFixed(3) * costoServicio;
    document.getElementById("CTTSer").textContent = "CTTSer = " + cttserv.toFixed(3);
  
    //Calcular CTS
    const cts = k * costoServidor * horas;
    document.getElementById("CTS").textContent = "CTS = " + cts.toFixed(3);
  
    //Calcular CT
    const ct = ctte + ctts + cttserv + cts;
    document.getElementById("CT").textContent = "CT = " + ct.toFixed(3);
  }
  
  function calcularResultado4() {
    const input1 = document.getElementById("inputM").value;
    const input2 = document.getElementById("inputL").value;
    const input3 = document.getElementById("inputU").value;
    const input4 = document.getElementById("inputK").value;
    const input5 = document.getElementById("inputN").value;
  
    //Valores
    const poblacion = Number(input1);
    const lambda = Number(input2);
    const mu = Number(input3);
    const k = Number(input4);
    const n = Number(input5);
  
    let pn =0;
  
    //Calcular P0
    const p0 = calcularP0F(lambda, mu, k, poblacion);
    document.getElementById("P0-F").textContent = "P0 = " + p0.toFixed(3);
  
    //Calcular Pn
    if(n < k){
       pn = calcularPnF(lambda, mu, n, poblacion, k);
      document.getElementById("Pn-F").textContent = "Pn = " + pn.toFixed(2);
      console.log("entro0");
    }else{
      pn = calcularPnF2(lambda, mu, k,n, poblacion);
      document.getElementById("Pn-F").textContent = "Pn = " + pn.toFixed(3);
    }
  
    //Calcular PE
    const pe = 1 - calcularPEF(k, lambda, mu, poblacion);
    document.getElementById("PE-F").textContent = "PE = " + pe.toFixed(3);
  
    //Calcular PNE
    const pne = 1 -pe;
    document.getElementById("PNE-F").textContent = "PNE = " + pne.toFixed(3);
  
    //Calcular L
    const l = calcularLF(k, lambda, mu, poblacion);
    document.getElementById("L-F").textContent = "L = " + l.toFixed(3);
  
    //Calcular Lq
    const lq = calcularLqF(k, lambda, mu, poblacion);
    document.getElementById("Lq-F").textContent = "Lq = " + lq.toFixed(3);
  
    //Calcular Ln
    const ln = lq / pe;
    document.getElementById("Ln-F").textContent = "Ln = " + ln.toFixed(3);
  
    //Calcular Wq
    const wq = lq / ((poblacion - l) * lambda);
    document.getElementById("Wq-F").textContent = "Wq = " + wq.toFixed(3); 
  
    //Calcular W
    const w = wq + (1 / mu);
    document.getElementById("W-F").textContent = "W = " + w.toFixed(3);
  
    //Calcular Wn
    const wn = wq / pe;
    document.getElementById("Wn-F").textContent = "Wn = " + wn.toFixed(3);
  
  
    
  
  
  
  
  }

  function calcularResultado5() {
    const input1 = document.getElementById("inputL").value;
    const input2 = document.getElementById("inputU").value;
    const input3 = document.getElementById("inputK").value;
    const input4 = document.getElementById("inputN").value;
    const inputM = document.getElementById("inputM").value;
  
    const input5 = document.getElementById("input10").value;
    const input6 = document.getElementById("input11").value;
    const input7 = document.getElementById("input12").value;
    const input8 = document.getElementById("input13").value;
    const input9 = document.getElementById("input14").value;
  
    //Valores
    const lambda = Number(input1);
    const mu = Number(input2);
    const k = Number(input3);
    const n = Number(input4);
    const poblacion = Number(inputM);
  
    //Costos
    const horas = Number(input5);
    const costoEsperaCola = Number(input6);
    const costoSistema = Number(input7);
    const costoServicio = Number(input8);
    const costoServidor = Number(input9);
  
    const pe = 1 - calcularPEF(k, lambda, mu, poblacion);
  
    //Calcular CTTE
    const lq = calcularLqF(k, lambda, mu, poblacion);
    const l = calcularLF(k, lambda, mu, poblacion);
    const wq = lq / ((poblacion - l) * lambda);
  
    const ctte = lambda * horas * wq * costoEsperaCola;
    document.getElementById("CTTE2").textContent = "CTTE = " + ctte.toFixed(3);
  
    //Calcular CTTS
    
    const tiempoSistema = lq + (1/mu);
  
    const ctts = lambda * horas * tiempoSistema * costoSistema;
    document.getElementById("CTTS2").textContent = "CTTS = " + ctts.toFixed(3);
  
    //Calcularr CTTSer
    const tiempo = 1/mu;
    const cttserv = lambda * horas * tiempo * costoServicio;
    document.getElementById("CTTSer2").textContent = "CTTSer = " + cttserv.toFixed(3);
  
    //Calcular CTS
    const cts = k * costoServidor * horas;
    document.getElementById("CTS2").textContent = "CTS = " + cts.toFixed(3);
  
    //Calcular CT
    const ct = ctte + ctts + cttserv + cts;
    document.getElementById("CT2").textContent = "CT = " + ct.toFixed(3);
  }