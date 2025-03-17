fetch('data/contacts.json')
.then(response => response.json())
.then(contacts => {
    const contactsDiv = document.querySelector('.contacts-wrapper'); 
    
    contacts.forEach(contact => {
        const contactElement = document.createElement('div');
        contactElement.classList.add('contact');

        const iconElement = document.createElement('div');
        iconElement.classList.add('icon');
        iconElement.innerHTML = contact.icon;
        contactElement.appendChild(iconElement);

        const textElement = document.createElement('span');
        textElement.classList.add('text');
        textElement.textContent = contact.text;
        textElement.innerHTML = contact.text;
        contactElement.appendChild(textElement);

        contactsDiv.appendChild(contactElement);
    });
})
.catch(error => console.error('Yikes. Ошибка при загрузке contacts.json:', error));


