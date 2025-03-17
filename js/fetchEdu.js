fetch('data/education.json')
    .then(response => response.json())
    .then(educationData => {
        const educationDiv = document.querySelector('.education-wrapper'); 
        
        educationData.forEach((edu, index) => {
            const eduBlock = document.createElement('div');
            eduBlock.classList.add('education-block');

            const typeElement = document.createElement('p');
            typeElement.classList.add('edu-type');
            typeElement.innerHTML = `<b>${edu.type}</b>`;
            eduBlock.appendChild(typeElement);

            const institutionElement = document.createElement('p');
            institutionElement.classList.add('edu-institution');
            institutionElement.textContent = `${edu.institution}, ${edu["grad-year"]}`;
            eduBlock.appendChild(institutionElement);

            const specializationElement = document.createElement('p');
            specializationElement.classList.add('edu-specialization');
            specializationElement.textContent = edu.specialization;
            eduBlock.appendChild(specializationElement);

            educationDiv.appendChild(eduBlock);

            if (index < educationData.length - 1) {
                educationDiv.appendChild(document.createElement('br'));
            }
        });
    })
    .catch(error => console.error('Ошибка при загрузке education.json:', error));
