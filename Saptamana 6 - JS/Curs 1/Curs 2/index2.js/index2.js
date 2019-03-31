// if suma<$30 000 taxa 0%
// if venit = 50000-99999  taxa 35%
// if venit >100000 taxa 40%

function computeTaxes (venit){
    switch(true) {
    case venit < 30000:
    return 0;
    break;

    case venit > 50000 && venit < 99999:
    return venit*0.35;
    break;

    case venit > 100000:
    return venit*0.4;
    break;
    
}
}

console.log(computeTaxes(45000))
console.log(computeTaxes(60000))
console.log(computeTaxes(145000))