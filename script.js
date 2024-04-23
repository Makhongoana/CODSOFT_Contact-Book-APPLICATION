let contacts = [];

function showAddForm() {

    document.getElementById('addForm').style.display = 'block';

}

function addContact() {

    const name = document.getElementById('name').value;

    const phone = document.getElementById('phone').value;

    const email = document.getElementById('email').value;

    const address = document.getElementById('address').value;

    const contact = {

        name: name,

        phone: phone,

        email: email,

        address: address

    };

    contacts.push(contact);

    displayContacts();

}

function displayContacts() {

    let contactList = document.getElementById('contactList');

    contactList.innerHTML = '';

    contacts.forEach((contact, index) => {

        let contactItem = document.createElement('div');

        contactItem.innerHTML = `<strong>${contact.name}</strong>: ${contact.phone} <button onclick="editContact(${index})">Edit</button> <button onclick="deleteContact(${index})">Delete</button>`;

        contactList.appendChild(contactItem);

    });

}

function editContact(index) {

    const name = prompt("Enter new name:");

    const phone = prompt("Enter new phone number:");

    const email = prompt("Enter new email:");

    const address = prompt("Enter new address:");

    if (name && phone && email && address) {

        contacts[index].name = name;

        contacts[index].phone = phone;

        contacts[index].email = email;

        contacts[index].address = address;

        displayContacts();

    }

}

function deleteContact(index) {

    contacts.splice(index, 1);

    displayContacts();

}

function searchContacts() {

    const searchTerm = document.getElementById('search').value.toLowerCase();

    const filteredContacts = contacts.filter(contact =>

        contact.name.toLowerCase().includes(searchTerm) ||

        contact.phone.includes(searchTerm)

    );

    displayFilteredContacts(filteredContacts);

}

function displayFilteredContacts(filteredContacts) {

    let contactList = document.getElementById('contactList');

    contactList.innerHTML = '';

    filteredContacts.forEach(contact => {

        let contactItem = document.createElement('div');

        contactItem.innerHTML = `<strong>${contact.name}</strong>: ${contact.phone}`;

        contactList.appendChild(contactItem);

    });

}

