let submit = document.getElementById('submitButton');
var quantoGastei = document.getElementById('quantoGastei');
var qualOdd = document.getElementById('qualOdd');
let resultadoOdd = document.getElementById('resultadoOdd');
let resultadoValor = document.getElementById('resultadoValor');
let totalRetorno = 0;
let lucro = 0;
let qualOddPreciso = 0;

window.addEventListener('load', () => {
  submit.addEventListener('click', (event) => {
    event.preventDefault();
    totalRetorno = quantoGastei.value * qualOdd.value;
    lucro = totalRetorno - quantoGastei.value;
    qualOddPreciso = totalRetorno / lucro;
    resultadoOdd.textContent = qualOddPreciso.toFixed(2);
    resultadoValor.textContent = lucro.toFixed(2);
  });
});
