function Book(title,author,pages,read) {
    this.title = title
  this.author = author
  this.pages = pages
  this.read = function() {
    if (read) {
      return "already read"
    } else {
      "not read yet"
    }
  }
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${this.read()}.`
  }
}

function addBookToLibrary() {
  // do stuff here
}

const jurassicPark = new Book("Jurassic Park", "Michael Crichton",466,true)

const endersGame = new Book("Ender's Game","Orson Scott Card", 264,true)

const threeBodyProblem = new Book("The Three-Body Problem","Cixin Liu",400,false)

let myLibrary = [jurassicPark,endersGame,threeBodyProblem];

const bookContainer = document.querySelector('.books');

function render(myLibrary) {
  
  myLibrary.forEach( function (element) {
    const book = document.createElement('p');
    book.className = "book";
    book.innerText = element.title;
    bookContainer.appendChild(book);
  });
};

render(myLibrary);