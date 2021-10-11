let myLibrary = [];
const bookGrid = document.querySelector("#bookGrid");
const bookModal = document.querySelector("#bookModal");
const btnAddBook = document.querySelector("#btnAddBook");
const btnCreateBook = document.querySelector("#btnCreateBook");
const overlay = document.querySelector("#overlay");
const inputTitle = document.querySelector("#inputTitle");
const inputAuthor = document.querySelector("#inputAuthor");
const inputPages = document.querySelector("#inputPages");
const inputRead = document.querySelector("#inputRead");
console.log(inputTitle.value);

// Book constructor
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

function createBookFromInput() {
    // Get Input
    const title = inputTitle.value;
    const author = inputAuthor.value;
    const pages = inputPages.value;
    const isRead = inputRead.checked;
    console.log(title);
    if(!title || !author || !pages) {
        console.log("couldnt create book from form");
        return;
    }
    closeBookModal();
    return new Book(title, author, pages, isRead);
}

// Adds book to library
function addBook() {
    const newBook = createBookFromInput();
    if(newBook) {
        myLibrary.push(newBook);
    } else {
        console.log("couldnt add book to myLibrary");
    }
    updateBookGrid();
}

function removeBook(index) {
    console.log(index);
    console.log(myLibrary);
    myLibrary.splice(index, 1);
    console.log(myLibrary);
    updateBookGrid();
}


function updateBookGrid() {
    resetBookGrid();
    for(let i = 0; i<myLibrary.length; i++) {
        createBookCard(i, myLibrary[i])
    }
}

function resetBookGrid() {
    bookGrid.innerHTML = "";
}

// Test examples
let book1 = new Book("First book with larger text", "Patrick", 24, true);
let book2 = new Book("Second book", "Tobias", 2042, false);
myLibrary.push(book1, book2);

console.log("--------------------------------------------------")
console.log("All books:")
for(let i = 0; i<myLibrary.length; i++) {
    createBookCard(i, myLibrary[i]);
}
console.log("--------------------------------------------------")



function createBookCard(index, book) {
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
    removeBtn.id = "BtnRemove"+index;
    removeBtn.addEventListener('click', () => {
        removeBook(removeBtn.id.toString().substring(9));
    });

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

// Open and close Modals
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
btnCreateBook.onclick = addBook;