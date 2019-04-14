//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale
// sa-mi imulteasca suma lor cu 5. ex myFunction(10, 5) - outpot 15 / myFunction(10,10) - output 100

// function doSum(a,b) {
//     if (a !== b) {
//       return a + b;
//     } 
//     return (a + b) * 5;
// }
// console.log("Ex1:");
// console.log(doSum(10,5));
// console.log(doSum(10,10));
  
//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este
// egala cu 30:
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false
  
// function isSum30(a,b) {
//     if (a === 30 && b === 30) {
//         return true;
//     }
//     else if (a + b === 30) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log("Ex2:");
// console.log(isSum30(30,30));
// console.log(isSum30(15,15));
// console.log(isSum30(10,15));
  
//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel
// string, iar daca nu incepe, sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS
  
// function startsWithJS(str) {
//         if (str.charAt(0) === "J" && str.charAt(1) === "S") {
//             return str;
//         } else {
//             return "JS " + str;
//         }
//     }
// console.log("Ex3:");
// console.log(startsWithJS('JSisAwsome'));
// console.log(startsWithJS('is Awesome'));

  
//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

// function removeDuplicates(str) {
//     let arr = str.toString().split("");
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 arr.splice(j, 1);
//                 j--;
//             }
//         }
//     }
//     return arr.join("");
// }
// console.log("Ex4:");
// console.log(removeDuplicates('aaaaddc'));
// console.log(removeDuplicates(22133));

//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

// function longestString(str) {
//     let splitStr = str.split(" ");
//     let longestWord = 0;
//     let finalString = "";
//     for (let i = 0; i < splitStr.length; i++) {
//         if (splitStr[i].length > longestWord) {
//             longestWord = splitStr[i].length;
//             finalString = splitStr[i];
//         }    
//     }
//     return finalString;
// }
// console.log(longestString("this sentence contains a loooooooooooong word"));


//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

// function repeatAsterisk() {
//     let str = "* ";
//     let result = "";
//     let i = 0;
//     while (i < 5){
//         i += 1;
//         result = str.repeat(i);
//         console.log(result);
//     }
// }
// repeatAsterisk();

//ex7
// const negativeNumbers = [];

// function extractNegativeNumbers(numbers) {
//     // append any negative numbers found in the numbers array 
//     // into the negativeNumbers array constant variable above
//     for(let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < 0) {
//             negativeNumbers.push(numbers[i]);
//         }
//     }   
// }
// extractNegativeNumbers([1,2,-5,4,-6]);
// console.log(negativeNumbers);

//ex8
// Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator 
// - "add", "substract", "multiply", "divide"
// ex calculate(2, 5, "add") => 7
// calculate(10, 8, "substract") => 2

// function calculator(a,b,operator) {
//     let result = new Number();
//     switch (true) {
//         case operator === "add":
//             result = a + b;
//         break;
//         case operator === "substract":
//             result = a - b;
//         break;
//         case operator === "multiply":
//             result = a * b;
//         break;
//         case operator === "divide":
//             result = a / b;
//         break;
//     }
//     return result;
// }
// console.log(calculator(2, 5, "add"));
// console.log(calculator(10, 8, "substract"));
// console.log(calculator(2, 5, "multiply"));
// console.log(calculator(10, 8, "divide"));

//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze
// "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7

// function isDiv(number) {
//     let a = number;
//     if(a % 3 === 0 && a % 5 === 0){
//         return 'BOTH';
//     }else if(a % 3 === 0){
//         return 'THREE';
//     }else if(a % 5 === 0){
//         return 'FIVE';
//     }else{
//         return a;
//     }
// }

// console.log(isDiv(15))
// console.log(isDiv(5))
// console.log(isDiv(3))
// console.log(isDiv(8))

// //Master exercises

//Ex10 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38

// function returnDateAndTime(number) {
//     let currentDate = new Date();
//     let daysOfWeek = [ "Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"];
//     let ordinalDateWithDayOfWeek = "Azi este: " + daysOfWeek[currentDate.getDay()];
//     let ampm ="";
//     if (currentDate.getHours() >= 0 && currentDate.getHours() < 12) {
//         ampm = "AM";
//     } else {
//         ampm = "PM";
//     }
//     let currentitme = "Ora este: " + currentDate.getHours() + " " + ampm +  " : " + currentDate.getMinutes() + " : " + currentDate.getSeconds();
//     return ordinalDateWithDayOfWeek + "\n" + currentitme;
// }
// console.log(returnDateAndTime());

//ex11
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true 
// daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false

// function isPinValid(pin) {
//     if (isNaN(pin)) {
//         return false;
//     } else { 
//         if (pin.length === 4 || pin.length === 6) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }
// console.log("Ex11:");
// console.log(isPinValid("1234"));
// console.log(isPinValid("12345"));
// console.log(isPinValid("z23f"));


//ex12
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"

// function removeVowels(str) {
//     return str.replace(/[aeiou]/gi, '');
// }
// console.log(removeVowels("Hey I am developer"));

//ex13
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false

// function isSquareNumber(number) {
//     return number > 0 && Math.sqrt(number) % 1 === 0;
// }
// console.log(isSquareNumber(-1));
// console.log(isSquareNumber(25));
// console.log(isSquareNumber(3));
// console.log(isSquareNumber(9));

//ex14
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul 
// string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true

// function isAnagram(string1,string2) {
//     let str1 = string1.toLowerCase();
//     let str2 = string2.toLowerCase();
//     let str1RemoveSpaces = str1.split(" ");
//     let str2RemoveSpaces = str2.split(" ");
//     let str1Split = str1RemoveSpaces.join("").split("");
//     let str2Split = str2RemoveSpaces.join("").split("");
//     let str1Sorted = str1Split.sort().join("");
//     let str2Sorted = str2Split.sort().join("");
//     if (str1Sorted === str2Sorted) {
//         return true;
//     } else {
//         return false; 
//     }   
// }

// console.log(isAnagram("School master","The class room"));
// console.log(isAnagram("silent", "listen"));
// console.log(isAnagram("silentio", "listen"));