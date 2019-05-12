function Triangle(a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;
}

const shape = {
    type:'',
    getType: function(){
        return this.type
    }
}


Triangle.prototype.constructor = shape;
Triangle.prototype.constructor = Triangle;
let triunghi = new Triangle(2,3,4);
Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c
}

console.log(triunghi)
console.log(shape.isPrototypeOf(triunghi))
console.log(triunghi.getType())