function multiplicar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1 * num2;
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}
if (isNaN(resultado)) {resultadoDiv.textContent = 'Por favor, insira números válidos.';
} else { 
    resultadoDiv.textContent = `O resultado da multiplicação é: ${resultado}`;
}
function limpar() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('resultado').innerText = '';
}
