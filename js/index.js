
const url = 'http://localhost:3000/books'

document.addEventListener("DOMContentLoaded", function() {
  pageFancy()
  getData()
});

function pageFancy(){
  let welcome = document.createElement('h1')
  welcome.innerText = 'Welcome to Book Liker! :)'

  let topPage = document.createElement('header')
  topPage.appendChild(welcome)

  let container = document.querySelector('body')
  container.appendChild(topPage)

}
function getData(){
  return fetch(url)
  .then (resp => resp.json())
  .then (json => renderBooks(json))
}

function renderBooks(book) {
book.forEach(element => createBookList(element))
}

function createBookList(book){
  let toyListItem = document.createElement('li')
  toyListItem.innerText = book.title
  let toyList = document.getElementById('list')
  let toyPanel = document.getElementById('list-panel')
  let button = document.createElement('button')
  button.textContent = "Show More";
  button.id = book.id
  button.addEventListener('click', showMore)

  toyPanel.appendChild(toyList)
  toyList.appendChild(toyListItem)
  toyListItem.appendChild(button)

}

function showMore(e){
  e.preventDefault()
  let bookId = e.target.id;
  fetch(url + '/' + bookId)
  .then(resp => resp.json())
  .then(json => {showBook(json);
  });
}

function showBook(book){
  let id = book.id;
  let title = book.title;
  let descrip = book.description;
  let img = book.img_url;
  let users = book.users

  let bookCard = document.getElementById("show-panel")
  let bookTitle = document.getElementById("bookTitle")
  bookTitle.innerText = title
  let bookDescrip = document.getElementById("bookDescrip")
  bookDescrip.innerText = descrip
  let bookImg = document.getElementById("bookImg")
  bookImg.src = img

  let bookUsers = document.getElementById("bookUsers")
  console.log(bookUsers)
  bookUsers.innerHTML = ""
  users.forEach(function(user) {
    let p = document.createElement('p')
    p.innerText = user.username + 'liked this book <3'
    bookUsers.appendChild(p)
  })





}
