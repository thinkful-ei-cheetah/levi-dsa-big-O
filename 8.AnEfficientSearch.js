// In this example, we return to the problem of searching 
// using a more sophisticated approach than in naive search,
// above. Assume that the input array is always sorted. What 
// is the Big O of the following algorithm? Explain your answer

// function efficientSearch(array, item) {
//     let minIndex = 0;  // O(1)
//     let maxIndex = array.length - 1;  // O(1)
//     let currentIndex;  // O(1)
//     let currentElement;  // O(1)

//     while (minIndex <= maxIndex) {  // O(logn)
//         currentIndex = Math.floor((minIndex + maxIndex) / 2);
//         currentElement = array[currentIndex];

//         if (currentElement < item) {
//             minIndex = currentIndex + 1;
//         }
//         else if (currentElement > item) {
//             maxIndex = currentIndex - 1;
//         }
//         else {
//             return currentIndex;
//         }
//     }
//     return -1;  // O(1)
// }

// =============================================================================
// O(logn) Logarithmic Time
// The most time consuming operation has a Big O oproximation of Logarithmic Time

// The function is searching through an array input for a value input
// After setting up varialbes for lowerbound, upperbound, and current index 
// and value, the function loops throught the array checking to see whether
// or not the current value is less than the value input. 
// If it is, it subdivides the array by setting the lowerbounds to the current 
// index + 1.
// If it is not, it subdivides the array by setting the upperbounds to the current
// index - 1.
// Eventually the function will either return the currentIndex, if it equals the
// value input or -1 if it doesn't.
// =============================================================================