const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${title} by ${author}, ${pages}, ${read}`;
    }

}

function addBookToLibrary(ev) {
    ev.preventDefault(); //stops the form from submitting - ev is the event
    let book = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        pages: document.getElementById('pages').value,
        read: document.getElementById('read').value
    }
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