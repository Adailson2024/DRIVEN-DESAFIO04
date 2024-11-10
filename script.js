let escolhaprato = "";
let escolhabebida = "";
let escolhasobremesa = "";

function selecionarPrato(p1) {
  escolhaprato = p1.innerHTML;
  const p1Selecionadoantes = document.querySelector(
    ".opcoesdeprato .selecionador"
  );

  if (p1Selecionadoantes !== null) {
    p1Selecionadoantes.classList.remove("selecionador");
  }

  p1.classList.add("selecionador");
}

function selecionadordeBebidas(b1) {
  escolhabebida = b1.innerHTML;
  const b1Selecionadoantes = document.querySelector(
    ".opcoesdebebida .selecionador"
  );
  if (b1Selecionadoantes !== null) {
    b1Selecionadoantes.classList.remove("selecionador");
  }

  b1.classList.add("selecionador");
}
function selecionarSobremesa(s1) {
  escolhasobremesa = s1.innerHTML;
  const s1Selecionadoantes = document.querySelector(
    ".opcoesdesobremesa .selecionador"
  );
  if (escolhaprato !== "" && escolhabebida !== "") {
    if (s1Selecionadoantes !== null) {
      s1Selecionadoantes.classList.remove("selecionador");
    }

    s1.classList.add("selecionador");
    document.querySelector(".botao1").classList.add("esconder");

    document.querySelector(".botao2").classList.remove("esconder");
  } else {
    // Exibir uma mensagem de erro para o usuário
    alert("Por favor, selecione um prato e uma bebida.");
  }
}
function fecharPedido() {
  const fim = document.querySelector(".final");
  fim.classList.remove("esconder");
  const texto = `kkkkk`;
  document.querySelector(".pedido1").innerHTML = texto;
  const texto2 = `dd`;
  document.querySelector(".pedido2").innerHTML = texto2;
  const texto3 = `dd`;
  document.querySelector(".pedido3").innerHTML = texto3;
  const total = `Total: ${parseInt(escolhaprato)}`;
  document.querySelector(".Total").innerHTML = total;
}

function cancelador() {
  const c = document.querySelector(".final");
  c.classList.add("esconder");
  //const texto = `${escolhaprato} + ${escolhabebida}+${escolhasobremesa}`;
  //document.querySelector(".pedido1").innerHTML = texto;
}

//const texto =`iniciando ${nomejogo} com ${qtdde jogadores}.`
//document.querySelector(".mensagem-iniciando).innerHTML=texto;}}
