const sequelize = require('./backend/config/database');
const { Author, Book } = require('./backend/models');

async function main() {
    await sequelize.sync({ force: true });

    // Create authors
    const authors = await Author.bulkCreate([
        { name: 'Ronan The Best', birthYear: 1990 },
        { name: 'Kim Ang', birthYear: 1995 },
        { name: 'Hok Tim', birthYear: 2015 }
    ]);

    // Create books for each author
    await Book.bulkCreate([
        { title: 'Ronan Book 1', publicationYear: 2010, pages: 200, AuthorId: authors[0].id },
        { title: 'Ronan Book 2', publicationYear: 2012, pages: 150, AuthorId: authors[0].id },
        { title: 'Kim Book 1', publicationYear: 2015, pages: 300, AuthorId: authors[1].id },
        { title: 'Kim Book 2', publicationYear: 2018, pages: 220, AuthorId: authors[1].id },
        { title: 'Hok Book 1', publicationYear: 2020, pages: 180, AuthorId: authors[2].id },
        { title: 'Hok Book 2', publicationYear: 2022, pages: 210, AuthorId: authors[2].id }
    ]);

    // Fetch all books by a given author (e.g., Ronan)
    const ronanBooks = await Book.findAll({ where: { AuthorId: authors[0].id } });
    console.log('Books by Ronan:', ronanBooks.map(b => b.title));

    // Create a new book for an existing author using .createBook()
    const newBook = await authors[0].createBook({ title: 'Ronan Book 3', publicationYear: 2025, pages: 250 });
    console.log('Created new book:', newBook.title);

    // List all authors along with their books
    const allAuthors = await Author.findAll({ include: Book });
    allAuthors.forEach(author => {
        console.log(author.name, 'books:', author.Books.map(b => b.title));
    });
}

main();