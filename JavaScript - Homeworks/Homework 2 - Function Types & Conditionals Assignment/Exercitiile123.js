// 1. Scrieti o functie de tip named function care accepta ca argument un CNP si verifica sexul unei persoane. In urma apelului acestei functii, se va returna un text de forma "Persoana verificata este de sexul M/F".

function verifySex(codNumericPersonal) {
    var cnpString = codNumericPersonal.toString();
    var gender = cnpString.charAt(0);
    var genderLength = cnpString.length;
    if(gender == 1 && genderLength == 13){
        return 'Persoana verificata este de sex Masculin';
    }
    else if(gender == 2 && genderLength == 13){
        return 'Persoana verificata este de sex Feminin';
    }
    else{
        return 'CNP introdus este invalid.'
    }
}

console.log(verifySex(2211111111111))

// 2. Scrieti o functie de tip function expression care accepta ca argument o valoare numerica cuprinsa intre 1 si 10 si decide calificativul punctajului. Criteriile sunt urmatoarele:
// - 1-3 = E
// - 3-6 = D
// - 7-8 = B
// - 9 = A
// - 10 = A+
// Functia va returna un text de forma "Calificatul corespunzator punctajului [punctaj] este [calificativ]".

var puncte = function(punctaj) {
    if(punctaj > 0 && punctaj<= 3){
        return 'Calificativul corespunzator punctajului' + ' ' + punctaj + ' ' + 'este E.'
    }
    else if(punctaj > 3 && punctaj <= 6){
        return 'Calificativul corespunzator punctajului' + ' ' + punctaj + ' ' + 'este D.'
    }
    else if(punctaj > 6 && punctaj <= 8){
        return 'Calificativul corespunzator punctajului' + ' ' + punctaj + ' ' + 'este B.'
    }
    else if(punctaj === 9){
        return 'Calificativul corespunzator punctajului' + ' ' + punctaj + ' ' + 'este A.'
    }
    else if(punctaj === 10){
        return 'Calificativul corespunzator punctajului' + ' ' + punctaj + ' ' + 'este A+.'
    }
    else{
        return 'Punctajul introdus este invalid.'
    }

}

console.log(puncte(7))

// 3. Scrieti o functie care accepta ca argument numele marcii unei masini si returneaza un text de forma: "Marca [marca] se produce in [tara]". Trebuie sa aveti macar 6 cazuri. In cazul in care functia nu recunoaste marca, va returna "Marca este necunoscuta. " Scrieti codul in 3 variante diferite.
// 3.a Varianta cu Switch

function myCar(marcaMasina){
switch(marcaMasina){
    case 'Lamborghini':
        return 'Marca Lamborghini s-a produs in Italia';
        break;
    case 'Skoda':
        return 'Marca Skoda s-a produs in Cehia';
        break;
    case 'Volkswagen':
        return 'Marca Volkswagen s-a produs in Germania';
        break;
    case 'Seat':
        return 'Marca Seat s-a produs in Spania';
        break;
    case 'Honda':
        return 'Marca Honda s-a produs in Japonia';
        break;
    case 'Vauxhall':
        return 'Marca Vauxhall s-a produs in Regatul Unit';
        break;
    default:
        return 'Marca este necunoscuta';  
}
}

console.log(myCar('Seat'))

//3.b Aceeasi functie - Varianta cu IF statement.

function myCarAlternative(carBrand){
    if(carBrand === 'Lamborghini'){
        return 'Marca Lamborghini s-a produs in Italia';
    }
    else if(carBrand === 'Skoda'){
        return 'Marca Skoda s-a produs in Cehia';
    }
    else if(carBrand === 'Volkswagen'){
        return 'Marca Volkswagen s-a produs in Germania';
    }
    else if(carBrand === 'Seat'){
        return 'Marca Seat s-a produs in Spania';
    }
    else if(carBrand === 'Honda'){
        return 'Marca Honda s-a produs in Japonia';
    }
    else if(carBrand === 'Vauxhall'){
        return 'Marca Vauxhall s-a produs in U.K.';
    }
    else{
        return 'Marca este necunoscuta';
    }
}

console.log(myCarAlternative('Honda'))

//3.c Aceeasi functie - Varianta cu function expression.

var carOrigin = function myCarAlternative(carBrand){
    if(carBrand === 'Lamborghini'){
        return 'Marca Lamborghini s-a produs in Italia';
    }
    else if(carBrand === 'Skoda'){
        return 'Marca Skoda s-a produs in Cehia';
    }
    else if(carBrand === 'Volkswagen'){
        return 'Marca Volkswagen s-a produs in Germania';
    }
    else if(carBrand === 'Seat'){
        return 'Marca Seat s-a produs in Spania';
    }
    else if(carBrand === 'Honda'){
        return 'Marca Honda s-a produs in Japonia';
    }
    else if(carBrand === 'Vauxhall'){
        return 'Marca Vauxhall s-a produs in U.K.';
    }
    else{
        return 'Marca este necunoscuta';
    }
}

console.log(carOrigin('Skoda'))


