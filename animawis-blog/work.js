function mostrarAssunto(assunto) {
    // Ocultar todos os conteúdos
    const conteudos = document.querySelectorAll("main div");
    for (const conteudo of conteudos) {
      conteudo.style.display = "none";
    }
  
    // Mostrar o conteúdo relacionado ao assunto selecionado
    const conteudoSelecionado = document.getElementById(assunto);
    conteudoSelecionado.style.display = "block";
  }
  