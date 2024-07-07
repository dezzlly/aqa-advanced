import { Book } from './Book.js';

export class EBook extends Book {
	constructor(name, author, yearOfPublished, file) {
		super(name, author, yearOfPublished);
		this._file = file;
	}

	get file() {
		return this._file;
	}

	set file(bookFile) {
		if (bookFile === '') {
			console.log('The book name can not be empty');
			return;
		}
		this._file = bookFile;
	}

	printInfo() {
		console.log(`The book is ${this.name} published by ${this.author} in ${this.yearOfPublished} (${this.file})`);
	}

	static convertBookInfo({ name, author, yearOfPublished } = new Book(), format) {
		const newFormat = new EBook(name, author, yearOfPublished, format);
		console.log(newFormat);
		return newFormat;
	}
}
