let myLibrary = [];

//This is the number id of books
let bookCount = 1;

/* let myLibrary = [{title: "catcher",author: "mikey",pages: 230, publisher:"A"},
                {title: "Lawrence",author: "john",pages: 230, publisher: "B"}
]; */

const displayContainer = document.querySelector('.bookshelves');
const addbookContainer = document.querySelector('.addbookcontainer');

//get all the input field
const titleField = document.querySelector('.titleinput');
const authorField = document.querySelector('.authorinput');
const pagesField = document.querySelector('.pagesinput');
const publisherField = document.querySelector('.publisherinput');

//get save book button
const saveButton = document.querySelector('.savebutton');
//add evenlistner to savebutton and get all the inputs above.
saveButton.addEventListener('click',addBookToLibrary);


const addbookButton = document.querySelector('.addbookbutton');

addbookButton.addEventListener('click',function(){

    addbookContainer.style.display = "flex";
})



const searchButton = document.querySelector('.searchbutton');
searchButton.addEventListener('click',function(){
    const searchField = document.querySelector('.searchfield');
    let searchedTitle = searchField.value;
})


Book();


function Book() {

    let child = displayContainer.lastElementChild;
    while (child) {
        displayContainer.removeChild(child);
        child = displayContainer.lastElementChild;
    }

    for (const book of myLibrary) {
        const bookDisplay = document.createElement('div');
        const bookImage = document.createElement('img');

        const deleteButton = document.createElement('button');
        deleteButton.innerText = "Remove Book";
        deleteButton.className = `${book.book_id}`
        deleteButton.addEventListener('click',(e)=>{
            deleteBook(parseInt(readButton.className));
        });

        const readButton = document.createElement('button');
        readButton.innerText = "Already Read";
        readButton.id = `${book.book_id}`
        readButton.addEventListener('click',(e)=>{
            markRead(parseInt(e.target.id));
        });

        bookImage.src = 'https://kpop-star.net/en/wp-content/uploads/2023/02/hanni%E3%80%80profile4.jpg'
        bookDisplay.innerText = `ID:  ${book.book_id}
                                Title:  ${book.title}
                                Author:  ${book.author}
                                Nom. of Pages:  ${book.pages}
                                Publisher:  ${book.publisher}`
        ;
        bookDisplay.className = "bookcard";
        displayContainer.appendChild(bookDisplay);
        bookDisplay.appendChild(bookImage);
        bookDisplay.appendChild(readButton);
        bookDisplay.appendChild(deleteButton);
    }

}

function addBookToLibrary() {

    myLibrary.push({
        book_id: `${bookCount}`,
        title: `${titleField.value}`,author: `${authorField.value}`,
        pages:`${pagesField.value}`, publisher:`${publisherField.value}`,
        });
    bookCount ++;

    Book();
}

function deleteBook(number) {

    myLibrary.splice(number-1,1);
    Book();
    
}

function markRead(readNumber) {

    myLibrary[readNumber-1].read = true;
    console.log(myLibrary[readNumber-1].read)
}

