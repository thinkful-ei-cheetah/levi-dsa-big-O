// What does the following algorithm do? What is the Big O 
// of the following algorithm? Explain your answer

// function isWhat(n) {
//     if (n < 2 || n % 1 != 0) {  // O(1)
//         return false;
//     }
//     for (let i = 2; i < n; ++i) {  // O(n)
//         if (n % i == 0) return false;
//     }
//     return true;  // O(1)
// }

// =============================================================================
// O(n) Linear time

// The function checks to see if the input number is not a prime number.
// The most time consuming operation loops a number of times equal to n-2,
// checking to see if the input number is divisible by the current iteration.
// =============================================================================