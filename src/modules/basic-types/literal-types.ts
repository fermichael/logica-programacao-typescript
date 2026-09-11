type tipoDaMensagem = "error" | "info" | "warn";

function gerarMensagem(status: tipoDaMensagem) {
  switch (status) {
    case "error":
      console.error("Teste");
      break;

    case "info":
      console.info("Teste");
      break;

    case "warn":
      console.warn("Teste");
      break;
  }
}

gerarMensagem("error");
