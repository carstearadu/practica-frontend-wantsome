//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/

// const funcSum = (p2) => {
//     let sum = 0;
//     for(let i = 1; i <= p2; i++) {   
//         sum +=i;  
//     }
//     return sum
//   }
  
// console.log(funcSum(5))
 
/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/

// const funcString = (myString) => {
//     var stringSplit = myString.split(' ');
//     let maxString = 0;
//     let longestWord = 0;
//     for(var i = 0; i < stringSplit.length; i++){
//         if(stringSplit[i].length > maxString){
//             maxString = stringSplit[i].length;
//             longestWord = stringSplit[i];
//         }
//     }
//     return longestWord;
// }

// console.log(funcString('un string foarte luuuuuung'))

// const funcString = (myString) => {
//     var stringSplit = myString.split(' ');
//     const sortedWords = stringSplit.sort((a,b) =>b.length - a.length);
//     return sortedWords[0];
// }

// console.log(funcString('ana aare aaaaa mere'))

/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/

// const revString = (str) => str.split('').reverse().join('')

// console.log(revString('Camel'))

/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
*/

// const replaceNextLetter = (str) => {
//     var newString = '';
//     for (var i = 0; i < str.length; i++) {
//         newString += String.fromCharCode(str.charCodeAt(i) + 1);
//      }
//      return newString;
// }

// console.log(replaceNextLetter('aabbcc'))

/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/

// const convertToTime = (myTime) => {
//     var hours = (myTime/60)
//     var minutes = myTime%60;

//     return hours + ":" +minutes
// }

// console.log(convertToTime(125))

/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/

/*
7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/