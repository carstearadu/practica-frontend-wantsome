function Vehicle(driver, speed) {
    this.theDriver = driver;
    this.theSpeed = speed;
    this.drive = function(mph) {
        this.theSpeed = mph;
        return this.theDriver + ' driving at ' + mph + ' miles per hour';
    }
}

const car = new Vehicle('driver', 0)
console.log(car)
console.log(car.drive())

const truck = new Vehicle('driver', 0)
truck.cargo = [];
truck.loadCargo = function(cargo) {
    this.cargo.push(cargo);
    return this;
};
truck.unloadCargo = function() {
    return this.cargo.pop();
};

console.log(truck)
console.log(truck.loadCargo(1))
console.log(truck.unloadCargo())


