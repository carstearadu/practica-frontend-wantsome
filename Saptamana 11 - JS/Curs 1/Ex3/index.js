const Person = function() {};

Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
}

const Trainer = new Person();
Trainer.prototype = new Person();
Trainer.initialize('Ovi', 29)
console.log(Trainer)


Trainer.teach = function(subject) {
    return this.name + ' is now teaching ' + subject
}
console.log(Trainer.teach('Math'))

