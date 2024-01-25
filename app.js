function copiarTexto() {
  const texto =
    "00020126600014BR.GOV.BCB.PIX0111864120006150223Presente  de casamento 5204000053039865802BR5925EDNEA APARECIDA LUZIA LOP6009SAO PAULO62230519Presentedecasamento6304FEA8";

  navigator.clipboard
    .writeText(texto)
    .then(() => {
      mostrarMensagem(
        "Pix copiado com sucesso!",
        "green",
        3500
      );
    })
    .catch((err) => {
      console.error(
        "Erro ao copiar texto: ",
        err
      );
    });
}

function mostrarMensagem(
  texto,
  cor = "green",
  tempo = 3500
) {
  const containerMensagens =
    document.getElementById(
      "container-mensagens"
    );
  const id = Math.floor(
    Date.now() * Math.random()
  ).toString();
  const msg = `<div id="msg-${id}" class="animated fadeInDown toast ${cor}">${texto}</div>`;

  containerMensagens.innerHTML += msg;

  setTimeout(() => {
    const mensagemElement =
      document.getElementById(`msg-${id}`);
    mensagemElement.classList.remove(
      "fadeInDown"
    );
    mensagemElement.classList.add("fadeOutUp");

    setTimeout(() => {
      mensagemElement.remove();
    }, 800);
  }, tempo);
}
