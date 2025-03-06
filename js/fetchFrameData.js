fetch('data/frametext.json')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector('.mid-c-r');
        
        data.forEach((item, index) => {
            // Создаем контейнер frame
            const frame = document.createElement('div');
            frame.classList.add('frame');
            
            // Создаем span для заголовка
            const title = document.createElement('span');
            title.classList.add('frame-title');
            title.textContent = item.name;
            
            // Создаем article для текста
            const text = document.createElement('article');
            text.classList.add('frame-text');
            text.textContent = item.text;
            
            // Добавляем элементы в frame
            frame.appendChild(title);
            frame.appendChild(text);
            
            // Добавляем frame в контейнер
            container.appendChild(frame);
            
            // Добавляем пропуск строки между блоками (кроме последнего)
            // if (index < data.length - 1) {
            //     container.appendChild(document.createElement('br'));
            // }
        });
    })
    .catch(error => console.error('Ошибка при загрузке quotes.json:', error));
