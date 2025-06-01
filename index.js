document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("input");

const btnLimpar = document.getElementById("btnlimpar");
if (btnLimpar) {
  btnLimpar.addEventListener("click", limpar);
}


  // Função para inserir valor no display
  function inserir(valor) {
    input.value += valor;
  }

  // Função para calcular o resultado
  function calcular() {
    try {
      input.value = eval(input.value);
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Expressão inválida!',
      });
    }
  }

  // Função para limpar o display
  function limpar() {
    input.value = "";
  }

  // Atribuindo eventos aos botões
  const botoes = {
    btn0: "0",
    btn1: "1",
    btn2: "2",
    btn3: "3",
    btn4: "4",
    btn5: "5",
    btn6: "6",
    btn7: "7",
    btn8: "8",
    btn9: "9",
    btnpoint: ".",
    btnmais: "+",
    btnmenos: "-",
    btnmultiplicar: "*",
    btndividir: "/",
  };

  // Atribui o evento para todos os botões de número e operação
  for (let id in botoes) {
    const botao = document.getElementById(id);
    if (botao) {
      botao.addEventListener("click", function () {
        inserir(botoes[id]);
      });
    }
  }

  // Botão de igual
  const btnIgual = document.getElementById("btnigual");
  if (btnIgual) {
    btnIgual.addEventListener("click", calcular);
  }

  // Opcional: limpar com tecla ESC ou botão extra



  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      limpar();
    } else if (event.key === "Enter") {
      calcular();
    }
  });
});
