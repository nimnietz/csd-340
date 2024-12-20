// array of top 10 favorite books
const books = [
    "The Metamorphosis",
    "The Stranger",
    "To Kill a Mockingbird",
    "A Clockwork Orange",
    "The Lord of the Rings",
    "Perfume",
    "The Picture of Dorian Gray",
    "1984",
    "American Psycho",
    "The Canterbury Tales"
];

// function to display books in ascending order
function displayAscending() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ""; // clear current list
    books.sort().forEach(book => {
        const listItem = document.createElement('li');
        listItem.textContent = book;
        bookList.appendChild(listItem);
    });
}

// function to display books in descending order
function displayDescending() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ""; // clear current list
    books.sort().reverse().forEach(book => {
        const listItem = document.createElement('li');
        listItem.textContent = book;
        bookList.appendChild(listItem);
    });
}

// event listeners for buttons
document.getElementById('ascend-btn').addEventListener('click', displayAscending);
document.getElementById('descend-btn').addEventListener('click', displayDescending);

// initially displaying books in ascending order
displayAscending();
