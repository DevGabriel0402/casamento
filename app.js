function copiarTexto() {
  const texto =
    "00020126600014BR.GOV.BCB.PIX0111864120006150223Presente  de casamento 5204000053039865802BR5925EDNEA APARECIDA LUZIA LOP6009SAO PAULO62230519Presentedecasamento6304FEA8";

  navigator.clipboard
    .writeText(texto)
    .then(() => {
      alert("Texto copiado com sucesso!");
    })
    .catch((err) => {
      console.error(
        "Erro ao copiar texto: ",
        err
      );
    });
}
