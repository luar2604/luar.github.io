console.log("El archivo JS ha cargado correctamente");
document.addEventListener('DOMContentLoaded', () => {
    console.log("El DOM está listo");

  const inputLitros = document.getElementById('litros');
  const btnCalcular = document.getElementById('btnCalcular');
  const resultadoDiv = document.getElementById('resultado');
  const aguaSpan = document.getElementById('agua');
  const co2Span = document.getElementById('co2');

  btnCalcular.addEventListener('click', () => {
    const litros = parseFloat(inputLitros.value);

    if (isNaN(litros) || litros <= 0) {
      alert('Introduce un número válido');
      return;
    }

    
    const aguaAhorrada = litros * 900;
    const co2Reducido = litros * 2.7;

    aguaSpan.textContent = aguaAhorrada.toLocaleString('es-ES');
    co2Span.textContent = co2Reducido.toFixed(1);

    resultadoDiv.classList.remove('oculto');
  });

});

