function mergeSort(array) {
  if (array.length < 2) 
    return array;
  
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let array = [];
  while (left.length && right.length) {
    if (left[0] <= right[0])
      array.push(left.shift());
    else {
      array.push(right.shift());
      inversions += left.length;     // Not quite right, variable leakage!!!
    }
  }
  return array.concat(left.slice(), right.slice());
}

// Test with t array test-cases
// INPUT: a \newline separated string where each line is an array test-case
let inversions = 0;
let t = parseInt(INPUT);    // t is the first line of INPUT
for (let i = 0; i < t; i++) {
  let arr = INPUT.split(' ').map(Number);
    
  let sorted = mergeSort(arr);
  console.log(sorted);
  console.log(inversions);
  inversions = 0;
}
