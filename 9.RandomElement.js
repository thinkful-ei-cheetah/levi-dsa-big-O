// What is the Big O of the following algorithm? Explain your answer

// function findRandomElement(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];  // O(1)
// }

// =============================================================================
// O(1) Constant time
// The function selects a random element in the input array.
// The most time consuming operation has a Big O approximation of Constant time.
// The function selects a random number between 0 and 1, multiplies that number
// by the length of the array, and returns the value at that index of the array.
// =============================================================================