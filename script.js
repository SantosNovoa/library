console.log("hello world!")

const myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}


const tbp = new Book("Cixin Liu", "Three Body Problem", 528, true);
const hmp = new Book("Andy Weir", "Hail Merry Project", 488, true);
const childrenOfMem = new Book("Adrian Tchaikovsy", "Children of Memory", 467, false);

myLibrary.push(tbp, hmp, childrenOfMem);

console.log(myLibrary);

function addBookToLibrary(book, author, title, pages, read) {
    newBook = new book(author, title, pages, read)
    myLibrary.push(newBook);
}

