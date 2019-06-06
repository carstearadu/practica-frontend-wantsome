// PRE: create separate module to import fetch function(request) in index.js

//Folosind fetch() prima data returnam userii cu id-ul mai mare ca 5
//.then - returnam user names si city
//hint nu uitati sa transformati primul raspuns ca si json

const url = "https://jsonplaceholder.typicode.com/users"
const urlTwo = 'https://www.googleapis.com/books/v1/volumes?q=horror';

export const myData = fetch(url)
    .then(response =>response.json())

export const myBooks = fetch(urlTwo)
    .then(response =>response.json())


