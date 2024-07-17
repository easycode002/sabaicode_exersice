// class BOOK title, author, genre, and available (to track borrowing).
export class Book {
    #title;
    #author;
    #genre;
    #isbn;
    #available;
    constructor(title, author, genre, isbn, available = true) {
        this.#title = title;
        this.#author = author;
        this.#genre = genre;
        this.#isbn = isbn;
        this.#available = available;
    }

    //​ ដោយសារសៀវភៅត្រូវមានការខ្ចី នឹងសង so this class must define the setter, getter
    // getter = for get value
    getTitle() { return this.#title }
    getAuthor() { return this.#author }
    getGenre() { return this.#genre }
    getISBN() { return this.#isbn }
    isAvailable() { return this.#available }
    getInfo() {
        return {
            title: this.getTitle(),
            author: this.getAuthor(),
            genre: this.getGenre(),
            isbn: this.getISBN(),
            available: this.isAvailable()
        }
    }

    // setter
    setTitle(){return this.#title}
    setAuthor(){return this.#author}
    setGenre(){return this.#genre}
    setISBN(){return this.#isbn}
    setAvailable(available) { this.#available = available }
}

// define two class like Library and Book
export class Library {
    #name;
    #books = [];
    constructor(name) {
        this.#name = name;
    }
    // getter class library
    getName() { return this.#name }
    // method add book
    addBook(newBook) {
        const { title, author, genre, isbn, available } = newBook
        if (this.#books[this.isExitBook]) {
            console.log(`Book ID:${isbn} already exited!!!`);
        } else {
            console.log(`Book ID:${isbn} add to library!`);
            const newBook = new Book(title,author,genre,isbn,available)     // don't forgot create obj for new book
            this.#books.push(newBook)
        }
    }

    // define method, if book already exiting
    isExitBook(isbn) {
        return this.#books.some(book => book.getISBN() === isbn)
    }

    // method display book
    displayBook() {
        const bookList = this.#books.map(book => book.getInfo());
        console.table(bookList);
        return bookList;
    }

    // remove book by title or isbn
    removeBook(isbnBook){
        // const {title,isbn} = isbnBook
        const bookToremove = this.#books.findIndex(book=>book.getTitle() === isbnBook || book.getISBN() === isbnBook)
        // 
        if (bookToremove !==-1){
            console.log(`Book ${isbnBook} removed!`);
            this.#books[bookToremove].setAvailable(false)
            // this.#books.splice(bookToremove,1)
        }else{
            console.log(`Book ${isbnBook} not found in library!!!`);
        }
    }

    // search book title, author, or genre
    searchBook(creteria){
        const findIndexBook = this.#books.findIndex(book=>book.getTitle() ===creteria || book.getAuthor()===creteria || book.getGenre() === creteria)
        if(findIndexBook !==-1){
            console.log(`Book :`);
            this.#books[findIndexBook].setAvailable(true)
            this.displayBook()
        }else{
            console.log(`Book ${creteria} not found!!!`);
        }
    }

    /*
    // update book
    updateBook(isbn, updatedInfo) {
        const book = this.#books.find(book => book.getISBN() === isbn);
        if (book) {
            const { title, author, genre, newIsbn, available } = updatedInfo;
            if (title) this.#books.setTitle(title);
            if (author) this.#books.setAuthor(author);
            if (genre) this.#books.setGenre(genre);
            if (newIsbn) this.#books.setISBN(newIsbn);
            if (available !== undefined) this.#books.setAvailable(available);
            console.log(`Book ID:${isbn} updated successfully!`);
        } else {
            console.log(`Book ID:${isbn} not found in library!`);
        }
    }
    */

    // get book only available = true
    bookOnlyAvailable(){
        const bookAvailable = this.#books.filter(book=>book.isAvailable())
        const resultAvailable = bookAvailable.map(book=>book.getInfo())
        console.table(resultAvailable);
    }
}

