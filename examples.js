// Just a few example books so the site is not empty by default
// haven't implemented any kind of storage system yet

let exampleBook0 = new Book('Hello World', 'Patrick Bethmann', 1, true);
let exampleBook1 = new Book('Example 2', 'Author', 1024, false);
let exampleBook2 = new Book('Example 3', 'Author', 2048, false);

myLibrary.push(exampleBook0, exampleBook1, exampleBook2);

for (let i = 0; i < myLibrary.length; i++) {
    createBookCard(i, myLibrary[i]);
}
