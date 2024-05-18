function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var unidadePeso = document.getElementById('unidadePeso').value;
    var unidadeAltura = document.getElementById('unidadeAltura').value;

    if (isNaN(peso) || isNaN(altura)) {
        alert("Por favor, insira valores numéricos válidos para peso e altura.");
        return;
    }

    if (unidadePeso === 'lb') {
        peso = peso * 0.453592;  // Convert pounds to kilograms
    }

    if (unidadeAltura === 'cm') {
        altura = altura / 100;  // Convert centimeters to meters
    } else if (unidadeAltura === 'in') {
        altura = altura * 0.0254;  // Convert inches to meters
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
