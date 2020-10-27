/* This challenge prints numbers from
1-10 determining the the position of
2,4,9,6 in the number series
*/

// Declare a variable and assign it an Array of numbers from 1-10
let arrNumbers = [1,2,3,4,5,6,7,8,9,10];
// The string method "toSring()" removes square brackets and return a string of arr
console.log("Number Series: " + arrNumbers.toString());
// Determing the position of numbers 2,4,9,6
// Declare and hoist variable for getting the positions of numbers
let number2, number4,number9,number6;
// Determine number 2 
number2 = arrNumbers.indexOf(2);
console.log(`The position of number 2 is ${number2} \nNote: Array starts counting from 0!`);
// Determine number 4
number4 = arrNumbers.indexOf(4);
console.log(`The position of number 4 is ${number4} \nNote: Array starts counting from 0!`);
// Determine number 9
number9 = arrNumbers.indexOf(9);
console.log(`The position of number 9 is ${number9} \nNote: Array starts counting from 0!`);
// Determine number 6
number6 = arrNumbers.indexOf(6);
console.log(`The position of number 2 is ${number6} \nNote: Array starts counting from 0!`);