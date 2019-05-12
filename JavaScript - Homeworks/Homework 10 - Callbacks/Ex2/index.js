const form = document.querySelector('form');
form.onsubmit = function (submitEvent) {
    submitEvent.preventDefault();
    const name = document.querySelector('input').value
    const url = `https://www.googleapis.com/books/v1/volumes?q=${name}`

    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        resultsOfBooks(request.response)
    }
}

function resultsOfBooks(response) {
    addBooks(response, displayBooks)
}

function addBooks(books, callback) {
    const booksArray = books.items;
    for(let i = 0; i < booksArray.length; i++){
        callback(booksArray[i].volumeInfo.title,
            booksArray[i].volumeInfo.publisher,
            booksArray[i].volumeInfo.publishedDate,
            booksArray[i].volumeInfo.pageCount,
            booksArray[i].volumeInfo.language,
            booksArray[i].volumeInfo.imageLinks.thumbnail,
            booksArray[i].volumeInfo.description)
    }
}

function displayBooks(title, publisher, publishedDate, pages, language, image, description) {
    let paragraphTitle = document.createElement('h3');
    let paragraphPublisher = document.createElement('p');
    let paragraphPublishedDate = document.createElement('p');
    let paragraphPageCount = document.createElement('p');
    let paragraphLanguage = document.createElement('p');
    let bookImage = document.createElement('img');
    bookImage.setAttribute('src', image);
    let paragraphDescription = document.createElement('p');
    paragraphTitle.textContent = title;
    paragraphPublisher.textContent = 'Published by: ' + publisher;
    paragraphPublishedDate.textContent = 'On: ' + publishedDate;
    paragraphPageCount.textContent = 'Number of pages: ' +pages;
    paragraphLanguage.textContent = 'Language written in: ' + language;
    paragraphDescription.textcontent = 'Description: ' + splitDescription(description)
    document.querySelector('#books').appendChild(bookImage);
    document.querySelector('#books').appendChild(paragraphTitle);
    document.querySelector('#books').appendChild(paragraphPublisher);
    document.querySelector('#books').appendChild(paragraphPublishedDate);
    document.querySelector('#books').appendChild(paragraphPageCount);
    document.querySelector('#books').appendChild(paragraphLanguage);
    document.querySelector('#books').appendChild(paragraphDescription);
}

const splitDescription = (description) => {
        const descriptionArray = description.split(' ');
        if(descriptionArray.length > 15) {
            createDescription = descriptionArray.splice(0,15).join(' ') + '...'
            return createDescription;
    }
}