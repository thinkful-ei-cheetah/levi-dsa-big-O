// Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

// 1
function sheep(num) {
  for(let i = 0; i < num; i++) {
    console.log(`${num - i}: Another sheep jump over the fence`)
  }
  console.log(`All sheep jumped over the fence`)
}

sheep(3)

// 2
function powerCalculator(base, expo) {
  let total = 1;
  for(let i = 0; i < expo; i++) {
    total *= base
  }
  console.log(total)
}

powerCalculator( 10, 2 )

// 3
function reversi(str) {
  let output = ''
  for (let i = 0; i < str.length; i++) {
    output = str[i] + output
  }
  console.log(output)
}

reversi('hello')

// 4
function nthTriangle(num) {
  let output = 0
  for( let i = 0; i < num; i++) {
    output += num - i
  }
  console.log(output)
}

nthTriangle(3)

// 5
function splitter(str, separator) {
  let output = ''
  for(let i = 0; i < str.length; i++) {
    if(str[i] !== separator) {
      output += str[i]
    }
  }
  console.log(output)
}

splitter('02/20/2020', '/')

// 6
function fib(num) {
  let output = []
  for (let i = 0; i <= num; i++) {
    if (i === 0) {
      output.push(0)
    }
    else if (i === 1) {
      output.push(1)
    }
    else {
      output.push(output[i - 1] + output[i - 2])
    }
  }
  return output
}

fib(5)

// 7

function factorial(num) {
  let output = 1
  for( let i = 1; i <= num; i++) {
    output *= i
  }
  return output
}

factorial(5)