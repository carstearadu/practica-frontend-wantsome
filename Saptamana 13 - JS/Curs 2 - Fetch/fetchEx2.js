// PRE: create separate module to import fetch function(request) in index.js
//1. fetch some horror books
//2. save the ones that have more than 230 pages
//3. display the ones that have more than one author
// url = 'https://www.googleapis.com/books/v1/volumes?q=horror';

import {myBooks} from './module.js'

myBooks
.then(response => response.items.filter(item => item.volumeInfo.pageCount > 230))
.then(response)

