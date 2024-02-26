const myLibrary = [];
const cardContainer = document.getElementById("card-container");
const addBookBttn = document.getElementById("add-book");
const dialog = document.querySelector("dialog");
const closeBttn = document.getElementById("close");
const statusBttn = document.getElementById("status");
const textInput = [...document.getElementsByClassName("text-input")];


//Creates book object
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//adds book object to myLibrary array and adds the card to UI
function addBookToLibrary(ev) {
    dialog.close();
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

   myLibrary.forEach((obj, index) => {
        //make the card elements
        var card = document.createElement("div")
        card.classList.add("card");
        var title = document.createElement("h2");
        var author = document.createElement("h3");
        var pages = document.createElement("p");
        var read = document.createElement("p");
        var removeBttn = document.createElement("button");
        var bookInfo = document.createElement("div");
        bookInfo.classList.add("book-info");
        var buttons = document.createElement("div");
        buttons.classList.add("buttons");

        //make the read status toggle
        var readStatus = document.createElement("button");
        readStatus.setAttribute('id', 'bttn' + index);
        //add class based on user's read status
        obj.read === true ? readStatus.classList.add('true') : readStatus.classList.add('false');
        var span1 = document.createElement("span");
        var span2 = document.createElement("span");
        span1.innerHTML = "read";
        span2.innerHTML = "not read";
        readStatus.appendChild(span1);
        readStatus.appendChild(span2);

        //add elements to card
        bookInfo.appendChild(title);
        bookInfo.appendChild(author);
        bookInfo.appendChild(pages);
        buttons.appendChild(removeBttn);
        buttons.appendChild(readStatus);
        card.appendChild(bookInfo);
        card.appendChild(buttons);
        cardContainer.appendChild(card);

        //add card text contents
        title.innerHTML = obj.title;
        author.innerHTML = obj.author;
        pages.innerHTML = obj.pages + " " + "pages";
        read.innerHTML = obj.read;
        removeBttn.innerHTML = "remove";

        //button events
        removeBttn.addEventListener('click', removeCard);
        readStatus.addEventListener('click', changeStatus);
        
    })
}

//removes the card from UI and corresponding book object from myLibrary
function removeCard(ev) {
    var bttn = ev.target;
    var cardBody = bttn.parentElement.parentElement;
    var bookTitle = cardBody.querySelector("h2").innerHTML;
    
    myLibrary.splice(myLibrary.findIndex(book => book.title === bookTitle), 1);

    makeCard();
}

//change read status UI, class name, and corresponding key value 
function changeStatus(ev) {
    //get the button's class name
    var bttn = ev.target.parentElement;
    var classValue = bttn.classList.value;

    //find the corresponding book's ID
    var cardBody = bttn.parentElement.parentElement;
    var bookTitle = cardBody.querySelector("h2").innerHTML;
    var index = myLibrary.findIndex(book => book.title === bookTitle)
    
    //change the class name and update the book's read status 
    if (classValue === "true") {
        bttn.classList.replace("true", "false");
        myLibrary[index].read = false;
    } else {
        bttn.classList.replace("false", "true");
        myLibrary[index].read = true;
    }
}

//checks if input has a value. If so, it "hides" the label 
function checkInput(ev) {
    const input = ev.target;
    const label = input.previousElementSibling;

    if (ev.target.value !== "") {
        label.classList.add("input-present");
    } else {
        label.classList.remove("input-present");
    }
}

//when content is fully loaded, open form to add book
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

//checks if user has changed input value
textInput.forEach((element) => {
    element.addEventListener('keyup', checkInput);
})










