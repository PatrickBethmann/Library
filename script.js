let myLibrary = [];
const bookGrid = document.querySelector('#bookGrid');
const bookModal = document.querySelector('#bookModal');
const btnAddBook = document.querySelector('#btnAddBook');
const btnCreateBook = document.querySelector('#btnCreateBook');
const overlay = document.querySelector('#overlay');
const inputTitle = document.querySelector('#inputTitle');
const inputAuthor = document.querySelector('#inputAuthor');
const inputPages = document.querySelector('#inputPages');
const inputRead = document.querySelector('#inputRead');
const errorMessage = document.querySelector('#errorMessage');

// Book constructor
class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        isRead === true ? (this.isRead = true) : (this.isRead = false);
    }

    info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? 'read' : 'not read yet'}`;
    };
}

function createBookFromModal() {
    const title = inputTitle.value;
    const author = inputAuthor.value;
    const pages = inputPages.value;
    const isRead = inputRead.checked;

    // checking wether required fields are filled out
    if (!title || !author || !pages) {
        errorMessage.textContent = 'Please fill out the form!';
        return;
    }

    closeBookModal();
    return new Book(title, author, pages, isRead);
}

// Adds book to library
function addBookToLibrary() {
    const newBook = createBookFromModal();
    if (newBook) {
        myLibrary.push(newBook);
    } else {
        return;
    }
    updateBookGrid();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    updateBookGrid();
}

function toggleRead(index) {
    const currentBook = myLibrary[index];
    currentBook.isRead = !currentBook.isRead;
    updateBookGrid();
}

function updateBookGrid() {
    // Clears the entire book grid
    resetBookGrid();
    // then adds all books from the current myLibrary-array
    // not the most efficient way but it gets the job done :)
    for (let i = 0; i < myLibrary.length; i++) {
        createBookCard(i, myLibrary[i]);
    }
}

function resetBookGrid() {
    bookGrid.innerHTML = '';
}

function createBookCard(index, book) {
    // Creates all the elements of the book card
    const bookCard = document.createElement('div');
    const title = document.createElement('h3');
    const author = document.createElement('h3');
    const pages = document.createElement('h3');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    // Displays the right content
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    readBtn.textContent = book.isRead ? 'Read' : 'Not Read';
    readBtn.addEventListener('click', () => {
        toggleRead(index);
    });

    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
        removeBook(index);
    });

    // Set Classes
    bookCard.classList.add('bookCard');
    title.classList.add('bookCardText');
    author.classList.add('bookCardText');
    pages.classList.add('bookCardText');
    readBtn.classList.add('btn', book.isRead ? 'btn-read' : 'btn-notRead');
    removeBtn.classList.add('btn', 'btn-remove');

    // append elements to bookCard
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(removeBtn);
    // append bookCard to bookGrid
    bookGrid.appendChild(bookCard);
}

// Open and close Modals
function openBookModal() {
    errorMessage.textContent = '';
    bookModal.classList.add('active');
    overlay.classList.add('active');
}
function closeBookModal() {
    bookModal.classList.remove('active');
    overlay.classList.remove('active');
}

// Onclick-Events
btnAddBook.onclick = openBookModal;
overlay.onclick = closeBookModal;
btnCreateBook.onclick = addBookToLibrary;
