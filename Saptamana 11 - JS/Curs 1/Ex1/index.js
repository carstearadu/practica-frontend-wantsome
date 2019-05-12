function WantsomeStudent(nume, prenume, varsta, telefon) {
    this.firstName = nume;
    this.lastName = prenume;
    this.age = varsta;
    this.phone = telefon;
    this.getName = function() {
        return this.firstName + ' ' + this.lastName;
    }
    this.showNumber = function() {
        return 'Nr. de telefon este: ' + this.phone;
    }
    this.ageToRetire = function() {
        return (50 - this.age);
    }
}

const Radu = new WantsomeStudent('Cirstea', 'Radu', 24, 77777777);
const Alex = new WantsomeStudent('Alex', 'Alexei', 26, 77767676);
const Andrei = new WantsomeStudent('Andrei', 'Andreiescu', 35, 88888888);

console.log(Radu)
console.log(Radu.showNumber())
console.log(Radu.ageToRetire())
console.log(Radu.getName())

console.log(Alex)
console.log(Alex.showNumber())
console.log(Alex.ageToRetire())
console.log(Alex.getName())

console.log(Andrei)
console.log(Andrei.showNumber())
console.log(Andrei.ageToRetire())
console.log(Andrei.getName())