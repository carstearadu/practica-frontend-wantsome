//Capitalize names

function capitalizeNames(arr) {
    const lowerCaseNames = arr.map((name) => {
        const lowerName = name.toLowerCase();
        return lowerName.charAt(0).toUpperCase() + lowerName.slice(1,lowerName.length);
    })
    return lowerCaseNames;
}
console.log(capitalizeNames(['john', 'JACOB', 'sdDDDDdd']))

//Double-number

function doubleNumber(arr) {
    const doubleNb = arr.map((number) => {
        if(typeof number == 'number'){
            return number*2;
        }else{
            return number;
        }
    })
    return doubleNb;
}

console.log(doubleNumber([2, '5', 100, '100', 'blabla',75]))

//Ex3. getPersonNames

function getPersonNames(arr) {
    const concatNames = arr.map((item) => {
        return `${item.name} ${item.surname}`
    })
    return concatNames;
}

console.log(getPersonNames([{
    name: 'Angelina',
    surname: 'Jolie',
    age: 40
},{
    name: 'Eric',
    surname: 'Johns',
    age: 27
}
]))

//Ex4 computeExamPass

function computeExamPass(arr) {
    const computePass = arr.map((item) => {
        if(item.grade > 5){
            return `${item.name} has passed`
        }
        return `${item.name} has failed`
    })
    return computePass;
}

console.log(computeExamPass([{
    name: 'Angelina',
    surname: 'Jolie',
    age: 40,
    grade: 7
},{
    name: 'Eric',
    surname: 'Johns',
    age: 27,
    grade: 3
}, {
    name: 'Florin',
    surname: 'Salam',
    age: 99,
    grade: 5
}
]))

//Ex5 Implementati pt pagina

function getPersonDomElements(arr) {
    arr.map((item) => {
        const fullname = `${item.name} ${item.surname}`
        const head1 = document.createElement('h1');
        const head2 = document.createElement('h2');
        head1.textContent = fullname;
        head2.textContent = item.age;
        document.querySelector('#codeGoesHere').appendChild(head1)
        document.querySelector('#codeGoesHere').appendChild(head2)
    })
    
}

getPersonDomElements([{
    name: 'Angelina',
    surname: 'Jolie',
    age: 40,
    grade: 7
},{
    name: 'Eric',
    surname: 'Johns',
    age: 27,
    grade: 3
}, {
    name: 'Florin',
    surname: 'Salam',
    age: 99,
    grade: 5
}
])