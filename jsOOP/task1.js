import { Book } from './Book.js';
import { EBook } from './EBook.js';

// task 1.1
const book1 = new Book('The Life', 'Jon Smith', 1989);
book1.printInfo();

const book2 = new Book('Real man', 'Samanta Edward', 2001);
book2.printInfo();

// task 1.2
const ebook1 = new EBook('The Life', 'Jon Smith', 1989, '.pdf');
ebook1.printInfo();

const ebook2 = new EBook('Real man', 'Samanta Edward', 2001, '.word');
ebook2.printInfo();

// task 1.4
const books = [
	{ name: 'The First', author: 'Jon Smith', year: 1933 },
	{ name: 'The Second', author: 'Ted Smith', year: 1923, file: '.pdf' },
	{ name: 'The Third', author: 'Nick Smith', year: 1945 },
	{ name: 'The Fourth', author: 'Donald Smith', year: 2023, file: '.word' },
	{ name: 'The Fifth', author: 'Joe Smith', year: 2003 },
];

const oldestBook = Book.getOldestBook(books);

// task 1.5
const oldFormat = new Book('Real women', 'Samanta Grey', 1987);
const newFormat = EBook.convertBookInfo(oldFormat, '.pdf');
