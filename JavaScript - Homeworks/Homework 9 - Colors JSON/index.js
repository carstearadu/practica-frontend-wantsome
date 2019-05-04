const section = document.querySelector('section')
const url = 'https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json'

const request = new XMLHttpRequest()
request.open('GET', url)
request.responseType = 'json'
request.send()

request.onload = function() {
    const myJSON = request.response;
    populateColors(myJSON)
}

const populateColors = (jsonObj) => {
    const newList = document.createElement('ul')
    
    for(let key in jsonObj) {
        const listItems = document.createElement('li')
        const colorSquare = document.createElement('span')
        const para = document.createElement('p')

        para.textContent = key
        colorSquare.style.backgroundColor = key
        
        listItems.appendChild(colorSquare)
        listItems.appendChild(para)
        newList.appendChild(listItems)
    }
    
    section.appendChild(newList)
}
