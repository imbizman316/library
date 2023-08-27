let myLibrary = [];

//This is the number id of books
let bookCount = 1;

/* let myLibrary = [{title: "catcher",author: "mikey",pages: 230, publisher:"A"},
                {title: "Lawrence",author: "john",pages: 230, publisher: "B"}
]; */

const displayContainer = document.querySelector('.bookshelves');
const addbookContainer = document.querySelector('.addbookcontainer');
const searchResult = document.querySelector('.searchResult');

//get all the input field
const titleField = document.querySelector('.titleinput');
const authorField = document.querySelector('.authorinput');
const pagesField = document.querySelector('.pagesinput');
const publisherField = document.querySelector('.publisherinput');

//get save book button
const saveButton = document.querySelector('.savebutton');
//add evenlistner to savebutton and get all the inputs above.
//saveButton.addEventListener('submit',addBookToLibrary);
addbookContainer.addEventListener('submit',addBookToLibrary);


const addbookButton = document.querySelector('.addbookbutton');

addbookButton.addEventListener('click',function(){

    addbookContainer.style.display = "flex";
    titleField.focus();
})

const searchButton = document.querySelector('.searchbutton');
searchButton.addEventListener('click',Search)

const searchField = document.querySelector('.searchfield');
searchField.addEventListener('keypress',function(e){
    if (e.key === 'Enter') {
        Search(e);
    }
})

function Search(e) {

    e.preventDefault();
    
    let searchedTitle = searchField.value;
    let searchFlag = false;
    
    for (const value of myLibrary) {
        if (searchedTitle === value.title) {
            alert("We've found it");
            searchFlag = true;
        }
    }

    if (searchFlag === false) alert("No match found");
    else {
        showSearch(searchedTitle);
    }
}

//I used to load Book() when I had values in MyLibrary from the get go.
//Book();

////////////////////////////////////////////////////////////////////////////////////////////////////////


function showSearch(title) {
    console.log(title);













    for (const book of myLibrary) {

        if (book.title === title) {

            const bookDisplay = document.createElement('div');
        const bookImage = document.createElement('img');

        const deleteButton = document.createElement('button');
        deleteButton.innerText = "Remove Book";
        deleteButton.className = `${book.book_id}`
        deleteButton.addEventListener('click',(e)=>{
            console.log(e.target.className)
            let index = myLibrary.findIndex(x => x.book_id === e.target.className);
            console.log("this is" + index);
            deleteBook(index);
        });

        const readButton = document.createElement('button');
        readButton.innerText = "Already Read";
        readButton.id = `${book.book_id}`
        readButton.addEventListener('click',(e)=>{
            //I will need to pass the index of this instead of id.
            //markRead(parseInt(e.target.id));
            console.log(e.target)
            let index = myLibrary.findIndex(x => x.book_id === e.target.id);
            console.log(index)
            markRead(index);
        });

        let readornot = ""
        if (book.read === true) readornot = "Yes";
        else readornot = "No";

        bookImage.src = 'https://kpop-star.net/en/wp-content/uploads/2023/02/hanni%E3%80%80profile4.jpg'
        bookDisplay.innerText = `ID:  ${book.book_id}
                                Title:  ${book.title}
                                Author:  ${book.author}
                                Nom. of Pages:  ${book.pages}
                                Publisher:  ${book.publisher}
                                Read it?: ${readornot}`
        ;

        const resultTitle = document.createElement('h3');
        resultTitle.textContent = "---Result---";
        if (searchResult.children.length > 0) {
            searchResult.removeChild(searchResult.children[0]);
            searchResult.removeChild(searchResult.children[0]);
        }
        
        searchResult.appendChild(resultTitle);

        bookDisplay.className = "bookcard";
        searchResult.appendChild(bookDisplay);
        bookDisplay.appendChild(bookImage);
        bookDisplay.appendChild(readButton);
        bookDisplay.appendChild(deleteButton);

        
    }


    }
        

}

////////////////////////////////////////////////////













function Book() {

    titleField.value = '';
    authorField.value = '';
    pagesField.value = '';
    publisherField.value = '';

    let child = displayContainer.lastElementChild;
    while (child) {
        //console.log(child);
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
            console.log(e.target.className)
            let index = myLibrary.findIndex(x => x.book_id === e.target.className);
            console.log("this is" + index);
            deleteBook(index);
        });

        const readButton = document.createElement('button');
        readButton.innerText = "Already Read";
        readButton.id = `${book.book_id}`
        readButton.addEventListener('click',(e)=>{
            //I will need to pass the index of this instead of id.
            //markRead(parseInt(e.target.id));
            console.log(e.target)
            let index = myLibrary.findIndex(x => x.book_id === e.target.id);
            console.log(index)
            markRead(index);
        });

        let readornot = ""
        if (book.read === true) readornot = "Yes";
        else readornot = "No";

        bookImage.src = 'https://kpop-star.net/en/wp-content/uploads/2023/02/hanni%E3%80%80profile4.jpg'
        bookDisplay.innerText = `ID:  ${book.book_id}
                                Title:  ${book.title}
                                Author:  ${book.author}
                                Nom. of Pages:  ${book.pages}
                                Publisher:  ${book.publisher}
                                Read it?: ${readornot}`
        ;
        bookDisplay.className = "bookcard";
        displayContainer.appendChild(bookDisplay);
        bookDisplay.appendChild(bookImage);
        bookDisplay.appendChild(readButton);
        bookDisplay.appendChild(deleteButton);
    }

}

function addBookToLibrary(e) {
    
    e.preventDefault();    

    let showFlag = true; 
    
    for (const value of myLibrary) {
        if (titleField.value === value.title) {
            showFlag = false;
        }
    }

    if (showFlag === true) {

        myLibrary.push({
            book_id: `${bookCount}`,
            title: `${titleField.value}`,author: `${authorField.value}`,
            pages:`${pagesField.value}`, publisher:`${publisherField.value}`,
            });
        bookCount ++;
        addbookContainer.style.display = "none";
        Book();
    } else {
        alert("NOOOOOOO");
    }       


}

function deleteBook(index) {

    myLibrary.splice(index,1);
    console.log(myLibrary)
    Book();
    
}

function markRead(index) {

    
    myLibrary[index].read = true;
    console.log(myLibrary[index].read)
    Book();
}

