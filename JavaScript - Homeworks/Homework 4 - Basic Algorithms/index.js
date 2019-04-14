//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"

// function protectEmail(myEmail){
//   var mySplit = myEmail.split('@')
//   mySplit[0]= mySplit[0].charAt(0) + '****' 
//   return  mySplit.join('@');
// }

// console.log(protectEmail('myemail@yahoo.com'))


//Ex2
//Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"

// function upperCase(aString){
  
//   var aStringSplit = aString.split(' ')
//   for(var i = 0, x = aStringSplit.length; i < x; i++){
//       aStringSplit[i] = aStringSplit[i][0].toUpperCase() + aStringSplit[i].substr(1)
//   }
//   return aStringSplit.join(' ')
// }

// console.log(upperCase('this is my string'))

//Ex3
// Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"


/*function invertCase(str){
  var output = "";

  for(var i = 0; i < str.length; i++){
        var ch = str[i];
        if(ch === ch.toUpperCase()){
            output += ch.toLowerCase();
        }else{
            output += ch.toUpperCase();
        }           
    }
    return output;
}

console.log(invertCase('ThIs SeNtEnce wILl HAVE inveRTED cases'))*/

//Ex4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"

/*function repeatMyString(stringOne, nbTimes){
  if(nbTimes>0){
    return stringOne.repeat(nbTimes)
  }
}

console.log(repeatMyString('Wantsome',5))*/

//Ex5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante

/*function isPalindrome(strPal){
  return strPal === strPal.split('').reverse().join('');
}

console.log(isPalindrome('level'))*/

//Ex6
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care contine ca si elemente cele mai mari numere din fiecare array

// function largestNumbers(myArray){
//     var finalArray = [0, 0, 0, 0]
//     for(var i = 0; i < myArray.length; i++){
//         for(var subI = 0; subI < myArray[i].length; subI++){
//             if(myArray[i][subI] > finalArray[i]){
//                 finalArray[i] = myArray[i][subI];
//             }
//         }
//     }
//     return finalArray
// }

// console.log(largestNumbers([[1,2,3,4], [5,6,7,8], [10,20,30,40],[100,200,300,400]]))

//Ex7
// Implementati o functie care face reverse la un string

// function reverseString(myString){
//     var a = myString.split('').reverse().join('')
//     return a
// }

// console.log(reverseString('inverseaza stringul'))

//Ex8 
// Implementati o functie care calculeaza factorialul unui numar

// function factorial(valueToFact){
//     var finalResult = valueToFact
    
//     if(valueToFact === 0 || valueToFact === 1)
//     return 1;

//     while(valueToFact > 1){
//         valueToFact--;
//         finalResult *= valueToFact;
//     }
//     return finalResult;
// }

// console.log(factorial(6))

//Ex9
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma

// function doesItEndWith(stringOne, stringTwo){
//     if(stringOne.endsWith(stringTwo) == true){
//         return 'Primul string se termina cu al doilea string'
//     }
//     else{
//         return 'Primul string nu se termina cu al doilea string'
//     }
// }

// console.log(doesItEndWith('Acesta este primul string','primul string'))

//Ex10
// Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care trece testul specificat

//No exact. Am cautat si pe Stack Overflow si nu am gasit ceva care sa sune similar cu ce se  cere in cerinta.

//Ex11
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea string

// function containsAllChars(stringOne, stringTwo) {
//     var arr = new Array(256);
    
//     for (var i = 0; i < 256; i++) {
//       arr[i] = 0;
//     }
    
//     for (i = 0; i < stringOne.length; i++) {
//       arr[stringOne.charCodeAt(i)] += 1;
//     }
    
//     for (i = 0; i < stringTwo.length; i++) {
//       arr[stringTwo.charCodeAt(i)] -= 1;

//       if (arr[stringTwo.charCodeAt(i)] < 0) {
//         return false;
//       }
//     }
    
//     return true;
// }

// console.log(containsAllChars('badmanmanman','badman'));

// Ex 12
// Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana cand intalneste elementul cu valoarea specificata

function displayArrayUntil(myArray, num){               //Nu am reusit sa termin.
  for(var i = 0; i < myArray.length; i++){
      if(myArray[i] === num){
          return myArray.slice(0, i)
      }
  }
}

console.log(displayArrayUntil([1,3,7,10], 7))

// Ex 13
// Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN

// function removeFalsy(myArray){
//   return myArray.filter(Boolean);
// }

// console.log(removeFalsy([1,2,NaN,3,false,4,0,5, ,6,null]))

// Ex 14
// Scrieti o functie care repeta un string de n ori specificate

// function repeatThisString(myString, nbOfTimes){
//   var repeatString ='';
//   while(nbOfTimes > 0){
//       repeatString += myString + ' ';
//       nbOfTimes--;
//   }
//   return repeatString;
// }

// console.log(repeatThisString('Repeta-mi stringul', 5))