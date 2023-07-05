function smaller(arr) {
//create an empty array to hold each count for every number in the original array
  const counts = [];
//setup a for loop that goes through the original array
  for (let i = 0; i < arr.length; i++) {
//setup a variable to hold each individual count as it goes through the nested loop
    let count = 0;
//setup a nested for loop to rung through the number to the right of the digit its checking
    for (let j = i + 1; j < arr.length; j++) {
//check if the number to the right is smaller
      if (arr[j] < arr[i]) {
//If it is smaller, add one to the count
        count++;
      }
    }
//add the overall count to the new array using the push method
    counts.push(count);
  }
//returnt he new array
  return counts;
}