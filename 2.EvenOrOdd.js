// What is the Big O of the following algorithm? Explain your answer

function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

// =============================================================================
// O(1) Constant time
// the most time consuming operation checks to see if the input 
// (regardless of size) checks wheter the input is even or odd
// =============================================================================