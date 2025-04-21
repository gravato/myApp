function somar() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  
  if (!isNaN(num1) && !isNaN(num2)) {
      let soma = num1 + num2;
      document.getElementById('resultado').textContent = `Resultado: ${soma}`;
  } else {
      document.getElementById('resultado').textContent = "Por favor, insira números válidos.";
  }
}

// Verifica se o navegador suporta Service Workers
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js') // Caminho para o arquivo sw.js
        .then((registration) => {
          console.log('Service Worker registrado com sucesso:', registration.scope);
        })
        .catch((error) => {
          console.log('Falha ao registrar o Service Worker:', error);
        });
    });
  }

