console.log("hello world!")


const table = document.querySelector(".table")
const newRow = document.createElement("tr");
const author = document.createElement("td");
const title = document.createElement("td");
const pages = document.createElement("td");
const read = document.createElement("td");

const myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}


const tbp = new Book("Cixin Liu", "Three Body Problem", 528, true);
const phm = new Book("Andy Weir", "Project Hail Mary", 488, true);
const childrenOfMem = new Book("Adrian Tchaikovsy", "Children of Memory", 467, false);

myLibrary.push(phm);
myLibrary.push(tbp);
myLibrary.push(childrenOfMem);


function addBookToLibrary(book, author, title, pages, read) {
    newBook = new book(author, title, pages, read)
    myLibrary.push(newBook);
}



// function that loops through mylibrary array and outputs the value of the key
// function testFunction(key) {
//     for (let value in key) {
//         document.writeln(key[value]);
//     }
// }

// myLibrary.forEach(testFunction);


myLibrary.forEach((element) => {
    
    //append the author to the table
    author.textContent = element.author;
    newRow.appendChild(author);
    table.appendChild(newRow);
    
    //append the title to the table
    title.textContent = element.title;
    newRow.appendChild(title);
    table.appendChild(newRow);

    //append to the page count to the table
    pages.textContent = element.pages;
    newRow.appendChild(pages);
    table.appendChild(newRow);

    //append if read or not to the table
    read.textContent = element.read;
    newRow.appendChild(read);
    table.appendChild(newRow);
});

