const checkWithTen = (nr) => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if(nr>10) {
                resolve('E mai mare ca 10');
            } else{
                reject('Fals');
            }
        }, 3000)
    })
}

checkWithTen(11).then(
    response => console.log(response), 
    rejectedResponse => console.log(rejectedResponse))

checkWithTen(3).catch(rejected => console.log(rejected))