export class Library{
    #name;
    #books=[]
    constructor(name){
        this.#name = name;
    }

    // getter library
    getName(){return this.#name;}
}

export class Book{
    #title;
    #author;
    #genre;
    #isbn;
    #available;
    constructor(title,author,genre,isbn,available=true){
        this.#title=title;
        this.#author=author;
        this.#genre=genre;
        this.#isbn=isbn;
        this.#available=available;
    }
}