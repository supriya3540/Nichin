class Library {
  constructor() {
    this.books = [];
    this.idCounter = 1;
  }

  addBook(title, author, year) {
    const book = {
      id: this.idCounter++,
      title,
      author,
      year
    };
    this.books.push(book);
    return book;
  }

  getAllBooks() {
    return this.books;
  }

  getBookById(id) {
    return this.books.find(b => b.id === id) || null;
  }

  updateBook(id, data) {
    const book = this.getBookById(id);
    if (!book) return null;

    if (data.title !== undefined) book.title = data.title;
    if (data.author !== undefined) book.author = data.author;
    if (data.year !== undefined) book.year = data.year;

    return book;
  }

  deleteBook(id) {
    const index = this.books.findIndex(b => b.id === id);
    if (index === -1) return false;

    this.books.splice(index, 1);
    return true;
  }

  searchByAuthor(author) {
    return this.books.filter(
      b => b.author.toLowerCase().includes(author.toLowerCase())
    );
  }
}

module.exports = Library;
