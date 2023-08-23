let myLibrary = [];

function Book(title,author,pages,read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary()
{
let title =document.querySelector("#title").value;
let author = document.getElementById("author").value;
let pages = document.getElementById("pages").value;
let read = document.getElementById("read").checked;

let newBook = new Book(title,author,pages,read);
console.log(newBook);

}
let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function()


{
    let newBookForm =document.querySelector("#new-book-form");
    //newBookForm.style.display= "block"; 
    if (newBookForm.style.display === "none"){
    newBookForm.style.display ="block";}

    else 
   {newBookForm.style.display= "none";}


})

document.querySelector("#new-book-form").addEventListener("submit",function(){
    event.preventDefault();
    addBookToLibrary();
})