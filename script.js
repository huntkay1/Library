const myLibrary = [];
const cardContainer = document.getElementById("card-container");
const addBookBttn = document.getElementById("add-book");
const dialog = document.querySelector("dialog");
const closeBttn = document.getElementById("close");

//Creates book object
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(ev) {
    ev.preventDefault(); //stops the form from submitting - ev is the event
    const book = new Book(
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('pages').value,
        document.getElementById('read').checked
    )

    myLibrary.push(book);
    document.querySelector('form').reset(); //resets the form for the next entry
    makeCard();
}

function makeCard() {
   cardContainer.innerHTML = ''; //clear the container after each addition to prevent repeats

   myLibrary.forEach((element, index) => {
        //make the card elements
        card = document.createElement("div");
        author = document.createElement("h2");
        title = document.createElement("h3")
        pages = document.createElement("p");
        read = document.createElement("p");
        card.classList.add("card");
        card.appendChild(author);
        card.appendChild(title);
        card.appendChild(pages);
        card.appendChild(read);
        cardContainer.appendChild(card);

        //add card text contents
        title.innerHTML = element.title;
        author.innerHTML = element.author;
        pages.innerHTML = element.pages;
        read.innerHTML = element.read;
   })
}


//when content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit').addEventListener('click', addBookToLibrary);
})

addBookBttn.addEventListener("click", () => {
    dialog.showModal();
})

close.closeBttn.addEventListener("click", () => {
    dialog.close;
})


