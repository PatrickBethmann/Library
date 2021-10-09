let myLibrary = [];
const bookGrid = document.querySelector("#bookGrid");
const bookModal = document.querySelector("#bookModal");
const btnAddBook = document.querySelector("#btnAddBook");
const overlay = document.querySelector("#overlay");

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if(isRead) {
        this.isRead = true;
    } else {
        this.isRead = false;
    }
    
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
    }
}




function getBookFromInput() {
    
}


// Test examples
let book1 = new Book("First book with larger text", "Patrick", 24, true);
let book2 = new Book("Second book", "Tobias", 2042, false);
myLibrary.push(book1, book2);

console.log("--------------------------------------------------")
console.log("All books:")
myLibrary.forEach(book => {
    createBookCard(book);
    console.log(book.info());
});
console.log("--------------------------------------------------")

function createBookCard(book) {
    // Create BookCard Elements
    const bookCard = document.createElement("div");
    const title = document.createElement("h3");
    const author = document.createElement("h3");
    const pages = document.createElement("h3");
    const readBtn = document.createElement("button");
    const removeBtn = document.createElement("button");

    // Edit Contents
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    readBtn.textContent = book.isRead ? "Read" : "Not read";
    removeBtn.textContent = "Remove";

    // Set Classes
    bookCard.classList.add("bookCard");
    readBtn.classList.add("btn", book.isRead ? "btn-read" : "btn-notRead")
    removeBtn.classList.add("btn", "btn-remove");

    

    

    // append elements
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(removeBtn);
    bookGrid.appendChild(bookCard);
}

function openBookModal() { 
    bookModal.classList.add("active");
    overlay.classList.add("active");

}
function closeBookModal() {
    bookModal.classList.remove("active");
    overlay.classList.remove("active");
}

// Onclick
btnAddBook.onclick = openBookModal;
overlay.onclick = closeBookModal;