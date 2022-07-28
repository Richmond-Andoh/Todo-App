'use strict'

document.getElementById("authorForm").addEventListener("submit", event => {
    event.preventDefault();
    add();
    display();
})
    function add(){
        let name = document.getElementById("authorName").value;
        let nationality = document.getElementById("authorNationality").value;
        let bookName = document.getElementById("bookName").value;
        let isbn = document.getElementById("isbn").value;
        
        let book = {
            name,
            nationality,
            bookName,
            isbn
        }
        
        let books = JSON.parse(localStorage.getItem("books"))
        if(books){
            books.push(book)
        } else {
           books  = [book]
        }
    
        localStorage.setItem("books", JSON.stringify(books))
        
    }
   
     function display(){
    let items = JSON.parse(localStorage.getItem("books"));
    if(items === null){
         document.getElementById("para").innerHTML = "Add Items";
    } else {
         let itemList = document.getElementById("itemList");
          items.forEach(data => {
              let listItem = document.createElement("ul")
              listItem.className = "list-group";
              listItem.innerHTML =`<li class="list-group-item">Author Name: ${data.name}</li> 
                                    <li class="list-group-item">Nationality:  ${data.nationality}</li> 
                                   <li class="list-group-item">Book Name: ${data.bookName}</li> 
                                  <li class="list-group-item">ISBN: ${data.isbn}</li>`;
             itemList.appendChild(listItem);
          })
       }
  }
 window.addEventListener("load", event => {
    display();
 })