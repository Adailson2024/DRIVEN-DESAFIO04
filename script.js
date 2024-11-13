let escolhaprato = "";
let escolhabebida = "";
let escolhasobremesa = "";
let valorPratoSelecionado = 0;
let valorBebidaSelecionado = 0;
let valorSobremesaSelectionada = 0;
let total=0;

function selecionarPrato(p1) {
  const p1Selecionadoantes = document.querySelector(
    ".opcoesdeprato .selecionador"
  );
  escolhaprato = p1.children[1].innerHTML;
  valorPratoSelecionado = parseFloat(p1.children[3].innerHTML);
  if (p1Selecionadoantes !== null) {
    p1Selecionadoantes.classList.remove("selecionador");
  }

  p1.classList.add("selecionador");
}

function selecionadordeBebidas(b1) {
  const b1Selecionadoantes = document.querySelector(
    ".opcoesdebebida .selecionador"
  );
  escolhabebida = b1.children[1].innerHTML;
  valorBebidaSelecionado = parseFloat(b1.children[3].innerHTML);
  
  if (b1Selecionadoantes !== null) {
    b1Selecionadoantes.classList.remove("selecionador");
  }

  b1.classList.add("selecionador");
}
function selecionarSobremesa(s1) {
  const s1Selecionadoantes = document.querySelector(
    ".opcoesdesobremesa .selecionador"
  );
  escolhasobremesa = s1.children[1].innerHTML;
  valorSobremesaSelectionada = parseFloat(s1.children[3].innerHTML);
  console.log(valorSobremesaSelectionada);
  
  
    if (s1Selecionadoantes !== null) {
      s1Selecionadoantes.classList.remove("selecionador");
    }

    s1.classList.add("selecionador");
    document.querySelector(".botao1").classList.add("esconder");

    document.querySelector(".botao2").classList.remove("esconder");
   
}
function fecharPedido() {
  const fim = document.querySelector(".final");
  fim.classList.remove("esconder");
  const texto =
    `${escolhaprato}: ` +
    valorPratoSelecionado.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  document.querySelector(".pedido1").innerHTML = texto;
  const texto2 =
    `${escolhabebida}: ` +
    valorBebidaSelecionado.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  document.querySelector(".pedido2").innerHTML = texto2;
  const texto3 =
    `${escolhasobremesa}: ` +
    valorSobremesaSelectionada.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  document.querySelector(".pedido3").innerHTML = texto3;
  total = (valorPratoSelecionado + valorBebidaSelecionado + valorSobremesaSelectionada);
  
  document.querySelector(".Total").innerHTML = "TOTAL: " + total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
}

function cancelador() {
  const c = document.querySelector(".final");
  c.classList.add("esconder");
  
}

function tcerto() {
  const numero = "+5588996967486";
  const mensagem =
    `Olá, gostaria de fazer o pedido:\n \- Prato: ${escolhaprato}\n \- Bebida: ${escolhabebida}\n \- Sobremesa: ${escolhasobremesa}\nTotal: ` +
    total.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  const mensagemCodificada = encodeURIComponent(mensagem);
  const link = `https://api.whatsapp.com/send?phone=${numero}&text=${mensagemCodificada}`;
  window.open(link, "_blank");
}


