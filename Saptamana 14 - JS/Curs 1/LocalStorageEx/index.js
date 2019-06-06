//Ex2. 
//Stocati in localStorage urmatoarele chei si valori ("width" "100px") ("height" "100px") ("background-color" "green")
//stocatile in 3 variabile diferite
// folositile pentru a construi un patrat cu ele

// localStorage.setItem("width", "100px");
// let width = localStorage.getItem("width");
// console.log(width)

// localStorage.setItem("height", "100px");
// let height = localStorage.getItem("height");
// console.log(height)

// localStorage.setItem("background-color", "green");
// let background = localStorage.getItem("background-color");
// console.log(background)

// let divPatrat = document.querySelector('#patrat')
// divPatrat.style.width = width;
// divPatrat.style.height = height;
// divPatrat.style.backgroundColor = background;

sessionStorage.setItem("width", "100px");
let width = sessionStorage.getItem("width");
console.log(width)

sessionStorage.setItem("height", "100px");
let height = sessionStorage.getItem("height");
console.log(height)

sessionStorage.setItem("background-color", "green");
let background = sessionStorage.getItem("background-color");
console.log(background)

let divPatrat = document.querySelector('#patrat')
divPatrat.style.width = width;
divPatrat.style.height = height;
divPatrat.style.backgroundColor = background;
