const botoes = document.querySelectorAll(".btn-proximo");
const passos = document.querySelectorAll(".passo");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const proximo = botao.getAttribute("data-proximo");
        const passoAtual = document.querySelector(".passo.ativo");
        const proximoPasso = document.getElementById(`passo-${proximo}`);

        // Remove o passo ativo atual
        passoAtual.classList.remove("ativo");
        passoAtual.classList.add("oculto");

        // Mostra o próximo passo
        proximoPasso.classList.add("ativo");
        proximoPasso.classList.remove("oculto");
    });
});
