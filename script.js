const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const bttSomar = document.getElementById('bttSomar')
const resultado = document.getElementById('resultado');

/* sem arrow function
bttSomar.addEventListener('click', somar);

function somar(){
    let a = parseFloat(numero1.value);
    let b = parseFloat(numero2.value);
    let soma = a + b;
    /*resultado.textContent = a + ' + ' + b + ' = ' + soma;
    resultado.textContent = `${a} + ${b} = ${soma}`
}
*/

/* com arrow function */

bttSomar.addEventListener('click', () => {
    let a = parseFloat(numero1.value);
    let b = parseFloat(numero2.value);
    let soma = a + b;
    /*resultado.textContent = a + ' + ' + b + ' = ' + soma;*/
    resultado.textContent = `${a} + ${b} = ${soma}`
})

// Verifica se o navegador suporta Service Workers
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js') // Caminho para o arquivo sw.js
        .then((registration) => {
          console.log('Service Worker registado com sucesso:', registration.scope);
        })
        .catch((error) => {
          console.log('Falha ao registar o Service Worker:', error);
        });
    });
  }