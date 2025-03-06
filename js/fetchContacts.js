fetch('data/contacts.json')
.then(response => response.json())
.then(contacts => {
    // Функция для отображения контактов
    const contactsDiv = document.querySelector('.contacts-wrapper'); 
    
    contacts.forEach(contact => {
        // Создаем элемент для контакта
        const contactElement = document.createElement('div');
        contactElement.classList.add('contact');
        
        // Добавляем иконку
        const iconElement = document.createElement('div');
        iconElement.classList.add('icon');
        iconElement.innerHTML = contact.icon;
        contactElement.appendChild(iconElement);

        // Добавляем текст
        const textElement = document.createElement('span');
        textElement.classList.add('text');
        textElement.textContent = contact.text;
        textElement.innerHTML = contact.text;
        contactElement.appendChild(textElement);

        // Добавляем контакт в список
        contactsDiv.appendChild(contactElement);
    });
})
.catch(error => console.error('Yikes. Ошибка при загрузке contacts.json:', error));


