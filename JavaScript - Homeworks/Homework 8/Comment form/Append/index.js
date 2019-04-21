const div = document.getElementsByTagName('div')[0]
const textArea = () => {
    let text = document.createElement('textarea')
    if(document.getElementById('checkbox').checked === true) {
        div.appendChild(text)
        text.setAttribute('rows', '8')
        text.setAttribute('cols', '68')
        text.setAttribute('onchange', 'actionButton()')
    }else {
        let child = document.getElementsByTagName('textarea')[0]
        div.removeChild(child)
    }
}

const actionButton = () => {
    let textAr = document.getElementsByTagName('textarea')[0]
    let input = textAr.value
    let charactersNb = input.length
    let errMessage = document.createElement('p')
    errMessage.textContent = 'Input must be between 1 and 160 characters long.'
    if(charactersNb > 160) {
        textAr.style.backgroundColor = '#f7f7f7'
        textAr.style.border = '2px solid red'
        div.appendChild(errMessage)
        errMessage.setAttribute('style', 'color:red;')
    }else {
        alert('Your message has been sent')
    }
}