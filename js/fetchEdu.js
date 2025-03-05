fetch('data/education.json')
    .then(response => response.json())
    .then(educationData => {
        const educationDiv = document.querySelector('.education-wrapper'); 
        
        educationData.forEach((edu, index) => {
            // Создаем контейнер для блока образования
            const eduBlock = document.createElement('div');
            eduBlock.classList.add('education-block');

            // Добавляем заголовок типа образования
            const typeElement = document.createElement('p');
            typeElement.classList.add('edu-type');
            typeElement.innerHTML = `<b>${edu.type}</b>`;
            eduBlock.appendChild(typeElement);

            // Добавляем название учебного заведения
            const institutionElement = document.createElement('p');
            institutionElement.classList.add('edu-institution');
            institutionElement.textContent = `${edu.institution}, ${edu["grad-year"]}`;
            eduBlock.appendChild(institutionElement);

            // Добавляем специализацию
            const specializationElement = document.createElement('p');
            specializationElement.classList.add('edu-specialization');
            specializationElement.textContent = edu.specialization;
            eduBlock.appendChild(specializationElement);

            // Добавляем блок образования в контейнер
            educationDiv.appendChild(eduBlock);

            // Добавляем пропуск строки между блоками (кроме последнего)
            if (index < educationData.length - 1) {
                educationDiv.appendChild(document.createElement('br'));
            }
        });
    })
    .catch(error => console.error('Ошибка при загрузке education.json:', error));
