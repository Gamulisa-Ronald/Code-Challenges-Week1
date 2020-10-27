/* This challenge prints the
 letters from a-z determing the 
 position of c,f,y within the alphabet
*/

// Array of alphabet from A-Z
let alphabet = 
['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// Determining the numbers in the alphabet Array
let numbersAlphabet = alphabet.length;
console.log(`The letters of Alphabet are ${numbersAlphabet} letters`)
// Determining the position of c,f,y
// Declare and hoist variables
let  letterC,letterF,letterY;
// Getting letter C
letterC = alphabet.indexOf('C')
console.log(`The position of C in Alphabet is ${letterC} \nNote: Array starts from 0!`);
// Getting letter F
letterF = alphabet.indexOf('F');
console.log(`The position of F in Alphabet is ${letterF} \nNote: Array starts from 0!`);
// Getting letter Y
letterY = alphabet.indexOf('Y');
console.log(`The position of Y in Alphabet is ${letterY} \nNote: Array starts from 0!`);