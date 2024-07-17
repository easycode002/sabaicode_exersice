import { Book, Library } from "./modules/modules.js"
// create new LIB
const myLIB = new Library('SBK')

// add book to LIB
const book1 = {title:"Title000",author:"Author000",genre:"Programming",isbn:"1230"}
const book2 = {title:"Title001",author:"Author001",genre:"Programming",isbn:"1231"}
const book3 = {title:"Title002",author:"Author002",genre:"Programming",isbn:"1232"}
myLIB.addBook(book1)
myLIB.addBook(book2)
myLIB.addBook(book3)
myLIB.displayBook();

// remove book by title or isbn
myLIB.removeBook("Title000")
myLIB.removeBook('1231')
myLIB.removeBook('1232')
myLIB.displayBook() 

// search book title, author, or genre
myLIB.searchBook("Author002")

console.log(`Show only book available`);
myLIB.bookOnlyAvailable();

/*
// update book
const getISBN = "1230";
const bookUpdate = {title:"Title0011",author:"Author0011",genre:"Programming",isbn:"1230"}

myLIB.updateBook(getISBN,bookUpdate)
myLIB.displayBook();
*/