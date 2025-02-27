document.addEventListener("DOMContentLoaded", function () {
    function updateStyles() {
        const articles = document.querySelectorAll(".frame_1 article");

        articles.forEach(article => {
            // Проверяем ширину окна браузера
            if (window.innerWidth < 574) {
                article.style.fontSize = "0.6em"; // Уменьшаем размер шрифта в два раза
            } else {
                article.style.fontSize = ""; // Возвращаем стандартный размер шрифта
            }
        });
    }

    updateStyles(); // Вызываем при загрузке

    window.addEventListener("resize", updateStyles); // Обновляем при изменении окна
});