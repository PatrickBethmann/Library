let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if(isRead) {
        this.isRead = "already read";
    } else {
        this.isRead = "not read yet";
    }
    
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
    }
}


// Test examples
let book1 = new Book("First book", "Patrick", 24, true);
let book2 = new Book("Second book", "Tobias", 2042, false);
myLibrary.push(book1, book2);

console.log("--------------------------------------------------")
console.log("All books:")
myLibrary.forEach(element => {
    console.log(element.info());
});
console.log("--------------------------------------------------")