function calcularP() {
    // Obtener los valores de λ y μ
    const lambda = parseFloat(document.getElementById('lambda').value);
    const mu = parseFloat(document.getElementById('mu').value);
  
    // Verificar si los valores son válidos
    if (isNaN(lambda) || isNaN(mu) || mu === 0) {
      alert('Ingrese valores numéricos válidos y asegúrese de que μ no sea cero.');
      return;
    }
  
    // Calcular p
    const resultado = lambda / mu;
  
    // Mostrar el resultado
    document.getElementById('resultado').innerText = resultado.toFixed(2);
  }
//////////////////////////////////////////
  function calcularP0() {
    // Obtener los valores de λ y μ
    const lambda = parseFloat(document.getElementById('lambda').value);
    const mu = parseFloat(document.getElementById('mu').value);
  
    // Verificar si los valores son válidos
    if (isNaN(lambda) || isNaN(mu) || mu === 0) {
      alert('Ingrese valores numéricos válidos y asegúrese de que μ no sea cero.');
      return;
    }
  
    // Calcular P₀
    const resultado = 1 - (lambda / mu);
  
    // Mostrar el resultado
    document.getElementById('formula').innerText = resultado.toFixed(4);
  }
  
  