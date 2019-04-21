//1
//adaugati un tag script si adaugati urmatoarele functii
// sqrNum, halfNum, percentNum si areaCircle

const sqrNum = () => {
    let square = document.getElementById('square').value
    let rezultat = square * square
    

}

const halfNum = () => {
    
}

const percentNum = () => {
    
}

const areaCircle = () => {
    
}


//2 pentru fiecare button aveti de adaugat un event listner
// care atunci cand este clickuit sa gaseasca valoarea inputului
// si sa afiseze rezultatul solutiei

document.getElementById('sqr-btn').addEventListener('click', sqrNum)
document.getElementById('half-btn').addEventListener('click', halfNum)
document.getElementById('prc-btn').addEventListener('click', percentNum)
document.getElementById('area-btn').addEventListener('click', areaCircle)

//3
// Bonus: faceti sa functioneze si la key press pe langa click

