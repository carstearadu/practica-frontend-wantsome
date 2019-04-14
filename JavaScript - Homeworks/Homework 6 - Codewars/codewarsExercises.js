// 1. Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// const isSquare = (num) => {
//     let root = Math.sqrt(num);
//     if(num === root * root){
//         return num + ' ' + 'is a perfect square.'
//     }else{
//         return num + ' ' + 'is not a perfect square.'
//     }
// }

// console.log(isSquare(9))

// 2. ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

// const atmPin = (pin) => {
//     let digits = ['1','2','3','4','5','6','7','8','9','0'];
//     for(let i = 0; i < digits.length; i++) {
//         if(digits.includes (pin[i]) === false) {
//             return 'Invalid pin';
//         }
//         if(pin.length === 4 || pin.length === 6){
//             return 'Pin valid'
//         }else{
//             return 'Pin invalid'
//         }
//     }
// }

// console.log(atmPin('1234'))

//3. Equal Sides Of An Array
// You are going to be given an array of integers. 
// Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. 
// If there is no index that would make this happen, return -1.

// const findEvenIndex = (arr) => {
//     var sum = 0,
//       leftSum = 0;
  
//     for (var i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
  
//     for (var i = 0; i < arr.length; i++) {
//       sum -= arr[i];
  
//       if (leftSum === sum) {
//         return i;
//       }
  
//       leftSum += arr[i];
//     }
  
//     return -1;
//   }
//   console.log(findEvenIndex([1,2,3,4,3,2,1]))
//   console.log(findEvenIndex([1,100,50,-51,1,1]))
//   console.log(findEvenIndex([1,2,3]))

/*4. Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.*/

// function sumTwoSmallestNumbers(numbers) {  
//     numbers.sort((a,b) => a-b)
//      return numbers[0] + numbers[1];
//    };

//    console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 2]))
//    console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))

/*5. Take a sentence (string) and reverse each word in the sentence. Do not reverse the order of the words, just the letters in each word.
If there is punctuation, it should be interpreted as a regular character; no special rules.
If there is spacing before/after the input string, leave them there.
String will not be empty*/

// function reverser(sentence) {
//     return sentence.split('').reverse().join('').split(' ').reverse().join(' ')
// }

// console.log(reverser('reverse this sentence please'))
