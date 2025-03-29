function hasTargetSum(array, target) {
  // Create a set to store numbers we've already seen
  const seenNumbers = new Set();

  // Loop through the array
  for (let num of array) {
    // Calculate the complement of the current number
    const complement = target - num;

    // Check if the complement exists in the set
    if (seenNumbers.has(complement)) {
      return true; // Found a pair that adds up to the target
    }

    // Add the current number to the set
    seenNumbers.add(num);
  }

  // If no pair was found, return false
  return false;
}
if (require.main === module) {
  // Custom tests to check the solution
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;   // Export the function for testing
