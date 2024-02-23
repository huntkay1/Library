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

//adds book object to myLibrary array and adds the card to UI
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

//makes the card to display on UI
function makeCard() {
   cardContainer.innerHTML = ''; //clear the container after each addition to prevent repeats

   myLibrary.forEach((element, index) => {
        //make the card elements
        card = document.createElement("div");
        title = document.createElement("h2");
        author = document.createElement("h3")
        pages = document.createElement("p");
        read = document.createElement("p");
        removeBttn = document.createElement("button");
        card.classList.add("card");
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(removeBttn);
        cardContainer.appendChild(card);

        //add card text contents
        title.innerHTML = element.title;
        author.innerHTML = element.author;
        pages.innerHTML = element.pages;
        read.innerHTML = element.read;
        removeBttn.innerHTML = "remove";

        removeBttn.addEventListener('click', removeCard)
    })
}

//removes the card from UI and corresponding book object from myLibrary
function removeCard(ev) {
    var btn = ev.target;
    var cardBody = btn.parentElement;
    var bookTitle = cardBody.querySelector("h2").innerHTML;
    
    myLibrary.splice(myLibrary.findIndex(v => v.title === bookTitle), 1);

    makeCard();
}


//when content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit').addEventListener('click', addBookToLibrary);
})

//open and close form modal
addBookBttn.addEventListener("click", () => {
    dialog.showModal();
})
closeBttn.addEventListener("click", () => {
    dialog.close();
})

