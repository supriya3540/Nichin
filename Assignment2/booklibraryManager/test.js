const Library = require("./library");

const lib = new Library();

lib.addBook("The Alchemist", "Paulo Coelho", 1988);
lib.addBook("Norwegian Wood", "Haruki Murakami", 1987);
lib.addBook("Kafka on the Shore", "Haruki Murakami", 2002);

console.log("All books:", lib.getAllBooks());

console.log("Book with ID 2:", lib.getBookById(2));

lib.updateBook(2, { year: 1989 });
console.log("After update:", lib.getBookById(2));

console.log("Search by author 'murakami':", lib.searchByAuthor("murakami"));

lib.deleteBook(1);
console.log("After delete:", lib.getAllBooks());
