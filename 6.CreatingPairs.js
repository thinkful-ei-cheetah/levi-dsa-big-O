// What is the Big O of the following algorithm? Explain your answer

// function createPairs(arr) {
//     for (let i = 0; i < arr.length; i++) {  // O(n)
//         for(let j = i + 1; j < arr.length; j++) {  // O(n^2)
//             console.log(arr[i] + ", " +  arr[j] );  // O(1)
//         }
//     }
// }

// =============================================================================
// O(n^2) Polynomial time
// the most time consuming operation has a big O oproximation of 
// Polynomial (squared) time.  
// The function is concattinating (seperated by ', ') each each value in the
// input array with each value in the array, meaning the time operation grows
// exponentially with input size.
// =============================================================================