const checkForm = () => {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let firstname = document.getElementById('firstName').value;
    let lastname = document.getElementById('lastName').value;
    let phone = document.getElementById('phone').value;
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let alphanumeric =  /^[a-z0-9]+$/i;

    if(username.length < 4 || alphanumeric.test(username) === false) {
        document.getElementById('userError').style.display = 'block';
    } else {
        document.getElementById('userError').style.display = 'none';
    }
    if (emailFormat.test(email) === false) {
        document.getElementById('emailError').style.display = 'block';
    }else {
        document.getElementById('emailError').style.display = 'none';
    }
    if (firstname === '') {
        document.getElementById('firsNameError').style.display = 'block';
    }else {
        document.getElementById('firsNameError').style.display = 'none';
    }
    if (lastname === '') {
        document.getElementById('lastNameError').style.display = 'block';
    }else {
        document.getElementById('lastNameError').style.display = 'none';
    }
    if (phone.length < 10 || isNaN(phone) === true) {
        document.getElementById('phoneError').style.display = 'block';
    }else {
        document.getElementById('phoneError').style.display = 'none';
    }
}

const submitError = () => {
    let errors = document.querySelectorAll('.invalid');
    let errorCount;
    for(let i = 0; i < errors.length; i++) {
        errorCount = errors[i]
    }
    if(errorCount.style.display === 'none'){
        alert('Form successfully submitted.')
    }
}