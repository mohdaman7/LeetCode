
let arr = [1,9,6,3,2], size = 3

var chunk = function(arr, size) {
    let result = []
    for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result
};

console.log(chunk(arr,size))
