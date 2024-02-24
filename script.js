const myLibrary = [];
const cardContainer = document.getElementById("card-container");
const addBookBttn = document.getElementById("add-book");
const dialog = document.querySelector("dialog");
const closeBttn = document.getElementById("close");
const statusBttn = document.getElementById("status");



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

   myLibrary.forEach((obj, index) => {
        //make the card elements
        var card = document.createElement("div")
        card.classList.add("card");
        var title = document.createElement("h2");
        var author = document.createElement("h3");
        var pages = document.createElement("p");
        var read = document.createElement("p");
        var removeBttn = document.createElement("button");

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
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(removeBttn);
        card.appendChild(readStatus);
        cardContainer.appendChild(card);

        //add card text contents
        title.innerHTML = obj.title;
        author.innerHTML = obj.author;
        pages.innerHTML = obj.pages;
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
    var cardBody = bttn.parentElement;
    var bookTitle = cardBody.querySelector("h2").innerHTML;
    
    myLibrary.splice(myLibrary.findIndex(book => book.title === bookTitle), 1);

    makeCard();
}

//change read status UI, class name, and corresponding key value 
function changeStatus(ev) {
    var bttn = ev.target.parentElement;
    var cardBody = bttn.parentElement;
    var bookTitle = cardBody.querySelector("h2").innerHTML;
    var index = myLibrary.findIndex(book => book.title === bookTitle)
    var classValue = bttn.classList.value;
    
    if (classValue === "true") {
        bttn.classList.replace("true", "false");
        myLibrary[index].read = false;
    } else {
        bttn.classList.replace("false", "true");
        myLibrary[index].read = true;
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






