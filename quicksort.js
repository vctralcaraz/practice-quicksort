function quicksort(arr) {
  
  // Check if the input is length 1 or less
  if(arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }

  // Pick the first value as the pivot
  let pivot = arr[0];

  // Orient the pivot so that...
  let left = [];
  let right = [];

  for(let i = 1; i < arr.length; i++) {
    let el = arr[i];

    // every number smaller than the pivot is to the left
    if(el < pivot) {
      left.push(el);

    // every number larger (or equal) than the pivot is to the right
    } else {
      right.push(el);
    }
  }

  // Recursively sort the left
  let sort1 = quicksort(left);

  // Recursively sort the right
  let sort2 = quicksort(right);

  // Return the left, pivot and right in sorted order
  return sort1.concat(pivot, sort2);
}


module.exports = [quicksort];
