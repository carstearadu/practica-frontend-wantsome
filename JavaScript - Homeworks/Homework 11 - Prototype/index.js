function Triangle(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.type = 'triunghi'
}

const shape = {
    type: '',
    getType: function() {
        return this.type;
    }
}

Triangle.prototype = shape;
Triangle.prototype.constructor = Triangle;

let triunghi = new Triangle(6,12,30);
triunghi.getPerimeter = function(){
    return this.a + this.b + this.c;
}

console.log(triunghi);
console.log(shape.isPrototypeOf(triunghi));
console.log(triunghi.getPerimeter());
console.log(triunghi.getType());