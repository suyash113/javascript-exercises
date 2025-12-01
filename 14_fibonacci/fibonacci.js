const fibonacci = function(n) {
    n = parseInt(n)
    fib = [0, 1]
    if (n === 0 ) {
        return 0
    } else if(n === 1) {
        return 1
    } else if (n < 0) {
        return "OOPS"
    }
    else {
        for (let i = 2; i <= n; i++) {
            fibn = fib.at(i-1) + fib.at(i-2)
            fib.push(fibn) 
        }
        return fib.at(-1)
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
