//Ex1. 
//Setati 3 cookie-uri cu numele, profesia si varsta voastra
//Stocatile in 3 variabile dupa si afisatile in consola
//Setati 2 cookie-uri (cu ce valori vreti voi) care sa expire la un momendat
// Stocatile si pe astea in alte 2 variabile
// La final vrem sa vedem 5 cookieuri in console.log

document.cookie = "name=Cirstea Radu";
let name = document.cookie;
console.log(name.split(";")[0])

document.cookie = "profession=Diverse;";
let profession = document.cookie;
console.log(profession.split(";")[1])

document.cookie = "age=24";
let age = document.cookie;
console.log(age.split(";")[2])

document.cookie = "country=Tanzania; expires= Thu, 18 Dec 2019 12:00:00 UTC"
let cou = document.cookie;
console.log(cou.split(";")[3])

document.cookie = "location=Ntck'sd-s; expires= Thu, 18 Dec 2019 12:00:00 UTC"
let loc = document.cookie;
console.log(loc.split(";")[4])
