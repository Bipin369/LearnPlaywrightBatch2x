class Calculator {

    constructor(var1, var2) {
        this.var1 = var1;
        this.var2 = var2;
    }

    sub() {
        return this.var1 - this.var2;
    }

    mod() {
        return this.var1 % this.var2;
    }

    mul() {
        return this.var1 * this.var2;
    }
    div() {
        return this.var1 / this.var2;
    }
}

let su = new Calculator(20, 10);
console.log("Substraction: " + su.sub());
console.log("modulus: " + su.mod());
console.log("Multiplication: " + su.mul());
console.log("Division: " + su.div());