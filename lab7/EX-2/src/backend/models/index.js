const Author = require('./author');
const Book = require('./book');

Author.hasMany(Book);
Book.belongsTo(Author);

module.exports = { Author, Book };