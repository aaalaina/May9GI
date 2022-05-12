/* EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
Example 1:
Input: [1 , 4 , 7]  Output: 4
Input: [10, 5]  Output: 7.5
Input: [1.5, 3, 2.5, 1]  Output: 2 */

// function easy(array){
//     let sum = 0;
// for (i = 0; i < array.length; i++){
//     sum += array[i];
// }
//     answer = sum/array.length ;
//     console.log(answer)
// }

// let test = [1,4,7,80, 76, 54];
// easy(test);


/* MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you 
beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
You are given a target value to search. If found in the array return its index, otherwise return -1.
You may assume no duplicate exists in the array.
Hint:  Use a function. Use the built in method .indexOf( ) and/or  for loops. Review your lesson on 
Arrays to aid in working through this problem. 
Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1. */


// function findValue(ping, j){
// for( v = 0; v < ping.length; v++){
//     lookHere = ping.indexOf(j);
//     }
// console.log(`nums = ${ping}, target = ${j}`)
// console.log(lookHere)
// }
// findValue([5,4,2,9,8,0], 6);
// findValue([4,8,3,9,7,5], 9);




/* HARD: Create two buttons, one that when clicked turns the background of the body red. The 
other, when clicked, turns the body's background color white. Each of the background colors 
should be defined as class styles and when the buttons are pushed the body's classList is 
updated to include the correct class for the background. 
Create a single function that takes an input className and updates the body's classList to 
ONLY include that className
*Note: Check Canvas for the starter code needed for this exercise. The starter code will be 
located in a folder named hard_js. */

//hard is on index.html!


/*VERY HARD: You are given coins of different denominations and a total amount of money amount. 
Write a function to compute the fewest number of coins that you need to make up that amount. If that 
amount of money cannot be made up by any combination of the coins, return -1.
Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays 
and logical operators.  Do not have anyone give you the answer or solve this problem for you. 
Example 1:
Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:
Input: coins = [2], amount = 3
Output: -1
Note: You may assume that you have an infinite number of each kind of coin. */


// function coinMath(change, pockets){
//     let total = 0;
//     let largest;
//     while (pockets > 0) {
//         largest = Math.max(...change)
//         if (largest > pockets){
//             change = removeba(change);
//            if(!change.length) 
//                return -1;
//         }
//         else {
//             pockets -= largest;
//             total++;
//         }
//         }
//         return total;
//     }

// function removeba(arr) {
//     let largest = Math.max(...arr)
//     largest = arr.filter(arr => arr != largest)
//     return largest
// }

// console.log(coinMath([1, 5],11));