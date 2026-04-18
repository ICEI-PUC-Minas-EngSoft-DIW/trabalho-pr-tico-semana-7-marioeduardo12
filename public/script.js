var nome = prompt("Digite seu nome:");

var renda = Number(prompt("Digite sua renda mensal:"));
while (isNaN(renda)) {
    renda = Number(prompt("Valor inválido! Digite sua renda mensal (apenas números):"));
}

var qtdDespesas = Number(prompt("Quantas despesas deseja informar? (1 a 5):"));
while (isNaN(qtdDespesas) || qtdDespesas < 1 || qtdDespesas > 5) {
    qtdDespesas = Number(prompt("Quantidade inválida! Digite um número entre 1 e 5:"));
}

var totalDespesas = 0;

for (var i = 1; i <= qtdDespesas; i++) {
    var despesa = Number(prompt("Digite o valor da despesa " + i + ":"));
    while (isNaN(despesa)) {
        despesa = Number(prompt("Valor inválido! Digite o valor da despesa " + i + " (apenas números):"));
    }
    totalDespesas = totalDespesas + despesa;
}

var mensagem;
var sobra = 0;

if (totalDespesas > renda) {
    mensagem = "Atenção: você gastou mais do que ganhou.";
} else {
    sobra = renda - totalDespesas;
    if (sobra >= (renda * 0.3)) {
        mensagem = "Otimo: boa margem de sobra.";
    } else {
        mensagem = "Ok: dá para melhorar a sobra.";
    }
}

var resultado = "------ RESULTADO ------\n";
resultado += "Nome: " + nome + "\n";
resultado += "Renda: " + renda.toFixed(2) + "\n";
resultado += "Despesas: " + totalDespesas.toFixed(2) + "\n";
resultado += "Sobra: " + sobra.toFixed(2) + "\n";
resultado += "Situação: " + mensagem;

console.log(resultado);
alert(resultado);
