//1. Scrieti o functie care verifica daca un input este sau nu de tip string. 

function is_string(variabila){
    return typeof(variabila) == 'string'
  }
  
  console.log(is_string('w3resource'))
  console.log(is_string([1, 2, 3, 4]))

//2. Scrieti o functie care verifica daca un string este gol sau nu.

function is_blank(string){
    return string===''
  }
  
  console.log(is_blank(''))
  console.log(is_blank('thisAintBlank'))

//3. Scrieti o functie accepta ca input un string si il transforma intr-un array de cuvinte:

function convertToArray(toArray){
    var split = toArray.split(' ')
    return split;
  }
  
  console.log(convertToArray('Cap si pajura, noi suntem banul si stema $'))

//4.Scrieti o functie care transforma un string in forma abreviata:

abbrev_name = function (str1) {
    var split_names = str1.split(" ");
    return (split_names[0] + " " + split_names[1].charAt(0) + ".");
};
console.log(abbrev_name("Radu Cirstea"));

//5. Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare ):

function capitalize(capital){
  var capString = capital.charAt(0).toUpperCase() + capital.slice(1)
  return capString
}

console.log(capitalize('radu'))

//6. Scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string-ului:

function sliceMyString(unString, lungime) {
  return unString.slice(0, lungime);
}

console.log(sliceMyString('ThisIsMyString', 6))

//7. Scrieti o functie care specifica daca o caracterul de la o anumita pozitie specificata dintr-un string este litera mare sau:

function isItUppercase(string, position) {
  return string.charAt(position).toUpperCase() === string.charAt(position)
}

console.log(isItUppercase('stringCuCamelCase',6))

//8. Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:

function insertString (firstString, secondString, position) {
  return firstString.slice(0, position) + secondString + firstString.slice(position);
}

console.log(insertString('StringCuCamelCase','**STRING INSERAT**',6))

//9. Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:

function remove_first_occurrence(stringInitial, cautaString)       {
	var index = stringInitial.indexOf(cautaString);
	return stringInitial.slice(0, index) + stringInitial.slice(index +cautaString.length);
}

console.log(remove_first_occurrence("String1String2String3String1", 'String1'));

//10. Scrieti o functie care compara doua string-uri case-insensitive:

function comparaStringuri (stringUnu, stringDoi) {
  return stringUnu.toUpperCase() === stringDoi.toUpperCase()
}

console.log(comparaStringuri('AmUnString', 'amunsTring'))

//11. Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital:

function uncapitalise (myString) {
  return myString.charAt(0).toLowerCase() + myString.slice(1)
}

console.log(uncapitalise('Lowercaseplz'))
