class ContactRepository {
  constructor() {
    this.contacts = [];
    this.idCounter = 1;
  }

  addContact(name, phone, email) {
    const contact = {
      id: this.idCounter++,
      name,
      phone,
      email
    };
    this.contacts.push(contact);
    return contact;
  }

  getAllContacts() {
    return this.contacts;
  }

  getContactById(id) {
    return this.contacts.find(c => c.id === id) || null;
  }

  updateContact(id, data) {
    const contact = this.getContactById(id);
    if (!contact) return null;

    if (data.name !== undefined) contact.name = data.name;
    if (data.phone !== undefined) contact.phone = data.phone;
    if (data.email !== undefined) contact.email = data.email;

    return contact;
  }

  deleteContact(id) {
    const index = this.contacts.findIndex(c => c.id === id);
    if (index === -1) return false;

    this.contacts.splice(index, 1);
    return true;
  }

  search(query) {
    const q = query.toLowerCase();
    return this.contacts.filter(
      c =>
        c.name.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q)
    );
  }
}

module.exports = ContactRepository;
