// The Tower of Hanoi is a very famous mathematical puzzle 
// (some call it game!). This is how it goes:

// There are three rods and a number of disks of different sizes which 
// can slide onto any rod. The puzzle starts with the disks neatly stacked 
// in ascending order of size on one rod, the smallest disk at the top 
// (making a conical shape). The other two rods are empty to begin with.

// The goal of the puzzle is to move the entire stack of rods to another 
// rod (can't be the original rod where it was stacked before) where it 
// will be stacked in the ascending order as well. This should be done 
// obeying the following rules: i) Only one disk may be moved at a time 
// ii) Each move consists of taking the upper disk from one of the rods 
// and sliding it onto another rod, on top of the other disks that may 
// already be present on that rod. iii) A larger disk may not placed on 
// top of a smaller disk

// Input:

// Rod A   Rod B   Rod C
// ----		
// ---------		
// -------------		
// Output:

// Rod A   Rod B   Rod C
//                 ----
//                 ---------
//                 -------------
// + Derive an algorithm to solve the Tower of Hanoi puzzle.
// + Implement your algorithm using recursion. Your program should display 
//     each movement of the disk from one rod to another.
// + If you are given 5 disks, how do the rods look like after 7 recursive calls?
// + How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
// + What is the runtime of your algorithm?

function TOH(n, sour, temp, dest) {
  if ( n >= 1) {
    // recursively call, but swap dest with temp
    TOH( n-1, sour, dest, temp )
    // print from => to
    print(sour, dest)
    // recursively call, but sqp sour with temp
    TOH( n-1, temp, sour, dest )
  }
}

function print(a, b) {
  console.log(`moving ${a} => ${b}`)
}

TOH(4, 'A', 'B', 'C')

// =============================================================================
// If you are given 5 disks, how do the rods look like after 7 recursive calls?

// _--_--_
// _--_--_
// _--_--1
// 4--_--2
// 5--_--3
// =======
// A--B--C
// =============================================================================
// How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
// 3 disks = 7
// 4 disks = 15
// 5 disks = 31
// =============================================================================
// What is the runtime of your algorithm?
// O(2^n) Exponential time
// =============================================================================

  // // n = 1
  // if (n === 1) {                // A => C  1
  //   print(sour, dest)
  // }
  // // TOH(n-1, source, temp, dest)
  // // n = 2
  // if (n === 2) {
  //   print(sour, temp)          // A => B  1
  //   print(sour, dest)          // A => C  2
  //   print(temp, dest)          // B => C  3
  // }
  // // n = 3
  // if (n === 3) {
  //   print(sour, dest)          // A => C  1
  //   print(sour, temp)          // A => B  2
  //   print(dest, temp)          // C => B  3
  //   print(sour, dest)          // A => C  4
  //   print(temp, sour)          // B => A  5
  //   print(temp, dest)          // B => C  6
  //   print(sour, dest)          // A => C  7
  // }
  // if (n === 4) {
  //   print(sour, dest)          // A => C  1
  //   print(sour, temp)          // A => B  2
  //   print(dest, temp)          // C => B  3
  //   print(sour, dest)          // A => C  4
  //   print(sour, temp)          // A => B  5
  //   print(dest, sour)          // C => A  6
  //   print(temp, dest)          // B => C  7
  //   print(sour, dest)          // A => C  8
  //   print(temp, sour)          // B => A  9
  //   print(temp, dest)          // B => C 10
  //   print(sour, dest)          // A => C 11
  // }


// let one = {1: `
//   1==========
//   S++_++_
//   -------
//   A++B++C

//     2==========
//     _++_++S
//     -------
//     A++B++C
// `}
// let two = {2: `
//   1==========
//   S++_++_
//   M++_++_
//   -------
//   A++B++C

//     2==========
//     _++_++_
//     M++S++_
//     -------
//     A++B++C

//       3==========
//       _++_++_
//       _++S++M
//       -------
//       A++B++C

//         4==========
//         _++_++S
//         _++_++M
//         -------
//         A++B++C
// `}
// let three = {3: `
//   1==========
//   S++_++_
//   M++_++_
//   L++_++_
//   -------
//   A++B++C

//     2==========
//     _++_++_
//     M++_++_
//     L++_++S
//     -------
//     A++B++C

//       3==========
//       _++_++_
//       _++_++_
//       L++M++S
//       -------
//       A++B++C

//         4==========
//         _++_++_
//         _++S++_
//         L++M++_
//         -------
//         A++B++C

//           5==========
//           _++_++_
//           _++S++_
//           _++M++L
//           -------
//           A++B++C

//             6==========
//             _++_++_
//             _++_++_
//             S++M++L
//             -------
//             A++B++C

//               7==========
//               _++_++_
//               _++_++M
//               S++_++L
//               -------
//               A++B++C

//                 8==========
//                 _++_++S
//                 _++_++M
//                 _++_++L
//                 -------
//                 A++B++C
// `}
// let four = {4: `
//   1==========
//   S++_++_
//   M++_++_
//   L++_++_
//   V++_++_
//   -------
//   A++B++C

//     2========== // A => C  1
//     _++_++_
//     M++_++_
//     L++_++
//     V++_++S
//     -------
//     A++B++C

//       3========== // A => B  2
//       _++_++_
//       _++_++_
//       L++_++_
//       V++M++S
//       -------
//       A++B++C

//         4========== // C => B  3
//         _++_++_
//         _++_++_
//         L++S++_
//         V++M++_
//         -------
//         A++B++C

//           5========== // A => C  4
//           _++_++_
//           _++_++_
//           _++S++_
//           V++M++L
//           -------
//           A++B++C

//             6========== // A => B  5
//             _++_++_
//             _++V++_
//             _++S++_
//             _++M++L
//             -------
//             A++B++C

//               7========== // C => A  6
//               _++_++_
//               _++V++_
//               _++S++_
//               L++M++_
//               -------
//               A++B++C

//                 8========== // B => C  7
//                 _++_++_
//                 _++_++_
//                 _++S++_
//                 L++M++V
//                 -------
//                 A++B++C

//                   9========== // A => C  8
//                   _++_++_
//                   _++_++_
//                   _++S++L
//                   _++M++V
//                   -------
//                   A++B++C

//                     10========= // B => A  9
//                     _++_++_
//                     _++_++_
//                     _++_++L
//                     S++M++V
//                     -------
//                     A++B++C

//                       11========= // B => C 10
//                       _++_++_
//                       _++_++M
//                       _++_++L
//                       S++_++V
//                       -------
//                       A++B++C

//                         12========= // A => C 11
//                         _++_++S
//                         _++_++M
//                         _++_++L
//                         _++_++V
//                         -------
//                         A++B++C
// `}