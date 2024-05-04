function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    
    if (isNaN(peso) || isNaN(altura)) {
        alert("Por favor, insira valores numéricos válidos para peso e altura.");
        return;
    }
    
    var imc = peso / (altura * altura);
    var classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    document.getElementById('resultado').innerHTML = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
}
