let storedFibs = {};
// using memoization
var fib = function(N) {
    let result;
    if(storedFibs[N]){
        return storedFibs[N];
    } else if(N <=1){
        result = N;
    }else {
        result = fib(N-1)+fib(N-2);
    } 
    storedFibs[N] = result;
    return result;
    
};