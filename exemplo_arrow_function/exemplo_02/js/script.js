const btnSomar = document.getElementById('btnSoma');

const primeiroInput = document.getElementById('valor1');

const segundoInput = document.getElementById('valor2');

const paragrafo = document.getElementById('Resultado');

const somar = (num1, num2) => num1 + num2;

btnSomar.addEventListener('click', () =>{
    const num1 = parseFloat(primeiroInput.value);
    const num2 = parseFloat(segundoInput.value);

    if(isNaN(num1) || isNaN(num2)){
        paragrafo.textContent = "Por favor insira um valor !";
        return;
    }else{
        const conta = somar(num1, num2);
        paragrafo.textContent = conta;
    }
});