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
const hmp = new Book("Andy Weir", "Project Hail Mary", 488, true);
const childrenOfMem = new Book("Adrian Tchaikovsy", "Children of Memory", 467, false);

myLibrary.push(tbp, hmp, childrenOfMem);

function addBookToLibrary(book, author, title, pages, read) {
    newBook = new book(author, title, pages, read)
    myLibrary.push(newBook);
}



// function that loops through the mylibrary array and outputs the value of the key
function testFunction(key) {
    for (let value in key) {
        console.log("\n" + key[value])
    }
}

myLibrary.forEach(testFunction);
