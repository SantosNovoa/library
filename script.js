console.log("hello world!");

const table = document.querySelector(".table");
const removeBtn = document.querySelectorAll("button");
const addBookBtn = document.querySelector(".add-book");
const modal = document.getElementById("myModal");
console.log(removeBtn);
console.log(addBookBtn);

addBookBtn.onclick = function () {
  modal.style.display = "block";
};

// when user clicks outside the modal, it'll close
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// const newRow = document.createElement("tr");
// const author = document.createElement("td");
// const title = document.createElement("td");
// const pages = document.createElement("td");
// const read = document.createElement("td");

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
const childrenOfMem = new Book(
  "Adrian Tchaikovsy",
  "Children of Memory",
  467,
  false
);

myLibrary.push(phm);
myLibrary.push(tbp);
myLibrary.push(childrenOfMem);

function addBookToLibrary(book, author, title, pages, read) {
  newBook = new book(author, title, pages, read);
  myLibrary.push(newBook);
  renderBook(newBook);
}

// function that loops through mylibrary array and outputs the value of the key
// function testFunction(key) {
//     for (let value in key) {
//         document.writeln(key[value]);
//     }
// }

// myLibrary.forEach(testFunction);

renderBook(tbp);
renderBook(phm);
renderBook(childrenOfMem);

function renderBook(element) {
  const newRow = document.createElement("tr");

  //append the author to the table
  const author = document.createElement("td");
  author.textContent = element.author;
  newRow.appendChild(author);

  //append the title to the table
  const title = document.createElement("td");
  title.textContent = element.title;
  newRow.appendChild(title);

  //append to the page count to the table
  const pages = document.createElement("td");
  pages.textContent = element.pages;
  newRow.appendChild(pages);

  //append if read or not to the table
  const readBtn = document.createElement("button");
  //add a read button to the read th
  //button's text content read if true not read if false
  readBtn.textContent = element.read ? "Read" : "Not read";
  const read = document.createElement("td");
  read.classList = "read-two"
  readBtn.classList.add("readBtn");

  //sets the read buttons to red or green depending on if read or not read
  if (element.read) {
    readBtn.classList.add("read");
  } else {
    readBtn.classList.add("not-read");
  }
  read.appendChild(readBtn);
  newRow.appendChild(read);

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  const remove = document.createElement("td");
  remove.classList = "remove"
  remove.appendChild(removeBtn);
  newRow.appendChild(remove);
  table.appendChild(newRow);

  readBtn.addEventListener("click", function () {
    toggleRead(element, readBtn);
  });
}

function toggleRead(book, buttonElement) {
  book.read = !book.read;
  buttonElement.textContent = book.read ? "Read" : "Not read";

  if (book.read) {
    buttonElement.classList.remove("not-read");
    buttonElement.classList.add("read");
  } else {
    buttonElement.classList.remove("read");
    buttonElement.classList.add("not-read");
  }
}

// myLibrary.forEach((element) => {

//     const newRow = document.createElement("tr");

//     //append the author to the table
//     const author = document.createElement("td");
//     author.textContent = element.author;
//     newRow.appendChild(author);
//     table.appendChild(newRow);

//     //append the title to the table
//     const title = document.createElement("td");
//     title.textContent = element.title;
//     newRow.appendChild(title);
//     table.appendChild(newRow);

//     //append to the page count to the table
//     const pages = document.createElement("td");
//     pages.textContent = element.pages;
//     newRow.appendChild(pages);
//     table.appendChild(newRow);

//     //append if read or not to the table
//     const read = document.createElement("td");
//     read.textContent = element.read;
//     newRow.appendChild(read);
//     table.appendChild(newRow);
// });
