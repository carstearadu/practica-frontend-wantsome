//!!FOR

// function iteratie(numar){
//     var i;
//     for(i=0; i < numar; i++){
//      console.log('Sunt la iteratia:' + i);
//     }     
// }

// iteratie(20);

//!!WHILE

// function iteratieWhile(number){
//     var myVariable = 0;
//     while (myVariable < number){
//         console.log('Sunt la iteratia:' + myVariable)
//         myVariable++;
//     }   
// }

// iteratieWhile(6);

//!!ARRAY - FOR

// var studs =['Alin', 'George','Dragos','Andrei']
// function iterateOverArray(arrayToIterate){
//     var i;
//     for(i=0; i<arrayToIterate.length; i++)
//     console.log(arrayToIterate[i])
// }

// iterateOverArray(studs)

//Object - FOR -

// var userDetails = {
//     name : 'Andrei',
//     surname : 'Unknown',
//     age : 99,
// }

// function printObjectData(obj){
//     for(key in obj){
//         console.log(obj[key]);
//     }
// }

// printObjectData(userDetails)

//!!!!EX1

// function iteratie(numar){
//     for(var i=0; i<1001; i+=100){
//         console.log(i)
//     }
// }

// iteratie(1001)

//!!!!EX2

// function iteratie(numar){
//     for(var i=1; i<129; i*=2){
//         console.log(i)
//     }
// }

// iteratie(128)

//!!!!EX3


// function iteratie(numar){
//     for(var i=3; i<=15; i+=3){
//         console.log(i)
//     }
// }

// iteratie(15)

//!!!EX4

// function iteratie(numar){
//     for(var i=9; i>=0; i-=1){
//         console.log(i)}
// }

// iteratie(9)

//!!SUM OF ARRAY NUMBERS

myArray=[1,2,3,4]

computeSumOfArray = function(anArray){
    var arrLength = anArray.length;
    var sum=0;
    while(arrLength>=1){
        sum+=anArray[arrLength];
        arrLength--;
    }
    return sum;
}

console.log(computeSumOfArray(myArray))