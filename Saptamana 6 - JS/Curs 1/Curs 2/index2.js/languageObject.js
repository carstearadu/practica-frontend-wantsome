// var helloWord2 = function (ceva) {
//     var lang = {
//         'es' : 'Hola mundo!',
//         'en' : 'Hello world!',
//         'de' : 'Hallo welt',
//     }
//     return lang[ceva];
// }
//     console.log(helloWord2('es'))
//     console.log(helloWord2('en'))
//     console.log(helloWord2('de'))

// var helloWorldInLang = function(limba) {
//     if (limba == 'es'){
//         return 'Hola Mundo!'
//     } else if (limba == 'de'){
//         return 'Hallo Welt!'
//     } else return 'Hello World!'
//     }


// console.log(helloWorldInLang('es'))
// console.log(helloWorldInLang('de'))
// console.log(helloWorldInLang('deeee'))

// function pluralize (substantiv, numar) {
//     if (substantiv === 'goose' && numar > 1){
//         return (numar + ' ' + 'geese') 
//     }

//     if (substantiv === 'mouse' && numar > 1){
//         return (numar + ' ' + 'mice')
//     }

//     if (substantiv === 'fish') {
//         return (numar + ' ' + 'fish')
//     }
//     if (numar > 1) {
//     return (numar +  ' ' + substantiv+ 's')
//     }

//     else {
//     return (numar +  ' ' +substantiv)
// }
// }   

// console.log(pluralize('elephant', 5))

var astazi;

switch (new Date().getDay()) {
    case 0:
        astazi = 'Duminica';
        break;
    case 1:
        astazi = 'Luni';
        break;
    case 2:
        astazi = 'Marti';
        break;
    case 3:
        astazi = 'Miercuri';
    case 4:
        astazi = 'Joi';
        break;
    case 5:
        astazi = 'Vineri';
        break;
    case 6:
        astazi = 'Sambata';
        break;
} 

console.log(astazi)
