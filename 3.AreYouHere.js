// What is the Big O of the following algorithm? Explain your answer

// function areYouHere(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         const el1 = arr1[i];
//         for (let j = 0; j < arr2.length; j++) {
//             const el2 = arr2[j];
//             if (el1 === el2) return true;
//         }
//     }
//     return false;
// }

// =============================================================================
// O(n^2) Polynomial time
// This function is searching through two input arrays to find matching values
// In the worst case, the function is looping through each element in the second
// array for each element in the first array, meaning the time operations grow
// exponentially with input size
// =============================================================================