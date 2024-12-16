let botaoCalcular = document.getElementsByClassName("calcular")[0];
let valorTotalVeiculo = document.getElementById("valor-total");
let valorEntrada = document.getElementById("valor-entrada");
let prazo = document.getElementById("prazo");
let juros = document.getElementById("juros");
let valorImpresso = document.getElementsByClassName("valor")[0];
let valorTotaldoFinanciamento =
  document.getElementsByClassName("valor-final")[0];

function calcularValorTotal() {
  let valorTotalVeiculoNumero = Number(valorTotalVeiculo.value);
  let valorEntradaNumero = Number(valorEntrada.value);
  let prazoNumero = Number(prazo.value);
  let jurosNumero = Number(juros.value) / 100 / 12;

  let valorFinanciado = valorTotalVeiculoNumero - valorEntradaNumero;
  let funcaoCima =
    valorFinanciado * jurosNumero * Math.pow(1 + jurosNumero, prazoNumero);
  let funcaoBaixo = Math.pow(1 + jurosNumero, prazoNumero) - 1;
  let resultado = funcaoCima / funcaoBaixo;
  let resultadoDuasCasas = resultado.toFixed(2);
  let valorFinalPagoFinanciamento =
    resultado * prazoNumero + valorEntradaNumero;
  let valorDuasCasas = valorFinalPagoFinanciamento.toFixed(2);

  valorImpresso.innerHTML = `R$ ${resultadoDuasCasas.toLocaleString("pt-BR")}`;
  valorTotaldoFinanciamento.innerHTML = `R$ ${valorFinalPagoFinanciamento.toLocaleString(
    "pt-BR"
  )}`;
}

botaoCalcular.addEventListener("click", () => {
  trocarDiv();
  execucao();
});

let zerar = document.getElementsByClassName("limpar")[0];

function zero() {
  botaoCalcular.value = "";
  valorTotalVeiculo.value = "";
  valorEntrada.value = "";
  prazo.value = "";
  juros.value = "";
  previa.style.display = "flex";
  result.style.display = "none";
}

zerar.addEventListener("click", () => {
  zero();
});

let previa = document.getElementsByClassName("previa")[0];
let result = document.getElementById("resultado");
function trocarDiv() {
  previa.style.display = "none";
  result.style.display = "flex";
}

function verificacao(valor) {
  if (valor.value == "") {
    return false;
  } else {
    return true;
  }
}

function execucao() {
  if (verificacao(valorTotalVeiculo) == true) {
    calcularValorTotal();
  } else {
    alert("Digite o valor total do veículo");
  }

  if (verificacao(valorEntrada) == true) {
    calcularValorTotal();
  } else {
    alert("Digite o valor da sua entrada");
  }

  if (verificacao(juros) == true) {
    calcularValorTotal();
  } else {
    alert("Digite a sua taxa de juros ao ano");
  }

  if (verificacao(prazo) == true) {
    calcularValorTotal();
  } else {
    alert("Digite o prazo do seu financiamento em meses");
  }
}
