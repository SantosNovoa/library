console.log("hello world!")

const myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}


const tbp = new Book("Cixin Liu", "Three Body Problem", 528, true);
const hmp = new Book("Andy Weir", "Hail Merry Project", 488, true);
const childrenOfMem = new Book("Adrian Tchaikovsy", "Children of Memory", 467, false);

console.log(tbp);
console.log(hmp);
console.log(childrenOfMem);

function addBookToLibrary(book) {

}