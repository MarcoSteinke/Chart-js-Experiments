class Collatz {

    constructor(n) {
        this.result = this.collatz(n);
    }

    recur(coll = [], n) {
        coll.push(n);
        if(n == 1) return coll;
        return (n % 2 == 0) ? this.recur(coll, n/2) : this.recur(coll, 3*n+1);
    }
      
    collatz(n) {
        return this.recur([], n);
    }

    getResult() {
        if(this.result && this.result.length > 0) return this.result;
        else return [];
    }
}