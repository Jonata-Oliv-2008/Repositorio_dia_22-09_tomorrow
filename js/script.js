// Esta é a função que será chamada quando o botão for clicado (definido no HTML com onclick="calcularArea()").
function calcularArea() {
    // 1. OBTER OS VALORES DOS CAMPOS DE ENTRADA
    let valor1String = document.getElementById('valor1').value; // Base (largura)
    let valor2String = document.getElementById('valor2').value; // Altura

    // 2. CONVERTER PARA NÚMEROS
    let base = parseFloat(valor1String);
    let altura = parseFloat(valor2String);

    // 3. VERIFICAR SE OS VALORES SÃO VÁLIDOS
    if (isNaN(base) || isNaN(altura)) {
        alert("Por favor, digite valores numéricos válidos em ambos os campos.");
        return;
    }

    // 4. CALCULAR A ÁREA (base x altura)
    let area = base * altura;

    // 5. EXIBIR O RESULTADO
    document.getElementById('resultado').innerHTML = "A área do retângulo é: " + area;
}
