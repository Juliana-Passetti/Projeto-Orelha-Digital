document.addEventListener("DOMContentLoaded", function () {
    const homeItems = document.querySelectorAll(".home__item");
    const caixaLinks = document.querySelector(".caixa-links");

    homeItems.forEach(function (item) {
        item.addEventListener("click", function () {
            caixaLinks.classList.toggle("ativo"); // Adiciona ou remove a classe "ativo" da caixa de links
        });
    });
});
