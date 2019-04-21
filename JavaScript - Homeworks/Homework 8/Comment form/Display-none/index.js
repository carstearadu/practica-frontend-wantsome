const textArea = () => {
    if(document.getElementById('checkbox').checked === true) {
        document.getElementById('comment').style.display = 'block'
    }else {
        document.getElementById('comment').style.display = 'none'
    }
}

const charNum = () => {
    let enteredChar = document.getElementById('comment').value
    let charLen = enteredChar.length
    if(enteredChar !== "" && charLen < 160) {
        alert('Your comment has been submitted.')
    }else {
        document.getElementById('invalid').style.display = 'inline-block'
        document.getElementById('submitButton').disabled = true
    }
}