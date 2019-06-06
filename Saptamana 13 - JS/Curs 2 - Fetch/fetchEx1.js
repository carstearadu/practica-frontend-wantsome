import {myData} from './module.js'

myData
.then(data => data.filter(item => item.id > 5))

.then(response => response.map(item => `Username: ${item.username}; Location: ${item.address.city}`))

.then(response => console.log(response))
    
    //console.log(`Username: ${item.username}; Location: ${item.address.city}`)))

