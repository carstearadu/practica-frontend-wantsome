const containsPromise = (str) => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if(str.indexOf('promise') !==-1) {
                resolve('Contine promise');
            } else {
                reject('Nu contine promise');
            }
        }, 2000)
    })
}

containsPromise('This is a promise').then(
    response => console.log(response),
    rejectedResponse => console.log(rejectedResponse)
)

containsPromise('This doesnt contain promis').catch(rejected => console.log(rejected))
