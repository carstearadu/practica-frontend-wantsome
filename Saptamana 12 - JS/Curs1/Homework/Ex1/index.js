//Ex1

const myData = [{
    name: 'Iggy Turskis',
    active: false
},{
    name: 'Geoff Newell',
    active: true
},{
    name: 'Peter Newnham',
    active: true
},{
    name: 'James Walker',
    active: false
}];

function filterActive(arr) {
    const loopArray = arr.filter((item) => {
        if(item.active === true){
            return item;
        }
    })
    return loopArray;
}

console.log(filterActive(myData))

