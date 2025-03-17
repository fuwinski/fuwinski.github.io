fetch('data/frametext.json')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector('.mid-c-r');
        
        data.forEach((item, index) => {
            const frame = document.createElement('div');
            frame.classList.add('frame');
            
            const title = document.createElement('span');
            title.classList.add('frame-title');
            title.textContent = item.name;
            
            const text = document.createElement('article');
            text.classList.add('frame-text');
            text.textContent = item.text;
            text.innerHTML = item.text;

            frame.appendChild(title);
            frame.appendChild(text);
            
            container.appendChild(frame);
        });
    })
    .catch(error => console.error('Ошибка при загрузке quotes.json:', error));
