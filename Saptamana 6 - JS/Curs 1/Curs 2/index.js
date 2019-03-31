function greaterNumber (firstNumber, secondNumber){
    if (firstNumber>secondNumber){
        return "Numarul " + firstNumber +"este mai mare decat " + secondNumber
    }
    else{
        return "Numarul " + secondNumber + " este mai mare decat " + firstNumber
    }
}

    console.log(greaterNumber(2,3))

function mySecondFunction() {
    var myVariable = greaterNumber(3,4);
    return myVariable;
}

    console.log(mySecondFunction())

//expression function

var expresie = function(thirdNumber, fourthNumber) {
    var myVariable2= greaterNumber(thirdNumber, fourthNumber)
    return myVariable2;
}

    console.log(expresie(2, 10))

var helloWorldInLang = function(limba) {
    if (limba === 'es'){
        return 'Hola Mundo!'
    } else if (limba === 'de'){
        return 'Hallo Welt!'
    } else return 'Hello World!'
    }


console.log(helloWorldInLang('es'))
console.log(helloWorldInLang('de'))
console.log(helloWorldInLang('deeee'))

// var helloWorldInLang2 (limbi){
//     switch (th)
// }


var helloWord2 = function (ceva) {
    var lang = {
        'es' : 'Hola mundo!',
        'en' : 'Hello world!',
        'de' : 'Hallo welt',
    }
    return lang[ceva];
}
    console.log(helloWord2('es'))

function pluralize (substantiv, numar) {
    if (numar === 1){
        
    }

    if (numar > 1) {
    return (numar +  ' ' + substantiv+ 's')
    }

    else {
    return (numar +  ' ' +substantiv)
}
}   

console.log(pluralize('goose', 2))
