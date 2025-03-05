// document.addEventListener("DOMContentLoaded", function () {
//     function updateTitleWidths() {
//         document.querySelectorAll(".frame_1").forEach(frame => {
//             const title = frame.querySelector(".frame_title");
//             if (title) {
//                 const titleWidth = title.offsetWidth; // Получаем ширину заголовка
//                 frame.style.setProperty("--title-width", `${titleWidth}px`); // Обновляем переменную
//             }
//         });
//     }

//     updateTitleWidths(); // Вызываем при загрузке

//     window.addEventListener("resize", updateTitleWidths); // Обновляем при изменении окна
// });


// first script iteration ^

document.addEventListener("DOMContentLoaded", function () {
    function updateTitleWidths() {
        document.querySelectorAll(".frame_1").forEach(frame => {
            const title = frame.querySelector(".frame_title");
            if (title) {
                const titleWidth = title.offsetWidth; // Получаем ширину заголовка
                frame.style.setProperty("--title-width", `${titleWidth}px`); // Обновляем переменную

                // Проверяем ширину окна браузера
                if (window.innerWidth < 574) {
                    title.style.fontSize = "0.6em"; // Уменьшаем размер шрифта в два раза
                } else {
                    title.style.fontSize = ""; // Возвращаем стандартный размер шрифта
                }
            }
        });
    }

    updateTitleWidths(); // Вызываем при загрузке

    window.addEventListener("resize", updateTitleWidths); // Обновляем при изменении окна
});