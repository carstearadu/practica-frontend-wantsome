
//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - outpot 15 // myFunction(10,10) - output 100

/*function mySum(numOne, numTwo){
  var x = numOne;
  var y = numTwo;
  if(x === y){
    return x+y;
  }else{
    return (x+y)*5
  }
}

console.log(mySum(2,3))*/

//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false

// function mySpecialSum(numOne, numTwo) {
//     var x = numOne;
//     var y = numTwo;
//     if(x === 30 && y ===30 || x+y === 30){
//     return true;
//     }else{
//         return false;
//     }
// }

// console.log(mySpecialSum(30,30))
// console.log(mySpecialSum(15,15))
// console.log(mySpecialSum(1,2))


//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

// function verifyString(myString) {
//     var a = myString
//     var x = myString.slice('')
//     if(x[0] === 'J' && x[1] === 'S'){
//         return myString;
//     }else{
//         return 'JS'+myString;
//     }
// }

// console.log(verifyString('JSisawesome'))
// console.log(verifyString('isawesome'))

//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

// function removeDup(myString) {                                 /*UNFINISHED*/
//     var draftString = myString.toString()
//     for(var i = 0; i < draftString.length; i++){
//         if(draftString.charCodeAt(i) === draftString.charCodeAt(i+1)){
//             return draftString.substr(0, i) + draftString.substr(i+1, draftString.length)
//         }
//     }
// }

// console.log(removeDup('aabbcc'))

//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'


// function longestString(myString) {
//   var stringSplit = myString.split(' ');
//   var maxString = 0;
//   var longWord = null;
//   for(var i = 0; i < stringSplit.length; i++){
//       if(stringSplit[i].length > maxString){
//         maxString = stringSplit[i].length
//         longWord = stringSplit[i]
//       }
//     }
//   return longWord;
// }

// console.log(longestString('Afiseaza cel mai lung cuvant din acest striiiiiiing'))

//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

// function asterisk() {
//   return "*\n**\n***\n****\n*****";
//   }
//   console.log(asterisk());

//ex7
/*const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
    // append any negative numbers found in the numbers array 
    // into the negativeNumbers array constant variable above
}
extractNegativeNumbers([1,2,-5,4,-6])*/


//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2

// function calculate(numOne, numTwo, operator) {
//   let a = numOne;
//   let b = numTwo;
//   let o = operator;
//   if(operator === 'add'){
//     return a+b;
//   }else if(operator === 'substract'){
//     return a-b;
//   }else if(operator === 'multiply'){
//     return a*b;
//   }else if(operator === 'divide'){
//     return a/b;
//   }else{
//     return 'Operation is invalid'
//   }
// }

// console.log(calculate(2,3,'add'))
// console.log(calculate(2,3, 'multiply'))
// console.log(calculate(2,3, 'divide'))
// console.log(calculate(2,3, 'substract'))

//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7

// function isDiv(myNumber) {
//   let a = myNumber;
//   if(a % 3 === 0 && a % 5 === 0){
//     return 'BOTH'
//   }else if(a % 5 === 0){
//     return 'FIVE'
//   }else if(a % 3 === 0){
//     return 'THREE'
//   }else{
//     return a;
//   }
// }

//   console.log(isDiv(11))
//   console.log(isDiv(12))
//   console.log(isDiv(35))
// console.log(isDiv(15))


//Master exercises
//Ex9 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38

//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false

//ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"

//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false


//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true