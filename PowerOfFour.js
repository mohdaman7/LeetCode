let n = 16

var isPowerOfFour = function(n) {
    if(n<1){
        return false
    }
    while(n%4==0){
        n/=4
    }
    return n===1
};

console.log(isPowerOfFour(n))