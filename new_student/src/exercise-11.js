const fs = require('fs');

const readFile = fs.promises.readFile;
const writeFile = fs.promises.writeFile;


class BookStore {
    constructor(filePath) {
        this._filePath = filePath
    }

    async _loadAllBooks() {
        let books;
        try {
            books = JSON.parse(await readFile(this._filePath));
        } catch (e) {
            throw new Error("Check ur file path")
        }
        return books;
    }

    _alreadyExists(books, code) {
        const result = books.find(b => {
          return b.code === code;
        });
        return result ? true : false;
    }

    async createBook(book){
        const books = await this._loadAllBooks();

        if (this._alreadyExists(books, book.code)) {
          const e = new Error(`Book with code '${book.code}' already exists.`);
          e.code = "DUPLICATE_CODE";
          throw e;
        }
    
        books.push(book);
    
        try {
          await writeFile(this._filePath, JSON.stringify(books, null, 2));
            return { status: "OK", data: book };
        } catch (e) {
            return { status: "ERROR", error: e };
        }
    }

    async getBook(code) {
        let books = await this._loadAllBooks();
    
        const result = books.find(b => {
          return +b.code === code;
        });
    
        return result;
      }
    
}

const myBook1 = {
    code: 3,
    name: "myBook1",
    author: "myAuthor1"
}
const myBook2 = {
    code: 4,
    name: "myBook2",
    author: "myAuthor2"
}

//run this in src folder
const bs1 = new BookStore('books.json')
bs1.getBook(1).then(res => console.log(res))
// bs1.createBook(myBook1)

// bs1.getBook(1).then(res => console.log(res))
// bs1.createBook(myBook1)
// bs1.createBook(myBook1)
// bs1.getBook(3).then(res => console.log(res))
// bs1.createBook(myBook2)

// console.log(BookStore.getBook())`




