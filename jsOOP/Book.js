export class Book {
	constructor(name, author, yearOfPublished) {
		this._name = name;
		this._author = author;
		this._yearOfPublished = yearOfPublished;
	}

	get name() {
		return this._name;
	}

	set name(bookName) {
		if (bookName === '') {
			console.log('The book name can not be empty');
			return;
		}
		this._name = bookName;
	}

	get author() {
		return this._author;
	}

	set author(bookAuthor) {
		if (bookAuthor === '') {
			console.log('The author name can not be empty');
			return;
		}
		this._author = bookAuthor;
	}

	get yearOfPublished() {
		return this._yearOfPublished;
	}

	set yearOfPublished(bookYearOfPublished) {
		if (typeof bookYearOfPublished !== 'number') {
			console.log('The year should be number');
			return;
		}
		this._yearOfPublished = bookYearOfPublished;
	}

	printInfo() {
		console.log(`The book is ${this.name} published by ${this.author} in ${this.yearOfPublished}`);
	}

	static getOldestBook(books) {
		const oldestBook = [...books].sort((a, b) => a.year - b.year);
		const fileInfo = oldestBook[0].file ? `(${oldestBook[0].file})` : '';
		console.log(
			`The oldest book is ${oldestBook[0].name} published by ${oldestBook[0].author} in ${oldestBook[0].year} ${fileInfo}`,
		);
		return oldestBook[0];
	}
}
