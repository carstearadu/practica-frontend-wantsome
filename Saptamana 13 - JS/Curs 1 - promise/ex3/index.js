const isString = (str) => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if(typeof str === 'string') {
                resolve(str.toUpperCase())
            } else {
                reject('Not a string')
            }
        }, 2500)
    })
}

isString('my lowercased string').then(
    response => console.log(response),
    rejectedResponse => console.log(rejectedResponse)
)

isString(24).catch(rejected => console.log(rejected))
