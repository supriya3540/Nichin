const ContactRepository = require("./contactrepository");

const contacts = new ContactRepository();

contacts.addContact("Supriya", "9876543210", "supriya@gmail.com");
contacts.addContact("Rahul Kumar", "9123456780", "rahul@gmail.com");
contacts.addContact("Anita Sharma", "9000000000", "anita@yahoo.com");

console.log("All contacts:", contacts.getAllContacts());

console.log("Search 'rahul':", contacts.search("rahul"));
console.log("Search 'gmail':", contacts.search("gmail"));

contacts.updateContact(2, { phone: "9999999999" });
console.log("After update:", contacts.getContactById(2));

contacts.deleteContact(1);
console.log("After delete:", contacts.getAllContacts());
