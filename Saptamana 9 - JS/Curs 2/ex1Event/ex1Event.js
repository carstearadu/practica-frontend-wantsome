/* 
1. Creati o pagina HTML care sa includa un buton; Intr-un fisier index.js separat 
definiti o functie buttonEventHandler al carei cod sa porneasca o fereastra
de tip alerta in care se va afisa textul "Ai apasat pe buton.". Specificati prin 
intermediul onclick atasat elementului buton un event listener care sa declanseze
functia buttonEventHandler atunci cand se apasa pe buton.
*/

const buttonEventHandler = () => {
    alert('You have clicked the button')
}

/*
2. Adaugati un nou element de tip text input. Specificati o noua functie textInputEventHandler.
care afiseaza o alta alerta cu textul ("Textul din input a fost schimbat"). Specificati
un event listener care sa corespunda actiunii descrise in textul afisat de alerta.
*/

const textInputHandler = () => {
    alert('Textul din input a fost schimbat')
}

/*
3. Adaugati un nou element de tip paragraf care sa contina textul "Sunt un cameleon.".
Definiti o noua functie cameleonEventHandler care schimba random culoarea paragrafului
atunci cand user-ul apasa orice tasta.
Hint: folositi addEventListener
*/

document.addEventListener('keydown', cameleonEventHandler)
colors = ['red', 'blue', 'green']

function cameleonEventHandler(){
    document.getElementById('cameleon').style.color = colors[Math.floor(Math.random()*3)]
}