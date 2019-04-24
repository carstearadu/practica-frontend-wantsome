const header = document.querySelector('header');
const section = document.querySelector('section');
const requestUrl = 'https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json'

const request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();

request.onload = function() {
    const colors = request.response;
    populateColorList(colors);
    
}

const populateColorList = () => {
    const myList = document.createElement('ul');
    const itemList = document.createElement('li');
    const colorBox = document.createElement('span');
    const myParagraph = document.createElement('p');
}

