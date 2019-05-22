//ex.1.
// Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// de exemplu moveLetters('hello') // => 'ifmmp'
// moveLetters('abcxy') // => "bcdyz"
//hint : String.fromCharCode() String.charCodeAt()


const moveLetters = function(string){
    let stringSplit = string.split('');

    const mapString = stringSplit.map((char) => {
        let charCode = char.charCodeAt() + 1;
        let fromCharCode = String.fromCharCode(charCode);
        return fromCharCode;
    })
    return mapString.join('')
}

console.log(moveLetters('Bravo'))
  
// ex2
// Vreau sa am o functie care sa faca uppercase la cuvinte in functie ca in exemplu de mai jos
// changeWordCase('hey ppl, lets learn javascript together') // => "HEY ppl, LETS learn JAVASCRIPT together SOMETIME"
  let changeWordCase = function(string){
    let arr = string.split(' ');
    
    const mapArray = arr.map((item, index) => {
        if(index % 2 === 0){
            return item.toUpperCase()
        }
        return item;
    })
    return mapArray;
  }

  console.log(changeWordCase("hey ppl, lets learn javascript together sometime"))