const myLibrary = [];

function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(ev) {
    ev.preventDefault(); //stops the form from submitting - ev is the event
    let book = new Book(
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('pages').value,
        document.getElementById('read').checked
    )
    myLibrary.push(book);
    document.querySelector('form').reset(); //resets the form for the next entry
    console.log(myLibrary);
}


//when content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit').addEventListener('click', addBookToLibrary);
})


//const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'not read yet' )
//console.log(theHobbit.info())