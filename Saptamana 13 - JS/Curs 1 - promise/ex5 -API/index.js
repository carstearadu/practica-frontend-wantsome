let url = 'https://pokeapi.co/api/v2/'
let urlTwo =  'http://api.citybik.es/v2/networks'
function get(link) {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open('GET', link)

        req.onload = function() {
            if(req.status == 200) {
                resolve(req.response)
            } else {
                reject(Error(req.statusText))
            }
        }

        req.oneror = function() {
            reject(Error("Network error"))
        }
        
        req.send()
    })
}
//API 1

get(url).then(function(response) {
    console.log('Success!', JSON.parse(response))
}, function(error) {
    console.log('Failed!', error)
})

//API 2

get(urlTwo).then(function(response) {
    console.log('Success!', JSON.parse(response))
}, function(error) {
    console.log('Failed!', error)
})

//ES6 Modules import-export