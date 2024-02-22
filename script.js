const myLibrary = [];
cardContainer = document.getElementById("card-container");

//Creates book object
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
    makeCard();
}

// function createCard() {
//     card = document.createElement("div");
//     author = document.createElement("h2");
//     title = document.createElement("h3")
//     pages = document.createElement("p");
//     read = document.createElement("p");
//     card.classList.add("card");
//     card.appendChild(author);
//     card.appendChild(title);
//     card.appendChild(pages);
//     card.appendChild(read);
//     cardContainer.appendChild(card);
// }

function makeCard() {
   myLibrary.forEach((element, index) => {

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


