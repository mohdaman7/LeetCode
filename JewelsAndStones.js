
let jewels = "aA", stones = "aAAbbbb";
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for(let i=0;i<stones.length;i++){
        if(jewels.includes(stones[i])){
            count++
        }
    }
    return count
};
console.log(numJewelsInStones(jewels,stones))